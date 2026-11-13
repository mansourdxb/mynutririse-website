"use client";

import { formatNumber } from "@/data/facts";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { ACTIVITY_FACTORS, mifflinBmr, tdee } from "@/lib/calc";
import { BodyFields, ResultTile, useBodyFields } from "./BodyFields";

export function TdeeCalculator({
  lang,
  t,
  s,
  activityLevels,
}: {
  lang: Locale;
  t: Messages["tools"]["tdee"]["calc"];
  s: Messages["tools"]["shared"];
  /** Labels for ACTIVITY_FACTORS, shared with the calorie calculator. */
  activityLevels: readonly string[];
}) {
  const { values: v, fields } = useBodyFields();
  const bmr = v.valid ? mifflinBmr(v.sex, v.age, v.heightCm, v.weightKg) : null;
  const n = (x: number) => formatNumber(Math.round(x), lang);

  return (
    <div className="card p-6 sm:p-8">
      <BodyFields fields={fields} s={s} />
      {bmr ? (
        <div className="mt-6 space-y-4">
          <ResultTile label={t.bmr} value={n(bmr)} note={t.bmrNote} tone="slate" />
          <div className="overflow-hidden rounded-2xl ring-1 ring-line">
            <table className="w-full text-sm">
              <caption className="bg-emerald-50/60 px-4 py-3 text-start font-semibold text-ink-2 dark:bg-emerald-400/10">
                {t.tableHeading}
              </caption>
              <tbody>
                {ACTIVITY_FACTORS.map((factor, i) => (
                  <tr key={factor} className="border-t border-line">
                    <td className="px-4 py-3 text-ink-2">{activityLevels[i]}</td>
                    <td className="px-4 py-3 text-end font-semibold tabular-nums text-ink">
                      {n(tdee(bmr, factor))} <span className="font-normal text-ink-3">{s.kcalPerDay}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="mt-6 text-center text-sm text-ink-3">{t.empty}</p>
      )}
    </div>
  );
}
