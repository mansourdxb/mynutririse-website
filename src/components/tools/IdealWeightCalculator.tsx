"use client";

import { useState } from "react";
import type { Messages } from "@/i18n/messages";
import { fill } from "@/i18n/rich";
import { idealWeights, healthyWeightRange } from "@/lib/calc";
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

  const valid = inRange(h, LIMITS.heightCm);
  const formulas = valid ? idealWeights(sex, h) : null;
  const healthy = valid ? healthyWeightRange(h) : null;

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

      {formulas && healthy ? (
        <div className="mt-6 space-y-3">
          <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-400/10 p-6 text-center">
            <p className="text-sm font-medium text-ink-2">
              {t.healthyRange}
            </p>
            <p className="mt-1 text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {fill(t.rangeValue, { min: healthy.min.toFixed(0), max: healthy.max.toFixed(0) })}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {(["devine", "robinson", "miller"] as const).map((key) => (
              <div key={key} className="rounded-2xl bg-surface-2 p-5 text-center">
                <p className="text-xs font-medium uppercase tracking-wide text-ink-2">
                  {t[key]}
                </p>
                <p className="mt-1 text-2xl font-bold text-ink">
                  {fill(t.formulaValue, { value: formulas[key].toFixed(1) })}
                </p>
              </div>
            ))}
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
