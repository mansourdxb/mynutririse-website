import type { Facts } from "@/data/facts";
import type { CompareContent } from "../types";

// Competitor facts come only from Noom's official App Store and Google
// Play listings (linked in `sources`), checked on `lastChecked`.
export default (f: Facts): CompareContent => ({
  metaTitle: "Noom Alternative: MyNutriRise vs Noom (2026)",
  metaDescription:
    "MyNutriRise vs Noom: a free AI calorie counter vs a paid coaching program. Compare features, pricing, languages and halal food, and where Noom is stronger.",
  breadcrumb: "MyNutriRise vs Noom",
  title: "MyNutriRise vs Noom",
  competitor: "Noom",
  intro:
    "Noom is a paid weight-loss program built on behavior-change lessons, coaching and, for eligible users, GLP-1 medication. MyNutriRise is a free AI calorie counter and nutrition app. They solve overlapping problems in different ways; here is how they compare, based on each app's official store listing.",
  lastChecked: "2026-11-13",
  rows: [
    {
      feature: "Approach",
      ours: "Self-guided tracking app with AI tools",
      theirs: "Behavior-change program with daily lessons and optional 1:1 coaching",
    },
    {
      feature: "AI meal logging",
      ours: `AI photo scanning included free (${f.FREE_PHOTO_SCANS_PER_DAY} scans/day); barcode, voice and search`,
      theirs: "AI food logging with 1M+ food items",
    },
    {
      feature: "Medication",
      ours: "Not offered",
      theirs: "Access to GLP-1 medication for eligible users (Noom Med), with online doctors",
    },
    {
      feature: "Halal and cultural food",
      ours: `${f.CUISINES} cuisines incl. Gulf, Middle Eastern and South Asian; halal filtering checked across every dish`,
      theirs: "Not mentioned in its store listing",
    },
    {
      feature: "Fasting",
      ours: `${f.FASTING_PLAN_COUNT} fasting plans, including a Ramadan schedule`,
      theirs: "Supports intermittent fasting",
    },
    {
      feature: "Fitness",
      ours: `${f.STRENGTH_EXERCISE_COUNT}-exercise strength library, routines and cardio`,
      theirs: "1,000+ fitness, stretching and meditation classes",
    },
    {
      feature: "App languages",
      ours: "English, Arabic, German, Spanish, French, Russian",
      theirs: "English, German, Korean, Spanish",
    },
    {
      feature: "Price",
      ours: "Free; optional Premium",
      theirs: "Paid program; listing states plans from $17/month (annual web plan); US App Store in-app purchases from $44.99 to $199.99",
    },
  ],
  theirStrengths: {
    title: "Where Noom is stronger",
    items: [
      "A structured program of daily lessons on habits and behavior change, with optional 1:1 coaching by people.",
      "Access to clinicians and GLP-1 medication for eligible users through Noom Med.",
      "A large library of fitness, stretching and meditation classes, and body-scan features.",
      "A long track record: on the App Store since 2013, with a 4.7 rating from over 870,000 ratings in the US store. MyNutriRise is new and has only a handful of ratings so far.",
      "Syncs with Fitbit and Garmin as well as Apple Health.",
    ],
  },
  ourStrengths: {
    title: "Where MyNutriRise is stronger",
    items: [
      "Free to use, with AI photo logging on the free tier, instead of a paid program.",
      "Halal filtering and cultural cuisines, including Gulf and Middle Eastern dishes, plus a Ramadan fasting schedule.",
      "Arabic, French and Russian app languages, which Noom's listing does not include.",
      `A strength-training library with routines, ${f.DIET_PLAN_COUNT} guided diet plans and ${f.RECIPES} recipes.`,
    ],
  },
  pricing: {
    title: "Pricing compared",
    body: "Noom is a paid program. Its App Store listing states plans from $17 a month on an annual web plan, its Noom Med plans start at $39 a month, and its US App Store in-app purchases range from $44.99 to $199.99. MyNutriRise is free to download and use, including AI photo logging with a daily limit; Premium is optional and raises the limits and adds extras.",
  },
  pickTheirs: {
    title: "Who should pick Noom",
    body: "You want a structured program with human coaching and psychology-based lessons, you are interested in GLP-1 medication and clinical support, or you prefer guided classes for fitness and meditation, and you are happy to pay for that.",
  },
  pickOurs: {
    title: "Who should pick MyNutriRise",
    body: "You want a free calorie counter with AI photo logging, you eat halal or Gulf and Middle Eastern food, you fast in Ramadan, you want strength-training routines, or you prefer an app in Arabic, French or Russian.",
  },
  faqs: [
    {
      question: "Is MyNutriRise a good Noom alternative?",
      answer:
        "If you want a free app to track calories and macros with AI and you do not need human coaching or medication, yes. If you want a structured paid program with coaching or GLP-1 medication, Noom offers things MyNutriRise does not.",
    },
    {
      question: "Is Noom free?",
      answer:
        "The Noom app is free to download, but the program is paid. Its listing states plans from $17 a month on an annual web plan.",
    },
    {
      question: "Does MyNutriRise offer coaching?",
      answer: `MyNutriRise has an AI coach (${f.FREE_COACH_MESSAGES_PER_DAY} free messages a day), not human coaches or medical care.`,
    },
    {
      question: "Which app supports Arabic?",
      answer:
        "MyNutriRise is fully available in Arabic. Arabic is not among the languages in Noom's App Store listing.",
    },
  ],
  summary: {
    title: "The honest summary",
    body: "Noom is a comprehensive paid program with lessons, human coaching and, for eligible users, medication. MyNutriRise is a free AI calorie counter with halal and cultural food, workouts and fasting, available in Arabic. Choose Noom if you want coaching or clinical support, and MyNutriRise if you want a capable free tracker. Features and prices change, so check both stores before you decide.",
  },
  sources: [
    {
      label: "Noom Weight Loss, Food Tracker, Apple App Store (US) listing",
      url: "https://apps.apple.com/us/app/noom-weight-loss-food-tracker/id634598719",
    },
    {
      label: "Noom: Weight Loss & GLP-1 Care, Google Play listing",
      url: "https://play.google.com/store/apps/details?id=com.wsl.noom",
    },
    {
      label: "MyNutriRise, Apple App Store listing",
      url: "https://apps.apple.com/app/mynutririse/id6764006876",
    },
  ],
  ctaTitle: "Try MyNutriRise free",
  ctaBody: "No subscription needed to start: set your target and log your first meal from a photo.",
});
