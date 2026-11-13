import type { Facts } from "@/data/facts";
import type { CompareContent } from "../types";

// Competitor facts come only from Lose It!'s official App Store and Google
// Play listings (linked in `sources`), checked on `lastChecked`.
export default (f: Facts): CompareContent => ({
  metaTitle: "Lose It! Alternative: MyNutriRise vs Lose It! (2026)",
  metaDescription:
    "MyNutriRise vs Lose It!: AI photo logging, pricing, languages, halal food and fasting compared, with where each app is stronger. Sources and date included.",
  breadcrumb: "MyNutriRise vs Lose It!",
  title: "MyNutriRise vs Lose It!",
  competitor: "Lose It!",
  intro:
    "Lose It! is one of the longest-running calorie counters, with a huge user base. MyNutriRise is a newer app built around AI photo logging, halal and cultural food and Arabic support. Here is how they compare, based on each app's official store listing.",
  lastChecked: "2026-11-13",
  rows: [
    {
      feature: "AI photo meal logging",
      ours: `Included free (${f.FREE_PHOTO_SCANS_PER_DAY} scans/day); ${f.PREMIUM_PHOTO_SCANS_PER_DAY}/day with Premium`,
      theirs: "Listed among Premium plan features",
    },
    {
      feature: "Barcode scanning and voice logging",
      ours: "Barcode, voice and search logging",
      theirs: "AI voice logging and barcode scanner listed among Premium plan features",
    },
    {
      feature: "Macro tracking",
      ours: "Protein, carbs and fat against daily targets",
      theirs: "Advanced tracking of protein, carbs, fat and more listed among Premium features",
    },
    {
      feature: "Halal and cultural food",
      ours: `${f.CUISINES} cuisines incl. Gulf, Middle Eastern and South Asian; halal filtering checked across every dish`,
      theirs: "Not mentioned in its store listing",
    },
    {
      feature: "Intermittent fasting",
      ours: `${f.FASTING_PLAN_COUNT} fasting plans, including a Ramadan schedule`,
      theirs: "Intermittent fasting schedule tracking",
    },
    {
      feature: "Workouts",
      ours: `${f.STRENGTH_EXERCISE_COUNT}-exercise strength library, routines and cardio`,
      theirs: "Exercise logging",
    },
    {
      feature: "GLP-1 medication support",
      ours: "Not offered",
      theirs: "Log medication and view estimated GLP-1 levels",
    },
    {
      feature: "App languages",
      ours: "English, Arabic, German, Spanish, French, Russian",
      theirs: "English, French, German, Japanese, Korean, Polish, Portuguese, Chinese, Spanish",
    },
    {
      feature: "Price",
      ours: "Free; optional Premium",
      theirs: "Free basic plan; Premium in-app purchases from $9.99 to $79.99 in the US App Store, incl. lifetime options",
    },
  ],
  theirStrengths: {
    title: "Where Lose It! is stronger",
    items: [
      "A long track record: on the App Store since 2008, with a 4.8 rating from over 780,000 ratings in the US store. MyNutriRise is new and has only a handful of ratings so far.",
      "GLP-1 support for people using weight-loss medication.",
      "Broader health metrics in Premium, such as blood pressure, glucose, cholesterol and sleep.",
      "Community features, with friends and support groups.",
      "Languages MyNutriRise does not offer, including Japanese, Korean, Portuguese, Polish and Chinese, plus a one-time lifetime purchase option.",
    ],
  },
  ourStrengths: {
    title: "Where MyNutriRise is stronger",
    items: [
      "AI photo logging on the free tier, not only on Premium.",
      "Halal filtering and cultural cuisines, including Gulf and Middle Eastern dishes, as core features.",
      "Arabic and Russian app languages, and a Ramadan fasting schedule.",
      `A built-in AI coach (${f.FREE_COACH_MESSAGES_PER_DAY} free messages a day) and a strength-training library with routines.`,
    ],
  },
  pricing: {
    title: "Pricing compared",
    body: "Both apps are free to download. Lose It!'s listing puts photo meal logging, AI voice, the barcode scanner and advanced macro tracking under its Premium plan; its US App Store in-app purchases range from $9.99 to $79.99, including lifetime options. MyNutriRise includes AI photo logging with a daily limit on the free tier; Premium raises the limits and adds extras such as micronutrient tracking and PDF reports.",
  },
  pickTheirs: {
    title: "Who should pick Lose It!",
    body: "You want a proven app with a long history and a large community, you use GLP-1 medication and want to track it, you want to log health metrics like blood pressure or cholesterol, or you prefer one of the languages Lose It! supports and MyNutriRise does not.",
  },
  pickOurs: {
    title: "Who should pick MyNutriRise",
    body: "You want AI photo logging without paying first, your meals include Gulf, Middle Eastern or South Asian dishes, you want halal filtering and a Ramadan fasting schedule, or you prefer an app in Arabic or Russian.",
  },
  faqs: [
    {
      question: "Is MyNutriRise a good Lose It! alternative?",
      answer:
        "It is a good fit if you want free AI photo logging, eat halal or cultural food, or prefer Arabic or Russian. Lose It! is the better fit if you want its long track record, GLP-1 support or broader health metrics.",
    },
    {
      question: "Is photo logging free in Lose It!?",
      answer:
        "Lose It!'s App Store listing lists photo meal logging among its Premium plan features. MyNutriRise includes photo logging on its free tier with a daily limit.",
    },
    {
      question: "Does Lose It! support Arabic?",
      answer:
        "Arabic is not among the languages in Lose It!'s App Store listing. MyNutriRise is fully available in Arabic.",
    },
    {
      question: "Which app is better for halal food?",
      answer: `MyNutriRise checks halal filtering across every dish in its library of ${f.CUISINES} cuisines. Halal food is not mentioned in Lose It!'s store listing.`,
    },
  ],
  summary: {
    title: "The honest summary",
    body: "Lose It! is a mature, highly rated tracker with features MyNutriRise does not have, such as GLP-1 support and a large community. MyNutriRise is the better choice if you want AI photo logging on the free tier, halal and cultural food, a Ramadan schedule or an app in Arabic or Russian. Features and prices change, so check both stores before you decide.",
  },
  sources: [
    {
      label: "Lose It! – Calorie Counter, Apple App Store (US) listing",
      url: "https://apps.apple.com/us/app/lose-it-calorie-counter/id297368629",
    },
    {
      label: "Calorie Counter by Lose It!, Google Play listing",
      url: "https://play.google.com/store/apps/details?id=com.fitnow.loseit",
    },
    {
      label: "MyNutriRise, Apple App Store listing",
      url: "https://apps.apple.com/app/mynutririse/id6764006876",
    },
  ],
  ctaTitle: "Try MyNutriRise free",
  ctaBody: "Log your first meal from a photo in seconds, no payment needed.",
});
