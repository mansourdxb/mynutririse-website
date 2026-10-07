import type { Facts } from "@/data/facts";
import type en from "../en/quiz";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Obtén tu plan personalizado",
  metaDescription:
    "Responde cuatro preguntas rápidas y obtén un plan de nutrición personalizado con tu objetivo diario de calorías: gratis y en menos de un minuto.",
  title: "Obtén tu plan personalizado <accent>en 1 minuto</accent>",
  intro: "Cuatro preguntas rápidas, sin necesidad de registrarte.",
  // Passed to the client QuizFlow component.
  flow: {
    yourPlan: "Tu plan",
    stepOf: "Paso {step} de {total}",
    percent: "{n} %",
    goalTitle: "¿Cuál es tu objetivo principal?",
    goals: {
      lose: { label: "Bajar de peso", sub: "Comer con déficit de calorías" },
      maintain: { label: "Mantener el peso", sub: "Equilibrar lo que comes con tu actividad" },
      gain: { label: "Ganar músculo", sub: "Superávit basado en proteína" },
    },
    aboutTitle: "Cuéntanos sobre ti",
    aboutBody: "La edad ajusta los objetivos de calorías a tu metabolismo. Mantenemos estos datos en privado.",
    genderLabel: "Género",
    // Shown with CSS capitalize, so "male" displays as "Male".
    sexes: { male: "hombre", female: "mujer" },
    age: "Edad",
    height: "Altura (cm)",
    weight: "Peso (kg)",
    unitYears: "años",
    unitCm: "cm",
    unitKg: "kg",
    rangeError: "Introduce un valor entre {min} y {max} {unit}",
    workoutTitle: "¿Con qué frecuencia entrenas?",
    // Same order as the activity multipliers in QuizFlow.
    workoutLevels: [
      { label: "Nunca", sub: "Poco o ningún ejercicio" },
      { label: "1–2 veces/semana", sub: "Actividad ligera" },
      { label: "3–4 veces/semana", sub: "Actividad moderada" },
      { label: "5+ veces/semana", sub: "Muy activo" },
    ],
    styleTitle: "Elige tu estilo de alimentación",
    styles: {
      everything: { label: "Sin restricciones", sub: "Como de todo" },
      halal: { label: "Halal y cultural", sub: `${f.CUISINES} cocinas: turca, pakistaní, afgana y más` },
      mediterranean: { label: "Mediterránea", sub: "Aceite de oliva, pescado, verduras" },
      plant: { label: "Vegetariana / vegana", sub: "Nutrición de origen vegetal" },
      keto: { label: "Keto / bajo en carbos", sub: "Menos de 30 g de carbohidratos netos al día" },
      protein: { label: "Alta en proteína", sub: "40 % de proteína" },
    },
    // Real plan names from the app's DietPlanDatabase.
    plans: {
      everything: {
        name: "Alimentación limpia",
        blurb: "Alimentos integrales y mínimamente procesados: frutas, verduras, proteínas magras y cereales integrales.",
      },
      halal: {
        name: "Saludable de Medio Oriente",
        blurb:
          "Comidas aptas para halal con sabores tradicionales: carnes a la parrilla, legumbres, ensaladas frescas y cereales nutritivos.",
      },
      mediterranean: {
        name: "Mediterráneo",
        blurb: "Aceite de oliva cardiosaludable, pescado fresco, verduras, cereales integrales y legumbres.",
      },
      plant: {
        name: "Equilibrio vegetariano",
        blurb: "Nutrición vegetal equilibrada: legumbres, cereales integrales, lácteos, huevos y grasas saludables.",
      },
      keto: {
        name: "Apto para keto",
        blurb: "Muy bajo en carbohidratos y alto en grasas: menos de 30 g de carbohidratos netos al día con grasas de calidad.",
      },
      protein: {
        name: "Alto en proteína",
        blurb: "40 % de proteína para ganar músculo y aumentar la saciedad: carnes magras, huevos, legumbres y lácteos.",
      },
    },
    resultEyebrow: "Tu plan personalizado",
    dailyTarget: "Objetivo diario de calorías",
    kcalPerDay: "kcal/día",
    grams: "{n} g",
    protein: "Proteína",
    carbs: "Carbohidratos",
    fat: "Grasa",
    water: "{liters} L de agua al día recomendados",
    resultBody:
      "Son los mismos cálculos que usa la app. Descarga MyNutriRise y tu plan estará listo: un plan de alimentación guiado (semana 1 gratis, las 4 semanas con Premium), registro por foto con IA y coaching incluidos.",
    emailSubject: "Mi plan de MyNutriRise",
    emailBody:
      "Mi plan de MyNutriRise:\n\nPlan: {plan}\nCalorías diarias: {calories} kcal\nProteína: {protein} g · Carbohidratos: {carbs} g · Grasa: {fat} g\nAgua: {water} L\n\nDescarga la app: {url}",
    emailCta: "Enviarme mi plan por correo →",
    back: "← Atrás",
    seePlan: "Ver mi plan",
    continue: "Continuar",
  },
});
