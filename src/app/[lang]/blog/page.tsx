import type { Metadata } from "next";
import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";
import { articles } from "./articles";

export async function generateMetadata({ params }: PageProps<"/[lang]/blog">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const t = getMessages(lang).blog.index;
  return pageMetadata(lang, "/blog", { title: t.metaTitle, description: t.metaDescription });
}

export default async function BlogPage({ params }: PageProps<"/[lang]/blog">) {
  const lang = (await params).lang as Locale;
  const { blog } = getMessages(lang);
  const t = blog.index;

  return (
    <div className="wash-mint pt-24 pb-8">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-center text-h1 text-ink">{t.title}</h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lead text-ink-3">{t.subtitle}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            const a = blog[article.key];
            return (
              <Link
                key={article.slug}
                href={localePath(lang, `/blog/${article.slug}`)}
                className="group flex h-full flex-col card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-emerald-200 dark:hover:ring-emerald-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <span className="text-3xl" aria-hidden="true">
                  {article.emoji}
                </span>
                <h2 className="mt-4 text-lg font-semibold leading-snug text-ink group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {a.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-3">{a.description}</p>
                <p className="mt-4 text-xs font-medium text-ink-3">{a.readTime}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
