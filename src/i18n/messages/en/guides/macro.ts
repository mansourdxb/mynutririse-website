import type { Facts } from "@/data/facts";

// Long-form explainer and FAQ for /tools/macro-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <calorie>…</calorie> are listed in LINK_TAGS there; keep them when translating.
export default (f: Facts) => ({
  blocks: [
    { type: "h2", text: "What this calculator tells you" },
    {
      type: "p",
      text: "Macronutrients, or “macros”, are the three nutrients that provide energy: protein, carbohydrates and fat. This calculator takes your daily calorie target and splits it into <b>grams of each macro</b> according to the eating style you choose. The calories decide whether you lose, keep or gain weight; the split shapes how full you feel, how well you train and how much muscle you keep.",
    },
    { type: "h2", text: "The formula" },
    {
      type: "p",
      text: "Each gram of protein and carbohydrate provides about 4 kcal and each gram of fat about 9 kcal. The calculator multiplies your calories by each percentage and divides by those energy values:",
    },
    {
      type: "formula",
      items: [
        "Protein (g) = calories × protein % ÷ 4",
        "Carbs (g)   = calories × carbs % ÷ 4",
        "Fat (g)     = calories × fat % ÷ 9",
      ],
    },
    {
      type: "table",
      head: ["Style", "Protein", "Carbs", "Fat", "Good for"],
      rows: [
        ["Balanced", "30%", "40%", "30%", "Most people, general health"],
        ["High protein", "40%", "30%", "30%", "Fat loss and muscle building"],
        ["Keto / low-carb", "25%", "5%", "70%", "People who prefer very low carb"],
        ["Endurance", "25%", "50%", "25%", "Runners, cyclists, high training volume"],
      ],
    },
    { type: "h2", text: "Worked example" },
    {
      type: "p",
      text: "On <b>2,000 kcal</b> with the balanced split: protein 2,000 × 30% ÷ 4 = <b>150 g</b>, carbs 2,000 × 40% ÷ 4 = <b>200 g</b>, fat 2,000 × 30% ÷ 9 = <b>67 g</b>. Switching to high protein on the same calories gives 200 g protein, 150 g carbs and 67 g fat.",
    },
    { type: "h2", text: "Macros for fat loss" },
    {
      type: "p",
      text: "In a calorie deficit, protein is the macro to protect. Research on lean, resistance-trained people suggests higher protein helps keep muscle while dieting, and protein is also the most filling macro, which makes a deficit easier to stick to. Choose the high-protein split, keep fat at a comfortable level (very low fat is hard to sustain) and let carbs fill the rest.",
    },
    {
      type: "p",
      text: "A useful check: protein should land around 1.6–2.4 g per kg of body weight when you are losing fat and training. If your split gives far less, raise the protein percentage.",
    },
    { type: "h2", text: "Macros for muscle gain" },
    {
      type: "p",
      text: "For building muscle, a meta-analysis of resistance-training studies found that benefits from protein level off around <b>1.6 g per kg of body weight per day</b>, with some people benefiting up to about 2.2 g/kg. Above that, extra carbohydrates fuel training better than extra protein. The balanced or high-protein split on a small calorie surplus covers most people.",
    },
    { type: "h2", text: "Staying within healthy ranges" },
    {
      type: "p",
      text: "The U.S. Dietary Reference Intakes set acceptable ranges for adults of 10–35% of calories from protein, 45–65% from carbohydrates and 20–35% from fat. The balanced split sits close to these. The keto style deliberately falls outside them, so it is not for everyone; check with a doctor first if you have diabetes, kidney disease or take medication.",
    },
    { type: "h2", text: "Hitting your macros with real food" },
    {
      type: "ul",
      items: [
        "Build each meal around a protein source: chicken, fish, eggs, Greek yogurt, lentils, chickpeas or lean lamb.",
        "Let carbs follow your activity: more on training days, fewer on rest days.",
        "Treat fat as the remainder; olive oil, nuts and tahini add up quickly.",
        "Landing within about 10 g of each target counts as a good day; consistency over weeks matters more than precision.",
        "Mixed dishes such as biryani, mandi or tagine can be tracked too; our guide to <macroguide>tracking macros with cultural meals</macroguide> shows how.",
      ],
    },
    { type: "h2", text: "Limitations" },
    {
      type: "ul",
      items: [
        "The split is only as good as the calories it divides. If you do not know your target yet, start with the <calorie>calorie calculator</calorie>.",
        "Percentages ignore body size: a small person on a high-calorie plan may get more protein than needed, and a large person on a low-calorie plan may get too little. Check grams per kg of body weight.",
        "This is general information, not medical advice. People with kidney disease, diabetes or other conditions, and anyone pregnant or breastfeeding, should get personal advice from a doctor or registered dietitian.",
      ],
    },
    {
      type: "sources",
      sources: [
        {
          label: "Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids. National Academies Press, 2005.",
          url: "https://nap.nationalacademies.org/catalog/10490",
        },
        {
          label: "Morton RW et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. Br J Sports Med, 2018.",
          url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
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
      question: "What macro split is best for weight loss?",
      answer:
        "A higher-protein split (around 35–40% protein) helps preserve muscle and keeps you full in a deficit. The calorie deficit itself, not the exact split, is what drives weight loss.",
    },
    {
      question: "How much protein do I need to build muscle?",
      answer:
        "Around 1.6 g per kg of body weight per day covers most people, and up to about 2.2 g/kg may help some. Spread it across 3–4 meals.",
    },
    {
      question: "Do macros matter more than calories?",
      answer:
        "Calories decide whether your weight changes; macros affect how much of that change is fat or muscle and how you feel. Set calories first, then the split.",
    },
    {
      question: "Is keto better for fat loss?",
      answer:
        "Not when calories and protein are equal. Low-carb diets can suit people who find them easier to follow, but they are not automatically more effective, and they are not suitable for everyone.",
    },
    {
      question: "Can I track macros with halal or cultural food?",
      answer: `Yes. Mixed dishes like biryani or tagine have known macro profiles, and MyNutriRise covers ${f.CUISINES} world cuisines with protein, carbs and fat per serving.`,
    },
  ],
});
