import type { Facts } from "@/data/facts";

export default (f: Facts) => ({
  metaTitle: "MyFitnessPal Alternative: MyNutriRise vs MyFitnessPal (2026)",
  metaDescription:
    "How MyNutriRise compares to MyFitnessPal for halal & cultural food tracking, AI photo logging, fasting, and workouts.",
  breadcrumb: "Compare",
  title: "MyNutriRise vs MyFitnessPal",
  intro: "Both track calories well. The difference is what you eat — and how much effort logging takes.",
  table: {
    feature: "Feature",
    ours: "MyNutriRise",
    theirs: "MyFitnessPal",
  },
  rows: [
    {
      feature: "Halal & cultural cuisine libraries",
      ours: `${f.CUISINES} world cuisines — Turkish, Moroccan, Pakistani, Afghan, Gulf & more, halal-checked throughout`,
      theirs: "Large general food database; no dedicated halal/cultural libraries",
    },
    {
      feature: "AI photo meal scanning",
      ours: `Yes — included free (${f.FREE_PHOTO_SCANS_PER_DAY} scans/day), ${f.PREMIUM_PHOTO_SCANS_PER_DAY}/day with Premium`,
      theirs: "Meal Scan available on Premium plans",
    },
    {
      feature: "Intermittent fasting",
      ours: `${f.FASTING_PLAN_COUNT} plans incl. 16:8, 5:2, OMAD and a Ramadan schedule`,
      theirs: "Fasting tracking included with Premium",
    },
    {
      feature: "Guided meal plans",
      ours: `${f.DIET_PLAN_COUNT} four-week plans incl. Middle Eastern Healthy, Keto Friendly, Mediterranean`,
      theirs: "Meal plans available with Premium",
    },
    {
      feature: "Workout tracking",
      ours: `${f.STRENGTH_EXERCISE_COUNT}-exercise strength library, routines, cardio & wearable sync`,
      theirs: "Exercise logging with large exercise database",
    },
    {
      feature: "App languages",
      ours: "English, Arabic, German, Spanish, French, Russian",
      theirs: "Many languages incl. English, Spanish, French, German",
    },
    {
      feature: "AI coach",
      ours: `Built-in AI nutrition & fitness coach (${f.FREE_COACH_MESSAGES_PER_DAY} free messages/day)`,
      theirs: "No conversational AI coach",
    },
    {
      feature: "Price",
      ours: "Free to download; optional Premium",
      theirs: "Free tier; Premium subscription with 7-day trial",
    },
  ],
  disclaimer:
    "Comparison based on publicly available information, June 2026. Features and pricing may change — check both apps for current details.",
  pickTheirs: {
    title: "Who should pick MyFitnessPal",
    body: "You eat mostly Western and packaged foods, you rely heavily on barcode scanning, and you want the largest crowd-sourced food database on the market. MyFitnessPal has been refined for over a decade and its logging flow is excellent for that use case — especially if you already have years of history in it.",
  },
  pickOurs: {
    title: "Who should pick MyNutriRise",
    body: "Your plate looks like biryani, tagine, mandi, or kabuli pulao — dishes generic databases miss. You want halal-friendly meal plans, a Ramadan fasting schedule, an app that speaks Arabic, and AI photo logging without paying first. That is exactly the gap MyNutriRise was built to fill — see the <link>halal nutrition app</link> page for the full story.",
  },
  pricing: {
    title: "Pricing compared",
    body: "Both apps are free to download with optional subscriptions. MyFitnessPal gates barcode scanning, meal scan, and fasting behind Premium (7-day trial). MyNutriRise includes AI photo scanning and its cultural food libraries from the free tier, with Premium unlocking higher AI limits, full analytics, and all fasting plans.",
  },
  faqTitle: "Frequently asked questions",
  faqs: [
    {
      question: "Is MyNutriRise a good MyFitnessPal alternative?",
      answer:
        "If you eat cultural or halal food, fast during Ramadan, or want AI photo logging on the free tier, MyNutriRise is purpose-built for you. If your diet is mostly Western packaged foods, MyFitnessPal's larger barcode database may serve you better.",
    },
    {
      question: "Is MyFitnessPal halal-friendly?",
      answer: `MyFitnessPal has a large general food database but no dedicated halal or cultural cuisine libraries. MyNutriRise covers ${f.CUISINES} world cuisines, checks halal filtering across every dish in its catalogue, and includes a halal-friendly Middle Eastern Healthy meal plan.`,
    },
    {
      question: "Which app has better AI photo scanning?",
      answer: `MyNutriRise includes AI photo meal scanning from the free tier (${f.FREE_PHOTO_SCANS_PER_DAY} scans/day, ${f.PREMIUM_PHOTO_SCANS_PER_DAY}/day with Premium). MyFitnessPal's Meal Scan is available on its Premium plans.`,
    },
    {
      question: "Can I track Ramadan fasting in either app?",
      answer: `MyNutriRise ships a dedicated Ramadan schedule among ${f.FASTING_PLAN_COUNT} fasting plans. MyFitnessPal offers intermittent fasting tracking with Premium but has no Ramadan-specific schedule.`,
    },
  ],
  summary: {
    title: "The honest summary",
    body: "MyFitnessPal is a mature tracker with one of the largest food databases anywhere — if your meals are mostly Western and packaged-food based, it serves you well. MyNutriRise is built for people whose plates those databases under-serve: if you eat kabuli pulao, nihari, or tagine, want halal-friendly plans, fast during Ramadan, or prefer an app in Arabic — that's exactly what we're for, with AI photo logging included from the free tier.",
    quiz: "Try the <link>1-minute plan quiz</link> to see what your plan would look like.",
  },
  ctaTitle: "Track the food you actually eat",
});
