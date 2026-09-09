import type { Project } from "@/components/sections/Projects";

/** The four client cases every tech-unit page's `Projects` section shows. Was retyped verbatim
 * on mvp/dev-team/cto/audit and had already drifted from `CASE_STUDIES` (which said "over 100
 * movies" where the live source says 500). Same four clients as `CASE_STUDIES`, in the longer
 * `Projects` shape — count-up stat plus a written case — where `CASE_STUDIES` carries the
 * shorter `CaseResults` card copy. */
export const TECH_PROJECTS: Project[] = [
  {
    company: "Umedia",
    logo: "/logos/umedia.png",
    meta: "Film production · Process & coaching",
    stat: { value: 60, prefix: "+", suffix: "%" },
    result: "more investments with no additional recruitment",
    description:
      "A film production company that has invested $670M in over 500 movies. They came to us when they hit a plateau. We helped them increase their investments by 60% without growing the team — modeling their business and automating the recurring tasks that held them back.",
  },
  {
    company: "Yields.io",
    logo: "/logos/yields.png",
    meta: "MVP development · Tech lead",
    stat: { value: 5, prefix: "€", suffix: "M" },
    result: "raised, from MVP to a 35-person company",
    description:
      "The founder came to us with an idea while still holding a day job. We challenged it and built the first version of the product, which helped raise €1.25M from VC firms. Six years and a few rounds later, the company has 35 people, and we're still working together daily, mainly through coaching sessions.",
  },
  {
    company: "Sharingbox",
    logo: "/logos/sharingbox.png",
    meta: "Process mapping · Sparring",
    stat: { value: 2, prefix: "×" },
    result: "process efficiency, then a successful exit",
    description:
      "We helped Sharingbox simplify the sequence of actions needed to deploy their technology in the real world. We mapped their internal processes and built the tools to standardize them, making the company twice as efficient — which also eased knowledge transfer when the founders came to exit.",
  },
  {
    company: "e-maprod",
    logo: "/logos/emaprod.png",
    meta: "Process · Acceleration",
    stat: { value: 5, prefix: "×" },
    result: "headcount in 10 years · +100% in 3 years",
    description:
      "We helped e-maprod reorganize their team by putting all the cards on the table, hiring the right people, and giving teams a real sense of ownership so they could run autonomously — while optimizing internal workflows so they could stop relying on spreadsheets.",
  },
];
