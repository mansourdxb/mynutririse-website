import type { Facts } from "@/data/facts";

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
    mifflin: {
      men: "Men: BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5",
      women: "Women: BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age − 161",
    },
  },

  index: {
    metaTitle: "Free Nutrition Tools",
    metaDescription:
      "Free calculators for BMI, daily calories, macros, BMR and ideal weight. Instant results with no sign-up, then turn your numbers into a plan in MyNutriRise.",
    title: "Free Nutrition Tools",
    subtitle: "Five calculators, zero sign-up. The same math MyNutriRise uses to build your plan.",
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
    whatIsHeading: "What is BMI?",
    whatIs:
      "Body Mass Index compares your weight to your height: <b>BMI = weight(kg) ÷ height(m)²</b>. For adults, 18.5 to 24.9 is generally considered the healthy range, 25–29.9 overweight, and 30+ obese.",
    whatIsCaveat:
      "BMI does not measure body fat directly — athletes with high muscle mass often score “overweight” while being perfectly healthy, and healthy ranges can shift slightly by ethnicity. Treat it as a screening signal, not a verdict.",
    resultHeading: "What to do with your result",
    result:
      "If your BMI sits outside the healthy band, the sustainable response is a modest calorie adjustment, not a crash diet. Find your daily target with the <calorie>calorie calculator</calorie>, see the weight range behind the math in the <ideal>ideal weight calculator</ideal>, and aim for 0.25–0.5 kg of change per week.",
    faqs: [
      {
        question: "What is a healthy BMI?",
        answer:
          "For most adults, 18.5–24.9. Below 18.5 is underweight; 25–29.9 overweight; 30 and above obese. Muscle mass, frame, and ethnicity shift what is right for an individual.",
      },
      {
        question: "Is BMI accurate for muscular people?",
        answer:
          "No — BMI cannot tell muscle from fat, so muscular athletes often read as overweight. Waist measurements and body-fat estimates give a fuller picture.",
      },
      {
        question: "How quickly can I safely change my BMI?",
        answer:
          "Through 0.25–0.5 kg of weight change per week — roughly a 250–500 kcal daily deficit or surplus. Faster usually means losing muscle and rebounding.",
      },
      {
        question: "Should I use metric or imperial?",
        answer:
          "Either — the calculator supports both. The formula is identical; imperial just multiplies by 703 to convert units.",
      },
    ],
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
    whatIsHeading: "What is BMR?",
    whatIs:
      "Your basal metabolic rate is the energy your body needs just to stay alive — breathing, circulation, cell repair — before any movement at all. It typically accounts for 60–70% of the calories you burn in a day, which is why it is the foundation of every calorie target.",
    equationIntro: "This calculator uses the <b>Mifflin–St Jeor equation</b>:",
    example:
      "<b>Worked example:</b> a 28-year-old woman, 162 cm and 60 kg: 10×60 + 6.25×162 − 5×28 − 161 = <b>1,312 kcal/day</b> at complete rest.",
    targetHeading: "From BMR to a daily target",
    target:
      "BMR is only the resting half of the picture. Multiply it by an activity factor (1.2–1.9) to get your total daily energy expenditure — that is exactly what our <calorie>calorie calculator</calorie> does, and the <macro>macro calculator</macro> then splits the result into protein, carbs, and fat.",
    fastingHeading: "BMR while fasting",
    fasting:
      "Short-term fasting — 16:8, or daily fasts during Ramadan — does not meaningfully lower your BMR. Metabolic slowdown only becomes a concern with prolonged, very low intake. During Ramadan, your resting needs stay the same; plan suhoor and iftar to cover them.",
    faqs: [
      {
        question: "What is a normal BMR?",
        answer:
          "Most adults fall between roughly 1,200 and 2,000 kcal/day depending on size, age, and sex. Larger and younger bodies burn more at rest; BMR declines gently with age.",
      },
      {
        question: "Is BMR the same as the calories I should eat?",
        answer:
          "No. BMR is what you burn at complete rest. Your daily target is BMR multiplied by an activity factor — use the calorie calculator for the full number.",
      },
      {
        question: "Does fasting lower my BMR?",
        answer:
          "Daily intermittent fasting, including Ramadan fasts, has little effect on BMR. Only prolonged severe restriction causes meaningful metabolic adaptation.",
      },
      {
        question: "How can I increase my BMR?",
        answer:
          "Building muscle is the most reliable way — muscle tissue burns more energy at rest than fat. Strength training plus adequate protein raises your resting burn over time.",
      },
    ],
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
    meansHeading: "What “ideal weight” really means",
    means:
      "There is no single perfect number. The <b>Devine</b> and <b>Robinson</b> formulas were developed for clinical dosing and give a useful midpoint, while the BMI-based range (18.5–24.9) shows the span generally associated with good health:",
    formulas: [
      "Devine (men): 50 kg + 2.3 kg per inch over 5 ft",
      "Devine (women): 45.5 kg + 2.3 kg per inch over 5 ft",
      "Robinson (men): 52 kg + 1.9 kg per inch over 5 ft",
      "Robinson (women): 49 kg + 1.7 kg per inch over 5 ft",
    ],
    meansNote:
      "Muscle mass, frame size, and ethnicity all shift what is right for you — use the range as a direction, not a deadline.",
    sustainHeading: "Getting there sustainably",
    sustain:
      "Pick a target inside your healthy range, then work backwards: the <calorie>calorie calculator</calorie> gives you the daily intake for 0.25–0.5 kg of change per week, and the <bmi>BMI calculator</bmi> lets you sanity-check progress along the way.",
    faqs: [
      {
        question: "How is ideal weight calculated?",
        answer:
          "This tool shows three views: the Devine and Robinson clinical formulas (based on height and sex) and the weight span that keeps your BMI between 18.5 and 24.9.",
      },
      {
        question: "Why do the formulas give different numbers?",
        answer:
          "Each was fitted to different population data. The spread between them is a feature — your healthy weight is a range, not a point.",
      },
      {
        question: "Is ideal weight different for men and women?",
        answer:
          "Yes — at the same height, the formulas assign men a higher baseline due to average differences in muscle mass and frame.",
      },
      {
        question: "What if I am far from my ideal range?",
        answer:
          "Aim for sustainable pacing: 0.25–0.5 kg per week through a moderate calorie deficit or surplus, anchored by protein and regular activity.",
      },
    ],
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
    chooseHeading: "How to choose your split",
    choose:
      "A <b>balanced</b> split (30% protein / 40% carbs / 30% fat) suits most people. Go <b>high-protein</b> (40%) when building muscle or preserving it in a deficit — protein is also the most satiating macro. <b>Keto</b> keeps carbs near 5% for low-carb plans, and <b>endurance</b> raises carbs to 50% to fuel high training volumes.",
    math:
      "The math is simple: protein and carbs provide <b>4 kcal per gram</b>, fat provides <b>9 kcal per gram</b>. On 2,000 kcal with a balanced split that is 150g protein, 200g carbs, and 67g fat.",
    startHeading: "Start from the right calorie number",
    start:
      "Your split is only as good as the calories it divides. If you have not set a daily target yet, run the <calorie>calorie calculator</calorie> first — and if you eat traditional dishes, our guide to <guide>tracking macros with cultural meals</guide> shows how to hit these targets with biryani, tagine, and kabuli pulao on the menu.",
    practiceHeading: "Hitting your macros in practice",
    practice:
      "Anchor each meal around a protein source, let carbs scale with your training day, and treat fat as the remainder. Consistency beats precision: landing within ±10g of each target is a good day.",
    faqs: [
      {
        question: "What macro split is best for weight loss?",
        answer:
          "Higher protein helps most — 35–40% protein preserves muscle and keeps you full in a calorie deficit. The deficit itself, not the exact split, drives the weight loss.",
      },
      {
        question: "How much protein do I need to build muscle?",
        answer:
          "Around 1.6–2.2g per kg of body weight daily. The High Protein split (40%) on a moderate surplus reaches that range for most people.",
      },
      {
        question: "Do macros matter more than calories?",
        answer:
          "Calories determine weight change; macros determine how it feels and what you keep. Set calories first, then use macros to protect muscle and energy.",
      },
      {
        question: "Can I track macros with halal or cultural food?",
        answer: `Yes — mixed dishes like biryani or tagine have known macro profiles. MyNutriRise covers ${f.CUISINES} world cuisines with per-serving protein, carbs, and fat.`,
      },
    ],
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
});

export default tools;
