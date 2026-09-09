import type { Tool } from "@/components/sections/ToolChips";

/** The tech stack logo set — the same 16 marks every tech-unit page shows, in the same order.
 * Was retyped as an identical 4×4 `TOOL_ROWS` on mvp/dev-team/cto and as a flat list on
 * tech-team, which is exactly how a roster drifts. Callers pick their own grouping: rows of four
 * via `TECH_TOOL_ROWS`, or two rows of eight via `TECH_TOOLS.slice()`. */
export const TECH_TOOLS: Tool[] = [
  { src: "/logos/tools/typescript.png", name: "TypeScript" },
  { src: "/logos/tools/react.png", name: "React" },
  { src: "/logos/tools/nodejs.png", name: "Node.js" },
  { src: "/logos/tools/python.png", name: "Python" },
  { src: "/logos/tools/postgresql.png", name: "PostgreSQL" },
  { src: "/logos/tools/graphql.png", name: "GraphQL" },
  { src: "/logos/tools/openapi.png", name: "OpenAPI" },
  { src: "/logos/tools/docker.png", name: "Docker" },
  { src: "/logos/tools/kotlin.png", name: "Kotlin" },
  { src: "/logos/tools/scala.png", name: "Scala" },
  { src: "/logos/tools/akka.png", name: "Akka" },
  { src: "/logos/tools/kafka.png", name: "Kafka" },
  { src: "/logos/tools/odoo.png", name: "Odoo" },
  { src: "/logos/tools/bubble.png", name: "Bubble" },
  { src: "/logos/tools/ansible.png", name: "Ansible" },
  { src: "/logos/tools/android.png", name: "Android" },
];

/** `TECH_TOOLS` in rows of four — the shape `TextSection`'s `toolRows` expects. */
export const TECH_TOOL_ROWS: Tool[][] = [
  TECH_TOOLS.slice(0, 4),
  TECH_TOOLS.slice(4, 8),
  TECH_TOOLS.slice(8, 12),
  TECH_TOOLS.slice(12, 16),
];
