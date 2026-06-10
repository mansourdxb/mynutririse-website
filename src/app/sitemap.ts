import type { MetadataRoute } from "next";

const BASE_URL = "https://www.mynutririse.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/features`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/support`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/tools/bmi-calculator`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/calorie-calculator`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/macro-calculator`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/bmr-calculator`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/ideal-weight-calculator`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/recipes`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/press`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/compare/mynutririse-vs-myfitnesspal`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/quiz`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/halal-nutrition-app`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/download`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/blog/intermittent-fasting-16-8-guide`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blog/ai-photo-calorie-tracking`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blog/track-macros-halal-cultural-meals`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
