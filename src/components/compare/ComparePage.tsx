import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { richText, linkClass } from "@/components/content/ContentBlocks";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StoreButtons } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { hasPage } from "@/data/pages";
import { localePath, type Locale } from "@/i18n/config";
import { getCompare, type CompareSlug } from "@/i18n/compare";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";

export function compareMetadata(lang: Locale, slug: CompareSlug): Metadata {
  const t = getCompare(slug, lang);
  if (!t) return {};
  return pageMetadata(lang, `/compare/${slug}`, { title: { absolute: t.metaTitle }, description: t.metaDescription });
}

/** "2026-11-13" -> "13 November 2026" in the page language. */
function formatDate(iso: string, lang: Locale) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(lang === "ar" ? "ar-u-nu-latn" : lang, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Competitor comparison: table, where each app is stronger, pricing, who
 * should pick which, FAQ (+ FAQPage), linked official sources and a visible
 * "last checked" date.
 */
export function ComparePage({ lang, slug }: { lang: Locale; slug: CompareSlug }) {
  const path = `/compare/${slug}`;
  const t = getCompare(slug, lang);
  if (!t || !hasPage(lang, path)) notFound();
  const { compare, common, tools } = getMessages(lang);
  const checked = formatDate(t.lastChecked, lang);

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
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Breadcrumbs
          lang={lang}
          t={common.breadcrumbs}
          items={[
            { name: compare.index.breadcrumb, href: "/compare" },
            { name: t.breadcrumb, href: path },
          ]}
        />
        <h1 className="mt-6 text-center text-h1 text-ink">{t.title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lead text-ink-3">{t.intro}</p>
        <p className="mt-4 text-center text-sm text-ink-3">
          {compare.index.lastChecked} <time dateTime={t.lastChecked}>{checked}</time>
        </p>

        <div className="mt-10 overflow-x-auto card">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-line bg-emerald-50/50 dark:bg-emerald-400/10">
                <th className="px-5 py-4 text-start font-semibold text-ink-2">{compare.table.feature}</th>
                <th className="px-5 py-4 text-start font-semibold text-emerald-700 dark:text-emerald-300">MyNutriRise</th>
                <th className="px-5 py-4 text-start font-semibold text-ink-2">{t.competitor}</th>
              </tr>
            </thead>
            <tbody>
              {t.rows.map((row) => (
                <tr key={row.feature} className="border-b border-line last:border-b-0 align-top">
                  <th scope="row" className="px-5 py-4 text-start font-medium text-ink-2">
                    {row.feature}
                  </th>
                  <td className="px-5 py-4 text-ink-2">{row.ours}</td>
                  <td className="px-5 py-4 text-ink-2">{row.theirs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 space-y-4 leading-7 text-ink-2">
          {[t.theirStrengths, t.ourStrengths].map((block) => (
            <section key={block.title}>
              <h2 className="pt-2 text-2xl font-bold text-ink">{block.title}</h2>
              <ul className="mt-3 list-disc space-y-2 ps-6">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
          <h2 className="pt-4 text-2xl font-bold text-ink">{t.pricing.title}</h2>
          <p>{t.pricing.body}</p>
          <h2 className="pt-4 text-2xl font-bold text-ink">{t.pickTheirs.title}</h2>
          <p>{t.pickTheirs.body}</p>
          <h2 className="pt-4 text-2xl font-bold text-ink">{t.pickOurs.title}</h2>
          <p>{richText(lang, t.pickOurs.body)}</p>
          <h2 className="pt-4 text-2xl font-bold text-ink">{t.summary.title}</h2>
          <p>{t.summary.body}</p>

          <h2 className="pt-6 text-2xl font-bold text-ink">{compare.faqTitle}</h2>
          {t.faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold text-ink">{faq.question}</h3>
              <p className="mt-2">{faq.answer}</p>
            </div>
          ))}

          <div className="pt-4">
            <h2 className="text-lg font-semibold text-ink">{tools.shared.sourcesHeading}</h2>
            <ol className="mt-3 list-decimal space-y-1.5 ps-6 text-sm text-ink-3">
              {t.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} dir="auto" className={linkClass} rel="noopener" target="_blank">
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-xs text-ink-3">
              {compare.index.sourcesNote} {checked}.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 p-8 text-center shadow-[0_30px_60px_-30px_rgb(4_120_87/0.55)] sm:p-10 dark:from-emerald-900 dark:via-emerald-800 dark:to-teal-900 dark:shadow-none dark:ring-1 dark:ring-white/10">
          <h2 className="text-h3 text-white">{t.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">{t.ctaBody}</p>
          <Link
            href={localePath(lang, "/download")}
            className="mt-6 inline-block rounded-full bg-white px-7 py-3 font-semibold text-emerald-700 transition-colors hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-700"
          >
            {tools.shared.ctaButton}
          </Link>
          <StoreButtons t={common.store} className="mt-5" />
        </div>
      </div>
    </div>
  );
}
