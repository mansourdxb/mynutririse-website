export const locales = ["en", "ar", "de", "es", "fr", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const BASE_URL = "https://www.mynutririse.com";
export const BRAND = "MyNutriRise";
export const APP_STORE_URL = "https://apps.apple.com/app/mynutririse/id6764006876";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.nutririse.app";
export const ORGANIZATION_ID = `${BASE_URL}/#organization`;
/** Official MyNutriRise social profiles (owner-confirmed 2026-11-13), in footer order. */
export const SOCIAL_LINKS = [
  { key: "instagram", url: "https://www.instagram.com/mynutririse" },
  { key: "facebook", url: "https://www.facebook.com/mynutririse" },
  { key: "x", url: "https://x.com/mynutririse" },
] as const;
export const LOGO_URL = `${BASE_URL}/logo.png`;

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

/** App screenshot in the given language, served from public/screenshots/<lang>/. */
export function screenshot(lang: Locale, name: string): string {
  return `/screenshots/${lang}/${name}.webp`;
}

/**
 * Absolute URL for an already-localized path. The site root is written without
 * a trailing slash ("https://www.mynutririse.com"), the form Next.js emits for
 * canonical/og:url, so sitemap, hreflang, canonical and JSON-LD all match.
 */
export function siteUrl(localizedPath: string): string {
  return localizedPath === "/" ? BASE_URL : `${BASE_URL}${localizedPath}`;
}

/** Absolute URL for a page in a language: absoluteUrl("ar", "/about"). */
export function absoluteUrl(lang: Locale, path: string): string {
  return siteUrl(localePath(lang, path));
}

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
