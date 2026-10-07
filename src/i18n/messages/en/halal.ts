import type { Facts } from "@/data/facts";

export default (f: Facts) => ({
  metaTitle: "Halal Calorie Tracker & Muslim Nutrition App | MyNutriRise",
  metaDescription: `Track calories with a halal-friendly nutrition app: ${f.CUISINES} world cuisines, a Ramadan fasting schedule, AI photo meal logging, and full Arabic support.`,
  breadcrumb: "Halal Nutrition App",
  title: "The halal-friendly calorie tracker built for your kitchen",
  intro:
    "Most calorie apps were built around Western menus — search for biryani, mandi, or kabuli pulao and you get a shrug. MyNutriRise is different: halal food tracking is a first-class feature, not an afterthought.",
  library: {
    title: `Halal-checked across ${f.DISHES} dishes and ${f.CUISINES} cuisines`,
    body: "Every dish comes with calories, protein, carbs, and fat per serving — from Adana kebab (380 kcal) to chicken tagine (380 kcal) to kabuli pulao (480 kcal). Browse the libraries your family actually cooks from:",
    cuisines: [
      "Turkish",
      "Moroccan",
      "Persian",
      "Egyptian",
      "Pakistani",
      "Indonesian",
      "Malaysian",
      "Afghan",
      "Somali & East African",
      "Nigerian & West African",
      "Gulf & Emirati",
      "Yemeni",
      "Lebanese",
      "Uzbek & Central Asian",
      "Bangladeshi",
      "Indian",
      "Arabic & Middle Eastern",
    ],
    more: "+ many more",
    recipesLink: "See a sample of the dishes on our <link>recipes page</link>.",
  },
  ramadan: {
    title: "Ramadan-ready fasting",
    body: `MyNutriRise includes ${f.FASTING_PLAN_COUNT} fasting plans — and one of them is a dedicated <b>Ramadan schedule</b> that tracks your dawn-to-sunset fast. Keep logging your meals to hold calories and protein steady through the month. Outside Ramadan, the same tracker covers 16:8, 5:2, OMAD, and more — see our <link>beginner's guide to 16:8 fasting</link>.`,
  },
  photo: {
    title: "Snap a photo — AI does the logging",
    body: "Family-style meals make “one serving” hard to estimate. Photograph your plate and the AI identifies the dish, estimates your portion, and logs calories and macros in seconds. Set your daily target with our free <link>calorie calculator</link> and the app keeps score for you.",
  },
  language: {
    title: "In your language",
    body: "The app speaks <b>English, Arabic, German, Spanish, French, and Russian</b> — including the AI coach and meal plans like <b>Middle Eastern Healthy</b>, a 4-week halal-friendly plan with grilled meats, legumes, fresh salads, and wholesome grains.",
  },
  faqTitle: "Frequently asked questions",
  faqs: [
    {
      question: "Is MyNutriRise halal-friendly?",
      answer: `Yes. Halal filtering is checked across every one of the ${f.DISHES} dishes in the catalogue, spanning ${f.CUISINES} world cuisines, with halal-friendly recipes and meal plans — including a dedicated Middle Eastern Healthy plan.`,
    },
    {
      question: "Does it have a Ramadan mode?",
      answer: `Yes. Among its ${f.FASTING_PLAN_COUNT} fasting plans, MyNutriRise includes a dedicated Ramadan schedule that tracks your dawn-to-sunset fast, while you keep logging meals to stay balanced through the month.`,
    },
    {
      question: "Can I track traditional dishes like biryani or kabuli pulao?",
      answer:
        "Yes. Dishes such as chicken biryani, kabuli pulao, nihari, mandi, koshari, and tagine are in the food library with calories, protein, carbs, and fat per serving — or snap a photo and AI estimates your exact portion.",
    },
    {
      question: "Which languages does the app support?",
      answer:
        "MyNutriRise is available in English, Arabic, German, Spanish, French, and Russian on both iPhone and Android.",
    },
  ],
  cta: {
    title: "Your culture's food, tracked properly",
    body: "Free to download on iPhone and Android — or take the <link>1-minute plan quiz</link> first.",
  },
});
