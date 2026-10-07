"use client";

import { useState } from "react";
import { LIMITS, NumberField, TogglePills, inRange } from "./shared";

export function IdealWeightCalculator() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [height, setHeight] = useState("");

  const h = parseFloat(height);

  let devine: number | null = null;
  let robinson: number | null = null;
  let healthyMin: number | null = null;
  let healthyMax: number | null = null;

  if (inRange(h, LIMITS.heightCm)) {
    const inchesOver5ft = Math.max(0, (h - 152.4) / 2.54);
    devine =
      sex === "male" ? 50 + 2.3 * inchesOver5ft : 45.5 + 2.3 * inchesOver5ft;
    robinson =
      sex === "male" ? 52 + 1.9 * inchesOver5ft : 49 + 1.7 * inchesOver5ft;
    // BMI 18.5–24.9 healthy range
    const m2 = Math.pow(h / 100, 2);
    healthyMin = 18.5 * m2;
    healthyMax = 24.9 * m2;
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

      <div className="mt-6">
        <NumberField
          label="Height (cm)"
          value={height}
          onChange={setHeight}
          placeholder="170"
          limits={LIMITS.heightCm}
          unit="cm"
        />
      </div>

      {devine && robinson && healthyMin && healthyMax ? (
        <div className="mt-6 space-y-3">
          <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-400/10 p-6 text-center">
            <p className="text-sm font-medium text-ink-2">
              Healthy weight range (BMI 18.5–24.9)
            </p>
            <p className="mt-1 text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {healthyMin.toFixed(0)}–{healthyMax.toFixed(0)} kg
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-surface-2 p-5 text-center">
              <p className="text-xs font-medium uppercase tracking-wide text-ink-2">
                Devine formula
              </p>
              <p className="mt-1 text-2xl font-bold text-ink">
                {devine.toFixed(1)} kg
              </p>
            </div>
            <div className="rounded-2xl bg-surface-2 p-5 text-center">
              <p className="text-xs font-medium uppercase tracking-wide text-ink-2">
                Robinson formula
              </p>
              <p className="mt-1 text-2xl font-bold text-ink">
                {robinson.toFixed(1)} kg
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="mt-6 text-center text-sm text-ink-3">
          Enter your height to see your estimated ideal weight range.
        </p>
      )}
    </div>
  );
}
