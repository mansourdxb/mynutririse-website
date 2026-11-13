import type { Facts } from "@/data/facts";

// Long-form explainer and FAQ for /tools/protein-calculator.
// Block types: see src/components/content/ContentBlocks.tsx. Link tags such as
// <macro>…</macro> are listed in LINK_TAGS there; keep them when translating.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts) => ({
  blocks: [
    { type: "h2", text: "What this calculator tells you" },
    {
      type: "p",
      text: "This calculator gives you a <b>daily protein range in grams</b> based on your body weight and your goal, then splits it across your meals. Protein needs are best expressed per kilogram of body weight, because a 55 kg woman and a 95 kg man need very different amounts even if they eat the same number of calories.",
    },
    { type: "h2", text: "The ranges and where they come from" },
    {
      type: "table",
      head: ["Goal", "Grams per kg of body weight per day", "Based on"],
      rows: [
        ["General health, little exercise", "0.8–1.0", "Recommended Dietary Allowance (0.8 g/kg)"],
        ["Active lifestyle", "1.2–1.6", "Sports nutrition guidance for regular exercisers"],
        ["Build muscle", "1.6–2.2", "Meta-analysis of resistance-training studies"],
        ["Lose fat, keep muscle", "1.6–2.4", "Studies of resistance-trained people in a calorie deficit"],
      ],
    },
    {
      type: "p",
      text: "The 0.8 g/kg recommended allowance is set to cover the basic needs of almost all healthy adults; it is a minimum, not an optimum for active people. The International Society of Sports Nutrition recommends 1.4–2.0 g/kg for most people who exercise. A 2018 meta-analysis found that the benefit of protein for muscle gain levels off at around <b>1.6 g/kg</b>, with some people still benefiting up to about 2.2 g/kg. During a calorie deficit, higher intakes help preserve muscle, which is why the fat-loss range goes higher.",
    },
    {
      type: "formula",
      items: [
        "Daily protein (g) = body weight (kg) × grams per kg for your goal",
        "Per meal (g)      = daily protein ÷ number of meals",
      ],
    },
    { type: "h2", text: "Worked example" },
    {
      type: "p",
      text: "A 75 kg man who lifts weights and wants to build muscle: 75 × 1.6 = <b>120 g</b> to 75 × 2.2 = <b>165 g</b> a day. Over four meals that is about 30–41 g per meal: for example eggs and labneh at breakfast, a chicken shawarma plate at lunch, Greek yogurt as a snack and grilled fish with lentils at dinner.",
    },
    { type: "h2", text: "Spread it across the day" },
    {
      type: "p",
      text: "Sports nutrition guidance suggests about 0.25 g per kg of body weight, or roughly 20–40 g of protein per meal, spread evenly every 3–4 hours. Most people eat little protein at breakfast and a lot at dinner; moving some of it earlier is an easy improvement.",
    },
    { type: "h2", text: "Protein for weight loss" },
    {
      type: "p",
      text: "When you eat less, your body can break down muscle as well as fat. Keeping protein high and continuing strength training means more of what you lose is fat. Protein is also the most filling macronutrient, which helps with hunger. Set your calories first with the <calorie>calorie calculator</calorie> or the <deficit>calorie deficit calculator</deficit>, then make sure protein reaches the range shown here.",
    },
    { type: "h2", text: "Protein for muscle gain" },
    {
      type: "p",
      text: "Protein supports muscle growth, but it does not replace training. The biggest results come from progressive strength training, enough total calories (a small surplus) and sleep. Once you reach about 1.6 g/kg, extra calories from carbohydrates usually fuel your training better than more protein. To see how protein fits with carbs and fat, use the <macro>macro calculator</macro>.",
    },
    { type: "h2", text: "Good protein sources" },
    {
      type: "ul",
      items: [
        "Animal: chicken, turkey, lean beef and lamb, fish, eggs, Greek yogurt, labneh, cottage cheese.",
        "Plant: lentils, chickpeas, ful medames, beans, tofu, edamame. Combining different plant sources across the day covers all essential amino acids.",
        "Many traditional dishes are good protein sources, for example grilled kebabs, shish tawook or lentil soup; our guide to <macroguide>tracking macros in cultural meals</macroguide> shows how to log them.",
      ],
    },
    { type: "h2", text: "Limitations" },
    {
      type: "ul",
      items: [
        "If you have a lot of body fat, using your full body weight can overestimate needs; basing the calculation on a realistic goal weight gives a more sensible number.",
        "People with kidney disease must not raise protein without medical advice.",
        "Needs are higher during pregnancy and breastfeeding and differ for children and older adults.",
        "This is general information, not medical advice. Speak to a doctor or registered dietitian for personal guidance.",
      ],
    },
    {
      type: "sources",
      sources: [
        {
          label: "Jäger R et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr, 2017.",
          url: "https://pubmed.ncbi.nlm.nih.gov/28642676/",
        },
        {
          label: "Morton RW et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. Br J Sports Med, 2018.",
          url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
        },
        {
          label: "Helms ER et al. A systematic review of dietary protein during caloric restriction in resistance trained lean athletes. Int J Sport Nutr Exerc Metab, 2014.",
          url: "https://pubmed.ncbi.nlm.nih.gov/24092765/",
        },
        {
          label: "Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids. National Academies Press, 2005.",
          url: "https://nap.nationalacademies.org/catalog/10490",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How much protein do I need a day?",
      answer:
        "At least 0.8 g per kg of body weight for healthy adults who do little exercise, 1.2–1.6 g/kg if you are active, and about 1.6–2.2 g/kg if you are trying to build muscle.",
    },
    {
      question: "How much protein do I need to build muscle?",
      answer:
        "Research suggests around 1.6 g per kg of body weight a day covers most people, with some benefiting up to about 2.2 g/kg, combined with regular strength training.",
    },
    {
      question: "Should I eat more protein when losing weight?",
      answer:
        "Yes, higher protein (about 1.6–2.4 g/kg) together with strength training helps you keep muscle in a calorie deficit and makes it easier to manage hunger.",
    },
    {
      question: "Can I eat too much protein?",
      answer:
        "For healthy adults, intakes in the ranges shown here are considered safe. People with kidney disease or other medical conditions should follow their doctor's advice.",
    },
    {
      question: "How much protein can I absorb in one meal?",
      answer:
        "Your body digests all the protein you eat; spreading 20–40 g across 3–5 meals is simply a practical way to support muscle throughout the day.",
    },
    {
      question: "Can I get enough protein on a plant-based diet?",
      answer:
        "Yes. Combine legumes, soy, grains, nuts and seeds across the day, and aim towards the top of your range because plant proteins are slightly less digestible.",
    },
  ],
});
