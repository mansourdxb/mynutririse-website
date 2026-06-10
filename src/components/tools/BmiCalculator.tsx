"use client";

import { useState } from "react";
import { LIMITS, NumberField, TogglePills, inRange } from "./shared";

const categories = [
  { max: 18.5, label: "Underweight", color: "text-blue-600", bg: "bg-blue-50" },
  { max: 25, label: "Healthy weight", color: "text-emerald-600", bg: "bg-emerald-50" },
  { max: 30, label: "Overweight", color: "text-amber-600", bg: "bg-amber-50" },
  { max: Infinity, label: "Obese", color: "text-rose-600", bg: "bg-rose-50" },
];

export function BmiCalculator() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const h = parseFloat(height);
  const w = parseFloat(weight);

  const heightLimits = unit === "metric" ? LIMITS.heightCm : LIMITS.heightIn;
  const weightLimits = unit === "metric" ? LIMITS.weightKg : LIMITS.weightLb;

  let bmi: number | null = null;
  if (inRange(h, heightLimits) && inRange(w, weightLimits)) {
    bmi =
      unit === "metric"
        ? w / Math.pow(h / 100, 2)
        : (703 * w) / Math.pow(h, 2);
  }

  const category = bmi ? categories.find((c) => (bmi as number) < c.max) : null;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
      <TogglePills
        options={[
          { value: "metric", label: "Metric (cm, kg)" },
          { value: "imperial", label: "Imperial (in, lb)" },
        ]}
        value={unit}
        onChange={setUnit}
        ariaLabel="Units"
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <NumberField
          label={`Height (${unit === "metric" ? "cm" : "inches"})`}
          value={height}
          onChange={setHeight}
          placeholder={unit === "metric" ? "170" : "67"}
          limits={heightLimits}
          unit={unit === "metric" ? "cm" : "in"}
        />
        <NumberField
          label={`Weight (${unit === "metric" ? "kg" : "lb"})`}
          value={weight}
          onChange={setWeight}
          placeholder={unit === "metric" ? "70" : "154"}
          limits={weightLimits}
          unit={unit === "metric" ? "kg" : "lb"}
        />
      </div>

      {bmi && category ? (
        <div className={`mt-6 rounded-2xl ${category.bg} p-6 text-center`}>
          <p className="text-sm font-medium text-slate-600">Your BMI</p>
          <p className="mt-1 text-5xl font-bold text-slate-800">
            {bmi.toFixed(1)}
          </p>
          <p className={`mt-2 text-lg font-semibold ${category.color}`}>
            {category.label}
          </p>
        </div>
      ) : (
        <p className="mt-6 text-center text-sm text-slate-500">
          Enter your height and weight to see your BMI.
        </p>
      )}
    </div>
  );
}
