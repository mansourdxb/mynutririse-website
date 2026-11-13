import type { Facts } from "@/data/facts";
import type en from "../en/tools";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tools = (f: Facts): ReturnType<typeof en> => ({
  // Strings shared by several tool pages and calculators.
  shared: {
    breadcrumb: "Herramientas",
    faqHeading: "Preguntas frecuentes",
    disclaimerTitle: "No es consejo médico",
    disclaimer:
      "Estas calculadoras ofrecen estimaciones generales para adultos sanos. No son consejo médico ni sustituyen a un médico o a un dietista-nutricionista. Si estás embarazada, en periodo de lactancia, eres menor de 18 años o tienes alguna afección de salud, pide consejo personalizado antes de cambiar tu forma de comer.",
    sourcesHeading: "Fuentes",
    relatedTools: "Calculadoras relacionadas",
    relatedGuides: "Guías relacionadas",
    ctaButton: "Consigue la app gratis",
    sexAria: "Sexo",
    male: "Hombre",
    female: "Mujer",
    age: "Edad",
    heightCm: "Altura (cm)",
    weightKg: "Peso (kg)",
    /** Validation under a number field. {unit} may be empty. */
    rangeError: "Introduce un valor entre {min} y {max} {unit}",
    units: {
      years: "años",
      cm: "cm",
      in: "in",
      kg: "kg",
      lb: "lb",
      kcal: "kcal",
    },
    kcalPerDay: "kcal/día",
  },

  index: {
    metaTitle: "Herramientas de nutrición gratuitas",
    metaDescription:
      "Calculadoras gratuitas de IMC, calorías diarias, macros, TMB y peso ideal. Resultados al instante y sin registro; luego conviértelos en un plan en MyNutriRise.",
    title: "Herramientas de nutrición gratuitas",
    subtitle: "Cinco calculadoras, sin registro. Los mismos cálculos que usa MyNutriRise para crear tu plan.",
    cards: {
      calorie: {
        title: "Calculadora de calorías",
        description: "Objetivos diarios para bajar, mantener o subir de peso, con Mifflin–St Jeor.",
      },
      macro: {
        title: "Calculadora de macros",
        description: "Objetivos de proteína, carbohidratos y grasa a partir de tu meta de calorías.",
      },
      bmi: {
        title: "Calculadora de IMC",
        description: "Índice de masa corporal con orientación sobre el rango saludable, en sistema métrico o imperial.",
      },
      bmr: {
        title: "Calculadora de TMB",
        description: "Las calorías que tu cuerpo quema en reposo absoluto.",
      },
      idealWeight: {
        title: "Calculadora de peso ideal",
        description: "Rango de peso saludable para tu altura, con las fórmulas de Devine y Robinson.",
      },
    },
    quiz: {
      title: "Test de plan personalizado",
      description: "Todo lo anterior en uno: responde 4 preguntas y obtén tu plan completo.",
    },
  },

  bmi: {
    metaTitle: "Calculadora de IMC para adultos (gratis y precisa)",
    metaDescription:
      "Calculadora de IMC gratis para adultos: introduce altura y peso en unidades métricas o imperiales y obtén tu índice de masa corporal y la categoría de la OMS.",
    breadcrumb: "Calculadora de IMC",
    title: "Calculadora de IMC",
    subtitle: "Descubre tu índice de masa corporal en segundos: gratis y sin registro.",
    ctaTitle: "¿Listo para pasar a la acción?",
    ctaBody: "MyNutriRise registra tus comidas, entrenamientos y progreso: toma una foto y la IA se encarga del registro.",
    calc: {
      unitsAria: "Unidades",
      metric: "Métrico (cm, kg)",
      imperial: "Imperial (in, lb)",
      heightMetric: "Altura (cm)",
      heightImperial: "Altura (pulgadas)",
      weightMetric: "Peso (kg)",
      weightImperial: "Peso (lb)",
      result: "Tu IMC",
      categories: {
        underweight: "Bajo peso",
        healthy: "Peso saludable",
        overweight: "Sobrepeso",
        obese: "Obesidad",
      },
      empty: "Introduce tu altura y tu peso para ver tu IMC.",
    },
  },

  bmr: {
    metaTitle: "Calculadora de TMB: calorías que quemas en reposo",
    metaDescription:
      "Calculadora de TMB gratis con la ecuación Mifflin-St Jeor: descubre cuántas calorías quema tu cuerpo en reposo y planifica bajar de peso o ganar músculo.",
    breadcrumb: "Calculadora de TMB",
    title: "Calculadora de TMB",
    subtitle: "Descubre cuántas calorías quema tu cuerpo en reposo absoluto.",
    ctaTitle: "Pon tu número a trabajar",
    ctaBody:
      "MyNutriRise crea tu plan diario con estos mismos cálculos y luego registra cada comida con un escaneo por foto con IA.",
    calc: {
      result: "Tu TMB",
      resultNote: "kcal/día quemadas en reposo absoluto (Mifflin–St Jeor)",
      empty: "Completa tus datos para ver tu tasa metabólica basal.",
    },
  },

  calorie: {
    metaTitle: "Calculadora de calorías y déficit para bajar de peso",
    metaDescription:
      "Calculadora de calorías gratis: descubre tus calorías de mantenimiento y un déficit seguro para bajar de peso con la fórmula Mifflin-St Jeor. Calcula ahora.",
    breadcrumb: "Calculadora de calorías",
    title: "Calculadora de calorías",
    subtitle:
      "Descubre cuántas calorías necesitas cada día para bajar de peso, mantenerlo o ganar músculo: gratis y sin registro.",
    ctaTitle: "Alcanza tu objetivo cada día",
    ctaBody:
      "MyNutriRise controla tus calorías automáticamente: toma una foto de tu comida y la IA la registra por ti.",
    calc: {
      activityLabel: "Nivel de actividad",
      // Same order as the multipliers 1.2, 1.375, 1.55, 1.725, 1.9.
      activityLevels: [
        "Sedentario (poco o ningún ejercicio)",
        "Poco activo (1–3 días/semana)",
        "Moderadamente activo (3–5 días/semana)",
        "Muy activo (6–7 días/semana)",
        "Extremadamente activo (trabajo físico + entrenamiento)",
      ],
      lose: "Bajar de peso",
      maintain: "Mantener",
      gain: "Ganar músculo",
      empty: "Completa tus datos para ver tus objetivos diarios de calorías.",
    },
  },

  idealWeight: {
    metaTitle: "Calculadora de peso ideal según altura y sexo",
    metaDescription:
      "Calculadora de peso ideal gratis según tu altura y sexo, con las fórmulas de Devine y Robinson y tu rango de peso saludable por IMC. Descubre tu peso objetivo.",
    breadcrumb: "Peso ideal",
    title: "Calculadora de peso ideal",
    subtitle: "Estima un rango de peso saludable para tu altura: gratis y sin registro.",
    ctaTitle: "Llega de forma sostenible",
    ctaBody: "MyNutriRise fija un ritmo realista, sigue la tendencia de tu peso y registra tus comidas a partir de una sola foto.",
    calc: {
      healthyRange: "Rango de peso saludable (IMC 18,5–24,9)",
      rangeValue: "{min}–{max} kg",
      devine: "Fórmula de Devine",
      robinson: "Fórmula de Robinson",
      miller: "Fórmula de Miller",
      formulaValue: "{value} kg",
      empty: "Introduce tu altura para ver tu rango de peso ideal estimado.",
    },
  },

  macro: {
    metaTitle: "Calculadora de macros para perder grasa y ganar músculo",
    metaDescription:
      "Calculadora de macros gratis para perder grasa o ganar músculo: convierte tus calorías diarias en gramos de proteína, carbohidratos y grasa. Calcula los tuyos.",
    breadcrumb: "Calculadora de macros",
    title: "Calculadora de macros",
    subtitle: "Convierte tu meta de calorías en objetivos diarios de proteína, carbohidratos y grasa: gratis y sin registro.",
    ctaTitle: "Controla tus macros automáticamente",
    ctaBody:
      "Toma una foto y MyNutriRise registra la proteína, los carbohidratos y la grasa por ti, con desgloses diarios frente a tus objetivos.",
    calc: {
      caloriesLabel: "Calorías diarias",
      hint: "¿No sabes cuáles son las tuyas? Usa primero la <link>calculadora de calorías</link>.",
      dietAria: "Tipo de dieta",
      splits: {
        balanced: "Equilibrado",
        highprotein: "Alto en proteína",
        keto: "Keto / bajo en carbos",
        endurance: "Resistencia",
      },
      splitSummary: "{p} % proteína · {c} % carbohidratos · {f} % grasa",
      protein: "Proteína",
      carbs: "Carbohidratos",
      fat: "Grasa",
      grams: "{n} g",
      empty: "Introduce tus calorías diarias para ver tus objetivos de macros.",
    },
  },
});

export default tools;
