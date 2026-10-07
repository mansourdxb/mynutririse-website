import type { Metadata } from "next";
import { QuizFlow } from "@/components/quiz/QuizFlow";
import type { Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";
import { rich } from "@/i18n/rich";

export async function generateMetadata({ params }: PageProps<"/[lang]/quiz">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const t = getMessages(lang).quiz;
  return pageMetadata(lang, "/quiz", { title: t.metaTitle, description: t.metaDescription });
}

export default async function QuizPage({ params }: PageProps<"/[lang]/quiz">) {
  const lang = (await params).lang as Locale;
  const { quiz: t, common } = getMessages(lang);

  return (
    <div className="wash-mint pt-24 pb-8">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-center text-h2 text-ink">
          {rich(t.title, {
            accent: (c) => <span className="text-emerald-600 dark:text-emerald-400">{c}</span>,
          })}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-ink-3">{t.intro}</p>
        <div className="mt-12">
          <QuizFlow lang={lang} t={t.flow} store={common.store} />
        </div>
      </div>
    </div>
  );
}
