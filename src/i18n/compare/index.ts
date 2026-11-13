import { factsFor } from "@/data/facts";
import type { Locale } from "../config";
import type { CompareContent } from "./types";
import loseItEn from "./mynutririse-vs-lose-it/en";

/**
 * Competitor comparison pages that exist only in some languages (see
 * data/pages.ts). The MyFitnessPal comparison predates this and lives in the
 * `compare` message namespace in all six languages.
 */
export type { CompareContent };
type Builder = (f: ReturnType<typeof factsFor>) => CompareContent;

const registry = {
  "mynutririse-vs-lose-it": { en: loseItEn },
} satisfies Record<string, Partial<Record<Locale, Builder>>>;

export type CompareSlug = keyof typeof registry;
export const compareSlugs = Object.keys(registry) as CompareSlug[];

export function getCompare(slug: CompareSlug, lang: Locale): CompareContent | null {
  const build = (registry[slug] as Partial<Record<Locale, Builder>>)[lang];
  return build ? build(factsFor(lang)) : null;
}
