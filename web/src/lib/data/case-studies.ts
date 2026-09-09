import type { CaseItem } from "@/components/sections/CaseResults";

/** The 4 client cases (Umedia / Yields.io / Sharingbox / e-maprod) that appear, word for word,
 * on both growth-plan and marketing/strategy-and-plan's real "Projects" sections — one shared
 * list instead of two copies of the same client stories. */
export const CASE_STUDIES: CaseItem[] = [
  {
    logo: { src: "/logos/umedia.png", alt: "Umedia" },
    meta: "Film production · Process & coaching",
    stat: "+60%",
    result: "more investments with no additional recruitment",
    company: "Umedia",
    body: "A film production company that has invested $670M in over 500 movies. They came to us when they hit a plateau. We helped them increase their investments by 60% without growing the team. We built a model of their company and automated the recurring tasks that held them back.",
  },
  {
    logo: { src: "/logos/yields.png", alt: "Yields.io" },
    meta: "MVP development · Tech lead",
    stat: "€5M",
    result: "raised, from MVP to a 35-person company",
    company: "Yields.io",
    body: "The founder came to us with an idea while still holding a day job. We challenged it and built the first version of the product, which helped raise €1.25M from VC firms. Six years and a few rounds later, the company has 35 people, and we're still working together daily, mainly through coaching sessions.",
  },
  {
    logo: { src: "/logos/sharingbox.png", alt: "Sharingbox" },
    meta: "Process mapping · Sparring",
    stat: "×2",
    result: "process efficiency, then a successful exit",
    company: "Sharingbox",
    body: "We helped Sharingbox simplify the sequence of actions needed to deploy their technology in the real world. We mapped their internal processes and built the tools to standardize them, making the company twice as efficient, which also eased knowledge transfer when the founders came to exit.",
  },
  {
    logo: { src: "/logos/emaprod.png", alt: "e-maprod" },
    meta: "Process · Acceleration",
    stat: "×5",
    result: "headcount in 10 years · +100% in 3 years",
    company: "e-maprod",
    body: "We helped e-maprod reorganize their team by putting all the cards on the table, hiring the right people, and giving teams a real sense of ownership so they could run autonomously. We also optimized their internal workflows so they could stop relying on Excel and work with a tool adapted to their needs.",
  },
];
