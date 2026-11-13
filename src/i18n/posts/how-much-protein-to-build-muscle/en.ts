import type { Facts } from "@/data/facts";
import type { PostContent } from "../types";

// Blocks render through src/components/content/ContentBlocks.tsx; link tags
// such as <protein>…</protein> are listed in LINK_TAGS there.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): PostContent => ({
  title: "How much protein do I need to build muscle?",
  metaTitle: "How Much Protein Do I Need to Build Muscle?",
  description:
    "How much protein you need to build muscle, per kg of body weight and per meal, what the research says, a table by body weight and high-protein foods to use.",
  breadcrumb: "Protein for muscle",
  readTime: "8 min read",
  blocks: [
    {
      type: "p",
      text: "<b>Short answer:</b> if you lift weights and want to build muscle, aim for about <b>1.6 g of protein per kg of body weight per day</b>. Some people benefit from up to about 2.2 g/kg. Spread it over at least three or four meals of roughly 0.4 g/kg each. Below we explain where these numbers come from, how to hit them with everyday food, and when you might need a different amount.",
    },
    { type: "h2", text: "Why protein matters for muscle" },
    {
      type: "p",
      text: "Strength training creates the signal for muscle to grow; protein provides the building blocks. Your body is constantly breaking down and rebuilding muscle protein, and you gain muscle when building outpaces breakdown over weeks and months. Eating enough protein across the day, together with progressive training, tips that balance in your favour.",
    },
    { type: "h2", text: "What the research says" },
    {
      type: "ul",
      items: [
        "The <b>Recommended Dietary Allowance</b> for adults is 0.8 g/kg per day. It is set to meet the basic needs of almost all healthy people, not to maximise muscle growth.",
        "A <b>2018 meta-analysis</b> of resistance-training studies found that the extra muscle gained from more protein levelled off at around <b>1.6 g/kg per day</b>, with the upper confidence limit at about 2.2 g/kg.",
        "The <b>International Society of Sports Nutrition</b> recommends 1.4–2.0 g/kg per day for most people who exercise, spread evenly every 3–4 hours.",
        "A 2018 review of how much protein the body can use per meal concluded that about <b>0.4 g/kg per meal across at least four meals</b> is a good target for maximising muscle building.",
      ],
    },
    { type: "h2", text: "Your target by body weight" },
    {
      type: "table",
      head: ["Body weight", "1.6 g/kg per day", "2.2 g/kg per day", "0.4 g/kg per meal"],
      rows: [
        ["55 kg", "88 g", "121 g", "22 g"],
        ["65 kg", "104 g", "143 g", "26 g"],
        ["75 kg", "120 g", "165 g", "30 g"],
        ["85 kg", "136 g", "187 g", "34 g"],
        ["95 kg", "152 g", "209 g", "38 g"],
      ],
    },
    {
      type: "p",
      text: "Use the <protein>protein calculator</protein> for your own range and a per-meal split based on how many meals you eat.",
    },
    { type: "h2", text: "Should I eat more protein when cutting?" },
    {
      type: "p",
      text: "When you eat in a calorie deficit to lose fat, your body is more likely to break down muscle. A systematic review of lean, resistance-trained athletes found that higher protein intakes help preserve muscle during dieting. In practice, aim for the upper part of the range, about 1.6–2.4 g/kg, keep lifting, and avoid very large deficits. Our guide to <caloriesguide>how many calories to eat to lose weight</caloriesguide> covers the deficit side, and the <deficit>calorie deficit calculator</deficit> builds in a safe minimum intake.",
    },
    { type: "h2", text: "What about people with a lot of body fat?" },
    {
      type: "p",
      text: "Grams per kg of total body weight can overestimate needs when body fat is high, because fat tissue needs little protein. A practical approach is to base the calculation on a realistic goal weight instead of current weight.",
    },
    { type: "h2", text: "High-protein foods, including Middle Eastern staples" },
    {
      type: "table",
      head: ["Food", "Portion", "Approx. protein"],
      rows: [
        ["Chicken breast, roasted", "120 g cooked", "about 37 g"],
        ["Eggs", "3 large (about 150 g)", "about 19 g"],
        ["Greek yogurt, plain", "200 g", "about 19 g"],
        ["Lentils, boiled", "200 g", "about 18 g"],
        ["Chickpeas, boiled", "150 g", "about 13 g"],
        ["Grouper (hammour), cooked", "150 g", "about 37 g"],
      ],
    },
    {
      type: "p",
      text: "Values are calculated from USDA FoodData Central and rounded; products and recipes vary, so check labels or log the food in an app to see the exact figure. Dishes such as shish tawook, grilled kofta and ful medames are good options, and our guide to <macroguide>tracking macros in cultural meals</macroguide> shows how to log mixed dishes.",
    },
    { type: "h2", text: "A sample high-protein day for a 75 kg lifter" },
    {
      type: "table",
      head: ["Meal", "Example", "Protein"],
      rows: [
        ["Breakfast", "3 eggs, wholegrain bread, cucumber and tomato", "about 25 g"],
        ["Lunch", "Shish tawook plate with rice and salad", "about 35 g"],
        ["Snack", "Greek yogurt with fruit and a few nuts", "about 20 g"],
        ["Dinner", "Grilled fish with lentils and vegetables", "about 45 g"],
      ],
    },
    {
      type: "p",
      text: "That adds up to roughly 125 g, inside the 120–165 g range for 75 kg. The numbers are rough estimates for illustration.",
    },
    { type: "h2", text: "Do I need protein shakes?" },
    {
      type: "p",
      text: "No. Protein powder is simply convenient food. If you reach your daily target with meals, a shake adds nothing extra. It can help when you are busy, have a small appetite, or eat a mostly plant-based diet and find it hard to reach your number.",
    },
    { type: "h2", text: "Plant-based protein" },
    {
      type: "p",
      text: "You can build muscle on a vegetarian or vegan diet. Combine legumes, soy, grains, nuts and seeds over the day so you get all essential amino acids, and aim towards the top of your range because plant proteins are slightly less digestible on average.",
    },
    { type: "h2", text: "Protein is only one piece" },
    {
      type: "ul",
      items: [
        "<b>Train progressively:</b> add weight, reps or sets over time, and train each muscle about twice a week.",
        "<b>Eat enough energy:</b> a small surplus of about 200–300 kcal a day supports growth; the <tdee>TDEE calculator</tdee> gives your maintenance.",
        "<b>Sleep and recover:</b> muscle is built between sessions.",
        "<b>Be patient:</b> a beginner gaining about 0.5–1% of body weight a month is doing well.",
      ],
    },
    {
      type: "p",
      text: "MyNutriRise tracks protein at every meal, includes a High Protein four-week diet plan and has workout routines and an exercise log in the same app. See our <muscle>muscle building app</muscle> page for how it all fits together.",
    },
    { type: "h2", text: "Is a high-protein diet safe?" },
    {
      type: "p",
      text: "For healthy adults, intakes in the ranges above are generally considered safe. If you have kidney disease or another medical condition, are pregnant or breastfeeding, or are under 18, follow the advice of your doctor or a registered dietitian. This article is general information, not medical advice.",
    },
    {
      type: "sources",
      sources: [
        {
          label: "Morton RW et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. Br J Sports Med, 2018.",
          url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
        },
        {
          label: "Jäger R et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017.",
          url: "https://pubmed.ncbi.nlm.nih.gov/28642676/",
        },
        {
          label: "Schoenfeld BJ, Aragon AA. How much protein can the body use in a single meal for muscle-building? Implications for daily protein distribution. J Int Soc Sports Nutr, 2018.",
          url: "https://pubmed.ncbi.nlm.nih.gov/29497353/",
        },
        {
          label: "Helms ER et al. A systematic review of dietary protein during caloric restriction in resistance trained lean athletes. Int J Sport Nutr Exerc Metab, 2014.",
          url: "https://pubmed.ncbi.nlm.nih.gov/24092765/",
        },
        {
          label: "U.S. Department of Agriculture, FoodData Central (SR Legacy): chicken breast 171477, egg 171287, Greek yogurt 171312, lentils 172421, chickpeas 173757, grouper 171963.",
          url: "https://fdc.nal.usda.gov/",
        },
        {
          label: "Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids. National Academies Press, 2005.",
          url: "https://nap.nationalacademies.org/catalog/10490",
        },
      ],
    },
  ],
  cta: {
    heading: "Hit your protein target every day",
    body: "MyNutriRise tracks protein at every meal and pairs it with workout routines, so your diet and training work together.",
  },
});
