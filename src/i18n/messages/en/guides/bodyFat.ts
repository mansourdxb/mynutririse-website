import type { Facts } from "@/data/facts";

// Long-form explainer and FAQ for /tools/body-fat-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <bmi>…</bmi> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts) => ({
  blocks: [
    { type: "h2", text: "What this calculator tells you" },
    {
      type: "p",
      text: "This calculator estimates your <b>body fat percentage</b> from a few tape-measure readings, using the U.S. Navy circumference method. Unlike BMI, which only compares weight with height, body fat percentage tells you how much of your weight is fat and how much is everything else (muscle, bone, organs and water). If you add your weight, it also shows your fat mass and lean mass in kilograms.",
    },
    { type: "h2", text: "The formula (U.S. Navy method)" },
    {
      type: "p",
      text: "The method was developed by Hodgdon and Beckett at the Naval Health Research Center in 1984 to estimate body fat quickly without lab equipment. It uses the logarithm of your measurements, so you will want the calculator rather than doing it by hand:",
    },
    {
      type: "formula",
      items: [
        "Men:   % fat = 495 ÷ (1.0324 − 0.19077 × log10(waist − neck) + 0.15456 × log10(height)) − 450",
        "Women: % fat = 495 ÷ (1.29579 − 0.35004 × log10(waist + hip − neck) + 0.221 × log10(height)) − 450",
        "All measurements in cm",
      ],
    },
    { type: "h2", text: "How to measure" },
    {
      type: "ul",
      items: [
        "Use a flexible tape, measure on bare skin, stand relaxed and do not pull the tape tight.",
        "<b>Neck:</b> just below the larynx (Adam's apple), with the tape sloping slightly down to the front.",
        "<b>Waist, men:</b> horizontally at the level of the navel, at the end of a normal breath out.",
        "<b>Waist, women:</b> at the narrowest point of the waist, usually above the navel.",
        "<b>Hips, women:</b> at the widest point of the buttocks.",
        "Measure at the same time of day each time, ideally in the morning, and take the average of two or three readings.",
      ],
    },
    { type: "h2", text: "Worked example" },
    {
      type: "p",
      text: "A man who is 178 cm tall with a 38 cm neck and an 86 cm waist: waist − neck = 48 cm. The formula gives about <b>17%</b> body fat, in the “fitness” range for men. If he weighs 80 kg, that is roughly 14 kg of fat mass and 66 kg of lean mass.",
    },
    { type: "h2", text: "What the categories mean" },
    {
      type: "table",
      head: ["Category", "Women", "Men"],
      rows: [
        ["Essential fat", "10–13%", "2–5%"],
        ["Athletes", "14–20%", "6–13%"],
        ["Fitness", "21–24%", "14–17%"],
        ["Average", "25–31%", "18–24%"],
        ["Obese", "32% and above", "25% and above"],
      ],
    },
    {
      type: "p",
      text: "These ranges come from the American Council on Exercise. Women naturally carry more essential fat than men. Very low body fat is not a health goal: going below the essential range can disrupt hormones and, in women, menstrual cycles.",
    },
    { type: "h2", text: "Using it for weight loss and muscle gain" },
    {
      type: "p",
      text: "Body fat percentage is most useful as a trend. When you lose weight, you want the percentage to fall, which shows you are losing mostly fat rather than muscle; keep protein high with the <protein>protein calculator</protein> and keep strength training. When you build muscle, your weight and even your <bmi>BMI</bmi> can go up while body fat stays the same or falls, which is a good sign the scale alone would miss.",
    },
    {
      type: "p",
      text: "Measure every 2–4 weeks rather than daily; small changes are within the error of the tape.",
    },
    { type: "h2", text: "Limitations" },
    {
      type: "ul",
      items: [
        "This is an estimate. Compared with lab methods such as DXA scans, circumference formulas can be off by several percentage points for an individual, especially at very low or very high body fat.",
        "Accuracy depends on careful, consistent measuring; a 1–2 cm difference at the waist changes the result noticeably.",
        "The formula was developed on adult military personnel and may fit some body types and ethnic groups less well.",
        "Not suitable for children or during pregnancy.",
        "This is general information, not medical advice. Discuss your results with a doctor if you are concerned about your weight or health.",
      ],
    },
    {
      type: "sources",
      sources: [
        {
          label: "Hodgdon JA, Beckett MB. Prediction of percent body fat for U.S. Navy men and women from body circumferences and height. Naval Health Research Center reports 84-11 and 84-29, 1984.",
          url: "",
        },
        {
          label: "American Council on Exercise. Percent body fat calculator and body fat norms.",
          url: "https://www.acefitness.org/resources/everyone/tools-calculators/percent-body-fat-calculator/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How accurate is the U.S. Navy body fat method?",
      answer:
        "It gives a reasonable estimate for many adults, but individual results can differ from lab methods such as DXA by several percentage points. Use it to track trends rather than as an exact number.",
    },
    {
      question: "What is a healthy body fat percentage?",
      answer:
        "Based on ACE categories, roughly 14–24% is common for fit and average men and 21–31% for women. Very low body fat is not healthy.",
    },
    {
      question: "Why do women need a hip measurement?",
      answer:
        "Women tend to store more fat around the hips and thighs, so the women's formula includes the hip measurement to estimate body fat more accurately.",
    },
    {
      question: "Is body fat percentage better than BMI?",
      answer:
        "It tells you more about body composition, because BMI cannot tell muscle from fat. Using both, along with your waist size, gives the fullest picture.",
    },
    {
      question: "How often should I measure my body fat?",
      answer:
        "Every 2–4 weeks is enough. Measure at the same time of day under the same conditions, and look at the trend rather than single readings.",
    },
  ],
});
