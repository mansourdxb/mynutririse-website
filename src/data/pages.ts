import { defaultLocale, locales, type Locale } from "@/i18n/config";

/**
 * Pages that exist only in some languages. Every other page exists in all
 * locales. The default locale (English) must always be included: it is the
 * hreflang x-default. Sitemap, hreflang, the language switcher and links
 * all read this, so a page never links to a language it does not have.
 */
const PARTIAL_PAGES: Record<string, readonly Locale[]> = {
  "/weight-loss-app": ["en", "ar", "ru"],
  "/muscle-gain-app": ["en", "ar", "ru"],
  "/ramadan-diet-plan": ["en", "ar", "ru"],
  "/meal-planner": ["en", "ar", "ru"],
  "/arabic-calorie-counter": ["en", "ar"],
  "/compare/mynutririse-vs-lose-it": ["en"],
  "/compare/mynutririse-vs-noom": ["en"],
  "/blog/how-many-calories-to-lose-weight": ["en", "ar"],
  "/compare/mynutririse-vs-cal-ai": ["en"],
};

export function pageLocales(path: string): readonly Locale[] {
  return PARTIAL_PAGES[path] ?? locales;
}

export function hasPage(lang: Locale, path: string): boolean {
  return pageLocales(path).includes(lang);
}

/** `path` if it exists in `lang`, otherwise `fallback`. */
export function pathOr(lang: Locale, path: string, fallback: string): string {
  return hasPage(lang, path) ? path : fallback;
}

// Guard: x-default must exist.
for (const [path, ls] of Object.entries(PARTIAL_PAGES)) {
  if (!ls.includes(defaultLocale)) throw new Error(`${path} must include ${defaultLocale}`);
}
