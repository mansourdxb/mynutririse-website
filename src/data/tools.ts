// Free calculator pages, in display order. `key` indexes tools.<key>,
// tools.index.cards.<key> and toolGuides.<key> in the messages.
// `related` lists other tool keys; `guides` lists blog slugs.
export const toolPages = [
  {
    key: "calorie",
    href: "/tools/calorie-calculator",
    emoji: "🔥",
    related: ["macro", "bmr", "bmi"],
    guides: ["intermittent-fasting-16-8-guide", "ai-photo-calorie-tracking"],
  },
  {
    key: "macro",
    href: "/tools/macro-calculator",
    emoji: "🥩",
    related: ["calorie", "bmr", "idealWeight"],
    guides: ["track-macros-halal-cultural-meals", "ai-photo-calorie-tracking"],
  },
  {
    key: "bmi",
    href: "/tools/bmi-calculator",
    emoji: "📏",
    related: ["idealWeight", "calorie", "bmr"],
    guides: ["intermittent-fasting-16-8-guide", "ai-photo-calorie-tracking"],
  },
  {
    key: "bmr",
    href: "/tools/bmr-calculator",
    emoji: "💤",
    related: ["calorie", "macro", "bmi"],
    guides: ["intermittent-fasting-16-8-guide", "track-macros-halal-cultural-meals"],
  },
  {
    key: "idealWeight",
    href: "/tools/ideal-weight-calculator",
    emoji: "🎯",
    related: ["bmi", "calorie", "macro"],
    guides: ["ai-photo-calorie-tracking", "intermittent-fasting-16-8-guide"],
  },
  {
    key: "tdee",
    href: "/tools/tdee-calculator",
    emoji: "⚡",
    related: ["deficit", "calorie", "bmr"],
    guides: ["intermittent-fasting-16-8-guide", "ai-photo-calorie-tracking"],
  },
  {
    key: "protein",
    href: "/tools/protein-calculator",
    emoji: "🍳",
    related: ["macro", "deficit", "bodyFat"],
    guides: ["track-macros-halal-cultural-meals", "ai-photo-calorie-tracking"],
  },
  {
    key: "deficit",
    href: "/tools/calorie-deficit-calculator",
    emoji: "📉",
    related: ["tdee", "protein", "calorie"],
    guides: ["intermittent-fasting-16-8-guide", "ai-photo-calorie-tracking"],
  },
  {
    key: "bodyFat",
    href: "/tools/body-fat-calculator",
    emoji: "📐",
    related: ["bmi", "protein", "idealWeight"],
    guides: ["track-macros-halal-cultural-meals", "ai-photo-calorie-tracking"],
  },
] as const;

export type ToolKey = (typeof toolPages)[number]["key"];

export function toolPage(key: ToolKey) {
  return toolPages.find((t) => t.key === key)!;
}
