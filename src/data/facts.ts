/**
 * Single source of truth for every number and factual claim the site makes
 * about the app. Never write one of these inline in a page or component —
 * import it from here. Each entry notes where it was verified.
 *
 * Rounding rule: round DOWN, so the displayed figure is always true
 * (4,881 → "4,800+", never "5,000+").
 */

/** Rounds down to `step` and formats as "4,800+". */
function atLeast(n: number, step: number): string {
  return `${(Math.floor(n / step) * step).toLocaleString("en-US")}+`;
}

// Verified: app repo lib/l10n/app_{en,ar,de,es,fr,ru}.arb + ios/Runner/*.lproj.
// Turkish and Urdu are NOT supported — never list them.
export const LANGUAGES = [
  "English",
  "Arabic",
  "German",
  "Spanish",
  "French",
  "Russian",
] as const;
export const LANGUAGE_COUNT = LANGUAGES.length;
/** "English, Arabic, German, Spanish, French, and Russian" */
export const LANGUAGE_LIST = `${LANGUAGES.slice(0, -1).join(", ")}, and ${LANGUAGES[LANGUAGES.length - 1]}`;

// Verified: recipe catalogue audit on the app database (owner-confirmed, 2026-10).
export const RECIPE_COUNT = 4881;
export const RECIPES = atLeast(RECIPE_COUNT, 100); // "4,800+"

// Verified: same audit — dishes that carry the recipes above.
export const DISH_COUNT = 2727;
export const DISHES = atLeast(DISH_COUNT, 100); // "2,700+"

// Verified: same audit.
export const INGREDIENT_LINE_COUNT = 33003;
export const INGREDIENT_LINES = atLeast(INGREDIENT_LINE_COUNT, 1000); // "33,000+"
export const COOKING_METHOD_COUNT = 4260;
export const COOKING_METHODS = atLeast(COOKING_METHOD_COUNT, 100); // "4,200+"

// Verified: owner-confirmed — every dish is halal-checked, enforced by tests.
export const HALAL_CHECK = `Halal filtering checked across every dish in the catalogue`;

// Verified: app World Cuisines grid (cuisine_browser.dart) — 53 tiles, of which
// 33 are cultural/regional cuisines; the rest are food- or diet-type categories
// (Beef, Pasta, Keto…) and must not be counted as cuisines. Built-in data only;
// Firestore can override the list at runtime.
export const CUISINE_COUNT = 33;
export const CUISINES = atLeast(CUISINE_COUNT, 10); // "30+"
export const CUISINE_FLOOR = Math.floor(CUISINE_COUNT / 10) * 10; // 30, for count-up animations

// Verified: app lib/app/modules/Fasting/model/fasting_model.dart:468-728,
// all reachable via plan_categories_view.dart. Includes Ramadan (15:9) at :699.
export const FASTING_PLAN_COUNT = 25;

// Verified: app assets/data/workout_exercises.json (318 unique ids, 6 routines).
export const STRENGTH_EXERCISE_COUNT = 318;
export const WORKOUT_ROUTINE_COUNT = 6;
// Verified: app lib/app/data/exercise_database.dart (116 cardio/activity entries).
export const CARDIO_ACTIVITY_COUNT = 116;
export const EXERCISES_AND_ACTIVITIES = atLeast(
  STRENGTH_EXERCISE_COUNT + CARDIO_ACTIVITY_COUNT,
  10,
); // "430+"

// Verified: app lib/app/modules/Micronutrients/views/micronutrients_view.dart:33-72.
// Premium-gated (:195).
export const MICRONUTRIENTS = [
  "iron",
  "calcium",
  "vitamin C",
  "sodium",
  "potassium",
  "vitamin A",
  "vitamin D",
  "vitamin B12",
] as const;
export const MICRONUTRIENT_COUNT = MICRONUTRIENTS.length;

// Verified: app lib/app/data/diet_plans.dart:718-729, each 4 weeks.
export const DIET_PLAN_COUNT = 10;

// Verified: app lib/app/services/subscription_service.dart:216.
export const FREE_COACH_MESSAGES_PER_DAY = 5;
export const PREMIUM_COACH_MESSAGES_PER_DAY = 100;
// Verified: app subscription_service.dart:205-244 — AI photo scan is FREE with a
// daily cap; Premium raises the cap, it does not unlock the scanner. These are
// the shipped defaults; remote config `free_photo_scans_per_day` can change the
// free figure, so re-check before any campaign.
export const FREE_PHOTO_SCANS_PER_DAY = 2;
export const PREMIUM_PHOTO_SCANS_PER_DAY = 30;

// Verified: app data_export_view.dart:400 — PDF range options 7/14/30/60/90 days.
export const PDF_REPORT_RANGE = "7 to 90 days";

// Verified: app food_color_guide.dart:24-77.
export const FOOD_COLOR_GROUP_COUNT = 6;

// Verified: app data_export_view.dart:400.
export const PDF_REPORT_MIN_DAYS = 7;
export const PDF_REPORT_MAX_DAYS = 90;

/* ------------------------------------------------------------------ */
/*  Per-language formatting                                            */
/* ------------------------------------------------------------------ */

// Western digits in every language, matching the app (its Arabic strings use 0-9).
const NUMBER_LOCALE: Record<string, string> = {
  en: "en-US",
  ar: "ar-u-nu-latn",
  de: "de-DE",
  es: "es-ES",
  fr: "fr-FR",
  ru: "ru-RU",
};

/** Formats a whole number for a language: 4800 -> "4,800" / "4.800" / "4 800". */
export function formatNumber(n: number, lang: string): string {
  return n.toLocaleString(NUMBER_LOCALE[lang] ?? "en-US", { useGrouping: "always" } as Intl.NumberFormatOptions);
}

/** Rounded-down "at least" figure for a language: "4,800+", "4.800+", "4 800+". */
export function atLeastFor(n: number, step: number, lang: string): string {
  return `${formatNumber(Math.floor(n / step) * step, lang)}+`;
}

/** Every displayed fact, formatted for one language. Messages interpolate these. */
export function factsFor(lang: string) {
  const num = (n: number) => formatNumber(n, lang);
  return {
    RECIPES: atLeastFor(RECIPE_COUNT, 100, lang),
    DISHES: atLeastFor(DISH_COUNT, 100, lang),
    INGREDIENT_LINES: atLeastFor(INGREDIENT_LINE_COUNT, 1000, lang),
    COOKING_METHODS: atLeastFor(COOKING_METHOD_COUNT, 100, lang),
    CUISINES: atLeastFor(CUISINE_COUNT, 10, lang),
    EXERCISES_AND_ACTIVITIES: atLeastFor(STRENGTH_EXERCISE_COUNT + CARDIO_ACTIVITY_COUNT, 10, lang),
    LANGUAGE_COUNT: num(LANGUAGE_COUNT),
    FASTING_PLAN_COUNT: num(FASTING_PLAN_COUNT),
    STRENGTH_EXERCISE_COUNT: num(STRENGTH_EXERCISE_COUNT),
    WORKOUT_ROUTINE_COUNT: num(WORKOUT_ROUTINE_COUNT),
    CARDIO_ACTIVITY_COUNT: num(CARDIO_ACTIVITY_COUNT),
    MICRONUTRIENT_COUNT: num(MICRONUTRIENT_COUNT),
    DIET_PLAN_COUNT: num(DIET_PLAN_COUNT),
    FREE_COACH_MESSAGES_PER_DAY: num(FREE_COACH_MESSAGES_PER_DAY),
    PREMIUM_COACH_MESSAGES_PER_DAY: num(PREMIUM_COACH_MESSAGES_PER_DAY),
    FREE_PHOTO_SCANS_PER_DAY: num(FREE_PHOTO_SCANS_PER_DAY),
    PREMIUM_PHOTO_SCANS_PER_DAY: num(PREMIUM_PHOTO_SCANS_PER_DAY),
    FOOD_COLOR_GROUP_COUNT: num(FOOD_COLOR_GROUP_COUNT),
    PDF_REPORT_MIN_DAYS: num(PDF_REPORT_MIN_DAYS),
    PDF_REPORT_MAX_DAYS: num(PDF_REPORT_MAX_DAYS),
  };
}
export type Facts = ReturnType<typeof factsFor>;
