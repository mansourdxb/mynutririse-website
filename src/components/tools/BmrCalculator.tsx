"use client";

import { useState } from "react";
import { LIMITS, NumberField, TogglePills, inRange } from "./shared";

export function BmrCalculator() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const a = parseFloat(age);
  const h = parseFloat(height);
  const w = parseFloat(weight);

  let bmr: number | null = null;
  if (
    inRange(a, LIMITS.age) &&
    inRange(h, LIMITS.heightCm) &&
    inRange(w, LIMITS.weightKg)
  ) {
    bmr = Math.round(10 * w + 6.25 * h - 5 * a + (sex === "male" ? 5 : -161));
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

      {bmr ? (
        <div className="mt-6 rounded-2xl bg-emerald-50 dark:bg-emerald-400/10 p-6 text-center">
          <p className="text-sm font-medium text-ink-2">Your BMR</p>
          <p className="mt-1 text-5xl font-bold text-ink">
            {bmr.toLocaleString()}
          </p>
          <p className="mt-2 text-sm text-ink-3">
            kcal/day burned at complete rest (Mifflin–St Jeor)
          </p>
        </div>
      ) : (
        <p className="mt-6 text-center text-sm text-ink-3">
          Fill in your details to see your basal metabolic rate.
        </p>
      )}
    </div>
  );
}
