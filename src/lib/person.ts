import { author as authorData, type AuthorSlug } from "@/data/authors";
import { BASE_URL, ORGANIZATION_ID, absoluteUrl, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

/** schema.org Person for a blog author, used on articles and the author page. */
export function personJsonLd(lang: Locale, slug: AuthorSlug) {
  const a = authorData(slug);
  const t = getMessages(lang).blog.authors[slug];
  return {
    "@type": "Person",
    name: a.name,
    jobTitle: t.role,
    url: absoluteUrl(lang, `/blog/author/${slug}`),
    worksFor: { "@id": ORGANIZATION_ID },
    ...(a.image ? { image: `${BASE_URL}${a.image}` } : {}),
    ...(a.sameAs.length ? { sameAs: [...a.sameAs] } : {}),
  };
}
