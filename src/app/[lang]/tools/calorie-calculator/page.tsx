import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CalorieCalculator } from "@/components/tools/CalorieCalculator";
import { StoreButtons } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { localePath, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";
import { rich } from "@/i18n/rich";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools/calorie-calculator">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const t = getMessages(lang).tools.calorie;
  return pageMetadata(lang, "/tools/calorie-calculator", { title: t.metaTitle, description: t.metaDescription });
}

const linkClass =
  "font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300";

const bold = (c: ReactNode) => <strong>{c}</strong>;

// Same order as tools.calorie.table.rows.
const activityFactors = ["1.2", "1.375", "1.55", "1.725", "1.9"];

export default async function CalorieCalculatorPage({ params }: PageProps<"/[lang]/tools/calorie-calculator">) {
  const lang = (await params).lang as Locale;
  const { tools, common } = getMessages(lang);
  const t = tools.calorie;
  const s = tools.shared;

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
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Breadcrumbs
          lang={lang}
          t={common.breadcrumbs}
          items={[
            { name: s.breadcrumb, href: "/tools" },
            { name: t.breadcrumb, href: "/tools/calorie-calculator" },
          ]}
        />
        <h1 className="mt-6 text-center text-h1 text-ink">
          {t.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lead text-ink-3">
          {t.subtitle}
        </p>

        <div className="mt-10">
          <CalorieCalculator t={t.calc} s={s} />
        </div>

        <div className="mt-12 space-y-4 text-ink-2">
          <h2 className="text-2xl font-bold text-ink">
            {t.howHeading}
          </h2>
          <p>{rich(t.howIntro, { b: bold })}</p>
          <div className="rounded-2xl bg-surface-2 p-5 font-mono text-sm leading-7">
            <p>{s.mifflin.men}</p>
            <p>{s.mifflin.women}</p>
          </div>
          <p>{t.tdeeIntro}</p>
          <div className="overflow-hidden rounded-2xl ring-1 ring-line">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-emerald-50/60 dark:bg-emerald-400/10 text-start">
                  <th className="px-4 py-3 font-semibold text-ink-2">{t.table.level}</th>
                  <th className="px-4 py-3 font-semibold text-ink-2">{t.table.multiplier}</th>
                  <th className="px-4 py-3 font-semibold text-ink-2">{t.table.week}</th>
                </tr>
              </thead>
              <tbody>
                {t.table.rows.map((row, i) => (
                  <tr key={row.level} className="border-t border-line">
                    <td className="px-4 py-3 font-medium text-ink-2">{row.level}</td>
                    <td className="px-4 py-3">{activityFactors[i]}</td>
                    <td className="px-4 py-3 text-ink-3">{row.week}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>{rich(t.example, { b: bold })}</p>

          <h2 className="pt-4 text-2xl font-bold text-ink">
            {t.numberHeading}
          </h2>
          <p>
            {rich(t.number, {
              macro: (c) => (
                <Link href={localePath(lang, "/tools/macro-calculator")} className={linkClass}>
                  {c}
                </Link>
              ),
              bmr: (c) => (
                <Link href={localePath(lang, "/tools/bmr-calculator")} className={linkClass}>
                  {c}
                </Link>
              ),
            })}
          </p>

          <h2 className="pt-4 text-2xl font-bold text-ink">
            {t.ramadanHeading}
          </h2>
          <p>
            {rich(t.ramadan, {
              em: (c) => <em>{c}</em>,
              guide: (c) => (
                <Link href={localePath(lang, "/blog/intermittent-fasting-16-8-guide")} className={linkClass}>
                  {c}
                </Link>
              ),
            })}
          </p>

          <h2 className="pt-4 text-2xl font-bold text-ink">
            {s.faqHeading}
          </h2>
          {t.faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold text-ink">{faq.question}</h3>
              <p className="mt-2">{faq.answer}</p>
            </div>
          ))}
          <p className="text-sm text-ink-3">
            {s.disclaimer}
          </p>
        </div>

        <div className="mt-12 rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 shadow-[0_30px_60px_-30px_rgb(4_120_87/0.55)] dark:from-emerald-900 dark:via-emerald-800 dark:to-teal-900 dark:shadow-none dark:ring-1 dark:ring-white/10 p-8 text-center sm:p-10">
          <h2 className="text-h3 text-white">
            {t.ctaTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            {t.ctaBody}
          </p>
          <StoreButtons t={common.store} className="mt-6" />
        </div>
      </div>
    </div>
  );
}
