import type { Facts } from "@/data/facts";

// Long-form explainer and FAQ for /tools/tdee-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <calorie>…</calorie> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts) => ({
  blocks: [
    { type: "h2", text: "What TDEE means" },
    {
      type: "p",
      text: "TDEE stands for <b>total daily energy expenditure</b>: all the calories your body uses in a day. Eat about this much and your weight stays roughly the same, which is why TDEE is also called your maintenance calories. This calculator shows your TDEE at every activity level side by side, so you can see how much daily movement changes your needs.",
    },
    { type: "h2", text: "Where your daily calories go" },
    {
      type: "ul",
      items: [
        "<b>Basal metabolic rate (BMR):</b> the energy that keeps you alive at rest. For most people it is the largest share, often around 60–70% of the total.",
        "<b>Digesting food:</b> breaking down and storing what you eat uses a small share, commonly estimated at about 10%. Protein costs more to digest than carbs or fat.",
        "<b>Everyday movement:</b> walking, standing, cooking, fidgeting. This varies hugely between people and is the part you can change most easily.",
        "<b>Exercise:</b> planned training. For many people it is a smaller share than they expect.",
      ],
    },
    { type: "h2", text: "The formula" },
    {
      type: "p",
      text: "The calculator estimates BMR with the <b>Mifflin–St Jeor equation</b>, which a 2005 systematic review found the most reliable for healthy adults, then multiplies it by a standard activity factor:",
    },
    {
      type: "formula",
      items: [
        "Men:   BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age + 5",
        "Women: BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age − 161",
        "TDEE = BMR × activity factor (1.2 to 1.9)",
      ],
    },
    {
      type: "table",
      head: ["Activity level", "Factor", "Typical week"],
      rows: [
        ["Sedentary", "1.2", "Desk job, little or no exercise"],
        ["Lightly active", "1.375", "Light exercise 1–3 days a week"],
        ["Moderately active", "1.55", "Moderate exercise 3–5 days a week"],
        ["Very active", "1.725", "Hard exercise 6–7 days a week"],
        ["Extra active", "1.9", "Physical job plus training"],
      ],
    },
    { type: "h2", text: "Worked example" },
    {
      type: "p",
      text: "A 35-year-old woman, 165 cm and 68 kg: BMR = 10 × 68 + 6.25 × 165 − 5 × 35 − 161 = <b>1,375 kcal</b>. Her TDEE ranges from about 1,650 kcal if she is sedentary (× 1.2) to about 2,131 kcal if she trains 3–5 days a week (× 1.55). That difference of almost 500 kcal a day comes purely from activity.",
    },
    { type: "h2", text: "Choosing your activity level honestly" },
    {
      type: "p",
      text: "Pick the level that matches your typical week, not your best week. An office worker who trains three times a week is usually “lightly” or “moderately” active, not “very active”. When in doubt, choose the lower level: it is easier to add food later than to wonder why the scale is not moving.",
    },
    { type: "h2", text: "Using your TDEE to lose weight" },
    {
      type: "p",
      text: "Eating about 500 kcal below TDEE leads to roughly 0.5 kg of weight loss a week at first, within the NHS guidance of 0.5–1 kg a week. Never go below 1,200 kcal a day for women or 1,500 kcal a day for men without medical supervision. To plan towards a specific goal weight and date, use the <deficit>calorie deficit calculator</deficit>.",
    },
    { type: "h2", text: "Using your TDEE to build muscle" },
    {
      type: "p",
      text: "Eat about 200–300 kcal above TDEE, train with progressive resistance and get enough protein (the <protein>protein calculator</protein> gives you a target). If your weight climbs faster than about 1% of body weight a month as a beginner, reduce the surplus.",
    },
    { type: "h2", text: "Check the estimate against reality" },
    {
      type: "p",
      text: "Your true TDEE is revealed by your own data. Log what you eat for 2–3 weeks and track your average weight. If the average is stable, your intake is your real TDEE; if it rises or falls, adjust in steps of 100–200 kcal. Remember that TDEE drops as you lose weight, so recalculate every 4–5 kg.",
    },
    { type: "h2", text: "Limitations" },
    {
      type: "ul",
      items: [
        "Activity factors are broad categories; two “moderately active” people can differ by several hundred kcal.",
        "The equation does not see body composition, so very muscular people may burn more than predicted.",
        "It is not designed for children, pregnancy, breastfeeding or medical conditions that affect metabolism.",
        "This is general information, not medical advice. Speak to a doctor or registered dietitian for personal guidance.",
      ],
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
          label: "NHS. Obesity: treatment (aim to lose 0.5 to 1 kg a week).",
          url: "https://www.nhs.uk/conditions/obesity/treatment/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is the difference between TDEE and BMR?",
      answer:
        "BMR is the energy you burn at complete rest. TDEE adds digestion, daily movement and exercise on top, so it is always higher than BMR.",
    },
    {
      question: "How accurate is a TDEE calculator?",
      answer:
        "It is a reasonable starting estimate, usually within about 10% for healthy adults. Tracking your intake and weight for a few weeks tells you your real TDEE.",
    },
    {
      question: "Should I eat my TDEE to lose weight?",
      answer:
        "No. Eating at your TDEE maintains your weight. To lose weight, eat around 500 kcal below it, but not below 1,200 kcal a day for women or 1,500 kcal a day for men.",
    },
    {
      question: "Do I add calories burned by exercise on top of my TDEE?",
      answer:
        "No. The activity factor already includes your usual exercise. Adding workout calories again would count them twice.",
    },
    {
      question: "How often should I recalculate my TDEE?",
      answer:
        "After every 4–5 kg of weight change, or when your activity changes a lot, for example a new job or training plan.",
    },
  ],
});
