import type { Metadata } from "next";
import {
  BASE_URL,
  defaultLocale,
  locales,
  localePath,
  noindexLocales,
  ogLocale,
  type Locale,
} from "./config";

/** hreflang alternates for a page: all six languages plus x-default (English). */
export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${BASE_URL}${localePath(l, path)}`;
  languages["x-default"] = `${BASE_URL}${localePath(defaultLocale, path)}`;
  return languages;
}

/**
 * Per-language metadata for a page: self-referencing canonical, hreflang
 * alternates, Open Graph locale and URL. Title/description come from the
 * page's messages.
 */
export function pageMetadata(
  lang: Locale,
  path: string,
  meta: { title?: Metadata["title"]; description?: string },
): Metadata {
  const url = localePath(lang, path);
  return {
    ...(meta.title !== undefined ? { title: meta.title } : {}),
    ...(meta.description !== undefined ? { description: meta.description } : {}),
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      url,
    },
    ...(noindexLocales.includes(lang) ? { robots: { index: false, follow: true } } : {}),
  };
}
