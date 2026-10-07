import type { Facts } from "@/data/facts";

export default (f: Facts) => ({
  metaTitle: "Press Kit",
  metaDescription:
    "Press resources for MyNutriRise — boilerplate, fact sheet, brand assets, and media contact.",
  title: "Press Kit",
  intro: "Everything you need to write about MyNutriRise.",
  boilerplateTitle: "Boilerplate",
  boilerplate: `MyNutriRise is an AI-powered nutrition and fitness app built for people the big trackers overlook. Users snap a photo of any meal and AI logs the calories and macros instantly — across ${f.RECIPES} recipes and ${f.CUISINES} world cuisines, with halal-friendly meal plans, ${f.FASTING_PLAN_COUNT} intermittent-fasting plans including a Ramadan schedule, workout tracking, and an AI coach. Available on iOS and Android in English, Arabic, German, Spanish, French, and Russian.`,
  factSheetTitle: "Fact sheet",
  factSheet: [
    { key: "Product", value: "MyNutriRise — AI-powered nutrition & fitness tracker" },
    { key: "Platforms", value: "iOS and Android" },
    { key: "Languages", value: "English, Arabic, German, Spanish, French, Russian" },
    {
      key: "Recipes",
      value: `${f.RECIPES} with real ingredient amounts and cooking steps, across ${f.DISHES} dishes`,
    },
    { key: "Cuisines", value: `${f.CUISINES} world cuisines, halal filtering checked across every dish` },
    {
      key: "Fasting plans",
      value: `${f.FASTING_PLAN_COUNT} plans including 16:8, 5:2, OMAD, and a Ramadan schedule`,
    },
    { key: "Diet plans", value: `${f.DIET_PLAN_COUNT} guided 4-week plans incl. Middle Eastern Healthy` },
    {
      key: "Workout library",
      value: `${f.STRENGTH_EXERCISE_COUNT} strength exercises, ${f.CARDIO_ACTIVITY_COUNT} cardio and sports activities, and prebuilt routines`,
    },
    { key: "Pricing", value: "Free to download; optional Premium subscription" },
    { key: "Website", value: "www.mynutririse.com" },
  ],
  assetsTitle: "Brand assets",
  logo: "App logo (PNG)",
  screenshots: "App screenshots: available on request, or use the screens shown throughout this site.",
  colors: "Brand colors: Emerald <code>#10b981</code>, White <code>#FFFFFF</code>, Slate <code>#1e293b</code>",
  contactTitle: "Media contact",
  contact: "For interviews, review access, or anything else: <link>contact@mynutririse.com</link>",
});
