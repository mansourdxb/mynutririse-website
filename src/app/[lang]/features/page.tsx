import type { Metadata } from "next";
import { Features } from "@/components/sections/Features";
import { CTA } from "@/components/sections/CTA";
import type { Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";

export async function generateMetadata({ params }: PageProps<"/[lang]/features">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const t = getMessages(lang).features;
  return pageMetadata(lang, "/features", { title: t.metaTitle, description: t.metaDescription });
}

export default async function FeaturesPage({ params }: PageProps<"/[lang]/features">) {
  const lang = (await params).lang as Locale;
  const m = getMessages(lang);
  const t = m.features;

  return (
    <>
      <div className="wash-mint pt-24 pb-8">
        <section className="mx-auto max-w-4xl px-6 py-12 text-center">
          <h1 className="text-h1 text-ink">
            {t.pageTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink-3">
            {t.pageIntro}
          </p>
        </section>
      </div>
      <Features lang={lang} t={t} showGrid />
      <CTA lang={lang} t={m.home.cta} store={m.common.store} />
    </>
  );
}
