"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StoreButtons } from "@/components/ui/Button";
import { LIMITS, NumberField, inRange } from "@/components/tools/shared";
import { formatNumber } from "@/data/facts";
import { BASE_URL, localePath, type Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { fill } from "@/i18n/rich";

// Mirrors the app's onboarding questions and plan calculation
// (lib/app/modules/Onboarding + lib/app/data/diet_plans.dart).
// All visible text comes from messages (quiz.flow).

type Goal = "lose" | "maintain" | "gain";
type Sex = "male" | "female";
type EatingStyle =
  | "everything"
  | "halal"
  | "mediterranean"
  | "plant"
  | "keto"
  | "protein";

const goals: { value: Goal; emoji: string }[] = [
  { value: "lose", emoji: "⚖️" },
  { value: "maintain", emoji: "🎯" },
  { value: "gain", emoji: "💪" },
];

// Activity multipliers; labels in quiz.flow.workoutLevels, same order.
const workoutValues = [1.2, 1.375, 1.55, 1.725];

const eatingStyles: EatingStyle[] = [
  "everything",
  "halal",
  "mediterranean",
  "plant",
  "keto",
  "protein",
];

const planEmoji: Record<EatingStyle, string> = {
  everything: "🥗",
  halal: "🧆",
  mediterranean: "🫒",
  plant: "🌱",
  keto: "🥑",
  protein: "💪",
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
  `w-full rounded-2xl border-2 p-4 text-start transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
    selected
      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-400/10"
      : "border-line bg-surface hover:border-emerald-300 dark:hover:border-emerald-400/30"
  }`;

const TOTAL_STEPS = 5;

export function QuizFlow({
  lang,
  t,
  store,
}: {
  lang: Locale;
  t: Messages["quiz"]["flow"];
  store: Messages["common"]["store"];
}) {
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
  const plan = style ? { ...t.plans[style], emoji: planEmoji[style] } : null;

  const emailBody =
    plan && calories
      ? encodeURIComponent(
          fill(t.emailBody, {
            plan: plan.name,
            calories,
            protein,
            carbs,
            fat,
            water: (waterMl / 1000).toFixed(1),
            url: `${BASE_URL}${localePath(lang, "/download")}`,
          })
        )
      : "";

  return (
    <div className="mx-auto max-w-xl">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-medium text-ink-3">
          <span>{isResult ? t.yourPlan : fill(t.stepOf, { step: step + 1, total: TOTAL_STEPS - 1 })}</span>
          <span>{fill(t.percent, { n: Math.round((step / (TOTAL_STEPS - 1)) * 100) })}</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-2">
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
              <h2 className="text-h3 text-ink">{t.goalTitle}</h2>
              <div className="mt-6 space-y-3">
                {goals.map((g) => (
                  <button
                    key={g.value}
                    onClick={() => setGoal(g.value)}
                    aria-pressed={goal === g.value}
                    className={optionClass(goal === g.value)}
                  >
                    <span className="me-3">{g.emoji}</span>
                    <span className="font-semibold text-ink">{t.goals[g.value].label}</span>
                    <span className="block ps-8 text-sm text-ink-3">{t.goals[g.value].sub}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="text-h3 text-ink">{t.aboutTitle}</h2>
              <p className="mt-2 text-sm text-ink-3">{t.aboutBody}</p>
              <div className="mt-6 flex gap-2" role="group" aria-label={t.genderLabel}>
                {(["male", "female"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSex(s)}
                    aria-pressed={sex === s}
                    className={`flex-1 rounded-full px-5 py-2.5 text-sm font-medium capitalize transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                      sex === s
                        ? "bg-emerald-500 text-white"
                        : "bg-surface-2 text-ink-2 hover:bg-emerald-50 dark:hover:bg-emerald-400/10"
                    }`}
                  >
                    {t.sexes[s]}
                  </button>
                ))}
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <NumberField label={t.age} value={age} onChange={setAge} placeholder="30" limits={LIMITS.age} unit={t.unitYears} rangeError={t.rangeError} />
                <NumberField label={t.height} value={height} onChange={setHeight} placeholder="170" limits={LIMITS.heightCm} unit={t.unitCm} rangeError={t.rangeError} />
                <NumberField label={t.weight} value={weight} onChange={setWeight} placeholder="70" limits={LIMITS.weightKg} unit={t.unitKg} rangeError={t.rangeError} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-h3 text-ink">{t.workoutTitle}</h2>
              <div className="mt-6 space-y-3">
                {workoutValues.map((value, i) => (
                  <button
                    key={value}
                    onClick={() => setActivity(value)}
                    aria-pressed={activity === value}
                    className={optionClass(activity === value)}
                  >
                    <span className="block font-semibold text-ink">{t.workoutLevels[i].label}</span>
                    <span className="text-sm text-ink-3">{t.workoutLevels[i].sub}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-h3 text-ink">{t.styleTitle}</h2>
              <div className="mt-6 space-y-3">
                {eatingStyles.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStyle(s)}
                    aria-pressed={style === s}
                    className={optionClass(style === s)}
                  >
                    <span className="block font-semibold text-ink">{t.styles[s].label}</span>
                    <span className="text-sm text-ink-3">{t.styles[s].sub}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {isResult && plan && calories && (
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                {t.resultEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
                {plan.emoji} {plan.name}
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-3">
                {plan.blurb}
              </p>

              <div className="mx-auto mt-8 max-w-sm rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-400 p-8 text-white">
                <p className="text-sm font-medium text-white/80">{t.dailyTarget}</p>
                <p className="mt-1 text-5xl font-bold">{formatNumber(calories, lang)}</p>
                <p className="mt-1 text-sm text-white/80">{t.kcalPerDay}</p>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/20 pt-5">
                  <div>
                    <p className="text-xl font-bold">{fill(t.grams, { n: protein })}</p>
                    <p className="text-xs text-white/80">{t.protein}</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold">{fill(t.grams, { n: carbs })}</p>
                    <p className="text-xs text-white/80">{t.carbs}</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold">{fill(t.grams, { n: fat })}</p>
                    <p className="text-xs text-white/80">{t.fat}</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-white/80">
                  💧 {fill(t.water, { liters: (waterMl / 1000).toFixed(1) })}
                </p>
              </div>

              <p className="mx-auto mt-6 max-w-md leading-relaxed text-ink-3">{t.resultBody}</p>
              <StoreButtons t={store} reassurance className="mt-8" />
              <a
                href={`mailto:?subject=${encodeURIComponent(t.emailSubject)}&body=${emailBody}`}
                className="mt-3 inline-block text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
              >
                {t.emailCta}
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
            className="rounded-full px-6 py-2.5 text-sm font-medium text-ink-2 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 disabled:invisible focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            {t.back}
          </button>
          <button
            onClick={() => setStep((s) => s + 1)}
            disabled={!canContinue[step]}
            className="rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-500/20 transition-all duration-200 hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            {step === TOTAL_STEPS - 2 ? t.seePlan : t.continue}
          </button>
        </div>
      )}
    </div>
  );
}
