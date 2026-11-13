import type { Facts } from "@/data/facts";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tools = (f: Facts) => ({
  // Strings shared by several tool pages and calculators.
  shared: {
    breadcrumb: "Tools",
    faqHeading: "Frequently asked questions",
    disclaimerTitle: "Not medical advice",
    disclaimer:
      "These calculators give general estimates for healthy adults. They are not medical advice and do not replace a doctor or registered dietitian. If you are pregnant, breastfeeding, under 18 or managing a health condition, get personal advice before changing how you eat.",
    sourcesHeading: "Sources",
    relatedTools: "Related calculators",
    relatedGuides: "Related guides",
    ctaButton: "Get the free app",
    sexAria: "Sex",
    male: "Male",
    female: "Female",
    age: "Age",
    heightCm: "Height (cm)",
    weightKg: "Weight (kg)",
    /** Validation under a number field. {unit} may be empty. */
    rangeError: "Enter {min}–{max} {unit}",
    units: {
      years: "years",
      cm: "cm",
      in: "in",
      kg: "kg",
      lb: "lb",
      kcal: "kcal",
    },
    kcalPerDay: "kcal/day",
  },

  index: {
    metaTitle: "Free Nutrition Tools",
    metaDescription:
      "Free calculators for calories, calorie deficit, TDEE, macros, protein, BMI, BMR, body fat and ideal weight. Instant results, no sign-up. Try them now.",
    title: "Free Nutrition Tools",
    subtitle: "Free calculators, zero sign-up. The same math MyNutriRise uses to build your plan.",
    cards: {
      calorie: {
        title: "Calorie Calculator",
        description: "Daily targets for losing, maintaining, or gaining — Mifflin–St Jeor.",
      },
      macro: {
        title: "Macro Calculator",
        description: "Protein, carbs & fat targets from your calorie goal.",
      },
      bmi: {
        title: "BMI Calculator",
        description: "Body Mass Index with healthy-range guidance, metric or imperial.",
      },
      bmr: {
        title: "BMR Calculator",
        description: "Calories your body burns at complete rest.",
      },
      idealWeight: {
        title: "Ideal Weight Calculator",
        description: "Healthy weight range for your height — Devine & Robinson formulas.",
      },
      tdee: {
        title: "TDEE Calculator",
        description: "Your maintenance calories at every activity level.",
      },
    },
    quiz: {
      title: "Custom Plan Quiz",
      description: "All of the above in one — answer 4 questions, get your full plan.",
    },
  },

  bmi: {
    metaTitle: "BMI Calculator for Adults (Free, Accurate)",
    metaDescription:
      "Free BMI calculator for adults: enter height and weight in metric or imperial units to get your body mass index and WHO weight category. Check your BMI now.",
    breadcrumb: "BMI Calculator",
    title: "BMI Calculator",
    subtitle: "Find out your Body Mass Index in seconds — free, no sign-up needed.",
    ctaTitle: "Ready to act on your number?",
    ctaBody: "MyNutriRise tracks your meals, workouts, and progress — snap a photo and AI does the logging.",
    calc: {
      unitsAria: "Units",
      metric: "Metric (cm, kg)",
      imperial: "Imperial (in, lb)",
      heightMetric: "Height (cm)",
      heightImperial: "Height (inches)",
      weightMetric: "Weight (kg)",
      weightImperial: "Weight (lb)",
      result: "Your BMI",
      categories: {
        underweight: "Underweight",
        healthy: "Healthy weight",
        overweight: "Overweight",
        obese: "Obese",
      },
      empty: "Enter your height and weight to see your BMI.",
    },
  },

  bmr: {
    metaTitle: "BMR Calculator: Calories Your Body Burns at Rest",
    metaDescription:
      "Free BMR calculator using the Mifflin-St Jeor equation: see how many calories your body burns at rest and use it to plan weight loss or muscle gain. Try it.",
    breadcrumb: "BMR Calculator",
    title: "BMR Calculator",
    subtitle: "Find out how many calories your body burns at complete rest.",
    ctaTitle: "Put your number to work",
    ctaBody:
      "MyNutriRise builds your daily plan from this same math — then tracks every meal with an AI photo scan.",
    calc: {
      result: "Your BMR",
      resultNote: "kcal/day burned at complete rest (Mifflin–St Jeor)",
      empty: "Fill in your details to see your basal metabolic rate.",
    },
  },

  calorie: {
    metaTitle: "Calorie Deficit Calculator for Weight Loss (Free)",
    metaDescription:
      "Free calorie deficit calculator: find your maintenance calories and a safe daily target to lose weight with the Mifflin-St Jeor equation. Get your number now.",
    breadcrumb: "Calorie Calculator",
    title: "Calorie Calculator",
    subtitle:
      "See how many calories you need each day to lose weight, maintain, or build muscle — free, no sign-up needed.",
    ctaTitle: "Hit your target every day",
    ctaBody:
      "MyNutriRise tracks your calories automatically — snap a photo of your meal and AI logs it for you.",
    calc: {
      activityLabel: "Activity level",
      // Same order as the multipliers 1.2, 1.375, 1.55, 1.725, 1.9.
      activityLevels: [
        "Sedentary (little or no exercise)",
        "Lightly active (1–3 days/week)",
        "Moderately active (3–5 days/week)",
        "Very active (6–7 days/week)",
        "Extra active (physical job + training)",
      ],
      lose: "Lose weight",
      maintain: "Maintain",
      gain: "Gain muscle",
      empty: "Fill in your details to see your daily calorie targets.",
    },
  },

  idealWeight: {
    metaTitle: "Ideal Weight Calculator by Height & Gender (Free)",
    metaDescription:
      "Free ideal weight calculator by height and sex, using the Devine and Robinson formulas plus your healthy BMI weight range. Find your target weight in seconds.",
    breadcrumb: "Ideal Weight",
    title: "Ideal Weight Calculator",
    subtitle: "Estimate a healthy weight range for your height — free, no sign-up needed.",
    ctaTitle: "Get there sustainably",
    ctaBody: "MyNutriRise sets a realistic pace, tracks your weight trend, and logs meals from a single photo.",
    calc: {
      healthyRange: "Healthy weight range (BMI 18.5–24.9)",
      rangeValue: "{min}–{max} kg",
      devine: "Devine formula",
      robinson: "Robinson formula",
      miller: "Miller formula",
      formulaValue: "{value} kg",
      empty: "Enter your height to see your estimated ideal weight range.",
    },
  },

  macro: {
    metaTitle: "Macro Calculator for Fat Loss & Muscle Gain (Free)",
    metaDescription:
      "Free macro calculator for fat loss and muscle gain: turn your daily calories into grams of protein, carbs and fat with a split that fits you. Calculate now.",
    breadcrumb: "Macro Calculator",
    title: "Macro Calculator",
    subtitle: "Turn your calorie goal into daily protein, carb, and fat targets — free, no sign-up needed.",
    ctaTitle: "Track your macros automatically",
    ctaBody:
      "Snap a photo and MyNutriRise logs the protein, carbs, and fat for you — with daily breakdowns against your targets.",
    calc: {
      caloriesLabel: "Daily calories",
      hint: "Don't know yours? Use the <link>calorie calculator</link> first.",
      dietAria: "Diet style",
      splits: {
        balanced: "Balanced",
        highprotein: "High Protein",
        keto: "Keto / Low-carb",
        endurance: "Endurance",
      },
      splitSummary: "{p}% protein · {c}% carbs · {f}% fat",
      protein: "Protein",
      carbs: "Carbs",
      fat: "Fat",
      grams: "{n}g",
      empty: "Enter your daily calories to see your macro targets.",
    },
  },
  tdee: {
    metaTitle: "TDEE Calculator: Your Daily Maintenance Calories",
    metaDescription:
      "Free TDEE calculator: see your total daily energy expenditure at every activity level with Mifflin-St Jeor, then set a calorie target. Calculate yours now.",
    breadcrumb: "TDEE Calculator",
    title: "TDEE Calculator",
    subtitle: "See how many calories you burn in a day at every activity level — free, no sign-up needed.",
    ctaTitle: "Track against your TDEE",
    ctaBody: "MyNutriRise sets your daily target from this math and logs every meal from a photo.",
    calc: {
      bmr: "Your BMR",
      bmrNote: "kcal/day at complete rest",
      tableHeading: "Your TDEE at each activity level",
      empty: "Fill in your details to see your TDEE at every activity level.",
    },
  },

});

export default tools;
