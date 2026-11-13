import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { articles, type ArticleInfo } from "@/app/[lang]/blog/articles";
import { articleText } from "@/i18n/posts";
import { ContentBlocks, type Block } from "@/components/content/ContentBlocks";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StoreButtons } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { toolPage, toolPages } from "@/data/tools";
import { localePath, type Locale } from "@/i18n/config";
import { pageMetadata, webApplicationJsonLd } from "@/i18n/metadata";
import { getMessages, type Messages } from "@/i18n/messages";

/** Tools whose explainer and FAQ exist in every language. */
export type GuideKey = keyof Messages["toolGuides"];

export function toolMetadata(lang: Locale, key: GuideKey): Metadata {
  const t = getMessages(lang).tools[key];
  return pageMetadata(lang, toolPage(key).href, {
    title: { absolute: t.metaTitle },
    description: t.metaDescription,
  });
}

const cardClass =
  "group flex h-full flex-col card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-emerald-200 dark:hover:ring-emerald-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500";

/**
 * Shared layout for every calculator page: tool, explainer, FAQ (+ FAQPage),
 * disclaimer, related tools and guides, and a download CTA.
 */
export function ToolPage({
  lang,
  toolKey,
  children,
}: {
  lang: Locale;
  toolKey: GuideKey;
  /** The interactive calculator. */
  children: ReactNode;
}) {
  const { tools, toolGuides, common } = getMessages(lang);
  const t = tools[toolKey];
  const g = toolGuides[toolKey];
  const s = tools.shared;
  const page = toolPage(toolKey);

  const related = page.related
    .map((key) => toolPages.find((p) => p.key === key))
    .filter((p) => p !== undefined);
  // Only guides published in this language.
  const guides = page.guides
    .map((slug) => articles.find((a) => a.slug === slug) as ArticleInfo | undefined)
    .map((a) => (a ? { a, text: articleText(lang, a) } : null))
    .filter((g) => g !== null && g.text !== null)
    .map((g) => ({ a: g!.a, text: g!.text! }));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: g.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="wash-mint pt-24 pb-8">
      <JsonLd data={faqJsonLd} />
      <JsonLd data={webApplicationJsonLd(lang, page.href, t.title, t.metaDescription)} />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Breadcrumbs
          lang={lang}
          t={common.breadcrumbs}
          items={[
            { name: s.breadcrumb, href: "/tools" },
            { name: t.breadcrumb, href: page.href },
          ]}
        />
        <h1 className="mt-6 text-center text-h1 text-ink">{t.title}</h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lead text-ink-3">{t.subtitle}</p>

        <div className="mt-10">{children}</div>

        <div className="mt-12 space-y-4 leading-7 text-ink-2">
          <ContentBlocks lang={lang} blocks={g.blocks as readonly Block[]} sourcesHeading={s.sourcesHeading} />

          <h2 className="pt-6 text-2xl font-bold text-ink">{s.faqHeading}</h2>
          {g.faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold text-ink">{faq.question}</h3>
              <p className="mt-2">{faq.answer}</p>
            </div>
          ))}

          <aside className="mt-8 rounded-2xl bg-amber-50 p-5 text-sm leading-6 text-ink-2 ring-1 ring-amber-200/70 dark:bg-amber-400/10 dark:ring-amber-400/20">
            <p className="font-semibold text-ink">{s.disclaimerTitle}</p>
            <p className="mt-1">{s.disclaimer}</p>
          </aside>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-ink">{s.relatedTools}</h2>
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

        {guides.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-bold text-ink">{s.relatedGuides}</h2>
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
            {s.ctaButton}
          </Link>
          <StoreButtons t={common.store} className="mt-5" />
        </div>
      </div>
    </div>
  );
}
