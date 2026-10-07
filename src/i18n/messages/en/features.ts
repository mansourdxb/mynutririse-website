import type { Facts } from "@/data/facts";

export default (f: Facts) => ({
  // /features page
  metaTitle: "Features: AI Meal Scan, Recipes & Fasting",
  metaDescription:
    "Explore the powerful features that make MyNutriRise the smartest way to track nutrition, build healthy habits, and reach your wellness goals.",
  pageTitle: "Powerful Features for Healthier Living",
  pageIntro:
    "Everything you need to understand your nutrition, optimize your habits, and feel your best — all in one beautifully designed app.",

  // Section header
  eyebrow: "All-in-one nutrition, fasting & coaching",
  titleLine1: "One app for your entire",
  titleLine2: "wellness journey",
  intro:
    "From AI-powered meal scanning to personalized coaching, MyNutriRise brings every aspect of healthy living into one beautiful experience.",

  // Deep-dive blocks. Titles use <hl>…</hl> for the highlighted part.
  nutrition: {
    eyebrow: "Nutrition",
    title: "Smart Nutrition <hl>Intelligence</hl>",
    body: `Every bite, fully understood. Our AI analyzes your meals in real-time, tracking not just calories and macros, but ${f.MICRONUTRIENT_COUNT} essential micronutrients to give you the complete picture of your nutrition.`,
    bullets: [
      "AI Meal Scan — snap a photo for instant nutrition breakdown",
      "Smart calorie & macro tracking with food database",
      `${f.MICRONUTRIENT_COUNT} key micronutrients — iron, calcium, vitamins A, C, D, B12 & more (Premium)`,
      "Compare foods head-to-head with health scores",
      "Meal timing analytics — eating patterns by time of day",
      "Barcode scanner & voice logging for hands-free tracking",
      "Metric or imperial units, in every app language",
    ],
  },
  ecosystem: {
    eyebrow: "Ecosystem",
    title: "Your Wellness <hl>Ecosystem</hl>",
    body: "Fasting, fitness, hydration, sleep, recipes, and meal plans — all working together. MyNutriRise connects every wellness habit into a single, intelligent system that adapts to your lifestyle.",
    bullets: [
      `Intermittent fasting with ${f.FASTING_PLAN_COUNT} plans (16:8, 5:2, OMAD, Ramadan) + Masterclass`,
      `${f.RECIPES} recipes with cultural diets (Afghan, Arabic, Bangladeshi & more)`,
      "AI meal plans — daily/weekly for Keto, Mediterranean, Vegan & more",
      "Meal prep planner with auto-generated grocery lists",
      `${f.EXERCISES_AND_ACTIVITIES} exercises & activities — Walking, Running, Cycling, Gym, Yoga, Sports`,
      "Water tracking with a daily goal, plus sleep from Apple Health & Health Connect",
      "Live Activities for fasts and workouts on your iPhone Lock Screen",
    ],
  },
  coaching: {
    eyebrow: "AI Coaching",
    title: "Intelligent Coaching <hl>& Insights</hl>",
    body: "Your personal AI wellness coach understands your goals, habits, and preferences. It connects every data point — from nutrition to sleep — to deliver actionable guidance that actually helps you improve.",
    bullets: [
      "AI nutritional coach with personalized meal ideas & guidance",
      "Wellness score (0-100) with 6-habit breakdown",
      "Weekly reports with consistency %, daily averages & sharing",
      "Daily nutrition lessons with streaks & action items",
      "Glucose tracking with 7-day average & estimated A1C",
      "Health sync — reads steps, workouts & sleep from Apple Health and Health Connect",
    ],
  },
  recipes: {
    eyebrow: "Recipes",
    title: `${f.RECIPES} Recipes <hl>from ${f.CUISINES} Cuisines</hl>`,
    body: "From Turkish kebabs to Afghan pulao — every recipe comes with full nutrition details, and your culture's food is a first-class citizen, not a missing database entry.",
    bullets: [
      `${f.RECIPES} recipes with real ingredient amounts & cooking steps`,
      `${f.CUISINES} world cuisines — halal-checked throughout`,
      "Smart filters: vegetarian, keto, high-protein & gluten-free",
      "Import recipes from AllRecipes, BBC Good Food & other recipe sites",
      "Browse by category — Breakfast, Soups, Desserts & dozens more",
      "Log any recipe to your day in one tap",
    ],
    halalLink: "Built for halal & cultural eating — see how →",
  },
  fitness: {
    eyebrow: "Fitness",
    title: "Workouts, Routines <hl>& Exercises</hl>",
    body: "Nutrition is half the story. Train with a full exercise library, follow ready-made routines or build your own, and watch every burned calorie flow straight into your daily balance.",
    bullets: [
      `${f.STRENGTH_EXERCISE_COUNT} strength exercises with step-by-step instructions & muscle targets`,
      "Prebuilt routines — Full Body, Push Day, Pull Day & more",
      "Build custom routines with sets, reps & exercise history",
      "Cardio tracking — walking, running, cycling, swimming, yoga & more",
      "Calories burned feed your daily energy balance automatically",
      "Syncs with Apple Health & Google Health Connect",
    ],
  },
  community: {
    eyebrow: "Community",
    title: "Stay Motivated <hl>Together</hl>",
    body: "Wellness is better with friends. Earn achievements, compete on leaderboards, tackle weekly challenges, and share your progress. MyNutriRise turns healthy habits into a rewarding journey.",
    bullets: [
      "Achievement badges & XP-based leveling system",
      "Daily & weekly challenges — Hydrate Habit, Fast Five, Streak Builder",
      "Friends & leaderboards for Streak, XP, Meals & Accuracy",
      "Streak tracking with daily & weekly motivation",
      "Progress photos & body measurements (waist, chest, arms)",
      "Shareable weekly reports & Premium/Pro features",
    ],
  },

  // Floating mock cards. {placeholders} are filled with demo values in code;
  // <count></count> marks where the animated number goes.
  cards: {
    nutritionAlt: "AI meal scan result in MyNutriRise showing calories, macros and health score",
    calories: "Calories",
    caloriesOf: "/ {n} kcal",
    kcalRemaining: "{n} kcal remaining",
    macros: "Macros",
    protein: "Protein",
    carbs: "Carbs",
    fat: "Fat",
    gramUnit: "g",

    wellnessAlt: "MyNutriRise dashboard with calories, water, exercise and sleep tracking",
    fasting: "Fasting",
    remaining: "remaining",
    protocol: "16:8 Protocol",
    sleep: "{h}h {m}m Sleep",
    goodQuality: "Good quality",

    coachingAlt: "MyNutriRise AI coach chat with meal, exercise and weight guidance",
    weeklyReport: "Weekly Report",
    consistency: "Consistency",
    avgKcal: "Avg kcal",
    shareable: "Shareable · PDF Export",
    coachName: "Nutri · AI Coach",
    online: "Online",
    coachMessage: "Your mornings average 15g protein — try Greek yogurt with nuts. Added to your plan ✓",

    recipesAlt: "MyNutriRise recipes screen with healthy recipes and categories",
    dishKcal: "<count></count> kcal",
    dishName: "Chicken Tagine",
    dishCuisine: "Moroccan",
    dishProtein: "<b>{n}g</b> protein",
    dishCarbs: "<b>{n}g</b> carbs",
    dishFat: "<b>{n}g</b> fat",
    cuisinesCount: "<count></count> Cuisines",
    cuisineChips: ["Turkish", "Moroccan", "Pakistani", "Afghan", "Gulf"],
    cultureIncluded: "Your culture's food, included",

    workoutsAlt: "MyNutriRise workout routines — Full Body, Push Day and Pull Day with start buttons",
    cardioAlt: "MyNutriRise cardio tracker with walking, running, cycling and swimming",
    cardioTracker: "Cardio Tracker",
    exercisesCount: `${f.STRENGTH_EXERCISE_COUNT} Exercises`,
    muscleTargets: "Muscle targets & instructions",
    weekActivity: "This Week's Activity",
    kcalBurned: "<count></count> kcal burned",
    activitySummary: "{min} min · {n} workouts",

    motivationAlt: "MyNutriRise friends and leaderboard screen with XP rankings",
    level: "Level {n}",
    xpSuffix: " XP",
    xpProgress: "{a} / {b} XP",
    dayStreak: "Day Streak",
    weekdayInitials: ["M", "T", "W", "T", "F", "S", "S"],
  },

  // Feature grid (features page only). Order matches the icons in code.
  grid: {
    eyebrow: "And So Much More",
    title: "Everything you need",
    body: "Every tool, every insight, every feature — designed to support your complete wellness journey.",
    hint: "Tap any card to preview the screen",
    flipBack: "Tap to flip back",
    showPreview: "{name} — show screen preview",
    hidePreview: "{name} — hide screen preview",
    screenAlt: "{name} screen",
    items: [
      { name: "Meal Photos", desc: "Visual food diary with every meal" },
      { name: "Nutrition Calendar", desc: "Monthly consistency tracking view" },
      { name: "Color Guide", desc: `${f.FOOD_COLOR_GROUP_COUNT} food color groups with health benefits` },
      { name: "Compare Foods", desc: "Head-to-head nutrition comparison" },
      { name: "Cultural Diets", desc: "Afghan, Arabic, Bangladeshi & more" },
      { name: "Import Recipes", desc: "From AllRecipes, BBC Good Food & more" },
      { name: "Grocery List", desc: "Categorized by Produce, Dairy, Meat, Grains" },
      { name: "Meal Templates", desc: "Quick-log your frequent meals" },
      { name: "Meal Prep", desc: "Weekly planner with auto grocery list" },
      { name: "Export Data", desc: `PDF reports covering ${f.PDF_REPORT_MIN_DAYS} to ${f.PDF_REPORT_MAX_DAYS} days` },
      { name: "Daily Lessons", desc: "Nutrition education with streaks" },
      { name: "Glucose Tracker", desc: "7-day average & estimated A1C" },
    ],
  },
});
