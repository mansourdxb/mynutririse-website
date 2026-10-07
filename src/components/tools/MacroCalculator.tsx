"use client";

import { useState } from "react";
import { LIMITS, NumberField, inRange } from "./shared";

const splits = [
  { id: "balanced", label: "Balanced", p: 30, c: 40, f: 30 },
  { id: "highprotein", label: "High Protein", p: 40, c: 30, f: 30 },
  { id: "keto", label: "Keto / Low-carb", p: 25, c: 5, f: 70 },
  { id: "endurance", label: "Endurance", p: 25, c: 50, f: 25 },
];

export function MacroCalculator() {
  const [calories, setCalories] = useState("");
  const [splitId, setSplitId] = useState("balanced");

  const cal = parseFloat(calories);
  const split = splits.find((s) => s.id === splitId)!;
  const valid = inRange(cal, LIMITS.calories);

  const protein = valid ? Math.round((cal * split.p) / 100 / 4) : null;
  const carbs = valid ? Math.round((cal * split.c) / 100 / 4) : null;
  const fat = valid ? Math.round((cal * split.f) / 100 / 9) : null;

  return (
    <div className="card p-6 sm:p-8">
      <NumberField
        label="Daily calories"
        value={calories}
        onChange={setCalories}
        placeholder="2000"
        limits={LIMITS.calories}
        unit="kcal"
      />
      <p className="mt-1.5 text-xs text-ink-3">
        Don&apos;t know yours? Use the{" "}
        <a
          href="/tools/calorie-calculator"
          className="font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
        >
          calorie calculator
        </a>{" "}
        first.
      </p>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Diet style">
        {splits.map((s) => (
          <button
            key={s.id}
            onClick={() => setSplitId(s.id)}
            aria-pressed={splitId === s.id}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
              splitId === s.id
                ? "bg-emerald-500 text-white"
                : "bg-surface-2 text-ink-2 hover:bg-emerald-50 dark:hover:bg-emerald-400/10"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-ink-3">
        {split.p}% protein · {split.c}% carbs · {split.f}% fat
      </p>

      {protein !== null ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-rose-50 dark:bg-rose-400/10 p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-2">Protein</p>
            <p className="mt-1 text-2xl font-bold text-rose-600 dark:text-rose-400">{protein}g</p>
          </div>
          <div className="rounded-2xl bg-blue-50 dark:bg-blue-400/10 p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-2">Carbs</p>
            <p className="mt-1 text-2xl font-bold text-blue-600 dark:text-blue-400">{carbs}g</p>
          </div>
          <div className="rounded-2xl bg-amber-50 dark:bg-amber-400/10 p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-2">Fat</p>
            <p className="mt-1 text-2xl font-bold text-amber-600 dark:text-amber-400">{fat}g</p>
          </div>
        </div>
      ) : (
        <p className="mt-6 text-center text-sm text-ink-3">
          Enter your daily calories to see your macro targets.
        </p>
      )}
    </div>
  );
}
