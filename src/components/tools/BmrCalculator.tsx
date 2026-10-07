"use client";

import { useState } from "react";
import type { Messages } from "@/i18n/messages";
import { LIMITS, NumberField, TogglePills, inRange } from "./shared";

export function BmrCalculator({
  t,
  s,
}: {
  t: Messages["tools"]["bmr"]["calc"];
  s: Messages["tools"]["shared"];
}) {
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

      {bmr ? (
        <div className="mt-6 rounded-2xl bg-emerald-50 dark:bg-emerald-400/10 p-6 text-center">
          <p className="text-sm font-medium text-ink-2">{t.result}</p>
          <p className="mt-1 text-5xl font-bold text-ink">
            {bmr.toLocaleString()}
          </p>
          <p className="mt-2 text-sm text-ink-3">
            {t.resultNote}
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
