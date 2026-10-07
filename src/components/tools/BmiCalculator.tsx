"use client";

import { useState } from "react";
import type { Messages } from "@/i18n/messages";
import { LIMITS, NumberField, TogglePills, inRange } from "./shared";

const categories = [
  { max: 18.5, key: "underweight", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-400/10" },
  { max: 25, key: "healthy", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-400/10" },
  { max: 30, key: "overweight", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-400/10" },
  { max: Infinity, key: "obese", color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-400/10" },
] as const;

export function BmiCalculator({
  t,
  s,
}: {
  t: Messages["tools"]["bmi"]["calc"];
  s: Messages["tools"]["shared"];
}) {
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
    <div className="card p-6 sm:p-8">
      <TogglePills
        options={[
          { value: "metric", label: t.metric },
          { value: "imperial", label: t.imperial },
        ]}
        value={unit}
        onChange={setUnit}
        ariaLabel={t.unitsAria}
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <NumberField
          label={unit === "metric" ? t.heightMetric : t.heightImperial}
          value={height}
          onChange={setHeight}
          placeholder={unit === "metric" ? "170" : "67"}
          limits={heightLimits}
          unit={unit === "metric" ? s.units.cm : s.units.in}
          rangeError={s.rangeError}
        />
        <NumberField
          label={unit === "metric" ? t.weightMetric : t.weightImperial}
          value={weight}
          onChange={setWeight}
          placeholder={unit === "metric" ? "70" : "154"}
          limits={weightLimits}
          unit={unit === "metric" ? s.units.kg : s.units.lb}
          rangeError={s.rangeError}
        />
      </div>

      {bmi && category ? (
        <div className={`mt-6 rounded-2xl ${category.bg} p-6 text-center`}>
          <p className="text-sm font-medium text-ink-2">{t.result}</p>
          <p className="mt-1 text-5xl font-bold text-ink">
            {bmi.toFixed(1)}
          </p>
          <p className={`mt-2 text-lg font-semibold ${category.color}`}>
            {t.categories[category.key]}
          </p>
        </div>
      ) : (
        <p className="mt-6 text-center text-sm text-ink-3">
          {t.empty}
        </p>
      )}
    </div>
  );
}
