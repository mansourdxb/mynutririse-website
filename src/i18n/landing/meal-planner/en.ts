import type { Facts } from "@/data/facts";
import type { LandingContent } from "../types";

// /meal-planner — target searches: "meal planner app", "diet plan app".
// Blocks render through src/components/content/ContentBlocks.tsx; link tags
// such as <recipes>…</recipes> are listed in LINK_TAGS there.
export default (f: Facts): LandingContent => ({
  metaTitle: "Meal Planner App & Diet Plans | MyNutriRise",
  metaDescription:
    "Plan a week of meals in minutes with MyNutriRise: calorie-counted meal plans, grocery lists, halal recipes and four-week diet plans. Start planning free.",
  breadcrumb: "Meal Planner",
  title: "Meal planner app: plan your week, shop once, eat to your goal",
  intro:
    "MyNutriRise is a free meal planner and diet plan app. Build a week of meals that fits your calorie and protein targets, turn it into a grocery list, and log each meal in one tap when you eat it.",
  screenshots: [
    {
      name: "meal-prep",
      alt: "MyNutriRise meal planner showing a weekly plan with meals and calories for each day",
      caption: "Plan the week, with calories and protein for every day.",
    },
    {
      name: "grocery",
      alt: "MyNutriRise grocery list generated from a weekly meal plan, grouped by produce, dairy and meat",
      caption: "Turn your plan into a grocery list grouped by aisle.",
    },
    {
      name: "meal-templates",
      alt: "MyNutriRise meal templates with protein, carbs and fat and an Add to Log button",
      caption: "Save meals you eat often and log them in one tap.",
    },
  ],
  blocks: [
    { type: "h2", text: "Why plan your meals" },
    {
      type: "p",
      text: "Most food decisions happen when you are hungry and short on time, which is when takeaway and snacking win. Planning moves those decisions to a calmer moment. A large study of French adults found that people who planned their meals tended to eat a more varied, higher-quality diet, and planning was linked with lower odds of overweight and obesity in women and of obesity in men. The study was observational, so it cannot prove that planning causes these results, but it matches what many people find in practice: a plan makes the healthy choice the easy one.",
    },
    { type: "h2", text: "How meal planning works in MyNutriRise" },
    { type: "h3", text: "1. Start from your numbers" },
    {
      type: "p",
      text: "A plan only helps if it fits your goal. Find your daily target with the <calorie>calorie calculator</calorie> and split it into protein, carbs and fat with the <macro>macro calculator</macro>. In the app, the weekly planner shows calories and protein for each day and for the whole week, so you can see at a glance whether the plan matches your targets.",
    },
    { type: "h3", text: "2. Choose recipes you will actually eat" },
    {
      type: "p",
      text: `Pick from ${f.RECIPES} recipes across ${f.CUISINES} cuisines, each with full nutrition details, and filter by vegetarian, keto, high-protein or gluten-free. Halal filtering is checked across every dish. Browse a sample in our <recipes>recipe library</recipes>. You can also import a recipe from sites such as AllRecipes or BBC Good Food and the app estimates its calories and macros from the ingredients.`,
    },
    { type: "h3", text: "3. Or let a plan do the thinking" },
    {
      type: "p",
      text: `If you would rather not build a week from scratch, follow one of ${f.DIET_PLAN_COUNT} guided four-week diet plans, such as clean eating, high protein or Mediterranean, or let the AI create daily and weekly meal plans for styles like keto, Mediterranean and vegan.`,
    },
    { type: "h3", text: "4. Shop once" },
    {
      type: "p",
      text: "The meal prep planner turns your week into a grocery list grouped by aisle, so you buy what you need and nothing more. You can share the plan and the list with whoever does the shopping.",
    },
    { type: "h3", text: "5. Log in one tap" },
    {
      type: "p",
      text: "Save meals you eat often as templates and add them to your day with one tap. If you go off-plan, snap a photo of what you ate instead and the AI logs it, so your day stays accurate either way.",
    },
    { type: "h2", text: "How to build a balanced week" },
    {
      type: "ul",
      items: [
        "<b>Protein at every meal:</b> eggs or yogurt at breakfast, chicken, fish, meat or legumes at lunch and dinner. The <protein>protein calculator</protein> gives your daily target.",
        "<b>Half the plate vegetables or salad</b> at main meals, as health services such as the NHS recommend for a balanced diet.",
        "<b>Wholegrains and starchy foods</b> such as rice, bread, bulgur or potatoes in sensible portions, with more on active days.",
        "<b>Repeat on purpose:</b> two or three breakfasts and lunches on rotation make shopping and prep much easier.",
        "<b>Cook once, eat twice:</b> make a larger batch of a stew, grilled chicken or rice and use it for two meals.",
        "<b>Plan one flexible meal</b> a week for eating out or family dinners, so the plan survives real life.",
      ],
    },
    { type: "h2", text: "A sample day around 1,800 kcal" },
    {
      type: "table",
      head: ["Meal", "Example", "Approx. kcal"],
      rows: [
        ["Breakfast", "Greek yogurt with oats, berries and a few nuts", "350"],
        ["Lunch", "Grilled chicken with rice, salad and tahini dressing", "550"],
        ["Snack", "An apple and a small handful of almonds", "200"],
        ["Dinner", "Baked fish or lentil stew with vegetables and bread", "550"],
        ["Extra", "Milk in tea or coffee, fruit", "150"],
      ],
    },
    {
      type: "p",
      text: "Values are rough examples for illustration; your app shows the real numbers for the recipes and portions you choose. Adjust portions up or down to match your own target.",
    },
    { type: "h2", text: "Meal planning for weight loss and muscle gain" },
    {
      type: "p",
      text: "For <b>weight loss</b>, plan meals that land about 300–500 kcal below your maintenance calories, keep protein high to stay full, and never plan below 1,200 kcal a day for women or 1,500 kcal a day for men. Our <weightloss>weight loss app</weightloss> page explains the full approach. For <b>muscle gain</b>, plan a small surplus and spread protein over 3–5 meals; see the <muscle>muscle building app</muscle> page.",
    },
    { type: "h2", text: "Planning with your own cuisine" },
    {
      type: "p",
      text: "A meal plan is easier to follow when it looks like the food you already eat. MyNutriRise includes Gulf and Emirati, Turkish, Moroccan, Persian, Pakistani and many other cuisines, so a week can include dishes like grilled kebabs, lentil soup or rice dishes alongside salads and simple breakfasts. Our guide to <macroguide>tracking macros in cultural meals</macroguide> shows how to fit mixed dishes into your targets.",
    },
    {
      type: "sources",
      sources: [
        {
          label: "Ducrot P et al. Meal planning is associated with food variety, diet quality and body weight status in a large sample of French adults. Int J Behav Nutr Phys Act, 2017.",
          url: "https://pubmed.ncbi.nlm.nih.gov/28153017/",
        },
        {
          label: "NHS. The Eatwell Guide.",
          url: "https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/the-eatwell-guide/",
        },
        {
          label: "World Health Organization. Healthy diet: fact sheet.",
          url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Is MyNutriRise a free meal planner?",
      answer:
        "Yes. You can download the app and plan meals for free. Premium is optional and raises limits on features such as AI photo scans and the AI coach.",
    },
    {
      question: "Can the app make a meal plan for me?",
      answer: `Yes. You can follow one of ${f.DIET_PLAN_COUNT} guided four-week diet plans or let the AI create daily and weekly meal plans for styles such as keto, Mediterranean and vegan.`,
    },
    {
      question: "Does it create a grocery list?",
      answer:
        "Yes. The meal prep planner turns your weekly plan into a grocery list grouped by aisle, which you can share.",
    },
    {
      question: "Can I plan halal meals?",
      answer:
        "Yes. Halal filtering is checked across every dish in the recipe library, and the library includes Gulf, Middle Eastern and South Asian recipes.",
    },
    {
      question: "How many calories should my meal plan have?",
      answer:
        "It depends on your body, activity and goal. Use the calorie calculator to find your maintenance, then plan slightly below it to lose weight or slightly above it to build muscle.",
    },
    {
      question: "Can I add my own recipes?",
      answer:
        "Yes. Import a recipe from a supported recipe website or save your own meals as templates, and the app estimates calories and macros from the ingredients.",
    },
  ],
  disclaimer:
    "This page gives general information, not medical advice. Calorie values are estimates. If you have a medical condition, food allergies, are pregnant or breastfeeding, or are under 18, speak to a doctor or registered dietitian before changing your diet.",
  ctaTitle: "Plan your week with MyNutriRise",
  ctaBody: "Free to download. Build a plan that fits your targets and get a grocery list in minutes.",
});
