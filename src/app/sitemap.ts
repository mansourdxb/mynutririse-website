import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/i18n/config";
import { pageLocales } from "@/data/pages";
import { languageAlternates } from "@/i18n/metadata";

type Entry = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

const pages: Entry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/features", changeFrequency: "monthly", priority: 0.8 },
  { path: "/support", changeFrequency: "monthly", priority: 0.6 },
  { path: "/tools/bmi-calculator", changeFrequency: "monthly", priority: 0.7 },
  { path: "/tools/calorie-calculator", changeFrequency: "monthly", priority: 0.7 },
  { path: "/tools", changeFrequency: "monthly", priority: 0.7 },
  { path: "/tools/macro-calculator", changeFrequency: "monthly", priority: 0.7 },
  { path: "/tools/bmr-calculator", changeFrequency: "monthly", priority: 0.7 },
  { path: "/tools/ideal-weight-calculator", changeFrequency: "monthly", priority: 0.7 },
  { path: "/tools/tdee-calculator", changeFrequency: "monthly", priority: 0.7 },
  { path: "/tools/protein-calculator", changeFrequency: "monthly", priority: 0.7 },
  { path: "/tools/calorie-deficit-calculator", changeFrequency: "monthly", priority: 0.7 },
  { path: "/tools/body-fat-calculator", changeFrequency: "monthly", priority: 0.7 },
  { path: "/recipes", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "yearly", priority: 0.5 },
  { path: "/press", changeFrequency: "yearly", priority: 0.4 },
  { path: "/compare", changeFrequency: "monthly", priority: 0.6 },
  { path: "/compare/mynutririse-vs-myfitnesspal", changeFrequency: "monthly", priority: 0.7 },
  { path: "/compare/mynutririse-vs-lose-it", changeFrequency: "monthly", priority: 0.7 },
  { path: "/compare/mynutririse-vs-noom", changeFrequency: "monthly", priority: 0.7 },
  { path: "/compare/mynutririse-vs-cal-ai", changeFrequency: "monthly", priority: 0.7 },
  { path: "/quiz", changeFrequency: "monthly", priority: 0.8 },
  { path: "/halal-nutrition-app", changeFrequency: "monthly", priority: 0.9 },
  { path: "/weight-loss-app", changeFrequency: "monthly", priority: 0.9 },
  { path: "/muscle-gain-app", changeFrequency: "monthly", priority: 0.9 },
  { path: "/ramadan-diet-plan", changeFrequency: "monthly", priority: 0.9 },
  { path: "/meal-planner", changeFrequency: "monthly", priority: 0.9 },
  { path: "/arabic-calorie-counter", changeFrequency: "monthly", priority: 0.9 },
  { path: "/download", changeFrequency: "yearly", priority: 0.5 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/blog/author/mansour-shaaban", changeFrequency: "monthly", priority: 0.4 },
  { path: "/blog/intermittent-fasting-16-8-guide", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog/ai-photo-calorie-tracking", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog/track-macros-halal-cultural-meals", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog/how-many-calories-to-lose-weight", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/how-much-protein-to-build-muscle", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/ramadan-weight-loss-without-losing-muscle", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/calories-in-gulf-arabic-dishes", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

// Every page in every language, each listing all its language alternates.
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, changeFrequency, priority }) =>
    pageLocales(path).map((lang) => ({
      url: absoluteUrl(lang, path),
      changeFrequency,
      priority,
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
