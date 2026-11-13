import type { Facts } from "@/data/facts";
import { arabicDishes } from "@/data/arabicDishes";
import type { PostContent } from "../types";

// Dish values come from src/data/arabicDishes.ts (the MyNutriRise app's own
// dish catalogue) and, for hummus and falafel, from USDA FoodData Central.
// Blocks render through src/components/content/ContentBlocks.tsx.
const dish = (en: string) => arabicDishes.find((d) => d.en === en)!;
const row = (en: string, label = en) => {
  const d = dish(en);
  return [label, d.serving, `${d.kcal}`, `${d.protein} g`, `${d.carbs} g`, `${d.fat} g`];
};
const head = ["Dish", "Serving", "kcal (approx.)", "Protein", "Carbs", "Fat"];

export default (f: Facts): PostContent => ({
  title: "Calories in popular Gulf and Arabic dishes",
  metaTitle: "Calories in Gulf & Arabic Dishes",
  description:
    "Approximate calories and macros for machboos, mandi, harees, shawarma, kunafa, hummus, falafel and more, where the numbers come from and how to log them.",
  breadcrumb: "Calories in Arabic dishes",
  readTime: "7 min read",
  blocks: [
    {
      type: "p",
      text: "Generic calorie apps often have no entry for machboos or harees, or a vague “rice with meat” that can be hundreds of calories off. Below are approximate values for popular Gulf and Arabic dishes, with the source of each number, plus practical tips for logging them accurately.",
    },
    {
      type: "p",
      text: "<b>How to read these numbers:</b> all values are approximate. The same dish can vary a lot between kitchens depending on the amount of ghee or oil, the cut of meat, the ratio of rice to meat and the portion size. Use them as a starting point and adjust the portion to what you actually ate.",
    },
    { type: "h2", text: "Gulf rice and meat dishes" },
    {
      type: "table",
      head,
      rows: [row("Machboos"), row("Mandi"), row("Zurbian"), row("Harees"), row("Thareed"), row("Margoog")],
    },
    {
      type: "p",
      text: "Source: MyNutriRise dish catalogue, per serving as listed in the app. Mandi and zurbian are Yemeni in origin and widely eaten across the Gulf.",
    },
    {
      type: "p",
      text: "Most of the energy in machboos and mandi comes from rice and the fat used to cook it. Keeping the meat portion and taking a smaller scoop of rice is the easiest way to save calories without giving up the dish. Harees is lower in fat when made with lean meat and little butter on top.",
    },
    { type: "h2", text: "Shawarma, grills and Levantine favourites" },
    {
      type: "table",
      head,
      rows: [
        row("Chicken Shawarma Plate"),
        row("Shish Tawook"),
        row("Kafta bil Sayniyeh"),
        row("Mujaddara"),
        row("Fatteh"),
        row("Warak Enab"),
      ],
    },
    {
      type: "p",
      text: "Source: MyNutriRise dish catalogue, per serving as listed in the app. Shish tawook is one of the best choices if you want high protein for relatively few calories. A shawarma sandwich or wrap differs from a plate; the bread, sauces and fries change the total a lot, so log the version you ate.",
    },
    { type: "h2", text: "Sweets: kunafa, luqaimat and balaleet" },
    {
      type: "table",
      head,
      rows: [row("Knafeh", "Kunafa (knafeh)"), row("Luqaimat"), row("Balaleet")],
    },
    {
      type: "p",
      text: "Source: MyNutriRise dish catalogue, per serving as listed in the app. Arabic sweets are rich in sugar and fat, so a modest portion goes a long way. Enjoying them a few times a week, in smaller servings, fits most weight-loss plans better than cutting them out completely.",
    },
    { type: "h2", text: "Hummus and falafel" },
    {
      type: "table",
      head: ["Food", "Amount", "kcal (approx.)", "Protein", "Carbs", "Fat"],
      rows: [
        ["Hummus, commercial", "100 g", "237", "7.8 g", "15.0 g", "17.8 g"],
        ["Hummus, commercial", "2 tablespoons (about 30 g)", "71", "2.3 g", "4.5 g", "5.3 g"],
        ["Falafel, home-prepared", "100 g", "333", "13.3 g", "31.8 g", "17.8 g"],
      ],
    },
    {
      type: "p",
      text: "Source: U.S. Department of Agriculture, FoodData Central (SR Legacy), hummus FDC ID 174289 and falafel FDC ID 172455; the 30 g row is calculated from the 100 g values. In the MyNutriRise catalogue, Egyptian taameya (falafel made with fava beans) is listed at about 240 kcal per 100 g (4 pieces). The difference shows how much recipe and frying change the result: the more oil a falafel absorbs, the higher its calories.",
    },
    { type: "h2", text: "Egyptian classics" },
    {
      type: "table",
      head,
      rows: [row("Koshari"), row("Molokhia"), row("Fattah", "Fattah (Egyptian)"), row("Ful Medames"), row("Mahshi")],
    },
    {
      type: "p",
      text: "Source: MyNutriRise dish catalogue, per serving as listed in the app.",
    },
    { type: "h2", text: "Lighter ways to enjoy the same dishes" },
    {
      type: "ul",
      items: [
        "<b>Machboos and mandi:</b> ask for more meat and salad and a smaller portion of rice, and skip the extra ghee or fried onions on top.",
        "<b>Shawarma:</b> choose a plate with salad over a wrap with fries, and ask for garlic sauce on the side so you control how much you use.",
        "<b>Grills:</b> shish tawook, kofta and grilled fish with salad and a little bread are among the most filling, high-protein choices.",
        "<b>Mezze:</b> hummus, mutabbal and tabbouleh are healthy, but the olive oil on top adds up; enjoy them with vegetables as well as bread.",
        "<b>Falafel:</b> baked falafel or a smaller portion of fried falafel with a large salad keeps the meal satisfying for fewer calories.",
        "<b>Sweets:</b> share a portion of kunafa or luqaimat, or keep them for weekends and special occasions.",
      ],
    },
    { type: "h2", text: "What a day of Gulf food can look like" },
    {
      type: "p",
      text: "Traditional food fits a calorie target when the day is planned around it. For example: eggs with wholegrain bread, cucumber and tomato for breakfast; a portion of machboos with extra salad for lunch; Greek yogurt or fruit in the afternoon; and grilled fish or shish tawook with vegetables for dinner. Depending on portions, a day like this can land around 1,700–2,000 kcal with plenty of protein. Logging it for a week shows you exactly where your calories come from and which swaps matter most for you.",
    },
    { type: "h2", text: "How to log Arabic dishes accurately" },
    {
      type: "ul",
      items: [
        "<b>Weigh once, estimate forever:</b> weigh your usual plate of rice or your family's serving of machboos once. After that you will estimate portions much better.",
        "<b>Count the fat you can see:</b> one tablespoon of oil or ghee is roughly 100–120 kcal. If your recipe uses more than usual, add it.",
        "<b>Log restaurant meals generously:</b> restaurant portions of mandi or shawarma plates are often larger than a standard serving.",
        "<b>Break mixed dishes into parts</b> when you can, for example rice, chicken and salad, especially when the ratio differs from a typical recipe.",
        "<b>Use a photo:</b> snapping a photo of your plate is the quickest way to log, and you can adjust the portion afterwards.",
      ],
    },
    { type: "h2", text: "Fitting these dishes into your goals" },
    {
      type: "p",
      text: "No single dish makes or breaks a diet; your total intake over the day and week does. Find your daily target with the <calorie>calorie calculator</calorie> and see how many grams of protein you need with the <protein>protein calculator</protein>. If you want to lose weight, our guide to <caloriesguide>how many calories to eat to lose weight</caloriesguide> explains how to set a safe deficit; during Ramadan, read <ramadanguide>losing weight during Ramadan without losing muscle</ramadanguide>.",
    },
    {
      type: "p",
      text: `MyNutriRise includes Gulf and Emirati, Yemeni, Lebanese and Egyptian dishes among ${f.CUISINES} cuisines, works fully in Arabic, and lets you log a meal from a photo. See the <arabiccounter>Arabic calorie counter</arabiccounter> page for more.`,
    },
    {
      type: "p",
      text: "This article is general information, not medical advice. If you have a medical condition, are pregnant or breastfeeding, or are under 18, speak to a doctor or registered dietitian before changing your diet.",
    },
    {
      type: "sources",
      sources: [
        {
          label: "MyNutriRise dish catalogue (Gulf & Emirati, Yemeni, Lebanese and Egyptian dishes), per serving as listed in the app, checked November 2026.",
          url: "",
        },
        {
          label: "U.S. Department of Agriculture, FoodData Central (SR Legacy): Hummus, commercial (FDC ID 174289); Falafel, home-prepared (FDC ID 172455).",
          url: "https://fdc.nal.usda.gov/",
        },
      ],
    },
  ],
  cta: {
    heading: "Log your favourite dishes in seconds",
    body: "MyNutriRise knows Gulf, Levantine and Egyptian food and logs your plate from a photo, in Arabic or English.",
  },
});
