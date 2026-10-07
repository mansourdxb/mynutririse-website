import type { Metadata } from "next";
import Link from "next/link";
import { StoreButtons } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { localePath, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";
import { rich } from "@/i18n/rich";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/halal-nutrition-app">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const t = getMessages(lang).halal;
  return pageMetadata(lang, "/halal-nutrition-app", {
    title: { absolute: t.metaTitle },
    description: t.metaDescription,
  });
}

const linkClass =
  "font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300";

export default async function HalalNutritionAppPage({
  params,
}: PageProps<"/[lang]/halal-nutrition-app">) {
  const lang = (await params).lang as Locale;
  const { halal: t, common } = getMessages(lang);

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
          items={[{ name: t.breadcrumb, href: "/halal-nutrition-app" }]}
        />

        <h1 className="mt-6 text-h1 text-ink">{t.title}</h1>
        <p className="mt-6 text-lead text-ink-3">{t.intro}</p>

        <StoreButtons t={common.store} reassurance className="mt-8" />

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-ink">{t.library.title}</h2>
          <p className="mt-4 leading-7 text-ink-2">{t.library.body}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {t.library.cuisines.map((cuisine) => (
              <span
                key={cuisine}
                className="rounded-full bg-emerald-50 dark:bg-emerald-400/10 px-3 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300"
              >
                {cuisine}
              </span>
            ))}
            <span className="rounded-full bg-surface-2 px-3 py-1.5 text-sm font-medium text-ink-2">
              {t.library.more}
            </span>
          </div>
          <p className="mt-4 leading-7 text-ink-2">
            {rich(t.library.recipesLink, {
              link: (c) => (
                <Link href={localePath(lang, "/recipes")} className={linkClass}>
                  {c}
                </Link>
              ),
            })}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">{t.ramadan.title}</h2>
          <p className="mt-4 leading-7 text-ink-2">
            {rich(t.ramadan.body, {
              b: (c) => <strong>{c}</strong>,
              link: (c) => (
                <Link href={localePath(lang, "/blog/intermittent-fasting-16-8-guide")} className={linkClass}>
                  {c}
                </Link>
              ),
            })}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">{t.photo.title}</h2>
          <p className="mt-4 leading-7 text-ink-2">
            {rich(t.photo.body, {
              link: (c) => (
                <Link href={localePath(lang, "/tools/calorie-calculator")} className={linkClass}>
                  {c}
                </Link>
              ),
            })}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">{t.language.title}</h2>
          <p className="mt-4 leading-7 text-ink-2">
            {rich(t.language.body, { b: (c) => <strong>{c}</strong> })}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">{t.faqTitle}</h2>
          <div className="mt-6 space-y-6">
            {t.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-semibold text-ink">{faq.question}</h3>
                <p className="mt-2 leading-7 text-ink-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-14 rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 shadow-[0_30px_60px_-30px_rgb(4_120_87/0.55)] dark:from-emerald-900 dark:via-emerald-800 dark:to-teal-900 dark:shadow-none dark:ring-1 dark:ring-white/10 p-8 text-center sm:p-10">
          <h2 className="text-h3 text-white">{t.cta.title}</h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            {rich(t.cta.body, {
              link: (c) => (
                <Link
                  href={localePath(lang, "/quiz")}
                  className="underline decoration-white/50 underline-offset-2 hover:decoration-white"
                >
                  {c}
                </Link>
              ),
            })}
          </p>
          <StoreButtons t={common.store} className="mt-6" />
        </div>
      </div>
    </div>
  );
}
