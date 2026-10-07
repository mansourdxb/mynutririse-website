// Language-neutral article data. Titles, descriptions and read times live in
// the `blog` messages under each article's `key`; slugs never change per language.
export const articles = [
  {
    key: "intermittentFasting",
    slug: "intermittent-fasting-16-8-guide",
    date: "2026-06-09",
    dateModified: "2026-06-10",
    emoji: "⏱️",
  },
  {
    key: "aiPhoto",
    slug: "ai-photo-calorie-tracking",
    date: "2026-06-09",
    dateModified: "2026-06-10",
    emoji: "📸",
  },
  {
    key: "halalMacros",
    slug: "track-macros-halal-cultural-meals",
    date: "2026-06-09",
    dateModified: "2026-06-10",
    emoji: "🍛",
  },
] as const;

export type ArticleKey = (typeof articles)[number]["key"];
