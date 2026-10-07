import type { Facts } from "@/data/facts";
import type en from "../en/quiz";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Obtenez votre programme personnalisé",
  metaDescription:
    "Répondez à quatre questions rapides et recevez un programme nutritionnel personnalisé avec votre objectif calorique quotidien — gratuitement, en moins d’une minute.",
  title: "Votre programme personnalisé <accent>en 1 minute</accent>",
  intro: "Quatre questions rapides, sans inscription.",
  // Passed to the client QuizFlow component.
  flow: {
    yourPlan: "Votre programme",
    stepOf: "Étape {step} sur {total}",
    percent: "{n} %",
    goalTitle: "Quel est votre objectif principal ?",
    goals: {
      lose: { label: "Perdre du poids", sub: "Manger en déficit calorique" },
      maintain: { label: "Maintenir le poids", sub: "Équilibrer apports et activité" },
      gain: { label: "Prendre du muscle", sub: "Surplus calorique riche en protéines" },
    },
    aboutTitle: "Parlez-nous de vous",
    aboutBody: "L’âge affine vos objectifs caloriques selon votre métabolisme. Ces informations restent privées.",
    genderLabel: "Sexe",
    // Shown with CSS capitalize, so "male" displays as "Male".
    sexes: { male: "homme", female: "femme" },
    age: "Âge",
    height: "Taille (cm)",
    weight: "Poids (kg)",
    unitYears: "ans",
    unitCm: "cm",
    unitKg: "kg",
    rangeError: "Saisissez une valeur entre {min} et {max} {unit}",
    workoutTitle: "À quelle fréquence vous entraînez-vous ?",
    // Same order as the activity multipliers in QuizFlow.
    workoutLevels: [
      { label: "Jamais", sub: "Peu ou pas d’exercice" },
      { label: "1 à 2 fois/semaine", sub: "Activité légère" },
      { label: "3 à 4 fois/semaine", sub: "Activité modérée" },
      { label: "5 fois ou plus/semaine", sub: "Activité intense" },
    ],
    styleTitle: "Choisissez votre façon de manger",
    styles: {
      everything: { label: "Aucune restriction", sub: "Je mange de tout" },
      halal: { label: "Halal et cuisines du monde", sub: `${f.CUISINES} cuisines — turque, pakistanaise, afghane et plus encore` },
      mediterranean: { label: "Méditerranéen", sub: "Huile d’olive, poisson, légumes" },
      plant: { label: "Végétarien / végan", sub: "Alimentation végétale" },
      keto: { label: "Céto / pauvre en glucides", sub: "Moins de 30 g de glucides nets par jour" },
      protein: { label: "Riche en protéines", sub: "40 % de protéines" },
    },
    // Real plan names from the app's DietPlanDatabase.
    plans: {
      everything: {
        name: "Alimentation saine",
        blurb: "Des aliments bruts, peu transformés : fruits, légumes, protéines maigres et céréales complètes.",
      },
      halal: {
        name: "Moyen-Orient équilibré",
        blurb:
          "Des repas compatibles halal aux saveurs traditionnelles : viandes grillées, légumineuses, salades fraîches et céréales complètes.",
      },
      mediterranean: {
        name: "Méditerranéen",
        blurb: "Huile d’olive bonne pour le cœur, poisson frais, légumes, céréales complètes et légumineuses.",
      },
      plant: {
        name: "Végétarien équilibré",
        blurb: "Une alimentation végétale équilibrée : légumineuses, céréales complètes, produits laitiers, œufs et bonnes graisses.",
      },
      keto: {
        name: "Compatible keto",
        blurb: "Très pauvre en glucides, riche en lipides : moins de 30 g de glucides nets par jour avec des graisses de qualité.",
      },
      protein: {
        name: "Riche en protéines",
        blurb: "40 % de protéines pour la prise de muscle et la satiété : viandes maigres, œufs, légumineuses et produits laitiers.",
      },
    },
    resultEyebrow: "Votre programme personnalisé",
    dailyTarget: "Objectif calorique quotidien",
    kcalPerDay: "kcal/jour",
    grams: "{n} g",
    protein: "Protéines",
    carbs: "Glucides",
    fat: "Lipides",
    water: "{liters} L d’eau par jour recommandés",
    resultBody:
      "Ce sont les mêmes calculs que dans l’app. Téléchargez MyNutriRise et votre programme est prêt : un programme alimentaire guidé (1re semaine gratuite, les 4 semaines avec Premium), l’enregistrement des repas par photo grâce à l’IA et le coaching inclus.",
    emailSubject: "Mon programme MyNutriRise",
    emailBody:
      "Mon programme MyNutriRise :\n\nProgramme : {plan}\nCalories quotidiennes : {calories} kcal\nProtéines : {protein} g · Glucides : {carbs} g · Lipides : {fat} g\nEau : {water} L\n\nTélécharger l’app : {url}",
    emailCta: "Recevoir mon programme par e-mail →",
    back: "← Retour",
    seePlan: "Voir mon programme",
    continue: "Continuer",
  },
});
