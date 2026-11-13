import { factsFor } from "@/data/facts";
import type { Locale } from "../config";
import type { LandingContent } from "./types";
import weightLossEn from "./weight-loss-app/en";
import weightLossAr from "./weight-loss-app/ar";
import weightLossRu from "./weight-loss-app/ru";
import muscleEn from "./muscle-gain-app/en";
import muscleAr from "./muscle-gain-app/ar";
import muscleRu from "./muscle-gain-app/ru";
import ramadanEn from "./ramadan-diet-plan/en";
import ramadanAr from "./ramadan-diet-plan/ar";
import ramadanRu from "./ramadan-diet-plan/ru";
import mealPlannerEn from "./meal-planner/en";
import mealPlannerAr from "./meal-planner/ar";
import mealPlannerRu from "./meal-planner/ru";
import arabicCounterEn from "./arabic-calorie-counter/en";
import arabicCounterAr from "./arabic-calorie-counter/ar";

/**
 * Landing-page copy lives outside the main message bundles because these
 * pages exist only in some languages (see data/pages.ts). Each language file
 * is typed against its English original.
 */
export type { LandingContent };
type Builder = (f: ReturnType<typeof factsFor>) => LandingContent;

const registry = {
  "weight-loss-app": { en: weightLossEn, ar: weightLossAr, ru: weightLossRu },
  "muscle-gain-app": { en: muscleEn, ar: muscleAr, ru: muscleRu },
  "ramadan-diet-plan": { en: ramadanEn, ar: ramadanAr, ru: ramadanRu },
  "meal-planner": { en: mealPlannerEn, ar: mealPlannerAr, ru: mealPlannerRu },
  "arabic-calorie-counter": { en: arabicCounterEn, ar: arabicCounterAr },
} satisfies Record<string, Partial<Record<Locale, Builder>>>;

export type LandingSlug = keyof typeof registry;

/** Copy for a landing page in a language, or null if it does not exist there. */
export function getLanding(slug: LandingSlug, lang: Locale): LandingContent | null {
  const build = (registry[slug] as Partial<Record<Locale, Builder>>)[lang];
  return build ? build(factsFor(lang)) : null;
}
