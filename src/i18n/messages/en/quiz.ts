import type { Facts } from "@/data/facts";

export default (f: Facts) => ({
  metaTitle: "Get Your Custom Plan",
  metaDescription:
    "Answer four quick questions and get a personalized nutrition plan with your daily calorie target — free, in under a minute.",
  title: "Get your custom plan <accent>in 1 minute</accent>",
  intro: "Four quick questions — no sign-up needed.",
  // Passed to the client QuizFlow component.
  flow: {
    yourPlan: "Your plan",
    stepOf: "Step {step} of {total}",
    percent: "{n}%",
    goalTitle: "What's your main goal?",
    goals: {
      lose: { label: "Lose weight", sub: "Eat in a calorie deficit" },
      maintain: { label: "Maintain weight", sub: "Balance intake with activity" },
      gain: { label: "Gain muscle", sub: "Protein-led surplus" },
    },
    aboutTitle: "Tell us about yourself",
    aboutBody: "Age tunes calorie targets to your metabolism. We keep this private.",
    genderLabel: "Gender",
    // Shown with CSS capitalize, so "male" displays as "Male".
    sexes: { male: "male", female: "female" },
    age: "Age",
    height: "Height (cm)",
    weight: "Weight (kg)",
    unitYears: "years",
    unitCm: "cm",
    unitKg: "kg",
    rangeError: "Enter {min}–{max} {unit}",
    workoutTitle: "How often do you work out?",
    // Same order as the activity multipliers in QuizFlow.
    workoutLevels: [
      { label: "None", sub: "Little or no exercise" },
      { label: "1–2 times/week", sub: "Light activity" },
      { label: "3–4 times/week", sub: "Moderate activity" },
      { label: "5+ times/week", sub: "Very active" },
    ],
    styleTitle: "Pick your eating style",
    styles: {
      everything: { label: "No restrictions", sub: "I eat everything" },
      halal: { label: "Halal & cultural", sub: `${f.CUISINES} cuisines — Turkish, Pakistani, Afghan & more` },
      mediterranean: { label: "Mediterranean", sub: "Olive oil, fish, vegetables" },
      plant: { label: "Vegetarian / Vegan", sub: "Plant-based nutrition" },
      keto: { label: "Keto / low-carb", sub: "Under 30g net carbs per day" },
      protein: { label: "High-protein", sub: "40% protein ratio" },
    },
    // Real plan names from the app's DietPlanDatabase.
    plans: {
      everything: {
        name: "Clean Eating",
        blurb: "Whole foods, minimal processing — fruits, vegetables, lean proteins and whole grains.",
      },
      halal: {
        name: "Middle Eastern Healthy",
        blurb:
          "Halal-friendly meals with traditional flavours — grilled meats, legumes, fresh salads and wholesome grains.",
      },
      mediterranean: {
        name: "Mediterranean",
        blurb: "Heart-healthy olive oil, fresh fish, vegetables, whole grains and legumes.",
      },
      plant: {
        name: "Vegetarian Balance",
        blurb: "Balanced plant-based nutrition — legumes, whole grains, dairy, eggs and healthy fats.",
      },
      keto: {
        name: "Keto Friendly",
        blurb: "Very low carb, high fat — under 30g net carbs per day with quality fats.",
      },
      protein: {
        name: "High Protein",
        blurb: "40% protein ratio for muscle building and satiety — lean meats, eggs, legumes and dairy.",
      },
    },
    resultEyebrow: "Your custom plan",
    dailyTarget: "Daily calorie target",
    kcalPerDay: "kcal/day",
    grams: "{n}g",
    protein: "Protein",
    carbs: "Carbs",
    fat: "Fat",
    water: "{liters}L water/day recommended",
    resultBody:
      "This is the same math the app uses. Download MyNutriRise and your plan is ready — a guided meal plan (week 1 free, all 4 weeks with Premium), AI photo logging, and coaching included.",
    emailSubject: "My MyNutriRise plan",
    emailBody:
      "My MyNutriRise plan:\n\nPlan: {plan}\nDaily calories: {calories} kcal\nProtein: {protein}g · Carbs: {carbs}g · Fat: {fat}g\nWater: {water}L\n\nGet the app: {url}",
    emailCta: "Email me my plan →",
    back: "← Back",
    seePlan: "See my plan",
    continue: "Continue",
  },
});
