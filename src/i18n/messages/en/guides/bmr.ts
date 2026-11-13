import type { Facts } from "@/data/facts";

// Long-form explainer and FAQ for /tools/bmr-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <calorie>…</calorie> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts) => ({
  blocks: [
    { type: "h2", text: "What BMR means" },
    {
      type: "p",
      text: "Your basal metabolic rate (BMR) is the energy your body uses at complete rest to keep you alive: breathing, circulating blood, maintaining body temperature and repairing cells. For most people it is the largest part of daily energy use, typically around 60–70% of the total, which is why every calorie target starts from it.",
    },
    { type: "h2", text: "The formula: Mifflin–St Jeor" },
    {
      type: "p",
      text: "This calculator uses the <b>Mifflin–St Jeor equation</b>, published in 1990. A 2005 systematic review comparing the common equations found it the most reliable for healthy adults, both with and without obesity.",
    },
    {
      type: "formula",
      items: [
        "Men:   BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age + 5",
        "Women: BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age − 161",
      ],
    },
    {
      type: "p",
      text: "The equation reflects three patterns: heavier and taller bodies need more energy, resting energy use declines slowly with age, and men on average burn more at rest than women of the same size because they tend to carry more muscle.",
    },
    { type: "h2", text: "Worked example" },
    {
      type: "p",
      text: "A 28-year-old woman who is 162 cm tall and weighs 60 kg: 10 × 60 + 6.25 × 162 − 5 × 28 − 161 = 600 + 1,012.5 − 140 − 161 = <b>about 1,312 kcal a day</b>. That is what she would burn lying still all day, before walking, working or exercising.",
    },
    { type: "h2", text: "What affects your BMR" },
    {
      type: "ul",
      items: [
        "<b>Body size:</b> a larger body has more tissue to maintain, so BMR rises with weight and height.",
        "<b>Muscle mass:</b> muscle uses more energy at rest than fat, so two people of the same weight can have different BMRs.",
        "<b>Age:</b> BMR tends to fall slowly through adulthood, largely because muscle mass declines unless you train.",
        "<b>Sex:</b> men usually have a higher BMR than women of the same size because of differences in body composition.",
        "<b>Hormones and health:</b> thyroid function, illness, fever and some medications can raise or lower resting energy use.",
        "<b>Large, prolonged deficits:</b> eating far below your needs for a long time can make the body more economical, one reason crash diets are hard to sustain.",
      ],
    },
    { type: "h2", text: "BMR vs RMR" },
    {
      type: "p",
      text: "You may also see “resting metabolic rate” (RMR). Strictly, BMR is measured under tighter lab conditions (after a night's sleep, fasted, at a comfortable temperature), while RMR is measured under looser ones and comes out slightly higher. In everyday use the terms are interchangeable, and the Mifflin–St Jeor equation was built from resting measurements.",
    },
    { type: "h2", text: "From BMR to a daily calorie target" },
    {
      type: "p",
      text: "BMR is only the resting part. To find how much you burn in a normal day, multiply it by an activity factor between 1.2 (mostly sitting) and 1.9 (physical job plus training). That total is your maintenance calories, and the <calorie>calorie calculator</calorie> does this step for you.",
    },
    {
      type: "ul",
      items: [
        "<b>To lose weight:</b> eat below maintenance, not below BMR. A deficit of about 500 kcal from maintenance is a common starting point, with a floor of 1,200 kcal a day for women and 1,500 kcal a day for men.",
        "<b>To build muscle:</b> eat slightly above maintenance (about 300 kcal) and train with weights. Over time, extra muscle raises your BMR a little.",
        "<b>To split your calories:</b> use the <macro>macro calculator</macro> to turn your target into protein, carbs and fat.",
      ],
    },
    { type: "h2", text: "Does fasting lower BMR?" },
    {
      type: "p",
      text: "Daily time-restricted eating such as 16:8, or fasting from dawn to sunset in Ramadan, has little lasting effect on resting energy use as long as total intake is adequate. Metabolic slowdown becomes a concern with prolonged, very low intake. During Ramadan your resting needs stay the same, so plan suhoor and iftar to cover them; our <ifguide>16:8 guide</ifguide> explains how fasting windows work.",
    },
    { type: "h2", text: "Limitations" },
    {
      type: "ul",
      items: [
        "Any equation estimates an average. Two people with identical inputs can differ by 10% or more.",
        "It does not use body composition. Very muscular people usually have a higher BMR than predicted.",
        "The only way to measure BMR precisely is indirect calorimetry in a clinic or lab.",
        "Illness, thyroid conditions, some medications, pregnancy and breastfeeding change energy needs in ways the formula does not capture.",
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
      ],
    },
  ],
  faqs: [
    {
      question: "What is a normal BMR?",
      answer:
        "Most adults fall roughly between 1,200 and 2,000 kcal a day depending on size, age and sex. Larger and younger bodies burn more at rest, and BMR declines gently with age.",
    },
    {
      question: "Is BMR the same as the calories I should eat?",
      answer:
        "No. BMR is what you burn at complete rest. Your daily needs are BMR multiplied by an activity factor; the calorie calculator gives the full number.",
    },
    {
      question: "Should I eat below my BMR to lose weight?",
      answer:
        "Usually not. Create a deficit from your maintenance calories instead, and do not go below 1,200 kcal a day for women or 1,500 kcal a day for men without medical supervision.",
    },
    {
      question: "Does fasting lower my BMR?",
      answer:
        "Daily intermittent fasting, including Ramadan fasting, has little effect on BMR when total intake is adequate. Prolonged, severe restriction is what causes meaningful slowdown.",
    },
    {
      question: "How can I increase my BMR?",
      answer:
        "Building muscle through strength training, with enough protein, is the most reliable way. Muscle uses more energy at rest than fat tissue.",
    },
  ],
});
