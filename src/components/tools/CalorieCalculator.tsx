"use client";

import { useState } from "react";
import {
  LIMITS,
  NumberField,
  TogglePills,
  inRange,
  inputClass,
} from "./shared";

const activityLevels = [
  { value: 1.2, label: "Sedentary (little or no exercise)" },
  { value: 1.375, label: "Lightly active (1–3 days/week)" },
  { value: 1.55, label: "Moderately active (3–5 days/week)" },
  { value: 1.725, label: "Very active (6–7 days/week)" },
  { value: 1.9, label: "Extra active (physical job + training)" },
];

export function CalorieCalculator() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState(1.375);

  const a = parseFloat(age);
  const h = parseFloat(height);
  const w = parseFloat(weight);

  let maintenance: number | null = null;
  if (
    inRange(a, LIMITS.age) &&
    inRange(h, LIMITS.heightCm) &&
    inRange(w, LIMITS.weightKg)
  ) {
    // Mifflin–St Jeor equation (metric)
    const bmr = 10 * w + 6.25 * h - 5 * a + (sex === "male" ? 5 : -161);
    maintenance = Math.round(bmr * activity);
  }

  return (
    <div className="card p-6 sm:p-8">
      <TogglePills
        options={[
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ]}
        value={sex}
        onChange={setSex}
        ariaLabel="Sex"
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <NumberField
          label="Age"
          value={age}
          onChange={setAge}
          placeholder="30"
          limits={LIMITS.age}
          unit="years"
        />
        <NumberField
          label="Height (cm)"
          value={height}
          onChange={setHeight}
          placeholder="170"
          limits={LIMITS.heightCm}
          unit="cm"
        />
        <NumberField
          label="Weight (kg)"
          value={weight}
          onChange={setWeight}
          placeholder="70"
          limits={LIMITS.weightKg}
          unit="kg"
        />
      </div>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-medium text-ink-2">
          Activity level
        </span>
        <select
          value={activity}
          onChange={(e) => setActivity(parseFloat(e.target.value))}
          className={inputClass}
        >
          {activityLevels.map((level) => (
            <option key={level.value} value={level.value}>
              {level.label}
            </option>
          ))}
        </select>
      </label>

      {maintenance ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-blue-50 dark:bg-blue-400/10 p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-2">
              Lose weight
            </p>
            <p className="mt-1 text-2xl font-bold text-blue-600 dark:text-blue-400">
              {Math.max(1200, maintenance - 500).toLocaleString()}
            </p>
            <p className="text-xs text-ink-3">kcal/day</p>
          </div>
          <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-400/10 p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-2">
              Maintain
            </p>
            <p className="mt-1 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              {maintenance.toLocaleString()}
            </p>
            <p className="text-xs text-ink-3">kcal/day</p>
          </div>
          <div className="rounded-2xl bg-amber-50 dark:bg-amber-400/10 p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-2">
              Gain muscle
            </p>
            <p className="mt-1 text-2xl font-bold text-amber-600 dark:text-amber-400">
              {(maintenance + 300).toLocaleString()}
            </p>
            <p className="text-xs text-ink-3">kcal/day</p>
          </div>
        </div>
      ) : (
        <p className="mt-6 text-center text-sm text-ink-3">
          Fill in your details to see your daily calorie targets.
        </p>
      )}
    </div>
  );
}
