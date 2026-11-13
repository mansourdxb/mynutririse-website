import type { Facts } from "@/data/facts";

// Long-form explainer and FAQ for /tools/calorie-deficit-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <tdee>…</tdee> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts) => ({
  blocks: [
    { type: "h2", text: "What this calculator tells you" },
    {
      type: "p",
      text: "Enter your details, a goal weight and a target date, and the calculator works out <b>how many calories to eat each day</b> to get there, how big your daily deficit is and how fast you can expect to lose. If the date would need you to eat less than a safe minimum, it keeps you at that minimum and shows the date you can realistically reach instead.",
    },
    { type: "h2", text: "The formula" },
    {
      type: "p",
      text: "First, the calculator estimates your maintenance calories (TDEE) with the Mifflin–St Jeor equation and your activity level, the same way as the <tdee>TDEE calculator</tdee>. Then it spreads the energy you need to lose over the days until your target date:",
    },
    {
      type: "formula",
      items: [
        "Weight to lose (kg) = current weight − goal weight",
        "Daily deficit = weight to lose × 7,700 kcal ÷ days until target date",
        "Daily calories = maintenance − daily deficit",
        "Never below 1,200 kcal (women) or 1,500 kcal (men)",
      ],
    },
    {
      type: "p",
      text: "The 7,700 kcal per kg figure is the energy stored in roughly one kilogram of body tissue lost during dieting. It is a useful short-term rule of thumb, but research on energy balance shows weight loss slows over time because a lighter body burns less. In practice you will usually need slightly longer than the simple math suggests.",
    },
    { type: "h2", text: "Worked example" },
    {
      type: "p",
      text: "A 40-year-old man, 180 cm, 92 kg, lightly active, wants to reach 86 kg in 12 weeks (84 days). His BMR is 10 × 92 + 6.25 × 180 − 5 × 40 + 5 = 1,850 kcal, so his maintenance is about 1,850 × 1.375 ≈ 2,544 kcal. Losing 6 kg needs 6 × 7,700 = 46,200 kcal, or 46,200 ÷ 84 ≈ <b>550 kcal a day</b>. He should eat about <b>1,994 kcal a day</b>, which is above the 1,500 kcal minimum for men, for an expected loss of about 0.5 kg a week.",
    },
    { type: "h2", text: "How fast is safe?" },
    {
      type: "p",
      text: "The NHS suggests aiming to lose 0.5–1 kg a week. Faster loss usually means more muscle loss, more hunger and a higher chance of regaining weight. The calculator warns you when your plan would mean losing more than 1% of your body weight a week, a pace that is hard to sustain for most people.",
    },
    {
      type: "p",
      text: "It also enforces a floor: <b>1,200 kcal a day for women and 1,500 kcal a day for men</b>. Below these levels it becomes very hard to get enough protein, vitamins and minerals, and very low-calorie diets should only be followed under medical supervision. If your date would need fewer calories, the calculator keeps you at the floor and shows a later, realistic date.",
    },
    { type: "h2", text: "Keeping muscle while you lose fat" },
    {
      type: "ul",
      items: [
        "Eat enough protein, about 1.6–2.4 g per kg of body weight; the <protein>protein calculator</protein> gives your number.",
        "Keep strength training 2–4 times a week so your body has a reason to hold on to muscle.",
        "Use the <macro>macro calculator</macro> to split your daily calories into protein, carbs and fat.",
        "Sleep and stay active day to day; walking adds to your deficit without adding much hunger.",
      ],
    },
    { type: "h2", text: "When you want to gain instead" },
    {
      type: "p",
      text: "If your goal weight is above your current weight, this calculator is not the right tool. Use the <calorie>calorie calculator</calorie>, which also shows a muscle-gain target.",
    },
    { type: "h2", text: "Limitations" },
    {
      type: "ul",
      items: [
        "Maintenance calories are an estimate and can be off by 10% or more; check your progress every 2–3 weeks and adjust by 100–200 kcal.",
        "Scale weight swings day to day with water, salt and food in your gut, so judge progress by weekly averages.",
        "Not suitable for children, teenagers, pregnancy, breastfeeding, or anyone with a history of eating disorders.",
        "This is general information, not medical advice. If you have a health condition or take medication, speak to a doctor or registered dietitian before starting a diet.",
      ],
    },
    {
      type: "sources",
      sources: [
        {
          label: "Hall KD et al. Quantification of the effect of energy imbalance on bodyweight. Lancet, 2011.",
          url: "https://pubmed.ncbi.nlm.nih.gov/21872751/",
        },
        {
          label: "NHS. Obesity: treatment (aim to lose 0.5 to 1 kg a week).",
          url: "https://www.nhs.uk/conditions/obesity/treatment/",
        },
        {
          label: "Mifflin MD et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 1990.",
          url: "https://pubmed.ncbi.nlm.nih.gov/2305711/",
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
      question: "How big should my calorie deficit be?",
      answer:
        "A deficit of about 500 kcal a day is a common starting point and gives roughly 0.5 kg of loss a week at first. Larger deficits are harder to sustain and increase muscle loss.",
    },
    {
      question: "What is the lowest number of calories I should eat?",
      answer:
        "Do not go below 1,200 kcal a day for women or 1,500 kcal a day for men without medical supervision. The calculator never suggests less.",
    },
    {
      question: "Why does the calculator change my target date?",
      answer:
        "If reaching your goal by your date would require eating below the safe minimum, it keeps you at the minimum and shows the date you can realistically reach instead.",
    },
    {
      question: "Is 1 kg a week a realistic goal?",
      answer:
        "For people with more weight to lose it can be, at least at first. The NHS suggests 0.5–1 kg a week; for lighter people, aiming closer to 0.5 kg is usually more sustainable.",
    },
    {
      question: "Why am I losing slower than the calculator says?",
      answer:
        "Your body burns a little less as you get lighter, maintenance estimates can be off, and water weight hides fat loss. Recheck your intake and compare weekly averages over 2–3 weeks before adjusting.",
    },
  ],
});
