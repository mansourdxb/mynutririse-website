import Link from "next/link";
import { articles } from "@/app/[lang]/blog/articles";
import { toolPages } from "@/data/tools";
import { localePath, type Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";

const cardClass =
  "group flex h-full flex-col card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-emerald-200 dark:hover:ring-emerald-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2";
const moreClass =
  "rounded-sm font-semibold text-accent-strong transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

/** "Free tools" grid and "Latest guides" list. Server-rendered internal links. */
export function HomeResources({
  lang,
  t,
  tools,
  blog,
}: {
  lang: Locale;
  t: Messages["home"]["resources"];
  tools: Messages["tools"]["index"]["cards"];
  blog: Messages["blog"];
}) {
  const latest = [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 6);

  return (
    <section className="relative wash-mint section-y">
      <div className="container-page space-y-16">
        <div>
          <p className="eyebrow mb-3">{t.toolsEyebrow}</p>
          <h2 className="text-h2 text-ink">{t.toolsTitle}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {toolPages.map((tool) => (
              <li key={tool.href}>
                <Link href={localePath(lang, tool.href)} className={cardClass}>
                  <span className="text-2xl" aria-hidden="true">
                    {tool.emoji}
                  </span>
                  <h3 className="mt-3 font-semibold text-ink transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    {tools[tool.key].title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-3">
                    {tools[tool.key].description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href={localePath(lang, "/tools")} className={moreClass}>
              {t.allTools}
            </Link>
          </p>
        </div>

        <div>
          <p className="eyebrow mb-3">{t.guidesEyebrow}</p>
          <h2 className="text-h2 text-ink">{t.guidesTitle}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <li key={article.slug}>
                <Link href={localePath(lang, `/blog/${article.slug}`)} className={cardClass}>
                  <h3 className="font-semibold leading-snug text-ink transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    {blog[article.key].title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-3">
                    {blog[article.key].description}
                  </p>
                  <p className="mt-3 text-xs font-medium text-ink-3">{blog[article.key].readTime}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href={localePath(lang, "/blog")} className={moreClass}>
              {t.allGuides}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
