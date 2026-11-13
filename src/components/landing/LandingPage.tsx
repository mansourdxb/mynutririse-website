import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, type ArticleInfo } from "@/app/[lang]/blog/articles";
import { articleText } from "@/i18n/posts";
import { ContentBlocks, richText } from "@/components/content/ContentBlocks";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StoreButtons } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { hasPage } from "@/data/pages";
import { toolPages, type ToolKey } from "@/data/tools";
import { localePath, screenshot, type Locale } from "@/i18n/config";
import { getLanding, type LandingSlug } from "@/i18n/landing";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";

export type LandingConfig = {
  slug: LandingSlug;
  /** Calculators to link under "Related calculators". */
  tools: readonly ToolKey[];
  /** Blog slugs to link under "Related guides". */
  guides: readonly string[];
};

export function landingMetadata(lang: Locale, slug: LandingSlug): Metadata {
  const t = getLanding(slug, lang);
  if (!t) return {};
  return pageMetadata(lang, `/${slug}`, { title: { absolute: t.metaTitle }, description: t.metaDescription });
}

const cardClass =
  "group flex h-full flex-col card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-emerald-200 dark:hover:ring-emerald-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500";

/**
 * Keyword landing page: H1 + intro, app screenshots, long-form sections,
 * FAQ (+ FAQPage), related calculators and guides, disclaimer, download CTA.
 * Renders 404 in languages the page does not exist in (see data/pages.ts).
 */
export function LandingPage({ lang, config }: { lang: Locale; config: LandingConfig }) {
  const path = `/${config.slug}`;
  const t = getLanding(config.slug, lang);
  if (!t || !hasPage(lang, path)) notFound();
  const { tools, common } = getMessages(lang);

  const related = config.tools
    .map((key) => toolPages.find((p) => p.key === key))
    .filter((p) => p !== undefined);
  // Only guides published in this language.
  const guides = config.guides
    .map((slug) => articles.find((a) => a.slug === slug) as ArticleInfo | undefined)
    .map((a) => (a ? { a, text: articleText(lang, a) } : null))
    .filter((g) => g !== null && g.text !== null)
    .map((g) => ({ a: g!.a, text: g!.text! }));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="wash-mint pt-24 pb-8">
      <JsonLd data={faqJsonLd} />
      <div className="mx-auto max-w-3xl px-6 pt-16">
        <Breadcrumbs lang={lang} t={common.breadcrumbs} items={[{ name: t.breadcrumb, href: path }]} />
        <h1 className="mt-6 text-center text-h1 text-ink">{t.title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-center text-lead text-ink-3">{richText(lang, t.intro)}</p>
        <StoreButtons t={common.store} reassurance className="mt-8" />
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 px-6 sm:grid-cols-3">
        {t.screenshots.map((shot) => (
          <figure key={shot.name} className="flex flex-col items-center">
            <PhoneMockup className="w-full">
              <div className="relative aspect-[9/19.5] w-full">
                <Image
                  src={screenshot(lang, shot.name)}
                  alt={shot.alt}
                  width={290}
                  height={628}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>
            </PhoneMockup>
            <figcaption className="mt-4 max-w-[16rem] text-center text-sm text-ink-3">{shot.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-4 leading-7 text-ink-2">
          <ContentBlocks lang={lang} blocks={t.blocks} sourcesHeading={tools.shared.sourcesHeading} />

          <h2 className="pt-6 text-2xl font-bold text-ink">{tools.shared.faqHeading}</h2>
          {t.faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold text-ink">{faq.question}</h3>
              <p className="mt-2">{faq.answer}</p>
            </div>
          ))}

          <aside className="mt-8 rounded-2xl bg-amber-50 p-5 text-sm leading-6 text-ink-2 ring-1 ring-amber-200/70 dark:bg-amber-400/10 dark:ring-amber-400/20">
            <p className="font-semibold text-ink">{tools.shared.disclaimerTitle}</p>
            <p className="mt-1">{t.disclaimer}</p>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold text-ink">{tools.shared.relatedTools}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {related.map((p) => (
                <li key={p.key}>
                  <Link href={localePath(lang, p.href)} className={cardClass}>
                    <span className="text-xl" aria-hidden="true">
                      {p.emoji}
                    </span>
                    <span className="mt-2 font-semibold text-ink group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {tools.index.cards[p.key].title}
                    </span>
                    <span className="mt-1 text-sm text-ink-3">{tools.index.cards[p.key].description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {guides.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-bold text-ink">{tools.shared.relatedGuides}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {guides.map(({ a, text }) => (
                <li key={a.slug}>
                  <Link href={localePath(lang, `/blog/${a.slug}`)} className={cardClass}>
                    <span className="font-semibold text-ink group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {text.title}
                    </span>
                    <span className="mt-1 text-sm text-ink-3">{text.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-12 rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 p-8 text-center shadow-[0_30px_60px_-30px_rgb(4_120_87/0.55)] sm:p-10 dark:from-emerald-900 dark:via-emerald-800 dark:to-teal-900 dark:shadow-none dark:ring-1 dark:ring-white/10">
          <h2 className="text-h3 text-white">{t.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">{t.ctaBody}</p>
          <Link
            href={localePath(lang, "/download")}
            className="mt-6 inline-block rounded-full bg-white px-7 py-3 font-semibold text-emerald-700 transition-colors hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-700"
          >
            {tools.shared.ctaButton}
          </Link>
        </div>
      </div>
    </div>
  );
}
