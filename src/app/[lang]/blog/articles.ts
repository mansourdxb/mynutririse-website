import type { AuthorSlug, Reviewer } from "@/data/authors";

// Language-neutral article data. Slugs never change per language.
// - source "messages": copy lives in the `blog` messages under `key`, in all six languages.
// - source "posts": copy lives in src/i18n/posts/<slug>/<lang>.ts, only in the
//   languages listed in data/pages.ts.
// `reviewedBy` stays null until a qualified reviewer has actually reviewed the
// article; the "Reviewed by" line is hidden while it is null.
type ArticleBase = {
  slug: string;
  date: string;
  dateModified: string;
  emoji: string;
  author: AuthorSlug;
  reviewedBy: Reviewer | null;
};

export const articles = [
  {
    source: "messages",
    key: "intermittentFasting",
    slug: "intermittent-fasting-16-8-guide",
    date: "2026-06-09",
    dateModified: "2026-06-10",
    emoji: "⏱️",
    author: "mansour-shaaban",
    reviewedBy: null,
  },
  {
    source: "messages",
    key: "aiPhoto",
    slug: "ai-photo-calorie-tracking",
    date: "2026-06-09",
    dateModified: "2026-06-10",
    emoji: "📸",
    author: "mansour-shaaban",
    reviewedBy: null,
  },
  {
    source: "messages",
    key: "halalMacros",
    slug: "track-macros-halal-cultural-meals",
    date: "2026-06-09",
    dateModified: "2026-06-10",
    emoji: "🍛",
    author: "mansour-shaaban",
    reviewedBy: null,
  },
  {
    source: "posts",
    slug: "how-many-calories-to-lose-weight",
    date: "2026-11-13",
    dateModified: "2026-11-13",
    emoji: "⚖️",
    author: "mansour-shaaban",
    reviewedBy: null,
  },
] as const satisfies readonly (ArticleBase & ({ source: "messages"; key: string } | { source: "posts" }))[];

export type Article = (typeof articles)[number];
/** An article with its date/reviewer fields widened (the const array narrows them). */
export type ArticleInfo = Article extends infer A
  ? A extends Article
    ? Omit<A, "date" | "dateModified" | "reviewedBy"> & Pick<ArticleBase, "date" | "dateModified" | "reviewedBy">
    : never
  : never;
export type ArticleKey = Extract<Article, { source: "messages" }>["key"];
export type ArticleSlug = Article["slug"];
