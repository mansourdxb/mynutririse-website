import type { Facts } from "@/data/facts";

export default (f: Facts) => ({
  metaTitle: "About Us",
  metaDescription:
    "Why we built MyNutriRise — nutrition tracking that respects your culture, with AI that removes the friction.",
  title: "Nutrition tracking that speaks your language",
  paragraphs: [
    "Most nutrition apps were built around Western menus. Search for kabuli pulao, mandi, or nihari and you get a shrug — or a generic “rice with meat” entry that misses by hundreds of calories. For millions of people, that means choosing between the food they love and the goals they care about.",
    `MyNutriRise was built to remove that choice. Our food libraries cover ${f.CUISINES} world cuisines — Turkish, Moroccan, Persian, Pakistani, Afghan, Bangladeshi, Gulf & Emirati, and many more — with halal-friendly recipes and meal plans as first-class features, not afterthoughts. The app speaks English, Arabic, German, Spanish, French, and Russian, and even includes a Ramadan fasting schedule among its ${f.FASTING_PLAN_COUNT} fasting plans, alongside 16:8 and 5:2.`,
    "The second thing we removed is friction. Tracking fails when it feels like accounting — so we put AI at the center: snap a photo and your meal is identified, portioned, and logged in seconds. A coach in your pocket gives guidance rooted in behavioral science, not guilt trips.",
    "Everything rests on established nutrition math — the Mifflin–St Jeor equation for energy needs, verified food data, and sustainable pacing instead of crash-diet promises. Small wins, every day.",
  ],
  facts: [
    { value: f.RECIPES, label: "Recipes with real ingredient amounts and cooking steps" },
    { value: f.CUISINES, label: "World cuisines" },
    { value: f.FASTING_PLAN_COUNT, label: "Fasting plans, incl. a Ramadan schedule" },
    { value: f.STRENGTH_EXERCISE_COUNT, label: "Strength exercises in the workout library" },
    { value: f.DIET_PLAN_COUNT, label: "Guided 4-week diet plans" },
    { value: f.LANGUAGE_COUNT, label: "Languages: English, Arabic, German, Spanish, French, Russian" },
  ],
  contact:
    "Questions, feedback, or press inquiries? <support>Get in touch</support> or see our <press>press kit</press>.",
});
