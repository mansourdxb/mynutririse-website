import { factsFor } from "@/data/facts";
import type { Locale } from "../config";
import weightLossEn from "./weight-loss-app/en";
import weightLossAr from "./weight-loss-app/ar";
import weightLossRu from "./weight-loss-app/ru";

/**
 * Landing-page copy lives outside the main message bundles because these
 * pages exist only in some languages (see data/pages.ts). Each language file
 * is typed against its English original.
 */
export type LandingContent = ReturnType<typeof weightLossEn>;
type Builder = (f: ReturnType<typeof factsFor>) => LandingContent;

const registry = {
  "weight-loss-app": { en: weightLossEn, ar: weightLossAr, ru: weightLossRu },
} satisfies Record<string, Partial<Record<Locale, Builder>>>;

export type LandingSlug = keyof typeof registry;

/** Copy for a landing page in a language, or null if it does not exist there. */
export function getLanding(slug: LandingSlug, lang: Locale): LandingContent | null {
  const build = (registry[slug] as Partial<Record<Locale, Builder>>)[lang];
  return build ? build(factsFor(lang)) : null;
}
