"use client";

import { useState } from "react";
import type { Messages } from "@/i18n/messages";
import { ACTIVITY_FACTORS, type Sex } from "@/lib/calc";
import { LIMITS, NumberField, TogglePills, inRange, inputClass } from "./shared";

/** State for the sex / age / height / weight (+ activity) inputs several calculators share. */
export function useBodyFields() {
  const [sex, setSex] = useState<Sex>("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState<number>(ACTIVITY_FACTORS[1]);
  const a = parseFloat(age);
  const h = parseFloat(height);
  const w = parseFloat(weight);
  const valid = inRange(a, LIMITS.age) && inRange(h, LIMITS.heightCm) && inRange(w, LIMITS.weightKg);
  return {
    values: { sex, age: a, heightCm: h, weightKg: w, activity, valid },
    fields: { sex, setSex, age, setAge, height, setHeight, weight, setWeight, activity, setActivity },
  };
}

export function BodyFields({
  fields,
  s,
  activityLabel,
  activityLevels,
}: {
  fields: ReturnType<typeof useBodyFields>["fields"];
  s: Messages["tools"]["shared"];
  /** Omit both to hide the activity select. */
  activityLabel?: string;
  activityLevels?: readonly string[];
}) {
  return (
    <>
      <TogglePills
        options={[
          { value: "male", label: s.male },
          { value: "female", label: s.female },
        ]}
        value={fields.sex}
        onChange={fields.setSex}
        ariaLabel={s.sexAria}
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <NumberField label={s.age} value={fields.age} onChange={fields.setAge} placeholder="30" limits={LIMITS.age} unit={s.units.years} rangeError={s.rangeError} />
        <NumberField label={s.heightCm} value={fields.height} onChange={fields.setHeight} placeholder="170" limits={LIMITS.heightCm} unit={s.units.cm} rangeError={s.rangeError} />
        <NumberField label={s.weightKg} value={fields.weight} onChange={fields.setWeight} placeholder="70" limits={LIMITS.weightKg} unit={s.units.kg} rangeError={s.rangeError} />
      </div>
      {activityLabel && activityLevels && (
        <label className="mt-4 block">
          <span className="mb-1.5 block text-sm font-medium text-ink-2">{activityLabel}</span>
          <select
            value={fields.activity}
            onChange={(e) => fields.setActivity(parseFloat(e.target.value))}
            className={inputClass}
          >
            {ACTIVITY_FACTORS.map((factor, i) => (
              <option key={factor} value={factor}>
                {activityLevels[i]}
              </option>
            ))}
          </select>
        </label>
      )}
    </>
  );
}

/** Large result tile. */
export function ResultTile({
  label,
  value,
  note,
  tone = "emerald",
}: {
  label: string;
  value: string;
  note?: string;
  tone?: "emerald" | "blue" | "amber" | "slate";
}) {
  const bg = {
    emerald: "bg-emerald-50 dark:bg-emerald-400/10",
    blue: "bg-blue-50 dark:bg-blue-400/10",
    amber: "bg-amber-50 dark:bg-amber-400/10",
    slate: "bg-surface-2",
  }[tone];
  const fg = {
    emerald: "text-emerald-600 dark:text-emerald-400",
    blue: "text-blue-600 dark:text-blue-400",
    amber: "text-amber-600 dark:text-amber-400",
    slate: "text-ink",
  }[tone];
  return (
    <div className={`rounded-2xl p-5 text-center ${bg}`}>
      <p className="text-xs font-medium uppercase tracking-wide text-ink-2">{label}</p>
      <p className={`mt-1 text-2xl font-bold ${fg}`}>{value}</p>
      {note && <p className="text-xs text-ink-3">{note}</p>}
    </div>
  );
}
