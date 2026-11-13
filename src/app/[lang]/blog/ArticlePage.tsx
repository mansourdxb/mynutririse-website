import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCta } from "./ArticleCta";
import { articles, type ArticleInfo, type ArticleSlug } from "./articles";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { author as authorData } from "@/data/authors";
import {
  BASE_URL,
  BRAND,
  LOGO_URL,
  ORGANIZATION_ID,
  absoluteUrl,
  localePath,
  type Locale,
} from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";
import { articleText } from "@/i18n/posts";
import { personJsonLd } from "@/lib/person";
import Image from "next/image";

function article(slug: ArticleSlug): ArticleInfo {
  return articles.find((a) => a.slug === slug)!;
}

export function articleMetadata(lang: Locale, slug: ArticleSlug): Metadata {
  const t = articleText(lang, article(slug));
  if (!t) return {};
  return pageMetadata(lang, `/blog/${slug}`, {
    title: t.metaTitle ?? t.title,
    description: t.description,
  });
}

/** "2026-06-09" -> localized long date. */
export function formatDate(iso: string, lang: Locale) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(lang === "ar" ? "ar-u-nu-latn" : lang, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function authorPath(slug: string) {
  return `/blog/author/${slug}`;
}

/**
 * Renders a blog article: byline (author, published/updated dates, optional
 * reviewer), content blocks, CTA, and BlogPosting + BreadcrumbList JSON-LD.
 * `links` maps article-specific link tags to language-neutral paths.
 */
export function ArticlePage({
  lang,
  slug,
  links = {},
}: {
  lang: Locale;
  slug: ArticleSlug;
  links?: Record<string, string>;
}) {
  const a = article(slug);
  const t = articleText(lang, a);
  if (!t) notFound();
  const { blog, common, tools } = getMessages(lang);
  const path = `/blog/${slug}`;
  const person = authorData(a.author);
  const bio = blog.authors[a.author];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: t.title,
    description: t.description,
    inLanguage: lang,
    datePublished: a.date,
    dateModified: a.dateModified,
    author: personJsonLd(lang, a.author),
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: BRAND,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    image: `${BASE_URL}/og/${lang}.png`,
    mainEntityOfPage: absoluteUrl(lang, path),
    ...(a.reviewedBy
      ? { reviewedBy: { "@type": "Person", name: a.reviewedBy.name, ...(a.reviewedBy.url ? { url: a.reviewedBy.url } : {}) } }
      : {}),
  };

  return (
    <div className="wash-mint pt-24 pb-8">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <JsonLd data={articleJsonLd} />
        <Breadcrumbs
          lang={lang}
          t={common.breadcrumbs}
          items={[
            { name: blog.index.breadcrumb, href: "/blog" },
            { name: t.breadcrumb, href: path },
          ]}
        />
        <h1 className="mt-6 text-h2 text-ink">{t.title}</h1>
        <div className="mt-4 space-y-1 text-sm text-ink-3">
          <p className="flex items-center gap-2">
            {person.image && (
              <Image src={person.image} alt={bio.imageAlt} width={28} height={28} className="h-7 w-7 rounded-full" />
            )}
            <span>
            {blog.labels.writtenBy}{" "}
            <Link href={localePath(lang, authorPath(a.author))} className="font-medium text-ink-2 hover:text-accent-strong">
              {bio.name}
            </Link>
            , {bio.role}
            </span>
          </p>
          <p>
            {blog.labels.published} <time dateTime={a.date}>{formatDate(a.date, lang)}</time>
            {a.dateModified !== a.date && (
              <>
                {" · "}
                {blog.labels.updated} <time dateTime={a.dateModified}>{formatDate(a.dateModified, lang)}</time>
              </>
            )}
            {" · "}
            {t.readTime}
          </p>
          {a.reviewedBy && (
            <p>
              {blog.labels.reviewedBy}{" "}
              {a.reviewedBy.url ? (
                <a href={a.reviewedBy.url} className="font-medium text-ink-2 hover:text-accent-strong">
                  {a.reviewedBy.name}
                </a>
              ) : (
                <span className="font-medium text-ink-2">{a.reviewedBy.name}</span>
              )}
              , {a.reviewedBy.credentials}
            </p>
          )}
        </div>

        <div className="mt-10 space-y-6 text-base leading-7 text-ink-2">
          <ContentBlocks lang={lang} blocks={t.blocks} sourcesHeading={tools.shared.sourcesHeading} links={links} />
        </div>

        <ArticleCta heading={t.cta.heading} body={t.cta.body} store={common.store} />
      </article>
    </div>
  );
}
