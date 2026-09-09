/** The canonical client roster as it appears on a dark hero — the white-silhouette twin of
 * `TrustBar`'s `CLIENT_LOGOS`. Both must stay in step: a page shows the client strip either as
 * the light `TrustBar` under the hero or as `Hero`'s `proofLogos` inside it, never both, and the
 * two variants used to drift because each page hand-picked its own subset (cto showed 4, the
 * marketing pages 7). The intrinsic sizes matter: the strip renders by height, so Next needs the
 * real aspect ratio to serve a sharp source. */
export const HERO_PROOF_LOGOS = {
  label: "Trusted by",
  logos: [
    { src: "/logos/lizy-white.png", alt: "Lizy", width: 331, height: 93, className: "hero-proof-logo--sm" },
    { src: "/logos/sharingbox-white.png", alt: "Sharingbox", width: 490, height: 77, className: "hero-proof-logo--sm" },
    { src: "/logos/cowboy-white.png", alt: "Cowboy", width: 384, height: 59, className: "hero-proof-logo--sm" },
    {
      src: "/logos/umedia-white.png",
      alt: "Umedia",
      width: 143,
      height: 149,
      className: "hero-proof-logo--sm hero-proof-logo--boost",
    },
    { src: "/logos/be-angels-white.png", alt: "beAngels", width: 368, height: 88, className: "hero-proof-logo--sm" },
    {
      src: "/logos/yields-white.png",
      alt: "Yields.io",
      width: 33,
      height: 35,
      className: "hero-proof-logo--sm hero-proof-logo--boost",
    },
    {
      src: "/logos/labbox-white.png",
      alt: "LABBOX",
      width: 165,
      height: 166,
      className: "hero-proof-logo--sm hero-proof-logo--boost",
    },
    { src: "/logos/ringtwice-white.png", alt: "RingTwice", width: 368, height: 72, className: "hero-proof-logo--sm" },
    { src: "/logos/sortlist-white.png", alt: "Sortlist", width: 216, height: 56, className: "hero-proof-logo--sm" },
  ],
};
