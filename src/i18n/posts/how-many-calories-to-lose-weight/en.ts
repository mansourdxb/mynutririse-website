import type { Facts } from "@/data/facts";
import type { PostContent } from "../types";

// Blocks render through src/components/content/ContentBlocks.tsx; link tags
// such as <deficit>…</deficit> are listed in LINK_TAGS there.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): PostContent => ({
  title: "How many calories should I eat to lose weight?",
  metaTitle: "How Many Calories Should I Eat to Lose Weight?",
  description:
    "Work out how many calories to eat to lose weight: estimate maintenance, set a safe deficit, see worked examples and learn why weight loss slows and what to do.",
  breadcrumb: "Calories to lose weight",
  readTime: "8 min read",
  blocks: [
    {
      type: "p",
      text: "<b>Short answer:</b> start about 500 kcal a day below your maintenance calories, the amount that keeps your weight stable. For most people that means losing roughly 0.5 kg a week at first. Never go below 1,200 kcal a day for women or 1,500 kcal a day for men without medical supervision. The rest of this guide shows how to find your own number, why it changes over time and how to adjust it.",
    },
    { type: "h2", text: "Step 1: estimate your maintenance calories" },
    {
      type: "p",
      text: "Your maintenance calories, also called total daily energy expenditure (TDEE), are the energy you burn in a typical day. They have two main parts: the energy your body uses at rest (basal metabolic rate, or BMR) and everything you do on top of that, from walking and working to training.",
    },
    {
      type: "p",
      text: "The most widely used formula for BMR is the <b>Mifflin–St Jeor equation</b>. A systematic review comparing the common equations found it the most reliable for healthy adults, landing within 10% of measured values for more people than the alternatives.",
    },
    {
      type: "formula",
      items: [
        "Men:   BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age + 5",
        "Women: BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age − 161",
        "Maintenance = BMR × activity factor (1.2 sedentary to 1.9 extra active)",
      ],
    },
    {
      type: "p",
      text: "You do not need to do this by hand: the <tdee>TDEE calculator</tdee> shows your maintenance at every activity level, and the <calorie>calorie calculator</calorie> also suggests targets for losing, maintaining and gaining.",
    },
    { type: "h2", text: "Step 2: choose a deficit" },
    {
      type: "p",
      text: "To lose weight you need to eat less energy than you burn. A deficit of about <b>500 kcal a day</b> is a sensible default. It is large enough to see progress within a few weeks and small enough to keep hunger, energy and training manageable. The NHS suggests aiming to lose about 0.5–1 kg a week; a bigger deficit can get you closer to 1 kg a week if you have more weight to lose, but it is harder to sustain.",
    },
    {
      type: "table",
      head: ["Daily deficit", "Approx. weekly loss at first", "Best for"],
      rows: [
        ["250 kcal", "about 0.25 kg", "Lean people, slow and steady, protecting training"],
        ["500 kcal", "about 0.5 kg", "Most people"],
        ["750 kcal", "about 0.7 kg", "People with more weight to lose, short phases"],
      ],
    },
    {
      type: "p",
      text: "These weekly figures use the common rule of thumb that 1 kg of body weight holds about 7,700 kcal. It is a useful starting estimate, but as the next sections explain, real weight loss is slower over time.",
    },
    { type: "h2", text: "Step 3: respect the floor" },
    {
      type: "p",
      text: "Whatever the math says, do not plan to eat below <b>1,200 kcal a day if you are a woman or 1,500 kcal a day if you are a man</b> without medical supervision. Below these levels it becomes very hard to get enough protein, vitamins and minerals, hunger is difficult to manage, and you risk losing more muscle. If your calculation lands below the floor, eat at the floor and accept a slower pace, or increase daily activity instead.",
    },
    { type: "h2", text: "Worked examples" },
    {
      type: "p",
      text: "<b>Example 1:</b> a 34-year-old woman, 163 cm, 74 kg, lightly active. BMR = 10 × 74 + 6.25 × 163 − 5 × 34 − 161 ≈ 1,428 kcal. Maintenance ≈ 1,428 × 1.375 ≈ 1,964 kcal. A 500 kcal deficit gives a target of about <b>1,460 kcal a day</b>, comfortably above the 1,200 kcal floor.",
    },
    {
      type: "p",
      text: "<b>Example 2:</b> a 45-year-old man, 176 cm, 96 kg, sedentary. BMR = 10 × 96 + 6.25 × 176 − 5 × 45 + 5 = 1,840 kcal. Maintenance ≈ 1,840 × 1.2 = 2,208 kcal. A 500 kcal deficit gives about <b>1,710 kcal a day</b>, above the 1,500 kcal floor for men. Adding a daily walk would raise his maintenance and let him eat a little more for the same deficit.",
    },
    { type: "h2", text: "Why weight loss slows down" },
    {
      type: "p",
      text: "Almost everyone notices that the first weeks are fastest and progress then slows. Part of the early drop is water and stored carbohydrate. After that, two things happen: as you get lighter you burn less energy, so the same intake creates a smaller deficit, and the body adapts in other small ways. Research on energy balance has shown that the simple “7,700 kcal per kg” rule overstates long-term weight loss for exactly these reasons.",
    },
    {
      type: "ul",
      items: [
        "Recalculate your target every 4–5 kg of weight lost.",
        "Expect plateaus of one to two weeks even when you are doing everything right; water can hide fat loss.",
        "Judge progress by your average weight over a week or two, not by single weigh-ins.",
      ],
    },
    { type: "h2", text: "Step 4: check your number against real data" },
    {
      type: "p",
      text: "Formulas are estimates, and two people with the same inputs can differ by 10% or more. The way to find your true number is to track for a few weeks. A systematic review of weight-loss studies found a consistent link between self-monitoring, such as recording food and weight, and losing weight, although the evidence quality was limited.",
    },
    {
      type: "ol",
      items: [
        "Eat at your target and log everything for 2–3 weeks, including oils, sauces and drinks.",
        "Weigh yourself several times a week at the same time of day and compare weekly averages.",
        "If your average is falling at roughly the planned pace, keep going.",
        "If it has not moved, lower your intake by 100–200 kcal or add activity, and check that portions have not crept up.",
        "If you are losing much faster than planned, add 100–200 kcal to protect muscle and energy.",
      ],
    },
    { type: "h2", text: "Make the calories work harder" },
    {
      type: "ul",
      items: [
        "<b>Keep protein high.</b> Around 1.6–2.4 g per kg of body weight helps you keep muscle while you lose fat, and protein is the most filling macronutrient. The <protein>protein calculator</protein> gives your target.",
        "<b>Keep some strength training</b> so your body has a reason to hold on to muscle.",
        "<b>Fill half your plate with vegetables or salad</b> at main meals for volume with few calories.",
        "<b>Watch liquid calories</b> such as juices, sweetened coffee and soft drinks.",
        "<b>Plan ahead.</b> A weekly meal plan makes hitting your target much easier; see our <mealplanner>meal planner</mealplanner> page.",
      ],
    },
    { type: "h2", text: "Do I have to count calories forever?" },
    {
      type: "p",
      text: "No. Many people track closely for a few months to learn portion sizes and the calorie content of their usual meals, then switch to tracking a few days a week or only when their weight trend changes. Fast logging helps here: with MyNutriRise you can snap a photo of a meal and the AI estimates calories and macros, which makes it realistic to keep going. Our guide to <aiguide>AI photo calorie tracking</aiguide> explains how accurate photo logging is.",
    },
    { type: "h2", text: "When to get personal advice" },
    {
      type: "p",
      text: "Talk to a doctor or registered dietitian before starting a diet if you are pregnant or breastfeeding, under 18, have diabetes, kidney disease or another medical condition, take medication that affects appetite or blood sugar, or have a history of eating disorders. This article is general information, not medical advice.",
    },
    {
      type: "p",
      text: "Ready to get your number? Use the <deficit>calorie deficit calculator</deficit> to plan a goal weight and date with the floor built in, and read our <weightloss>weight loss app</weightloss> page to see how MyNutriRise helps you stay on track.",
    },
    {
      type: "sources",
      sources: [
        {
          label: "Mifflin MD et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990.",
          url: "https://pubmed.ncbi.nlm.nih.gov/2305711/",
        },
        {
          label: "Frankenfield D et al. Comparison of predictive equations for resting metabolic rate in healthy nonobese and obese adults: a systematic review. J Am Diet Assoc, 2005.",
          url: "https://pubmed.ncbi.nlm.nih.gov/15883556/",
        },
        {
          label: "Hall KD et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011.",
          url: "https://pubmed.ncbi.nlm.nih.gov/21872751/",
        },
        {
          label: "Burke LE et al. Self-monitoring in weight loss: a systematic review of the literature. J Am Diet Assoc, 2011.",
          url: "https://pubmed.ncbi.nlm.nih.gov/21185970/",
        },
        {
          label: "Helms ER et al. A systematic review of dietary protein during caloric restriction in resistance trained lean athletes. Int J Sport Nutr Exerc Metab, 2014.",
          url: "https://pubmed.ncbi.nlm.nih.gov/24092765/",
        },
        {
          label: "NHS. Obesity: treatment (aim to lose 0.5 to 1 kg a week).",
          url: "https://www.nhs.uk/conditions/obesity/treatment/",
        },
      ],
    },
  ],
  cta: {
    heading: "Hit your calorie target every day",
    body: "MyNutriRise sets a safe daily target and logs your meals from a photo, so staying in your deficit takes seconds.",
  },
});
