import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { localePath, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";
import { rich } from "@/i18n/rich";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/compare/mynutririse-vs-myfitnesspal">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const t = getMessages(lang).compare;
  return pageMetadata(lang, "/compare/mynutririse-vs-myfitnesspal", {
    title: { absolute: t.metaTitle },
    description: t.metaDescription,
  });
}

const linkClass =
  "font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300";

export default async function ComparePage({
  params,
}: PageProps<"/[lang]/compare/mynutririse-vs-myfitnesspal">) {
  const lang = (await params).lang as Locale;
  const { compare: t, common } = getMessages(lang);

  const compareFaqJsonLd = {
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
      <JsonLd data={compareFaqJsonLd} />
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Breadcrumbs
          lang={lang}
          t={common.breadcrumbs}
          items={[
            { name: t.breadcrumb, href: "/compare/mynutririse-vs-myfitnesspal" },
          ]}
        />
        <h1 className="mt-6 text-center text-h1 text-ink">{t.title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lead text-ink-3">{t.intro}</p>

        <div className="mt-12 overflow-x-auto card">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-line bg-emerald-50/50 dark:bg-emerald-400/10">
                <th className="px-5 py-4 text-start font-semibold text-ink-2">{t.table.feature}</th>
                <th className="px-5 py-4 text-start font-semibold text-emerald-700 dark:text-emerald-300">{t.table.ours}</th>
                <th className="px-5 py-4 text-start font-semibold text-ink-2">{t.table.theirs}</th>
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

        <p className="mt-4 text-center text-xs text-ink-3">{t.disclaimer}</p>

        <div className="mt-12 space-y-4 text-ink-2">
          <h2 className="text-2xl font-bold text-ink">{t.pickTheirs.title}</h2>
          <p>{t.pickTheirs.body}</p>
          <h2 className="text-2xl font-bold text-ink">{t.pickOurs.title}</h2>
          <p>
            {rich(t.pickOurs.body, {
              link: (c) => (
                <Link href={localePath(lang, "/halal-nutrition-app")} className={linkClass}>
                  {c}
                </Link>
              ),
            })}
          </p>
          <h2 className="text-2xl font-bold text-ink">{t.pricing.title}</h2>
          <p>{t.pricing.body}</p>
          <h2 className="text-2xl font-bold text-ink">{t.faqTitle}</h2>
          {t.faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold text-ink">{faq.question}</h3>
              <p className="mt-2">{faq.answer}</p>
            </div>
          ))}
          <h2 className="text-2xl font-bold text-ink">{t.summary.title}</h2>
          <p>{t.summary.body}</p>
          <p>
            {rich(t.summary.quiz, {
              link: (c) => (
                <Link href={localePath(lang, "/quiz")} className={linkClass}>
                  {c}
                </Link>
              ),
            })}
          </p>
        </div>

        <div className="mt-12 rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 shadow-[0_30px_60px_-30px_rgb(4_120_87/0.55)] dark:from-emerald-900 dark:via-emerald-800 dark:to-teal-900 dark:shadow-none dark:ring-1 dark:ring-white/10 p-8 text-center sm:p-10">
          <h2 className="text-h3 text-white">{t.ctaTitle}</h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <AppStoreButton store="apple" t={common.store} />
            <AppStoreButton store="google" t={common.store} />
          </div>
        </div>
      </div>
    </div>
  );
}
