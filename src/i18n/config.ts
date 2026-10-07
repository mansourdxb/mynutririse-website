export const locales = ["en", "ar", "de", "es", "fr", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const BASE_URL = "https://www.mynutririse.com";

/** Native names, shown in the language switcher. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  ru: "Русский",
};

/** Open Graph locale codes. */
export const ogLocale: Record<Locale, string> = {
  en: "en_US",
  ar: "ar_AR",
  de: "de_DE",
  es: "es_ES",
  fr: "fr_FR",
  ru: "ru_RU",
};

/**
 * Languages still waiting for a native-speaker review. Pages in these languages
 * are served with `noindex` so unreviewed copy can't affect search. Empty by
 * owner decision (2026-10-07): all languages are indexed.
 */
export const noindexLocales: readonly Locale[] = [];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function dir(lang: Locale): "rtl" | "ltr" {
  return lang === "ar" ? "rtl" : "ltr";
}

/**
 * Public URL path for a page in a language. English keeps today's unprefixed
 * URLs; other languages live under /<lang>.
 *   localePath("en", "/about") -> "/about"
 *   localePath("ar", "/about") -> "/ar/about"
 *   localePath("ar", "/")      -> "/ar"
 */
export function localePath(lang: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLocale) return clean;
  if (clean === "/") return `/${lang}`;
  if (clean.startsWith("/#")) return `/${lang}${clean.slice(1)}`;
  return `/${lang}${clean}`;
}
