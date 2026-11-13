import type { Facts } from "@/data/facts";
import type { CompareContent } from "../types";

// Competitor facts come only from Cal AI's official App Store and Google
// Play listings (linked in `sources`), checked on `lastChecked`.
export default (f: Facts): CompareContent => ({
  metaTitle: "Cal AI Alternative: MyNutriRise vs Cal AI (2026)",
  metaDescription:
    "MyNutriRise vs Cal AI: both log meals from a photo. Compare free access, pricing, languages, halal food and workouts, plus where Cal AI is stronger.",
  breadcrumb: "MyNutriRise vs Cal AI",
  title: "MyNutriRise vs Cal AI",
  competitor: "Cal AI",
  intro:
    "Cal AI and MyNutriRise both let you log a meal by snapping a photo. The main differences are what you can do without a subscription and what the app offers beyond the photo. Here is how they compare, based on each app's official store listing.",
  lastChecked: "2026-11-13",
  rows: [
    {
      feature: "AI photo meal logging",
      ours: `Included free (${f.FREE_PHOTO_SCANS_PER_DAY} scans/day); ${f.PREMIUM_PHOTO_SCANS_PER_DAY}/day with Premium`,
      theirs: "Core feature; its listing states food scanning results require a subscription",
    },
    {
      feature: "Other logging methods",
      ours: "Barcode, voice and search",
      theirs: "Not described in its store listing",
    },
    {
      feature: "Halal and cultural food",
      ours: `${f.CUISINES} cuisines incl. Gulf, Middle Eastern and South Asian; halal filtering checked across every dish`,
      theirs: "Not mentioned in its store listing",
    },
    {
      feature: "Intermittent fasting",
      ours: `${f.FASTING_PLAN_COUNT} fasting plans, including a Ramadan schedule`,
      theirs: "Not mentioned in its store listing",
    },
    {
      feature: "Workouts",
      ours: `${f.STRENGTH_EXERCISE_COUNT}-exercise strength library, routines and cardio`,
      theirs: "Not mentioned in its store listing",
    },
    {
      feature: "App languages",
      ours: "English, Arabic, German, Spanish, French, Russian",
      theirs: "15 languages, including English, Arabic, Russian, French, German, Spanish, Hindi and Japanese",
    },
    {
      feature: "Price",
      ours: "Free; optional Premium",
      theirs: "Free download; subscription required for scan results; in-app purchases from $2.99 to $29.99 in the US App Store",
    },
  ],
  theirStrengths: {
    title: "Where Cal AI is stronger",
    items: [
      "A very large user base: a 4.8 rating from over 375,000 ratings in the US App Store. MyNutriRise is new and has only a handful of ratings so far.",
      "More app languages: 15, including Hindi, Italian, Japanese, Korean, Portuguese and Chinese, which MyNutriRise does not offer.",
      "A deliberately simple, photo-first experience if that is all you want.",
      "Family Sharing for some purchases on the App Store.",
    ],
  },
  ourStrengths: {
    title: "Where MyNutriRise is stronger",
    items: [
      "Photo scan results on the free tier, without a subscription.",
      "More than photo logging: barcode, voice and search, an AI coach, workouts and fasting plans in one app.",
      "Halal filtering and cultural cuisines, including Gulf and Middle Eastern dishes, plus a Ramadan fasting schedule.",
      `${f.DIET_PLAN_COUNT} guided four-week diet plans and ${f.RECIPES} recipes with nutrition details.`,
    ],
  },
  pricing: {
    title: "Pricing compared",
    body: "Both apps are free to download. Cal AI's listing states that food scanning analysis results require a subscription; its US App Store in-app purchases range from $2.99 to $29.99. MyNutriRise shows photo scan results on the free tier with a daily limit, and Premium raises the limits and adds extras such as micronutrient tracking and PDF reports.",
  },
  pickTheirs: {
    title: "Who should pick Cal AI",
    body: "You only want photo-based calorie logging, you are happy to subscribe, you value a very large community of users, or you need a language Cal AI supports and MyNutriRise does not.",
  },
  pickOurs: {
    title: "Who should pick MyNutriRise",
    body: "You want to see photo scan results before paying, you also want barcode and voice logging, workouts, fasting and meal plans in the same app, or you eat halal or Gulf and Middle Eastern food.",
  },
  faqs: [
    {
      question: "Is MyNutriRise a good Cal AI alternative?",
      answer:
        "Yes, if you want photo logging on a free tier, halal and cultural food, workouts and fasting in one app. Cal AI may suit you better if you want a photo-only app in one of its additional languages.",
    },
    {
      question: "Is Cal AI free?",
      answer:
        "Cal AI is free to download, but its App Store listing states that food scanning analysis results require a subscription.",
    },
    {
      question: "Which app supports Arabic?",
      answer:
        "Both. Arabic is in Cal AI's App Store language list, and MyNutriRise is fully available in Arabic.",
    },
    {
      question: "Which app is better for halal food?",
      answer: `MyNutriRise checks halal filtering across every dish in its library of ${f.CUISINES} cuisines. Halal food is not mentioned in Cal AI's store listing.`,
    },
  ],
  summary: {
    title: "The honest summary",
    body: "Cal AI is a popular, focused photo calorie tracker in many languages, and its scan results need a subscription. MyNutriRise gives you photo scan results on the free tier and adds barcode and voice logging, workouts, fasting, meal plans and halal cultural food. Features and prices change, so check both stores before you decide.",
  },
  sources: [
    {
      label: "Cal AI - Calorie Tracker, Apple App Store (US) listing",
      url: "https://apps.apple.com/us/app/cal-ai-calorie-tracker/id6480417616",
    },
    {
      label: "Cal AI - Food Calorie Tracker, Google Play listing",
      url: "https://play.google.com/store/apps/details?id=com.viraldevelopment.calai",
    },
    {
      label: "MyNutriRise, Apple App Store listing",
      url: "https://apps.apple.com/app/mynutririse/id6764006876",
    },
  ],
  ctaTitle: "Try MyNutriRise free",
  ctaBody: "Snap your first meal and see the results, no subscription needed.",
});
