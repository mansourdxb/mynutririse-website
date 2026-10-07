"use client";

import { fill } from "@/i18n/rich";

// Sensible physiological ranges shared by all calculators and the quiz.
export const LIMITS = {
  age: [13, 100],
  heightCm: [100, 250],
  heightIn: [39, 98],
  weightKg: [30, 300],
  weightLb: [66, 660],
  calories: [800, 10000],
} as const;

export type Range = readonly [number, number];

export function inRange(value: number, [min, max]: Range) {
  return value >= min && value <= max;
}

export const inputClass =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-ink-3 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-400/20";

export function NumberField({
  label,
  value,
  onChange,
  placeholder,
  limits,
  unit,
  rangeError = "Enter {min}–{max} {unit}",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  limits: Range;
  unit?: string;
  /** Validation template, e.g. tools.shared.rangeError: "Enter {min}–{max} {unit}". */
  rangeError?: string;
}) {
  const parsed = parseFloat(value);
  const showError = value !== "" && !Number.isNaN(parsed) && !inRange(parsed, limits);

  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-2">
        {label}
      </span>
      <input
        type="number"
        inputMode="decimal"
        min={limits[0]}
        max={limits[1]}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={showError}
        className={`${inputClass} ${showError ? "border-rose-300 dark:border-rose-400/30 focus:border-rose-400 focus:ring-rose-200 dark:focus:ring-rose-400/20" : ""}`}
      />
      {showError && (
        <span className="mt-1 block text-xs text-rose-500 dark:text-rose-400">
          {fill(rangeError, { min: limits[0], max: limits[1], unit: unit ?? "" }).trim()}
        </span>
      )}
    </label>
  );
}

export function TogglePills<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  ariaLabel: string;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={ariaLabel}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          aria-pressed={value === option.value}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
            value === option.value
              ? "bg-emerald-500 text-white"
              : "bg-surface-2 text-ink-2 hover:bg-emerald-50 dark:hover:bg-emerald-400/10"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
