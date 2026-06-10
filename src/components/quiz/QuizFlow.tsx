"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StoreButtons } from "@/components/ui/Button";
import { LIMITS, NumberField, inRange } from "@/components/tools/shared";

// Mirrors the app's onboarding questions and plan calculation
// (lib/app/modules/Onboarding + lib/app/data/diet_plans.dart).

type Goal = "lose" | "maintain" | "gain";
type Sex = "male" | "female";
type EatingStyle =
  | "everything"
  | "halal"
  | "mediterranean"
  | "plant"
  | "keto"
  | "protein";

const goals: { value: Goal; label: string; sub: string; emoji: string }[] = [
  { value: "lose", label: "Lose weight", sub: "Eat in a calorie deficit", emoji: "⚖️" },
  { value: "maintain", label: "Maintain weight", sub: "Balance intake with activity", emoji: "🎯" },
  { value: "gain", label: "Gain muscle", sub: "Protein-led surplus", emoji: "💪" },
];

const workoutLevels = [
  { value: 1.2, label: "None", sub: "Little or no exercise" },
  { value: 1.375, label: "1–2 times/week", sub: "Light activity" },
  { value: 1.55, label: "3–4 times/week", sub: "Moderate activity" },
  { value: 1.725, label: "5+ times/week", sub: "Very active" },
];

const eatingStyles: { value: EatingStyle; label: string; sub: string }[] = [
  { value: "everything", label: "No restrictions", sub: "I eat everything" },
  { value: "halal", label: "Halal & cultural", sub: "50+ cuisines — Turkish, Pakistani, Afghan & more" },
  { value: "mediterranean", label: "Mediterranean", sub: "Olive oil, fish, vegetables" },
  { value: "plant", label: "Vegetarian / Vegan", sub: "Plant-based nutrition" },
  { value: "keto", label: "Keto / low-carb", sub: "Under 30g net carbs per day" },
  { value: "protein", label: "High-protein", sub: "40% protein ratio" },
];

// Real plan names from the app's DietPlanDatabase
const planByStyle: Record<EatingStyle, { name: string; emoji: string; blurb: string }> = {
  everything: {
    name: "Clean Eating",
    emoji: "🥗",
    blurb: "Whole foods, minimal processing — fruits, vegetables, lean proteins and whole grains.",
  },
  halal: {
    name: "Middle Eastern Healthy",
    emoji: "🧆",
    blurb: "Halal-friendly meals with traditional flavours — grilled meats, legumes, fresh salads and wholesome grains.",
  },
  mediterranean: {
    name: "Mediterranean",
    emoji: "🫒",
    blurb: "Heart-healthy olive oil, fresh fish, vegetables, whole grains and legumes.",
  },
  plant: {
    name: "Vegetarian Balance",
    emoji: "🌱",
    blurb: "Balanced plant-based nutrition — legumes, whole grains, dairy, eggs and healthy fats.",
  },
  keto: {
    name: "Keto Friendly",
    emoji: "🥑",
    blurb: "Very low carb, high fat — under 30g net carbs per day with quality fats.",
  },
  protein: {
    name: "High Protein",
    emoji: "💪",
    blurb: "40% protein ratio for muscle building and satiety — lean meats, eggs, legumes and dairy.",
  },
};

// Macro splits (protein/carbs/fat %) per eating style
const macroSplit: Record<EatingStyle, [number, number, number]> = {
  everything: [30, 40, 30],
  halal: [30, 40, 30],
  mediterranean: [25, 45, 30],
  plant: [25, 50, 25],
  keto: [25, 5, 70],
  protein: [40, 30, 30],
};

const optionClass = (selected: boolean) =>
  `w-full rounded-2xl border-2 p-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
    selected
      ? "border-emerald-500 bg-emerald-50"
      : "border-slate-200 bg-white hover:border-emerald-300"
  }`;

const TOTAL_STEPS = 5;

export function QuizFlow() {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState<Goal | null>(null);
  const [sex, setSex] = useState<Sex | null>(null);
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState<number | null>(null);
  const [style, setStyle] = useState<EatingStyle | null>(null);

  const a = parseFloat(age);
  const h = parseFloat(height);
  const w = parseFloat(weight);
  const statsValid =
    inRange(a, LIMITS.age) &&
    inRange(h, LIMITS.heightCm) &&
    inRange(w, LIMITS.weightKg);

  const canContinue = [
    goal !== null,
    sex !== null && statsValid,
    activity !== null,
    style !== null,
  ];

  // Same math the app uses: Mifflin–St Jeor + activity + goal adjustment
  let calories: number | null = null;
  let protein = 0;
  let carbs = 0;
  let fat = 0;
  let waterMl = 0;
  if (statsValid && sex && activity && goal && style) {
    const bmr = 10 * w + 6.25 * h - 5 * a + (sex === "male" ? 5 : -161);
    const tdee = bmr * activity;
    const adjusted =
      goal === "lose" ? tdee - 500 : goal === "gain" ? tdee + 300 : tdee;
    calories = Math.max(1200, Math.round(adjusted / 10) * 10);
    const [p, c, f] = macroSplit[style];
    protein = Math.round((calories * p) / 100 / 4);
    carbs = Math.round((calories * c) / 100 / 4);
    fat = Math.round((calories * f) / 100 / 9);
    waterMl = Math.round((w * 35) / 50) * 50;
  }

  const isResult = step === TOTAL_STEPS - 1;
  const plan = style ? planByStyle[style] : null;

  const emailBody =
    plan && calories
      ? encodeURIComponent(
          `My MyNutriRise plan:\n\nPlan: ${plan.name}\nDaily calories: ${calories} kcal\nProtein: ${protein}g · Carbs: ${carbs}g · Fat: ${fat}g\nWater: ${(waterMl / 1000).toFixed(1)}L\n\nGet the app: https://www.mynutririse.com/download`
        )
      : "";

  return (
    <div className="mx-auto max-w-xl">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-medium text-slate-500">
          <span>{isResult ? "Your plan" : `Step ${step + 1} of ${TOTAL_STEPS - 1}`}</span>
          <span>{Math.round((step / (TOTAL_STEPS - 1)) * 100)}%</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
            animate={{ width: `${(step / (TOTAL_STEPS - 1)) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
        >
          {step === 0 && (
            <div>
              <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                What&apos;s your main goal?
              </h2>
              <div className="mt-6 space-y-3">
                {goals.map((g) => (
                  <button
                    key={g.value}
                    onClick={() => setGoal(g.value)}
                    aria-pressed={goal === g.value}
                    className={optionClass(goal === g.value)}
                  >
                    <span className="mr-3">{g.emoji}</span>
                    <span className="font-semibold text-slate-800">{g.label}</span>
                    <span className="block pl-8 text-sm text-slate-500">{g.sub}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                Tell us about yourself
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Age tunes calorie targets to your metabolism. We keep this
                private.
              </p>
              <div className="mt-6 flex gap-2" role="group" aria-label="Gender">
                {(["male", "female"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSex(s)}
                    aria-pressed={sex === s}
                    className={`flex-1 rounded-full px-5 py-2.5 text-sm font-medium capitalize transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                      sex === s
                        ? "bg-emerald-500 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-emerald-50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <NumberField label="Age" value={age} onChange={setAge} placeholder="30" limits={LIMITS.age} unit="years" />
                <NumberField label="Height (cm)" value={height} onChange={setHeight} placeholder="170" limits={LIMITS.heightCm} unit="cm" />
                <NumberField label="Weight (kg)" value={weight} onChange={setWeight} placeholder="70" limits={LIMITS.weightKg} unit="kg" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                How often do you work out?
              </h2>
              <div className="mt-6 space-y-3">
                {workoutLevels.map((level) => (
                  <button
                    key={level.value}
                    onClick={() => setActivity(level.value)}
                    aria-pressed={activity === level.value}
                    className={optionClass(activity === level.value)}
                  >
                    <span className="block font-semibold text-slate-800">{level.label}</span>
                    <span className="text-sm text-slate-500">{level.sub}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                Pick your eating style
              </h2>
              <div className="mt-6 space-y-3">
                {eatingStyles.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setStyle(s.value)}
                    aria-pressed={style === s.value}
                    className={optionClass(style === s.value)}
                  >
                    <span className="block font-semibold text-slate-800">{s.label}</span>
                    <span className="text-sm text-slate-500">{s.sub}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {isResult && plan && calories && (
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                Your custom plan
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">
                {plan.emoji} {plan.name}
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500">
                {plan.blurb}
              </p>

              <div className="mx-auto mt-8 max-w-sm rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-400 p-8 text-white">
                <p className="text-sm font-medium text-white/80">Daily calorie target</p>
                <p className="mt-1 text-5xl font-bold">{calories.toLocaleString()}</p>
                <p className="mt-1 text-sm text-white/80">kcal/day</p>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/20 pt-5">
                  <div>
                    <p className="text-xl font-bold">{protein}g</p>
                    <p className="text-xs text-white/80">Protein</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold">{carbs}g</p>
                    <p className="text-xs text-white/80">Carbs</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold">{fat}g</p>
                    <p className="text-xs text-white/80">Fat</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-white/80">
                  💧 {(waterMl / 1000).toFixed(1)}L water/day recommended
                </p>
              </div>

              <p className="mx-auto mt-6 max-w-md leading-relaxed text-slate-500">
                This is the same math the app uses. Download MyNutriRise and
                your plan is ready — 4 weeks of meals, AI photo logging, and
                coaching included.
              </p>
              <StoreButtons reassurance className="mt-8" />
              <a
                href={`mailto:?subject=${encodeURIComponent("My MyNutriRise plan")}&body=${emailBody}`}
                className="mt-3 inline-block text-sm font-medium text-emerald-600 hover:text-emerald-700"
              >
                Email me my plan →
              </a>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      {!isResult && (
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="rounded-full px-6 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600 disabled:invisible focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            ← Back
          </button>
          <button
            onClick={() => setStep((s) => s + 1)}
            disabled={!canContinue[step]}
            className="rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-500/20 transition-all duration-200 hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            {step === TOTAL_STEPS - 2 ? "See my plan" : "Continue"}
          </button>
        </div>
      )}
    </div>
  );
}
