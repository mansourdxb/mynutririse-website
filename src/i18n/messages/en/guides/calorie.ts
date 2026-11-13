import type { Facts } from "@/data/facts";

// Long-form explainer and FAQ for /tools/calorie-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <macro>…</macro> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts) => ({
  blocks: [
    { type: "h2", text: "What this calculator tells you" },
    {
      type: "p",
      text: "The calculator estimates your <b>maintenance calories</b>: the energy you burn in a typical day, so eating that amount keeps your weight roughly stable. From there it shows three targets: a moderate deficit to lose weight, maintenance, and a small surplus to build muscle. Every number is an estimate based on averages, so treat it as a starting point you will fine-tune, not a prescription.",
    },
    { type: "h2", text: "The formula: Mifflin–St Jeor plus an activity factor" },
    {
      type: "p",
      text: "First, the calculator estimates your resting energy use (basal metabolic rate, or BMR) with the <b>Mifflin–St Jeor equation</b>. A 2005 review of predictive equations found it the most reliable for healthy adults, landing within 10% of measured values for more people than the alternatives it was compared with.",
    },
    {
      type: "formula",
      items: [
        "Men:   BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age + 5",
        "Women: BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age − 161",
        "Maintenance (TDEE) = BMR × activity factor",
      ],
    },
    {
      type: "p",
      text: "BMR only covers the energy you burn at rest. To account for work, walking and training, it is multiplied by an activity factor that gives your total daily energy expenditure (TDEE):",
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
    {
      type: "p",
      text: "Most people overestimate their activity. If you are unsure between two levels, pick the lower one and adjust later.",
    },
    { type: "h2", text: "Worked example" },
    {
      type: "p",
      text: "A 30-year-old man who is 175 cm tall, weighs 75 kg and trains 3–5 days a week: BMR = 10 × 75 + 6.25 × 175 − 5 × 30 + 5 = <b>1,699 kcal</b>. Multiplied by 1.55, his maintenance is about <b>2,633 kcal a day</b>. The calculator would suggest about 2,133 kcal to lose weight and about 2,933 kcal to build muscle.",
    },
    { type: "h2", text: "Using your number to lose weight" },
    {
      type: "p",
      text: "The weight-loss target subtracts 500 kcal from maintenance. In the short term that works out to roughly 0.5 kg a week, which sits within the NHS recommendation of 0.5–1 kg a week. Over months, loss usually slows: as you get lighter you burn a little less, so research on energy balance shows the simple “7,700 kcal per kg” rule overstates long-term results. Expect to recalculate every 4–5 kg.",
    },
    {
      type: "p",
      text: "The calculator never suggests less than <b>1,200 kcal a day for women or 1,500 kcal a day for men</b>, even if the subtraction would go lower. Going below these levels makes it hard to get enough protein, vitamins and minerals and should only happen under medical supervision.",
    },
    {
      type: "ul",
      items: [
        "Keep protein high (see the <macro>macro calculator</macro>) so more of what you lose is fat rather than muscle.",
        "Weigh yourself a few times a week and compare weekly averages, not single days.",
        "If your average has not moved after 2–3 weeks of accurate tracking, lower intake by 100–200 kcal.",
      ],
    },
    { type: "h2", text: "Using your number to build muscle" },
    {
      type: "p",
      text: "The muscle-gain target adds 300 kcal to maintenance. A small surplus combined with progressive strength training and enough protein supports muscle growth while limiting fat gain. Aim to gain around 0.5–1% of your body weight per month as a beginner; if the scale rises much faster, most of the extra is likely fat, so trim 100–200 kcal.",
    },
    { type: "h2", text: "Calories during Ramadan and intermittent fasting" },
    {
      type: "p",
      text: "Fasting changes <em>when</em> you eat, not how much energy your body needs. During Ramadan, spread your daily target across suhoor and iftar: anchor suhoor with protein and slow-digesting carbs, break the fast with water and dates, and keep iftar balanced rather than one oversized plate. The same logic applies to 16:8; our <ifguide>16:8 beginner's guide</ifguide> covers the details.",
    },
    { type: "h2", text: "Limitations" },
    {
      type: "ul",
      items: [
        "Equations describe averages. Your real maintenance can differ by 10% or more because of genetics, muscle mass, sleep and daily movement.",
        "The formula does not know your body composition. Very muscular people tend to burn more than predicted, and people with a lot of body fat may be overestimated.",
        "It is not designed for children, pregnant or breastfeeding women, or people with medical conditions that affect metabolism.",
        "This is general information, not medical advice. If you have a health condition, take medication or have a history of disordered eating, speak to a doctor or registered dietitian before changing how you eat.",
      ],
    },
    {
      type: "p",
      text: "Next step: turn your target into protein, carbs and fat with the <macro>macro calculator</macro>, or see only the resting part of the math with the <bmr>BMR calculator</bmr>.",
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
      question: "How many calories should I eat to lose weight?",
      answer:
        "Start about 500 kcal below your maintenance calories, which is roughly 0.5 kg of weight loss a week at first. Do not go below 1,200 kcal a day for women or 1,500 kcal a day for men without medical supervision.",
    },
    {
      question: "What formula does this calorie calculator use?",
      answer:
        "The Mifflin–St Jeor equation for resting energy, multiplied by an activity factor between 1.2 (sedentary) and 1.9 (extra active) to estimate total daily energy expenditure.",
    },
    {
      question: "How accurate is a calorie calculator?",
      answer:
        "For most healthy adults the equation lands within about 10% of measured resting energy, but individuals vary. Track your intake and weight for 2–3 weeks, then adjust by 100–200 kcal if your trend differs from the goal.",
    },
    {
      question: "Why has my weight loss slowed down?",
      answer:
        "As you lose weight your body burns slightly less energy, so the same intake creates a smaller deficit. Recalculate with your new weight every 4–5 kg and check that portions have not crept up.",
    },
    {
      question: "How many calories should I eat to build muscle?",
      answer:
        "A small surplus of about 300 kcal above maintenance, combined with strength training and enough protein, supports muscle gain while limiting fat gain.",
    },
    {
      question: "Do my calorie needs change during Ramadan?",
      answer:
        "Your daily energy needs stay about the same; only the eating window changes. Aim to reach your usual target across suhoor and iftar, with protein and fluids at both meals.",
    },
  ],
});
