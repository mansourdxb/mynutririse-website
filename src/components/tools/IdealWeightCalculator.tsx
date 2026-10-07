"use client";

import { useState } from "react";
import type { Messages } from "@/i18n/messages";
import { fill } from "@/i18n/rich";
import { LIMITS, NumberField, TogglePills, inRange } from "./shared";

export function IdealWeightCalculator({
  t,
  s,
}: {
  t: Messages["tools"]["idealWeight"]["calc"];
  s: Messages["tools"]["shared"];
}) {
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
          { value: "male", label: s.male },
          { value: "female", label: s.female },
        ]}
        value={sex}
        onChange={setSex}
        ariaLabel={s.sexAria}
      />

      <div className="mt-6">
        <NumberField
          label={s.heightCm}
          value={height}
          onChange={setHeight}
          placeholder="170"
          limits={LIMITS.heightCm}
          unit={s.units.cm}
          rangeError={s.rangeError}
        />
      </div>

      {devine && robinson && healthyMin && healthyMax ? (
        <div className="mt-6 space-y-3">
          <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-400/10 p-6 text-center">
            <p className="text-sm font-medium text-ink-2">
              {t.healthyRange}
            </p>
            <p className="mt-1 text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {fill(t.rangeValue, { min: healthyMin.toFixed(0), max: healthyMax.toFixed(0) })}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-surface-2 p-5 text-center">
              <p className="text-xs font-medium uppercase tracking-wide text-ink-2">
                {t.devine}
              </p>
              <p className="mt-1 text-2xl font-bold text-ink">
                {fill(t.formulaValue, { value: devine.toFixed(1) })}
              </p>
            </div>
            <div className="rounded-2xl bg-surface-2 p-5 text-center">
              <p className="text-xs font-medium uppercase tracking-wide text-ink-2">
                {t.robinson}
              </p>
              <p className="mt-1 text-2xl font-bold text-ink">
                {fill(t.formulaValue, { value: robinson.toFixed(1) })}
              </p>
            </div>
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
