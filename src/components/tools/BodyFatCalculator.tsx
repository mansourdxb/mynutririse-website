"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { fill } from "@/i18n/rich";
import { bodyFatCategory, navyBodyFat, type Sex } from "@/lib/calc";
import { ResultTile } from "./BodyFields";
import { LIMITS, NumberField, TogglePills, inRange } from "./shared";

export function BodyFatCalculator({
  lang,
  t,
  s,
}: {
  lang: Locale;
  t: Messages["tools"]["bodyFat"]["calc"];
  s: Messages["tools"]["shared"];
}) {
  const [sex, setSex] = useState<Sex>("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [neck, setNeck] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");

  const h = parseFloat(height);
  const w = parseFloat(weight);
  const nk = parseFloat(neck);
  const ws = parseFloat(waist);
  const hp = parseFloat(hip);
  const filled =
    inRange(h, LIMITS.heightCm) &&
    inRange(nk, LIMITS.neckCm) &&
    inRange(ws, LIMITS.waistCm) &&
    (sex === "male" || inRange(hp, LIMITS.hipCm));
  const bf = filled ? navyBodyFat(sex, h, nk, ws, sex === "female" ? hp : 0) : null;
  const hasWeight = inRange(w, LIMITS.weightKg);
  const one = (x: number) => x.toLocaleString(lang === "ar" ? "ar-u-nu-latn" : lang, { maximumFractionDigits: 1, minimumFractionDigits: 1 });

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
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <NumberField label={s.heightCm} value={height} onChange={setHeight} placeholder="170" limits={LIMITS.heightCm} unit={s.units.cm} rangeError={s.rangeError} />
        <NumberField label={t.weightOptional} value={weight} onChange={setWeight} placeholder="70" limits={LIMITS.weightKg} unit={s.units.kg} rangeError={s.rangeError} />
        <NumberField label={t.neck} value={neck} onChange={setNeck} placeholder="38" limits={LIMITS.neckCm} unit={s.units.cm} rangeError={s.rangeError} />
        <NumberField label={t.waist} value={waist} onChange={setWaist} placeholder="85" limits={LIMITS.waistCm} unit={s.units.cm} rangeError={s.rangeError} />
        {sex === "female" && (
          <NumberField label={t.hip} value={hip} onChange={setHip} placeholder="98" limits={LIMITS.hipCm} unit={s.units.cm} rangeError={s.rangeError} />
        )}
      </div>
      <p className="mt-3 text-xs text-ink-3">{sex === "male" ? t.howToMeasureMen : t.howToMeasureWomen}</p>

      {bf !== null ? (
        <div className="mt-6 space-y-3">
          <ResultTile
            label={t.result}
            value={`${one(bf)}%`}
            note={t.categories[bodyFatCategory(sex, bf)]}
          />
          {hasWeight && (
            <div className="grid gap-3 sm:grid-cols-2">
              <ResultTile label={t.fatMass} value={fill(t.kgValue, { n: one((w * bf) / 100) })} tone="slate" />
              <ResultTile label={t.leanMass} value={fill(t.kgValue, { n: one(w - (w * bf) / 100) })} tone="slate" />
            </div>
          )}
        </div>
      ) : (
        <p className="mt-6 text-center text-sm text-ink-3">{filled ? t.invalid : t.empty}</p>
      )}
    </div>
  );
}
