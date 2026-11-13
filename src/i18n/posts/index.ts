import { articles, type ArticleInfo } from "@/app/[lang]/blog/articles";
import { factsFor } from "@/data/facts";
import { hasPage } from "@/data/pages";
import type { Locale } from "../config";
import { getMessages } from "../messages";
import type { PostContent } from "./types";
import caloriesToLoseEn from "./how-many-calories-to-lose-weight/en";
import caloriesToLoseAr from "./how-many-calories-to-lose-weight/ar";

export type { PostContent };
type Builder = (f: ReturnType<typeof factsFor>) => PostContent;

/** Posts whose copy lives in this folder, by slug and language. */
const registry: Record<string, Partial<Record<Locale, Builder>>> = {
  "how-many-calories-to-lose-weight": { en: caloriesToLoseEn, ar: caloriesToLoseAr },
};

/** An article's copy in a language, or null if it is not published there. */
export function articleText(lang: Locale, article: ArticleInfo): PostContent | null {
  if (!hasPage(lang, `/blog/${article.slug}`)) return null;
  if (article.source === "messages") {
    const { blog } = getMessages(lang);
    const t = blog[article.key];
    return {
      title: t.title,
      metaTitle: t.metaTitle,
      description: t.description,
      breadcrumb: t.breadcrumb,
      readTime: t.readTime,
      blocks: t.blocks,
      cta: blog.cta[article.key],
    };
  }
  const build = registry[article.slug]?.[lang];
  return build ? build(factsFor(lang)) : null;
}

/** Articles published in a language, newest first. */
export function articlesIn(lang: Locale) {
  return ([...articles] as ArticleInfo[])
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((a) => ({ article: a, text: articleText(lang, a) }))
    .filter((x): x is { article: ArticleInfo; text: PostContent } => x.text !== null);
}
