"use client";

import { useState } from "react";
import { localePath, type Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { fill, rich } from "@/i18n/rich";
import { LIMITS, NumberField, inRange } from "./shared";

const splits = [
  { id: "balanced", p: 30, c: 40, f: 30 },
  { id: "highprotein", p: 40, c: 30, f: 30 },
  { id: "keto", p: 25, c: 5, f: 70 },
  { id: "endurance", p: 25, c: 50, f: 25 },
] as const;

type SplitId = (typeof splits)[number]["id"];

export function MacroCalculator({
  lang,
  t,
  s: sh,
}: {
  lang: Locale;
  t: Messages["tools"]["macro"]["calc"];
  s: Messages["tools"]["shared"];
}) {
  const [calories, setCalories] = useState("");
  const [splitId, setSplitId] = useState<SplitId>("balanced");

  const cal = parseFloat(calories);
  const split = splits.find((s) => s.id === splitId)!;
  const valid = inRange(cal, LIMITS.calories);

  const protein = valid ? Math.round((cal * split.p) / 100 / 4) : null;
  const carbs = valid ? Math.round((cal * split.c) / 100 / 4) : null;
  const fat = valid ? Math.round((cal * split.f) / 100 / 9) : null;

  return (
    <div className="card p-6 sm:p-8">
      <NumberField
        label={t.caloriesLabel}
        value={calories}
        onChange={setCalories}
        placeholder="2000"
        limits={LIMITS.calories}
        unit={sh.units.kcal}
        rangeError={sh.rangeError}
      />
      <p className="mt-1.5 text-xs text-ink-3">
        {rich(t.hint, {
          link: (c) => (
            <a
              href={localePath(lang, "/tools/calorie-calculator")}
              className="font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
            >
              {c}
            </a>
          ),
        })}
      </p>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label={t.dietAria}>
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
            {t.splits[s.id]}
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-ink-3">
        {fill(t.splitSummary, { p: split.p, c: split.c, f: split.f })}
      </p>

      {protein !== null ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-rose-50 dark:bg-rose-400/10 p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-2">{t.protein}</p>
            <p className="mt-1 text-2xl font-bold text-rose-600 dark:text-rose-400">{fill(t.grams, { n: protein })}</p>
          </div>
          <div className="rounded-2xl bg-blue-50 dark:bg-blue-400/10 p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-2">{t.carbs}</p>
            <p className="mt-1 text-2xl font-bold text-blue-600 dark:text-blue-400">{fill(t.grams, { n: carbs ?? "" })}</p>
          </div>
          <div className="rounded-2xl bg-amber-50 dark:bg-amber-400/10 p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-2">{t.fat}</p>
            <p className="mt-1 text-2xl font-bold text-amber-600 dark:text-amber-400">{fill(t.grams, { n: fat ?? "" })}</p>
          </div>
        </div>
      ) : (
        <p className="mt-6 text-center text-sm text-ink-3">
          {t.empty}
        </p>
      )}
    </div>
  );
}
