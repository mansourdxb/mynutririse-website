"use client";

import { useState } from "react";
import type { Messages } from "@/i18n/messages";
import {
  LIMITS,
  NumberField,
  TogglePills,
  inRange,
  inputClass,
} from "./shared";
import { ACTIVITY_FACTORS, calorieTargets, mifflinBmr, tdee } from "@/lib/calc";

// Labels come from t.activityLevels, in the same order.
const activityLevels = ACTIVITY_FACTORS;

export function CalorieCalculator({
  t,
  s,
}: {
  t: Messages["tools"]["calorie"]["calc"];
  s: Messages["tools"]["shared"];
}) {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState<number>(ACTIVITY_FACTORS[1]);

  const a = parseFloat(age);
  const h = parseFloat(height);
  const w = parseFloat(weight);

  let maintenance: number | null = null;
  if (
    inRange(a, LIMITS.age) &&
    inRange(h, LIMITS.heightCm) &&
    inRange(w, LIMITS.weightKg)
  ) {
    maintenance = Math.round(tdee(mifflinBmr(sex, a, h, w), activity));
  }

  const targets = maintenance ? calorieTargets(maintenance, sex) : null;

  return (
    <div className="card p-6 sm:p-8">
      <TogglePills
        options={[
          { value: "male", label: s.male },
          { value: "female", label: s.female },
        ]}
        value={sex}
        onChange={setSex}
        ariaLabel={s.sexAria}
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <NumberField
          label={s.age}
          value={age}
          onChange={setAge}
          placeholder="30"
          limits={LIMITS.age}
          unit={s.units.years}
          rangeError={s.rangeError}
        />
        <NumberField
          label={s.heightCm}
          value={height}
          onChange={setHeight}
          placeholder="170"
          limits={LIMITS.heightCm}
          unit={s.units.cm}
          rangeError={s.rangeError}
        />
        <NumberField
          label={s.weightKg}
          value={weight}
          onChange={setWeight}
          placeholder="70"
          limits={LIMITS.weightKg}
          unit={s.units.kg}
          rangeError={s.rangeError}
        />
      </div>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-medium text-ink-2">
          {t.activityLabel}
        </span>
        <select
          value={activity}
          onChange={(e) => setActivity(parseFloat(e.target.value))}
          className={inputClass}
        >
          {activityLevels.map((level, i) => (
            <option key={level} value={level}>
              {t.activityLevels[i]}
            </option>
          ))}
        </select>
      </label>

      {targets ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-blue-50 dark:bg-blue-400/10 p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-2">
              {t.lose}
            </p>
            <p className="mt-1 text-2xl font-bold text-blue-600 dark:text-blue-400">
              {targets.lose.toLocaleString()}
            </p>
            <p className="text-xs text-ink-3">{s.kcalPerDay}</p>
          </div>
          <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-400/10 p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-2">
              {t.maintain}
            </p>
            <p className="mt-1 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              {targets.maintain.toLocaleString()}
            </p>
            <p className="text-xs text-ink-3">{s.kcalPerDay}</p>
          </div>
          <div className="rounded-2xl bg-amber-50 dark:bg-amber-400/10 p-5 text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-2">
              {t.gain}
            </p>
            <p className="mt-1 text-2xl font-bold text-amber-600 dark:text-amber-400">
              {targets.gain.toLocaleString()}
            </p>
            <p className="text-xs text-ink-3">{s.kcalPerDay}</p>
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
