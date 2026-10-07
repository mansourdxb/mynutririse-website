import type { Metadata } from "next";
import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";

export async function generateMetadata({ params }: PageProps<"/[lang]/tools">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const t = getMessages(lang).tools.index;
  return pageMetadata(lang, "/tools", { title: t.metaTitle, description: t.metaDescription });
}

const tools = [
  { href: "/tools/calorie-calculator", emoji: "🔥", key: "calorie" },
  { href: "/tools/macro-calculator", emoji: "🥩", key: "macro" },
  { href: "/tools/bmi-calculator", emoji: "📏", key: "bmi" },
  { href: "/tools/bmr-calculator", emoji: "💤", key: "bmr" },
  { href: "/tools/ideal-weight-calculator", emoji: "🎯", key: "idealWeight" },
] as const;

export default async function ToolsPage({ params }: PageProps<"/[lang]/tools">) {
  const lang = (await params).lang as Locale;
  const t = getMessages(lang).tools.index;

  return (
    <div className="wash-mint pt-24 pb-8">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-center text-h1 text-ink">
          {t.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lead text-ink-3">
          {t.subtitle}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={localePath(lang, tool.href)}
              className="group flex h-full flex-col card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-emerald-200 dark:hover:ring-emerald-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <span className="text-3xl" aria-hidden="true">{tool.emoji}</span>
              <h2 className="mt-4 font-semibold text-ink group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {t.cards[tool.key].title}
              </h2>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-3">
                {t.cards[tool.key].description}
              </p>
            </Link>
          ))}
          <Link
            href={localePath(lang, "/quiz")}
            className="group flex h-full flex-col rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 shadow-[0_30px_60px_-30px_rgb(4_120_87/0.55)] dark:from-emerald-900 dark:via-emerald-800 dark:to-teal-900 dark:shadow-none dark:ring-1 dark:ring-white/10 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <span className="text-3xl" aria-hidden="true">✨</span>
            <h2 className="mt-4 font-semibold text-white">{t.quiz.title}</h2>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-white/85">
              {t.quiz.description}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
