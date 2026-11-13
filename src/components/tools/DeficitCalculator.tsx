"use client";

import { useState, useSyncExternalStore } from "react";
import { formatNumber } from "@/data/facts";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { fill } from "@/i18n/rich";
import { daysBetween, deficitPlan, mifflinBmr, tdee } from "@/lib/calc";
import { BodyFields, ResultTile, useBodyFields } from "./BodyFields";
import { LIMITS, NumberField, inRange, inputClass } from "./shared";

const noopSubscribe = () => () => {};

const DATE_LOCALE: Record<Locale, string> = {
  en: "en-GB",
  ar: "ar-u-nu-latn",
  de: "de-DE",
  es: "es-ES",
  fr: "fr-FR",
  ru: "ru-RU",
};

export function DeficitCalculator({
  lang,
  t,
  s,
  activityLabel,
  activityLevels,
}: {
  lang: Locale;
  t: Messages["tools"]["deficit"]["calc"];
  s: Messages["tools"]["shared"];
  activityLabel: string;
  activityLevels: readonly string[];
}) {
  const { values: v, fields } = useBodyFields();
  const [target, setTarget] = useState("");
  const [date, setDate] = useState("");
  // "Today" is only known in the browser; the server snapshot is null so
  // nothing date-based is pre-rendered (no hydration mismatch).
  const todayKey = useSyncExternalStore(noopSubscribe, () => new Date().toDateString(), () => null);
  const today = todayKey ? new Date(todayKey) : null;

  const targetKg = parseFloat(target);
  const targetDate = date ? new Date(`${date}T12:00:00`) : null;
  const days = today && targetDate ? daysBetween(today, targetDate) : NaN;

  const ready = v.valid && inRange(targetKg, LIMITS.weightKg) && today && targetDate;
  const maintenance = v.valid ? tdee(mifflinBmr(v.sex, v.age, v.heightCm, v.weightKg), v.activity) : 0;
  const plan = ready && days > 0 ? deficitPlan(maintenance, v.sex, v.weightKg, targetKg, days) : null;

  const n = (x: number) => formatNumber(Math.round(x), lang);
  const kg = (x: number) => x.toLocaleString(DATE_LOCALE[lang], { maximumFractionDigits: 2 });
  const fmtDate = (d: Date) => d.toLocaleDateString(DATE_LOCALE[lang], { day: "numeric", month: "long", year: "numeric" });
  const addDays = (d: Date, k: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + k);

  let result: React.ReactNode = <p className="mt-6 text-center text-sm text-ink-3">{t.empty}</p>;
  if (ready && days <= 0) {
    result = <p className="mt-6 text-center text-sm text-rose-600 dark:text-rose-400">{t.pastDate}</p>;
  } else if (plan?.kind === "noLoss") {
    result = <p className="mt-6 text-center text-sm text-ink-2">{t.noLoss}</p>;
  } else if (plan?.kind === "belowFloor") {
    result = <p className="mt-6 text-center text-sm text-ink-2">{fill(t.belowFloor, { floor: n(plan.floor) })}</p>;
  } else if (plan?.kind === "plan" && today) {
    result = (
      <div className="mt-6 space-y-3">
        <div className="grid gap-3 sm:grid-cols-3">
          <ResultTile label={t.eat} value={n(plan.dailyCalories)} note={s.kcalPerDay} />
          <ResultTile label={t.maintenance} value={n(maintenance)} note={s.kcalPerDay} tone="slate" />
          <ResultTile
            label={t.weekly}
            value={fill(t.kgPerWeek, { n: kg(plan.weeklyLossKg) })}
            note={fill(t.deficitNote, { n: n(plan.dailyDeficit) })}
            tone="blue"
          />
        </div>
        {plan.floorApplied && (
          <p className="rounded-xl bg-amber-50 p-4 text-sm text-ink-2 dark:bg-amber-400/10">
            {fill(t.floorApplied, {
              floor: n(plan.dailyCalories),
              date: fmtDate(addDays(today, plan.daysNeeded)),
            })}
          </p>
        )}
        {plan.aggressive && (
          <p className="rounded-xl bg-rose-50 p-4 text-sm text-ink-2 dark:bg-rose-400/10">{t.aggressive}</p>
        )}
        {!plan.floorApplied && !plan.aggressive && (
          <p className="text-center text-sm text-ink-3">{fill(t.onTrack, { date: fmtDate(targetDate!) })}</p>
        )}
      </div>
    );
  }

  return (
    <div className="card p-6 sm:p-8">
      <BodyFields fields={fields} s={s} activityLabel={activityLabel} activityLevels={activityLevels} />
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <NumberField
          label={t.targetWeight}
          value={target}
          onChange={setTarget}
          placeholder="65"
          limits={LIMITS.weightKg}
          unit={s.units.kg}
          rangeError={s.rangeError}
        />
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink-2">{t.targetDate}</span>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
        </label>
      </div>
      {result}
    </div>
  );
}
