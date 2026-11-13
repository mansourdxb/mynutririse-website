import type { Facts } from "@/data/facts";
import { arabicDishes, type ArabicDish } from "@/data/arabicDishes";
import type { LandingContent } from "../types";

// /arabic-calorie-counter — English version of an Arabic-first page. Target
// searches: "Arabic calorie counter", "calories in Arabic food", "Gulf food calories".
// Dish values come from src/data/arabicDishes.ts (the app's own catalogue).
const rows = (region: ArabicDish["region"]) =>
  arabicDishes
    .filter((d) => d.region === region)
    .map((d) => [`${d.en} (${d.ar})`, d.serving, `${d.kcal}`, `${d.protein} g`]);
const head = ["Dish", "Serving", "Calories (approx.)", "Protein"];

export default (f: Facts): LandingContent => ({
  metaTitle: "Arabic Calorie Counter for Gulf & Arab Food | MyNutriRise",
  metaDescription:
    "A calorie counter app in Arabic and English that knows machboos, mandi, koshari and shawarma. Snap a photo, see calories and protein. Download it free.",
  breadcrumb: "Arabic Calorie Counter",
  title: "The Arabic calorie counter that knows Gulf, Levantine and Egyptian food",
  intro:
    "Most calorie counters were built for Western menus. MyNutriRise is a free calorie counter app, fully available in Arabic, that knows machboos, harees, mandi, koshari, molokhia and shawarma, so you can log your meal as it is and see its calories and macros in seconds.",
  screenshots: [
    {
      name: "food-search",
      alt: "MyNutriRise food search for shawarma with results showing calories per serving",
      caption: "Search for your dish and see calories per serving.",
    },
    {
      name: "meal-photos",
      alt: "MyNutriRise food diary with photos of logged meals such as shawarma and kofta and their calories",
      caption: "Snap your plate and the AI logs it with its calories.",
    },
    {
      name: "cuisines",
      alt: "MyNutriRise world cuisines screen with an Arabic and Middle Eastern section",
      caption: "Browse dishes from Arabic and world cuisines.",
    },
  ],
  blocks: [
    { type: "h2", text: "Why you need a calorie counter that knows Arabic food" },
    {
      type: "p",
      text: "Search a Western app for chicken machboos or molokhia and you often find nothing, or a generic “rice with meat” entry that can be hundreds of calories off. Logging becomes slow and inaccurate, and most people give up. MyNutriRise treats Gulf, Levantine and Egyptian dishes as first-class foods and works fully in Arabic as well as English.",
    },
    { type: "h2", text: "Calories in popular Gulf dishes" },
    {
      type: "p",
      text: "These values come from the MyNutriRise dish catalogue, per serving as listed in the app. They are approximate: real calories depend on the recipe, the amount of ghee or oil, the cut of meat and the portion size.",
    },
    { type: "table", head, rows: rows("gulf") },
    {
      type: "p",
      text: "Mandi and zurbian are Yemeni in origin but eaten widely across the Gulf, so they are included here.",
    },
    { type: "h2", text: "Calories in Levantine dishes" },
    { type: "table", head, rows: rows("levant") },
    { type: "h2", text: "Calories in Egyptian dishes" },
    { type: "table", head, rows: rows("egypt") },
    { type: "h2", text: "How to count calories in Arabic food more accurately" },
    {
      type: "ul",
      items: [
        "<b>Watch the portion:</b> a restaurant mandi platter can be twice the serving listed. Log what you actually ate, not the size of the plate.",
        "<b>Ghee and oil:</b> one tablespoon adds roughly 100–120 kcal and is the biggest reason calories differ between kitchens.",
        "<b>Rice and bread:</b> in dishes like machboos and fatteh most of the calories come from rice and bread, so a slightly smaller portion makes a big difference when losing weight.",
        "<b>Sweets:</b> knafeh, luqaimat and balaleet are rich in sugar and fat; enjoy small portions and log them.",
        "<b>Choose grilled:</b> shish tawook and grilled kofta are among the highest-protein, lower-calorie options compared with fried dishes.",
      ],
    },
    { type: "h2", text: "How MyNutriRise helps" },
    {
      type: "ul",
      items: [
        `<b>Snap your meal:</b> the AI identifies the food and estimates portion, calories and macros. Photo scanning is free with ${f.FREE_PHOTO_SCANS_PER_DAY} scans a day; Premium raises it to ${f.PREMIUM_PHOTO_SCANS_PER_DAY}.`,
        "<b>Search in Arabic or English:</b> type the dish as you say it, scan a barcode for packaged food, or log by voice.",
        `<b>A large recipe library:</b> ${f.RECIPES} recipes from ${f.CUISINES} cuisines, including Gulf and Emirati, Yemeni, Lebanese and Egyptian, with halal filtering checked across every dish.`,
        "<b>A clear daily target:</b> the app sets calorie and protein targets from your body, activity and goal and shows how each meal fits.",
        `<b>Ramadan and fasting:</b> ${f.FASTING_PLAN_COUNT} fasting plans, including a Ramadan schedule.`,
      ],
    },
    { type: "h2", text: "Start with your numbers" },
    {
      type: "p",
      text: "Before you start logging, find your daily needs with the <calorie>calorie calculator</calorie> and split them into protein, carbs and fat with the <macro>macro calculator</macro>. If you want to lose weight, read our <weightloss>weight loss app</weightloss> page, and during Ramadan see the <ramadan>Ramadan diet plan</ramadan>. Do not go below 1,200 kcal a day for women or 1,500 kcal a day for men without medical supervision.",
    },
    {
      type: "p",
      text: "For more examples of logging mixed dishes like biryani and mandi, read our guide to <macroguide>tracking macros in cultural meals</macroguide>.",
    },
  ],
  faqs: [
    {
      question: "What is the best calorie counter app in Arabic?",
      answer:
        "MyNutriRise is a free app that works fully in Arabic, knows Gulf, Levantine and Egyptian dishes, and lets you log meals by photo, search, barcode or voice.",
    },
    {
      question: "How many calories are in machboos?",
      answer:
        "In the app's dish catalogue, a 350 g serving of machboos has about 480 kcal and 30 g of protein. The real value depends on the amount of rice, ghee and the meat used.",
    },
    {
      question: "How many calories are in koshari?",
      answer:
        "A 300 g serving of koshari has about 380 kcal in the app's dish catalogue, mostly from rice, pasta and lentils.",
    },
    {
      question: "Is the app free?",
      answer: `Yes. You can download and use it for free, including ${f.FREE_PHOTO_SCANS_PER_DAY} AI photo scans a day. Premium is optional.`,
    },
    {
      question: "Are the dishes in the app halal?",
      answer:
        "Halal filtering is checked across every dish in the recipe library, and you can filter recipes by diet.",
    },
    {
      question: "How accurate are the calorie values?",
      answer:
        "They are estimates for a typical serving. Real calories vary with the recipe and portion, so adjust the amount in the app to match what you ate.",
    },
  ],
  disclaimer:
    "This page gives general information, not medical advice. Calorie values are approximate per serving. If you are pregnant or breastfeeding, under 18 or have a medical condition, speak to a doctor or registered dietitian before changing your diet.",
  ctaTitle: "Start counting calories in Arabic",
  ctaBody: "Download MyNutriRise free and log your first dish from a photo.",
});
