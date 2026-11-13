import type { Facts } from "@/data/facts";
import type { LandingContent } from "../types";

// /muscle-gain-app — target searches: "muscle building app", "high protein diet app".
// Blocks render through src/components/content/ContentBlocks.tsx; link tags
// such as <protein>…</protein> are listed in LINK_TAGS there.
export default (f: Facts): LandingContent => ({
  metaTitle: "Muscle Building App & High Protein Diet | MyNutriRise",
  metaDescription:
    "Build muscle with MyNutriRise: protein targets in g/kg, a high-protein meal plan, workout routines and progress tracking. Download the free app today.",
  breadcrumb: "Muscle Building App",
  title: "The muscle building app that gets your protein right",
  intro:
    "Muscle is built in the gym and finished in the kitchen. MyNutriRise is a free high-protein diet app with workout routines, so your training, your protein and your calorie surplus all point in the same direction.",
  screenshots: [
    {
      name: "routines",
      alt: "MyNutriRise workout routines screen with Full Body and Push Day routines and their exercises",
      caption: "Follow ready-made routines or build your own.",
    },
    {
      name: "diet-plans",
      alt: "MyNutriRise diet plans screen with the High Protein four-week plan selected",
      caption: "A four-week High Protein plan built for muscle and satiety.",
    },
    {
      name: "food-detail",
      alt: "MyNutriRise food detail showing Greek yogurt with granola and its protein, carbs and fat",
      caption: "Every food shows protein, carbs and fat at a glance.",
    },
  ],
  blocks: [
    { type: "h2", text: "What it takes to build muscle" },
    {
      type: "p",
      text: "Muscle growth needs three things working together: training that challenges your muscles, enough protein to repair and build tissue, and enough total energy to support it. Miss one and progress stalls. MyNutriRise helps with all three in one app, so you are not juggling a workout log, a calorie counter and a spreadsheet.",
    },
    { type: "h2", text: "How much protein you need" },
    {
      type: "p",
      text: "For most people who lift weights, about <b>1.6 g of protein per kg of body weight per day</b> is enough to support muscle gain. A 2018 meta-analysis of resistance-training studies found that the benefit levels off around that amount, with some people still gaining from up to about 2.2 g/kg. The International Society of Sports Nutrition suggests 1.4–2.0 g/kg for most people who exercise.",
    },
    {
      type: "table",
      head: ["Body weight", "1.6 g/kg", "2.2 g/kg", "Per meal (4 meals)"],
      rows: [
        ["60 kg", "96 g", "132 g", "24–33 g"],
        ["70 kg", "112 g", "154 g", "28–39 g"],
        ["80 kg", "128 g", "176 g", "32–44 g"],
        ["90 kg", "144 g", "198 g", "36–50 g"],
      ],
    },
    {
      type: "p",
      text: "Spreading protein across the day helps: around 0.25 g/kg, or roughly 20–40 g, per meal every 3–4 hours. Use the free <protein>protein calculator</protein> to get your own range and per-meal target.",
    },
    { type: "h2", text: "How MyNutriRise helps" },
    { type: "h3", text: "Hit your protein every day" },
    {
      type: "p",
      text: "The macro tracker shows protein, carbs and fat against your targets as you log. Snap a photo of a meal and the AI estimates its macros, or scan a barcode for packaged foods like yogurt and protein bars. The recipe library has a high-protein filter, and the <b>High Protein</b> plan is one of the app's guided four-week diet plans.",
    },
    { type: "h3", text: "Train with a plan" },
    {
      type: "p",
      text: `The exercise library has ${f.STRENGTH_EXERCISE_COUNT} strength exercises and ${f.CARDIO_ACTIVITY_COUNT} cardio activities. Start with prebuilt routines such as Full Body, Push Day and Pull Day, or build your own with sets, reps and exercise history, so you can see whether you are lifting more than last time. Calories burned flow into your daily balance automatically.`,
    },
    { type: "h3", text: "Eat enough, but not too much" },
    {
      type: "p",
      text: "Building muscle usually needs a small calorie surplus of about 200–300 kcal above maintenance. Find your maintenance with the <tdee>TDEE calculator</tdee> or the <calorie>calorie calculator</calorie>. A beginner can expect to gain roughly 0.5–1% of body weight a month; if the scale climbs much faster, most of the extra is probably fat, so trim your intake by 100–200 kcal.",
    },
    { type: "h3", text: "See the changes the scale misses" },
    {
      type: "p",
      text: "When you build muscle, your weight and even your BMI can go up while you get leaner. Progress photos and body measurements (waist, chest, arms) in the app show what is really changing, and the <bodyfat>body fat calculator</bodyfat> gives a tape-measure estimate of body fat.",
    },
    { type: "h2", text: "Training basics that make the difference" },
    {
      type: "ul",
      items: [
        "<b>Progressive overload:</b> add a little weight, a rep or a set over time. Your log in the app shows exactly what you did last session.",
        "<b>Enough volume:</b> a meta-analysis found that more weekly sets per muscle group led to more muscle growth; around 10 or more hard sets per muscle per week is a common target as you progress.",
        "<b>Train each muscle about twice a week</b> with rest days between sessions for the same muscles.",
        "<b>Sleep and recovery:</b> muscles grow between workouts, not during them.",
      ],
    },
    { type: "h2", text: "High-protein foods, including Middle Eastern favourites" },
    {
      type: "p",
      text: `You do not need special products to eat a high-protein diet. Grilled chicken, shish tawook, kebabs, fish, eggs, Greek yogurt, labneh, lentils, chickpeas and ful medames are all good sources, and the app covers ${f.CUISINES} cuisines with halal filtering checked across every dish. Our guide to <macroguide>tracking macros in cultural meals</macroguide> shows how to log mixed dishes.`,
    },
    { type: "h2", text: "Building muscle while losing fat" },
    {
      type: "p",
      text: "Beginners and people returning to training can sometimes build muscle while losing fat. In that case, keep a small deficit rather than a surplus, keep protein high (about 1.6–2.4 g/kg) and keep training hard. The <deficit>calorie deficit calculator</deficit> and our <weightloss>weight loss app</weightloss> page explain how to plan it.",
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
          label: "Schoenfeld BJ et al. Dose-response relationship between weekly resistance training volume and increases in muscle mass: a systematic review and meta-analysis. J Sports Sci, 2017.",
          url: "https://pubmed.ncbi.nlm.nih.gov/27433992/",
        },
        {
          label: "Helms ER et al. A systematic review of dietary protein during caloric restriction in resistance trained lean athletes. Int J Sport Nutr Exerc Metab, 2014.",
          url: "https://pubmed.ncbi.nlm.nih.gov/24092765/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much protein do I need to build muscle?",
      answer:
        "About 1.6 g per kg of body weight per day covers most people, and some benefit from up to about 2.2 g/kg. Spread it over 3–5 meals of roughly 20–40 g each.",
    },
    {
      question: "Do I need a calorie surplus to build muscle?",
      answer:
        "Usually a small one, about 200–300 kcal above maintenance. Beginners can sometimes build muscle while losing fat if protein is high and training is consistent.",
    },
    {
      question: "Do I need protein shakes?",
      answer:
        "No. Shakes are convenient but optional. You can reach your target with foods like chicken, fish, eggs, yogurt, legumes and lean meat.",
    },
    {
      question: "Does MyNutriRise include workouts?",
      answer: `Yes. It has ${f.STRENGTH_EXERCISE_COUNT} strength exercises, prebuilt routines like Full Body and Push Day, custom routines with sets and reps, and cardio tracking.`,
    },
    {
      question: "How fast can I gain muscle?",
      answer:
        "It varies with training experience, age and genetics. Beginners gain fastest; a weight gain of roughly 0.5–1% of body weight a month is a reasonable guide while you are new to lifting.",
    },
    {
      question: "Is a high-protein diet safe?",
      answer:
        "For healthy adults, the protein intakes shown here are considered safe. People with kidney disease or other medical conditions should follow their doctor's advice.",
    },
  ],
  disclaimer:
    "This page gives general information, not medical advice. Protein and calorie targets are estimates for healthy adults. If you have kidney disease or another medical condition, are pregnant or breastfeeding, or are under 18, speak to a doctor or registered dietitian before changing your diet or training.",
  ctaTitle: "Start building muscle with MyNutriRise",
  ctaBody: "Free to download. Set your protein target, pick a routine and log your first high-protein meal.",
});
