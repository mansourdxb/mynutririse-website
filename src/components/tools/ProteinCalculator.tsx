"use client";

import { useState } from "react";
import { formatNumber } from "@/data/facts";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { fill } from "@/i18n/rich";
import { PROTEIN_G_PER_KG, proteinRange, type ProteinGoal } from "@/lib/calc";
import { ResultTile } from "./BodyFields";
import { LIMITS, NumberField, TogglePills, inRange, inputClass } from "./shared";

const goals = Object.keys(PROTEIN_G_PER_KG) as ProteinGoal[];
const LB_PER_KG = 2.20462;

export function ProteinCalculator({
  lang,
  t,
  s,
}: {
  lang: Locale;
  t: Messages["tools"]["protein"]["calc"];
  s: Messages["tools"]["shared"];
}) {
  const [unit, setUnit] = useState<"kg" | "lb">("kg");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState<ProteinGoal>("muscle");
  const [meals, setMeals] = useState(4);

  const w = parseFloat(weight);
  const limits = unit === "kg" ? LIMITS.weightKg : LIMITS.weightLb;
  const kg = inRange(w, limits) ? (unit === "kg" ? w : w / LB_PER_KG) : null;
  const range = kg ? proteinRange(kg, goal) : null;
  const [lo, hi] = PROTEIN_G_PER_KG[goal];
  const dec = (x: number) => x.toLocaleString(lang === "ar" ? "ar-u-nu-latn" : lang, { maximumFractionDigits: 1 });

  return (
    <div className="card p-6 sm:p-8">
      <TogglePills
        options={[
          { value: "kg", label: s.units.kg },
          { value: "lb", label: s.units.lb },
        ]}
        value={unit}
        onChange={(u) => {
          setUnit(u);
          setWeight("");
        }}
        ariaLabel={t.unitsAria}
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <NumberField
          label={unit === "kg" ? s.weightKg : t.weightLb}
          value={weight}
          onChange={setWeight}
          placeholder={unit === "kg" ? "70" : "155"}
          limits={limits}
          unit={unit === "kg" ? s.units.kg : s.units.lb}
          rangeError={s.rangeError}
        />
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink-2">{t.mealsLabel}</span>
          <select value={meals} onChange={(e) => setMeals(Number(e.target.value))} className={inputClass}>
            {[3, 4, 5].map((m) => (
              <option key={m} value={m}>
                {fill(t.mealsOption, { n: m })}
              </option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-2 text-sm font-medium text-ink-2">{t.goalLabel}</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {goals.map((g) => (
            <label
              key={g}
              className={`flex cursor-pointer gap-3 rounded-xl p-3 ring-1 transition-colors ${
                goal === g ? "bg-emerald-50 ring-emerald-400 dark:bg-emerald-400/10" : "ring-line hover:bg-surface-2"
              }`}
            >
              <input
                type="radio"
                name="protein-goal"
                value={g}
                checked={goal === g}
                onChange={() => setGoal(g)}
                className="mt-1 accent-emerald-600"
              />
              <span>
                <span className="block text-sm font-semibold text-ink">{t.goals[g].label}</span>
                <span className="block text-xs text-ink-3">{t.goals[g].description}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {range ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <ResultTile
            label={t.daily}
            value={fill(t.gramsRange, { min: formatNumber(range.min, lang), max: formatNumber(range.max, lang) })}
            note={fill(t.perKg, { lo: dec(lo), hi: dec(hi) })}
          />
          <ResultTile
            label={t.perMeal}
            value={fill(t.gramsRange, {
              min: formatNumber(Math.round(range.min / meals), lang),
              max: formatNumber(Math.round(range.max / meals), lang),
            })}
            note={fill(t.perMealNote, { n: meals })}
            tone="slate"
          />
        </div>
      ) : (
        <p className="mt-6 text-center text-sm text-ink-3">{t.empty}</p>
      )}
    </div>
  );
}
