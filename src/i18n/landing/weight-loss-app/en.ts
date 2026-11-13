import type { Facts } from "@/data/facts";
import type { LandingContent } from "../types";

// /weight-loss-app — target searches: "weight loss app", "diet app for weight loss".
// Blocks render through src/components/content/ContentBlocks.tsx; link tags
// such as <deficit>…</deficit> are listed in LINK_TAGS there.
export default (f: Facts): LandingContent => ({
  metaTitle: "Weight Loss App & Calorie Counter | MyNutriRise",
  metaDescription:
    "MyNutriRise is a free weight loss app: AI photo meal logging, a safe calorie target, halal meal plans and weekly progress reports. Start losing weight now.",
  breadcrumb: "Weight Loss App",
  title: "The weight loss app built around the food you actually eat",
  intro:
    "MyNutriRise is a free diet app for weight loss that sets a realistic calorie target, logs meals from a photo and keeps you on pace week after week, whether you eat salads, shawarma or your grandmother's mandi.",
  screenshots: [
    {
      name: "meal-photos",
      alt: "MyNutriRise food diary with photos of logged meals and their calories",
      caption: "Snap a photo and the meal is logged with its calories.",
    },
    {
      name: "progress",
      alt: "MyNutriRise progress screen with a weight trend chart, weekly pace and projected goal date",
      caption: "See your weight trend, weekly pace and projected goal date.",
    },
    {
      name: "weekly",
      alt: "MyNutriRise weekly report with days logged, average calories and streak",
      caption: "A weekly report shows how consistent you really were.",
    },
  ],
  blocks: [
    { type: "h2", text: "How MyNutriRise helps you lose weight" },
    {
      type: "p",
      text: "Losing weight comes down to eating a little less energy than you burn, consistently, for long enough. That sounds simple, but most diets fail on the “consistently” part. MyNutriRise is designed to make the daily habits easier: knowing your number, logging what you eat without effort, and seeing whether it is working.",
    },
    { type: "h3", text: "1. Start with a safe calorie target" },
    {
      type: "p",
      text: "The app estimates your maintenance calories from your age, sex, height, weight and activity, then sets a moderate deficit for your goal. You can preview the same math on the web with our free <deficit>calorie deficit calculator</deficit>, which also shows how long your goal will realistically take. Targets never go below 1,200 kcal a day for women or 1,500 kcal a day for men.",
    },
    { type: "h3", text: "2. Log meals in seconds" },
    {
      type: "p",
      text: `Snap a photo of your plate and the AI identifies the food, estimates portions and logs calories and macros. You can also scan a barcode, search the database or log by voice. Photo scanning is free with ${f.FREE_PHOTO_SCANS_PER_DAY} scans a day; Premium raises the limit to ${f.PREMIUM_PHOTO_SCANS_PER_DAY}. Our guide to <aiguide>AI photo calorie tracking</aiguide> explains how accurate it is and how to get the best results.`,
    },
    { type: "h3", text: "3. Keep protein up so you lose fat, not muscle" },
    {
      type: "p",
      text: "The macro tracker shows protein, carbs and fat against your targets every day. Eating enough protein and doing some strength training helps make sure more of the weight you lose is fat. The free <protein>protein calculator</protein> gives you a daily target in grams.",
    },
    { type: "h3", text: "4. Follow a plan when you do not want to think" },
    {
      type: "p",
      text: `Choose from ${f.DIET_PLAN_COUNT} guided four-week diet plans, including clean eating, high protein, Mediterranean and keto-friendly, or let the AI build daily and weekly meal plans. Every recipe in the library of ${f.RECIPES} comes with full nutrition details, and the meal prep planner can turn a week of meals into a grocery list.`,
    },
    { type: "h3", text: "5. Track your trend, not just today" },
    {
      type: "p",
      text: "Log your weight and the progress screen shows your trend, your weekly pace and when you are likely to reach your goal. Body measurements and progress photos show changes the scale misses, and the weekly report tells you how many days you logged and your average intake.",
    },
    { type: "h2", text: "What a healthy pace looks like" },
    {
      type: "p",
      text: "The NHS suggests aiming to lose about 0.5–1 kg a week. A daily deficit of around 500 kcal is a common starting point. Faster loss usually means more hunger, more muscle loss and a higher chance of regaining the weight. Expect your weekly loss to vary: water and salt move the scale up and down, so judge progress by the weekly average.",
    },
    {
      type: "ul",
      items: [
        "Use the <deficit>calorie deficit calculator</deficit> to plan a goal weight and date.",
        "Check your maintenance calories with the <tdee>TDEE calculator</tdee>.",
        "If your weekly average has not moved after 2–3 weeks of accurate logging, lower your intake by 100–200 kcal.",
      ],
    },
    { type: "h2", text: "Why tracking helps" },
    {
      type: "p",
      text: "A systematic review of weight-loss studies found a consistent link between self-monitoring, such as recording food and weight, and losing weight, although the authors noted the quality of evidence was limited. In practice, logging makes portions visible: oils, sauces, drinks and second helpings add up quickly and are easy to forget. Fast logging is what makes it possible to keep doing it.",
    },
    { type: "h2", text: "Lose weight without giving up your food" },
    {
      type: "p",
      text: `Most calorie counters were built around Western menus. MyNutriRise covers ${f.CUISINES} cuisines, including Gulf and Emirati, Turkish, Moroccan, Persian and Pakistani food, with halal filtering checked across every dish. You do not have to replace your family's cooking with diet food: you can log it, adjust portions and fit it into your target. See our guide to <macroguide>tracking macros in cultural meals</macroguide> and the <halal>halal nutrition app</halal> page.`,
    },
    { type: "h2", text: "Intermittent fasting, if it suits you" },
    {
      type: "p",
      text: `Some people find it easier to eat in a shorter window. The app includes ${f.FASTING_PLAN_COUNT} fasting plans, from 16:8 to a Ramadan schedule, each with a timer. Fasting is not required to lose weight; it only helps if it makes your calorie target easier to hit. Read our <ifguide>16:8 beginner's guide</ifguide> to decide.`,
    },
    { type: "h2", text: "Stay motivated" },
    {
      type: "ul",
      items: [
        "An AI coach answers questions about meals and your progress, with a free daily message allowance.",
        "Daily nutrition lessons, streaks and a wellness score help build habits rather than willpower.",
        "Weekly challenges, achievements and leaderboards with friends keep it social if you want that.",
        "It syncs with Apple Health and Health Connect, so steps and workouts count towards your day.",
      ],
    },
    { type: "h2", text: "Free and Premium" },
    {
      type: "p",
      text: `MyNutriRise is free to download and use, including calorie and macro tracking, photo scanning with ${f.FREE_PHOTO_SCANS_PER_DAY} scans a day, fasting and workouts. Premium is optional: it raises the photo-scan and coach limits and unlocks extras such as micronutrient tracking and PDF reports. You can cancel at any time.`,
    },
    {
      type: "sources",
      sources: [
        {
          label: "Burke LE et al. Self-monitoring in weight loss: a systematic review of the literature. J Am Diet Assoc, 2011.",
          url: "https://pubmed.ncbi.nlm.nih.gov/21185970/",
        },
        {
          label: "NHS. Obesity: treatment (aim to lose 0.5 to 1 kg a week).",
          url: "https://www.nhs.uk/conditions/obesity/treatment/",
        },
        {
          label: "Hall KD et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011.",
          url: "https://pubmed.ncbi.nlm.nih.gov/21872751/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is MyNutriRise a free weight loss app?",
      answer: `Yes. You can download and use it for free, including calorie tracking and ${f.FREE_PHOTO_SCANS_PER_DAY} AI photo scans a day. Premium is optional and raises limits and adds extra features.`,
    },
    {
      question: "How many calories should I eat to lose weight?",
      answer:
        "Usually about 500 kcal below your maintenance calories, which gives roughly 0.5 kg of loss a week at first. Never go below 1,200 kcal a day for women or 1,500 kcal a day for men without medical supervision.",
    },
    {
      question: "How fast will I lose weight with the app?",
      answer:
        "Most people can aim for about 0.5–1 kg a week. The app shows your real weekly pace from your logged weight, so you can adjust if you are going slower or faster than planned.",
    },
    {
      question: "Do I have to give up my traditional food?",
      answer: `No. The app covers ${f.CUISINES} cuisines, including Gulf and Middle Eastern dishes, so you can log what you already eat and adjust portions to fit your target.`,
    },
    {
      question: "Do I need to do intermittent fasting to lose weight?",
      answer:
        "No. Fasting is optional. It can help some people manage their calories, but total intake over the day is what matters for weight loss.",
    },
    {
      question: "Is the app suitable for everyone?",
      answer:
        "It is designed for healthy adults. If you are under 18, pregnant or breastfeeding, have a medical condition or a history of eating disorders, talk to a doctor before starting a diet.",
    },
  ],
  disclaimer:
    "MyNutriRise and this page give general information, not medical advice. Calorie targets are estimates. If you are pregnant, breastfeeding, under 18, managing a health condition or have a history of eating disorders, speak to a doctor or registered dietitian before changing how you eat.",
  ctaTitle: "Start losing weight with MyNutriRise",
  ctaBody: "Free to download. Set your target in a minute and log your first meal with a photo.",
});
