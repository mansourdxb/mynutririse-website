import type { Facts } from "@/data/facts";

export default (f: Facts) => ({
  jsonLd: {
    appDescription:
      "Track calories, scan meals with AI, follow halal and cultural meal plans, monitor fasting, and get intelligent nutrition coaching.",
  },
  hero: {
    title: "Nutrition & Fitness tracking <hl>for real life</hl>",
    lead: "Snap a photo and AI logs your meal. Follow halal and cultural meal plans, track fasting and workouts, and get intelligent coaching — everything you need for a healthier, happier life.",
    quizLink: "Not sure where to start? Get your custom plan in 1 minute →",
    screenshotAlt: "MyNutriRise Dashboard",
    pills: ["AI Meal Scan", "Halal & Cultural Diets", `${f.RECIPES} Recipes`],
  },
  pressBar: {
    heading: "As featured in",
  },
  howItWorks: {
    eyebrow: "How It Works",
    title: "Healthier in <hl>three simple steps</hl>",
    steps: [
      {
        title: "Download & set your goal",
        description:
          "Get MyNutriRise free, tell it your goal — lose weight, build muscle, or eat better — and pick a plan that fits your life and culture.",
      },
      {
        title: "Snap your meals",
        description:
          "Take a photo and AI identifies the food, portions, calories, and macros — or log by voice, barcode, and search in seconds.",
      },
      {
        title: "See real results",
        description:
          "Watch your trends, get coached by AI, and build streaks that stick — weekly reports show exactly how far you've come.",
      },
    ],
  },
  goals: {
    eyebrow: "Your Goal, Your Way",
    title: "Whatever you're working toward, <hl>we've got you</hl>",
    items: [
      { title: "Lose weight", description: "Calorie targets and plans calibrated to a healthy pace." },
      { title: "Build muscle", description: "High-protein plans plus workout routines and exercise logs." },
      {
        title: "Eat halal & cultural",
        description: `${f.CUISINES} cuisines — Turkish, Pakistani, Afghan & more, halal-checked throughout.`,
      },
      { title: "Try intermittent fasting", description: "16:8, 5:2 and more, with timers and fasting insights." },
      { title: "Track macros", description: "Protein, carbs and fat with precise daily breakdowns." },
      { title: "Eat balanced meals", description: `${f.RECIPES} healthy recipes and AI-generated meal plans.` },
      { title: "Get fitter", description: "Workouts, cardio and wearable sync with Apple Health & Health Connect." },
      { title: "Build healthy habits", description: "Streaks, daily lessons and a wellness score that keeps you going." },
    ],
  },
  showcase: {
    eyebrow: "See It In Action",
    title: "Beautiful screens, <hl>endless possibilities</hl>",
    lead: "Every screen designed with care. Explore the complete MyNutriRise experience.",
    row1: [
      "Analytics & Trends",
      "Fasting Timer",
      "AI Meal Plans",
      "Food Search",
      "Exercise Library",
      "Wellness Score",
      "Micronutrients",
      "Meal Log",
      "Recipe Categories",
      "Meal Templates",
    ],
    row2: [
      "Diet Plans",
      "Wearables",
      "Achievements",
      "Challenges",
      "Weekly Report",
      "Weight Progress",
      "Meal Timing",
      "Quick Actions",
      "Cultural Diets",
      "Compare Foods",
    ],
  },
  premium: {
    badge: "Premium",
    title: "Unlock your full potential",
    lead: "Premium gives you deeper insights and smarter tools for optimal wellness.",
    heroFeatures: [
      {
        title: "Advanced Micronutrients",
        description: `Track ${f.MICRONUTRIENT_COUNT} key vitamins and minerals. Understand your nutritional gaps with detailed breakdowns and smart suggestions.`,
      },
      {
        title: "AI-Powered Insights",
        description:
          "Deep analysis of eating patterns, trends, and personalized improvement plans tailored to your unique body.",
      },
      {
        title: "Smart Meal Plans",
        description:
          "AI-generated daily and weekly plans calibrated to your goals. Keto, Mediterranean, High Protein, and more.",
      },
      {
        title: "Enhanced Coaching",
        description: `More AI coaching — up to ${f.PREMIUM_COACH_MESSAGES_PER_DAY} coach messages a day instead of ${f.FREE_COACH_MESSAGES_PER_DAY}.`,
      },
    ],
    moreTitle: "Plus even more premium tools",
    moreFeatures: [
      {
        title: "AI Meal Scanner",
        description: `Snap a photo of any meal — AI identifies foods, portions, and logs calories and macros instantly. ${f.PREMIUM_PHOTO_SCANS_PER_DAY} scans/day.`,
      },
      { title: "Smart Grocery Lists", description: "Auto-generated shopping lists based on your meal plans and recipes." },
      {
        title: "Fasting Plans & Insights",
        description: "Full access to intermittent fasting protocols with detailed progress analytics.",
      },
      {
        title: "Data Export & PDF Reports",
        description: "Export your nutrition data as detailed PDF reports for yourself or your dietitian.",
      },
      {
        title: "Food Comparison Tool",
        description:
          "Compare two foods you've logged on calories, macros, and a health score to make smarter choices.",
      },
      {
        title: "Wearable Integration",
        description: "Sync with Apple Health & Google Health Connect for activity, steps, and calorie burn.",
      },
      { title: "Meal Prep Planner", description: "Plan and organize weekly meal prep with portions and shopping lists." },
      {
        title: "Nutrition Score",
        description: "Get a daily wellness score based on your eating patterns and nutrient balance.",
      },
      {
        title: "Analytics Dashboard",
        description: "Deep-dive charts and trends on your nutrition, weight, and health progress.",
      },
    ],
    trialButton: "Start Free Trial",
  },
  science: {
    eyebrow: "Why Trust It",
    title: "Built on <hl>real science</hl>",
    lead: "No magic promises — just established nutrition math, reliable data, and AI that shows its work.",
    pillars: [
      {
        title: "Proven calorie math",
        description:
          "Daily targets use the Mifflin–St Jeor equation — the formula dietitians rely on for estimating energy needs — adjusted to your goal and activity.",
      },
      {
        title: "Verified food data",
        description:
          "Nutrition facts come from verified food databases — not crowdsourced guesses — covering everyday foods, packaged products, and cultural dishes.",
      },
      {
        title: "AI you can correct",
        description:
          "Every photo scan shows its estimate before logging — foods, portions, and macros — so you stay in control. One tap to adjust anything.",
      },
      {
        title: "Honest by design",
        description:
          "No crash-diet targets: calorie floors protect you from under-eating, and sustainable weekly pacing beats extreme promises.",
      },
    ],
  },
  community: {
    eyebrow: "Community",
    title: "Creators who track with us",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions, answered",
    more: "More questions? <link>Visit the Help Center</link>",
    items: [
      {
        question: "Is MyNutriRise free?",
        answer:
          "Yes — MyNutriRise is free to download and use, including AI photo meal scanning with a daily limit. Premium is optional: it raises the scan limit and unlocks micronutrient tracking and PDF reports. You can cancel anytime.",
      },
      {
        question: "Does it support halal and cultural diets?",
        answer: `Yes. MyNutriRise covers ${f.CUISINES} world cuisines — Turkish, Moroccan, Persian, Pakistani, Afghan, Bangladeshi, Gulf & Emirati, and many more — plus halal-friendly recipes, a Middle Eastern Healthy meal plan, and even a Ramadan fasting schedule. The app also speaks English, Arabic, German, Spanish, French, and Russian.`,
      },
      {
        question: "How does AI meal scanning work?",
        answer:
          "Snap a photo of your plate and the AI identifies the foods, estimates portions, and logs calories and macros automatically. You can also log by voice, barcode scan, or search.",
      },
      {
        question: "Can I track fasting and workouts too?",
        answer:
          "Yes — intermittent fasting protocols like 16:8 and 5:2 with timers and insights, plus workout routines, an exercise library, and syncing with Apple Health and Google Health Connect.",
      },
      {
        question: "Which devices is it available on?",
        answer:
          "MyNutriRise is built for iPhone and Android phones. Download it from the app store links on this page and your data syncs to your account.",
      },
    ],
  },
  cta: {
    title: "Start Your Wellness Journey Today",
    lead: "Your healthier life is one download away.",
  },
});
