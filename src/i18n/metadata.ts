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
  // Metadata merges shallowly: this openGraph/twitter replaces the layout's
  // whole object, so the share text and image must be set here too.
  const shareTitle = typeof meta.title === "string" ? meta.title : undefined;
  const shareText = {
    ...(shareTitle !== undefined ? { title: shareTitle } : {}),
    ...(meta.description !== undefined ? { description: meta.description } : {}),
  };
  const image = { url: `/og/${lang}.png`, width: 1200, height: 630, alt: "MyNutriRise" };
  return {
    ...(meta.title !== undefined ? { title: meta.title } : {}),
    ...(meta.description !== undefined ? { description: meta.description } : {}),
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      ...shareText,
      type: "website",
      siteName: "MyNutriRise",
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      ...shareText,
      images: [image.url],
    },
    ...(noindexLocales.includes(lang) ? { robots: { index: false, follow: true } } : {}),
  };
}

/** schema.org WebApplication for a free in-browser calculator page. */
export function webApplicationJsonLd(
  lang: Locale,
  path: string,
  name: string,
  description: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: `${BASE_URL}${localePath(lang, path)}`,
    inLanguage: lang,
    applicationCategory: "HealthApplication",
    operatingSystem: "Any",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}
