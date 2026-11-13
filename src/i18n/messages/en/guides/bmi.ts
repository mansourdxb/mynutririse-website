import type { Facts } from "@/data/facts";

// Long-form explainer and FAQ for /tools/bmi-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <calorie>…</calorie> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts) => ({
  blocks: [
    { type: "h2", text: "What BMI measures" },
    {
      type: "p",
      text: "Body mass index (BMI) compares your weight with your height. It is a quick screening number used worldwide to sort adults into weight categories that are linked, on average, with health risk. It does <b>not</b> measure body fat directly, which is why it works better for populations than as a verdict on one person.",
    },
    { type: "h2", text: "The formula" },
    {
      type: "formula",
      items: [
        "Metric:   BMI = weight (kg) ÷ height (m)²",
        "Imperial: BMI = 703 × weight (lb) ÷ height (in)²",
      ],
    },
    { type: "h2", text: "WHO categories for adults" },
    {
      type: "table",
      head: ["BMI", "Category"],
      rows: [
        ["Below 18.5", "Underweight"],
        ["18.5–24.9", "Healthy weight"],
        ["25.0–29.9", "Overweight"],
        ["30.0 and above", "Obesity"],
      ],
    },
    {
      type: "p",
      text: "These cut-offs come from the World Health Organization and apply to adults aged 18 and over. For children and teenagers, BMI is compared against age- and sex-specific growth charts instead, so this calculator is not suitable for them.",
    },
    { type: "h2", text: "Worked example" },
    {
      type: "p",
      text: "Someone who is 1.70 m tall and weighs 72 kg: 72 ÷ (1.70 × 1.70) = 72 ÷ 2.89 = <b>24.9</b>, the top of the healthy range. In imperial units, 5 ft 7 in (67 in) and 159 lb gives 703 × 159 ÷ (67 × 67) = <b>24.9</b> as well.",
    },
    { type: "h2", text: "What to do with your result" },
    {
      type: "h3",
      text: "If you want to lose weight",
    },
    {
      type: "p",
      text: "A BMI of 25 or more is a reason to look more closely, not to panic. Losing even 5–10% of body weight can improve blood pressure and blood sugar in people living with overweight or obesity. Find a sustainable daily target with the <calorie>calorie calculator</calorie> and aim for about 0.5–1 kg a week.",
    },
    {
      type: "h3",
      text: "If you want to build muscle",
    },
    {
      type: "p",
      text: "Gaining muscle raises your weight and therefore your BMI, even when body fat stays the same or falls. If you are training for strength, track your waist measurement and how your clothes fit alongside BMI, and use the <macro>macro calculator</macro> to set protein.",
    },
    {
      type: "h3",
      text: "If your BMI is below 18.5",
    },
    {
      type: "p",
      text: "A low BMI can mean too little energy or nutrients. Rather than trying to lose more, talk to a doctor, especially if weight loss was unintentional.",
    },
    { type: "h2", text: "Add a waist measurement" },
    {
      type: "p",
      text: "Because BMI cannot see where fat sits, the NHS suggests pairing it with your waist-to-height ratio when your BMI is under 35. Measure around your waist, midway between the bottom of your ribs and the top of your hips, and divide by your height in the same units. Try to keep your waist <b>below half your height</b>, a ratio under 0.5. A 170 cm person, for example, would aim for a waist under 85 cm.",
    },
    {
      type: "p",
      text: "Two people can share a BMI of 27 and have very different risk: one muscular with a slim waist, one less active with fat stored around the middle. Checking both numbers every month or two tells you far more than BMI alone, and both change as you lose fat or build muscle.",
    },
    { type: "h2", text: "Where BMI comes from" },
    {
      type: "p",
      text: "The formula was described in the 19th century by the Belgian mathematician Adolphe Quetelet as a way to describe average body size across populations. It became the standard adult screening measure because it needs only a scale and a tape measure, is free and is easy to compare between countries. Those strengths are also its weaknesses: it was never meant to describe a single person's health.",
    },
    { type: "h2", text: "Limitations" },
    {
      type: "ul",
      items: [
        "BMI cannot tell muscle from fat. Athletes and people who lift weights often fall in the “overweight” band while being lean.",
        "It says nothing about where fat is stored. Fat around the waist carries more health risk; a waist measurement adds useful context.",
        "Risk at a given BMI differs between populations. A WHO expert consultation found that many Asian populations have higher risk at lower BMIs and suggested extra action points at 23 and 27.5 for public health use.",
        "It is not designed for children, pregnancy or older adults with significant muscle loss.",
        "BMI is a screening tool, not a diagnosis, and not medical advice. Discuss your result with a doctor if you are concerned about your weight or health.",
      ],
    },
    {
      type: "p",
      text: "To see the weight range that matches a healthy BMI for your height, try the <ideal>ideal weight calculator</ideal>.",
    },
    {
      type: "sources",
      sources: [
        {
          label: "World Health Organization. Obesity and overweight: fact sheet.",
          url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
        },
        {
          label: "WHO Expert Consultation. Appropriate body-mass index for Asian populations and its implications for policy and intervention strategies. Lancet, 2004.",
          url: "https://pubmed.ncbi.nlm.nih.gov/14726171/",
        },
        {
          label: "NHS. Obesity (BMI, waist-to-height ratio and when to see a GP).",
          url: "https://www.nhs.uk/conditions/obesity/",
        },
        {
          label: "NHS. Obesity: treatment.",
          url: "https://www.nhs.uk/conditions/obesity/treatment/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is a healthy BMI for adults?",
      answer:
        "The WHO defines 18.5–24.9 as the healthy range for adults. Below 18.5 is underweight, 25–29.9 overweight and 30 or above obesity.",
    },
    {
      question: "Is BMI accurate for muscular people?",
      answer:
        "No. BMI cannot tell muscle from fat, so muscular people often read as overweight. A waist measurement or a body-fat estimate gives a fuller picture.",
    },
    {
      question: "Is BMI the same for men and women?",
      answer:
        "The adult formula and categories are the same for both sexes, although women typically carry more body fat than men at the same BMI.",
    },
    {
      question: "Can children use this BMI calculator?",
      answer:
        "No. For anyone under 18, BMI has to be compared with age- and sex-specific growth charts, which this calculator does not use.",
    },
    {
      question: "How quickly can I safely change my BMI?",
      answer:
        "Through gradual weight change of about 0.5–1 kg a week, which for most people means a daily deficit of roughly 500 kcal. Faster loss tends to cost muscle and is harder to keep off.",
    },
    {
      question: "Should I use metric or imperial units?",
      answer:
        "Either. The calculator supports both and gives the same result; the imperial formula simply multiplies by 703 to convert units.",
    },
  ],
});
