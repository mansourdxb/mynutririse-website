import type { Facts } from "@/data/facts";

// Long-form explainer and FAQ for /tools/ideal-weight-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <bmi>…</bmi> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts) => ({
  blocks: [
    { type: "h2", text: "What “ideal weight” means" },
    {
      type: "p",
      text: "There is no single perfect weight for a given height. This calculator gives two views. The first is the <b>healthy weight range</b>: the weights that keep your body mass index between 18.5 and 24.9, the band the World Health Organization associates with the lowest average health risk for adults. The second is three classic <b>ideal body weight formulas</b> (Devine, Robinson and Miller), which give a single reference point for your height and sex.",
    },
    { type: "h2", text: "The formulas" },
    {
      type: "p",
      text: "All three formulas start from a base weight at 5 feet (152.4 cm) and add a fixed amount for every inch above it. They were developed in the 1970s and 1980s, mainly to help clinicians dose medicines, not as weight-loss goals.",
    },
    {
      type: "formula",
      items: [
        "Devine (men):     50 kg   + 2.3 kg per inch over 5 ft",
        "Devine (women):   45.5 kg + 2.3 kg per inch over 5 ft",
        "Robinson (men):   52 kg   + 1.9 kg per inch over 5 ft",
        "Robinson (women): 49 kg   + 1.7 kg per inch over 5 ft",
        "Miller (men):     56.2 kg + 1.41 kg per inch over 5 ft",
        "Miller (women):   53.1 kg + 1.36 kg per inch over 5 ft",
        "Healthy range:    18.5 × height (m)²  to  24.9 × height (m)²",
      ],
    },
    { type: "h2", text: "Worked example" },
    {
      type: "p",
      text: "A man who is 178 cm tall is 10 inches over 5 ft (178 − 152.4 = 25.6 cm ≈ 10 in). Devine gives 50 + 2.3 × 10 = <b>73 kg</b>, Robinson 52 + 1.9 × 10 = <b>71 kg</b> and Miller 56.2 + 1.41 × 10 ≈ <b>70 kg</b>. His healthy BMI range is 18.5 × 1.78² to 24.9 × 1.78², about <b>59–79 kg</b>. The formulas cluster near the middle of that range, which is typical.",
    },
    { type: "h2", text: "Using the range to lose weight" },
    {
      type: "p",
      text: "If you are above the range, there is no need to aim for the formula numbers straight away. A first goal of losing 5–10% of your current weight is realistic and already brings measurable health benefits for many people. Set a daily target with the <calorie>calorie calculator</calorie> and lose about 0.5–1 kg a week, then reassess.",
    },
    { type: "h2", text: "Using the range to build muscle" },
    {
      type: "p",
      text: "If you train with weights, you may end up heavier than every formula suggests while being lean and healthy, because muscle is dense. In that case, judge progress by strength, waist measurement and how you look and feel, and use the <macro>macro calculator</macro> to keep protein high.",
    },
    { type: "h2", text: "Why the formulas disagree" },
    {
      type: "p",
      text: "Each formula was fitted to different data, and none adjusts for frame size, muscle, age or ethnicity. The spread between them is a reminder that a healthy weight is a range. A review that traced their origins found they come from drug dosing rather than from studies of health outcomes, which is why the BMI-based range is shown first.",
    },
    { type: "h2", text: "Limitations" },
    {
      type: "ul",
      items: [
        "Below 5 ft (152.4 cm) the formulas simply return their base value, so they are less useful for shorter adults; rely on the healthy range instead.",
        "They do not account for muscle mass, bone structure or age.",
        "The BMI-based range has the same limits as BMI itself; see the <bmi>BMI calculator</bmi> for details.",
        "Not suitable for children, teenagers or pregnancy.",
        "This is general information, not medical advice. If you are underweight, have a medical condition or a history of disordered eating, set any weight goal with a doctor or registered dietitian.",
      ],
    },
    {
      type: "sources",
      sources: [
        {
          label: "Pai MP, Paloucek FP. The origin of the “ideal” body weight equations. Ann Pharmacother, 2000.",
          url: "https://pubmed.ncbi.nlm.nih.gov/10981254/",
        },
        {
          label: "Robinson JD et al. Determination of ideal body weight for drug dosage calculations. Am J Hosp Pharm, 1983.",
          url: "https://pubmed.ncbi.nlm.nih.gov/6869387/",
        },
        {
          label: "World Health Organization. Obesity and overweight: fact sheet.",
          url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How is ideal weight calculated?",
      answer:
        "This tool shows the weight range that keeps your BMI between 18.5 and 24.9, plus three clinical formulas (Devine, Robinson and Miller) based on height and sex.",
    },
    {
      question: "Why do the formulas give different numbers?",
      answer:
        "Each was fitted to different data. The spread between them shows that a healthy weight is a range, not a single point.",
    },
    {
      question: "Does ideal weight depend on age?",
      answer:
        "None of the formulas use age. Healthy weight ranges for older adults may differ slightly, so discuss targets with your doctor if you are over 65.",
    },
    {
      question: "Is ideal weight different for men and women?",
      answer:
        "Yes. At the same height the formulas give men a higher value, reflecting average differences in muscle and frame size. The BMI range is the same for both.",
    },
    {
      question: "What if I am far from my ideal range?",
      answer:
        "Start with a smaller goal, such as losing 5–10% of your current weight, at about 0.5–1 kg a week. Small, steady changes are easier to keep.",
    },
  ],
});
