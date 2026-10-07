import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArticleCta } from "./ArticleCta";
import { articles, type ArticleKey } from "./articles";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BASE_URL, localePath, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";
import { rich } from "@/i18n/rich";

type Block = {
  type: string;
  text?: string;
  items?: readonly string[];
  head?: readonly string[];
  rows?: readonly (readonly string[])[];
};

const linkClass =
  "font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300";

function article(key: ArticleKey) {
  return articles.find((a) => a.key === key)!;
}

export function articleMetadata(lang: Locale, key: ArticleKey): Metadata {
  const t = getMessages(lang).blog[key];
  return pageMetadata(lang, `/blog/${article(key).slug}`, {
    title: t.title,
    description: t.description,
  });
}

/**
 * Renders a blog article from its message blocks. `links` maps the link tags
 * used in the article's text to language-neutral paths.
 */
export function ArticlePage({
  lang,
  articleKey,
  links = {},
}: {
  lang: Locale;
  articleKey: ArticleKey;
  links?: Record<string, string>;
}) {
  const { blog, common } = getMessages(lang);
  const t = blog[articleKey];
  const { slug, date, dateModified } = article(articleKey);
  const path = `/blog/${slug}`;

  const tags: Record<string, (c: ReactNode) => ReactNode> = {
    em: (c) => <em>{c}</em>,
    b: (c) => <strong>{c}</strong>,
  };
  for (const [tag, href] of Object.entries(links)) {
    tags[tag] = (c) => (
      <a href={localePath(lang, href)} className={linkClass}>
        {c}
      </a>
    );
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: t.title,
    description: t.description,
    inLanguage: lang,
    datePublished: date,
    dateModified,
    author: { "@id": `${BASE_URL}/#organization` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    mainEntityOfPage: `${BASE_URL}${localePath(lang, path)}`,
  };

  const blocks: readonly Block[] = t.blocks;

  return (
    <div className="wash-mint pt-24 pb-8">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <JsonLd data={articleJsonLd} />
        <Breadcrumbs
          lang={lang}
          t={common.breadcrumbs}
          items={[
            { name: blog.index.breadcrumb, href: "/blog" },
            { name: t.breadcrumb, href: path },
          ]}
        />
        <h1 className="mt-6 text-h2 text-ink">{t.title}</h1>
        <p className="mt-3 text-sm text-ink-3">
          <time dateTime={date}>{t.dateLabel}</time> · {t.readTime}
        </p>

        <div className="mt-10 space-y-6 text-base leading-7 text-ink-2">
          {blocks.map((block, i) => {
            switch (block.type) {
              case "h2":
                return (
                  <h2 key={i} className="pt-4 text-2xl font-bold text-ink">
                    {block.text}
                  </h2>
                );
              case "ul":
                return (
                  <ul key={i} className="list-disc space-y-2 ps-6">
                    {block.items?.map((item) => (
                      <li key={item}>{rich(item, tags)}</li>
                    ))}
                  </ul>
                );
              case "table":
                return (
                  <div key={i} className="overflow-hidden rounded-2xl ring-1 ring-line">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-emerald-50/60 dark:bg-emerald-400/10 text-start">
                          {block.head?.map((h) => (
                            <th key={h} className="px-4 py-3 font-semibold text-ink-2">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows?.map(([first, ...rest]) => (
                          <tr key={first} className="border-t border-line">
                            <td className="px-4 py-3 font-medium text-ink-2">{first}</td>
                            {rest.map((cell, j) => (
                              <td key={j} className="px-4 py-3">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              default:
                return <p key={i}>{rich(block.text ?? "", tags)}</p>;
            }
          })}
        </div>

        <ArticleCta
          heading={blog.cta[articleKey].heading}
          body={blog.cta[articleKey].body}
          store={common.store}
        />
      </article>
    </div>
  );
}
