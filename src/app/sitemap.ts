import type { MetadataRoute } from "next";
import { BASE_URL, locales, localePath } from "@/i18n/config";
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
  { path: "/recipes", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "yearly", priority: 0.5 },
  { path: "/press", changeFrequency: "yearly", priority: 0.4 },
  { path: "/compare/mynutririse-vs-myfitnesspal", changeFrequency: "monthly", priority: 0.7 },
  { path: "/quiz", changeFrequency: "monthly", priority: 0.8 },
  { path: "/halal-nutrition-app", changeFrequency: "monthly", priority: 0.9 },
  { path: "/download", changeFrequency: "yearly", priority: 0.5 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/blog/intermittent-fasting-16-8-guide", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog/ai-photo-calorie-tracking", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog/track-macros-halal-cultural-meals", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

// Every page in every language, each listing all its language alternates.
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, changeFrequency, priority }) =>
    locales.map((lang) => ({
      url: `${BASE_URL}${localePath(lang, path)}`,
      changeFrequency,
      priority,
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
