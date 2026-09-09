#!/usr/bin/env python3
"""Static half of the impeccable pass: the checks that need no dev server.

Run from anywhere:  python3 static_audit.py [--root <repo-root>] [--json]

Every finding here is a *lead*, not a verdict. The script is deliberately dumb —
it greps. Confirm each hit by reading the file before you act on it, especially
orphaned assets (something may be referenced from a path the grep cannot see).
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from pathlib import Path

SRC_EXTS = {".tsx", ".ts", ".jsx", ".js", ".mdx"}
CSS_FILES = ["web/src/styles/components.css", "web/src/app/globals.css"]
TOKENS_FILE = "web/src/styles/tokens.css"
PUBLIC_DIR = "web/public"
SRC_DIR = "web/src"

# Selector-ish classes that are applied by tooling/scripts rather than JSX, so a
# missing TSX reference does not mean they are dead.
CLASS_ALLOWLIST = {
    "reveal",        # toggled by RevealSetup
    "js-reveal",     # set on <html> by RevealSetup
    "in",            # reveal end-state
    "bistre",        # applied by the Bistre wrapper via className join
    "wrap",          # applied by the Wrap wrapper
    "btn",           # composed in Button
}

BIG_ASSET_WARN = 1_000_000     # 1 MB — worth compressing
BIG_ASSET_LOUD = 4_000_000     # 4 MB — never ship this


def read(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        return ""


def collect_source_text(root: Path) -> str:
    """One big blob of every source file, for cheap substring lookups."""
    parts = []
    src = root / SRC_DIR
    for dirpath, dirnames, filenames in os.walk(src):
        dirnames[:] = [d for d in dirnames if d not in {"node_modules", ".next"}]
        for name in filenames:
            if Path(name).suffix in SRC_EXTS:
                parts.append(read(Path(dirpath) / name))
    return "\n".join(parts)


def strip_comments(css: str) -> str:
    """Blank out /* ... */ bodies while keeping line numbers intact.

    Class names get name-dropped inside explanatory comments all the time in this
    repo, and counting those as selectors produced false "dead class" hits.
    """
    out = []
    for chunk in re.split(r"(/\*.*?\*/)", css, flags=re.S):
        out.append(re.sub(r"[^\n]", " ", chunk) if chunk.startswith("/*") else chunk)
    return "".join(out)


def css_class_tokens(css: str) -> dict[str, int]:
    """Class names used in selectors, mapped to the line they first appear on."""
    found: dict[str, int] = {}
    for lineno, line in enumerate(strip_comments(css).splitlines(), start=1):
        stripped = line.strip()
        if not stripped or stripped.startswith(("@", "}")):
            continue
        selector = stripped.split("{", 1)[0]
        if "{" not in stripped and not stripped.endswith(","):
            continue
        for match in re.finditer(r"\.(-?[A-Za-z_][\w-]*)", selector):
            found.setdefault(match.group(1), lineno)
    return found


def built_dynamically(cls: str, source_blob: str) -> bool:
    """True if the class looks assembled in a template literal.

    `appr-card--boxed` never appears literally in source because it is written
    as `appr-card--${cardStyle}`. Checking every dash-prefix of the class against
    `prefix + "${"` catches that family of construction without hand-listing them.
    """
    parts = cls.split("-")
    for cut in range(len(parts) - 1, 0, -1):
        prefix = "-".join(parts[:cut])
        for candidate in (prefix + "-", prefix + "--", prefix):
            if candidate + "${" in source_blob:
                return True
    return False


def check_dead_css(root: Path, source_blob: str) -> list[dict]:
    findings = []
    for rel in CSS_FILES:
        path = root / rel
        css = read(path)
        if not css:
            continue
        for cls, lineno in css_class_tokens(css).items():
            if cls in CLASS_ALLOWLIST:
                continue
            if cls not in source_blob and not built_dynamically(cls, source_blob):
                findings.append(
                    {
                        "check": "dead-css",
                        "severity": "should-fix",
                        "where": f"{rel}:{lineno}",
                        "detail": f".{cls} is defined in CSS but never appears in {SRC_DIR}",
                    }
                )
    return findings


def check_assets(root: Path, source_blob: str) -> list[dict]:
    findings = []
    public = root / PUBLIC_DIR
    if not public.is_dir():
        return findings
    for dirpath, dirnames, filenames in os.walk(public):
        dirnames[:] = [d for d in dirnames if not d.startswith(".")]
        for name in filenames:
            if name.startswith("."):
                continue
            path = Path(dirpath) / name
            rel = path.relative_to(root)
            web_path = "/" + str(path.relative_to(public))
            size = path.stat().st_size

            if web_path not in source_blob and name not in source_blob:
                findings.append(
                    {
                        "check": "orphan-asset",
                        "severity": "should-fix",
                        "where": str(rel),
                        "detail": f"never referenced from {SRC_DIR} ({size // 1024} KB) — confirm before deleting",
                    }
                )

            if size >= BIG_ASSET_LOUD:
                findings.append(
                    {
                        "check": "oversized-asset",
                        "severity": "blocker",
                        "where": str(rel),
                        "detail": f"{size / 1_000_000:.1f} MB — recompress before shipping",
                    }
                )
            elif size >= BIG_ASSET_WARN:
                findings.append(
                    {
                        "check": "oversized-asset",
                        "severity": "should-fix",
                        "where": str(rel),
                        "detail": f"{size / 1_000_000:.1f} MB — worth recompressing",
                    }
                )

            if name != name.lower() or re.search(r"[\s'\"()]", name):
                findings.append(
                    {
                        "check": "filename-hygiene",
                        "severity": "should-fix",
                        "where": str(rel),
                        "detail": "not URL-safe kebab-case (spaces, quotes or capitals)",
                    }
                )
    return findings


def check_hardcoded_tokens(root: Path) -> list[dict]:
    """Hex values in component CSS that already exist as a design token."""
    tokens = {}
    for match in re.finditer(r"(--[\w-]+):\s*(#[0-9a-fA-F]{3,8})\s*;", read(root / TOKENS_FILE)):
        tokens[match.group(2).lower()] = match.group(1)

    findings = []
    for rel in CSS_FILES:
        path = root / rel
        for lineno, line in enumerate(read(path).splitlines(), start=1):
            if "--" in line.split(":")[0]:
                continue  # a token definition itself
            for match in re.finditer(r"#[0-9a-fA-F]{3,8}\b", line):
                hexval = match.group(0).lower()
                if hexval in tokens:
                    findings.append(
                        {
                            "check": "hardcoded-token",
                            "severity": "should-fix",
                            "where": f"{rel}:{lineno}",
                            "detail": f"{hexval} is the value of var({tokens[hexval]}) — use the token",
                        }
                    )
    return findings


SEVERITY_ORDER = {"blocker": 0, "should-fix": 1, "judgment": 2}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", default=None, help="repo root (default: auto-detect upward)")
    parser.add_argument("--json", action="store_true", help="emit JSON instead of text")
    args = parser.parse_args()

    if args.root:
        root = Path(args.root).resolve()
    else:
        root = Path.cwd().resolve()
        while root != root.parent and not (root / PUBLIC_DIR).is_dir():
            root = root.parent

    if not (root / SRC_DIR).is_dir():
        print(f"error: {SRC_DIR} not found under {root}; pass --root", file=sys.stderr)
        return 2

    source_blob = collect_source_text(root)
    findings = (
        check_dead_css(root, source_blob)
        + check_assets(root, source_blob)
        + check_hardcoded_tokens(root)
    )
    findings.sort(key=lambda f: (SEVERITY_ORDER.get(f["severity"], 9), f["check"], f["where"]))

    if args.json:
        print(json.dumps({"root": str(root), "findings": findings}, indent=2))
        return 0

    if not findings:
        print("static audit: clean")
        return 0

    print(f"static audit: {len(findings)} lead(s) under {root}\n")
    current = None
    for f in findings:
        if f["check"] != current:
            current = f["check"]
            print(f"── {current} ──")
        print(f"  [{f['severity']}] {f['where']}\n      {f['detail']}")
    print("\nEach line is a lead, not a verdict — confirm by reading the file before acting.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
