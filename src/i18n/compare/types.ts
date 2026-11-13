/** Copy for one competitor comparison page (English-only pages). */
export type CompareContent = {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  /** H1, e.g. "MyNutriRise vs Lose It!". */
  title: string;
  competitor: string;
  intro: string;
  /** ISO date the competitor facts were last checked against the sources. */
  lastChecked: string;
  rows: readonly { feature: string; ours: string; theirs: string }[];
  /** Fairness: where the competitor is stronger. */
  theirStrengths: { title: string; items: readonly string[] };
  ourStrengths: { title: string; items: readonly string[] };
  pricing: { title: string; body: string };
  pickTheirs: { title: string; body: string };
  pickOurs: { title: string; body: string };
  faqs: readonly { question: string; answer: string }[];
  summary: { title: string; body: string };
  /** Every competitor claim must trace to one of these official pages. */
  sources: readonly { label: string; url: string }[];
  ctaTitle: string;
  ctaBody: string;
};
