/**
 * Every formula behind the free calculators, in one place and unit-tested
 * (calc.test.ts). Inputs are metric; components convert before calling.
 * No rounding happens here unless a function says so.
 */

export type Sex = "male" | "female";

/* ------------------------------------------------------------------ */
/*  Energy                                                             */
/* ------------------------------------------------------------------ */

/**
 * Mifflin–St Jeor resting energy expenditure, kcal/day.
 * Mifflin MD et al., Am J Clin Nutr 1990;51:241–247.
 */
export function mifflinBmr(sex: Sex, age: number, heightCm: number, weightKg: number): number {
  return 10 * weightKg + 6.25 * heightCm - 5 * age + (sex === "male" ? 5 : -161);
}

/** Activity multipliers, sedentary → extra active. Same order as the UI lists. */
export const ACTIVITY_FACTORS = [1.2, 1.375, 1.55, 1.725, 1.9] as const;

/** Total daily energy expenditure: BMR × activity factor. */
export function tdee(bmr: number, activityFactor: number): number {
  return bmr * activityFactor;
}

/**
 * Lowest daily intake the tools will ever suggest without medical
 * supervision: 1,200 kcal for women, 1,500 kcal for men.
 */
export const CALORIE_FLOOR: Record<Sex, number> = { female: 1200, male: 1500 };

/** Deficit for ~0.5 kg/week and surplus for a lean gain, kcal/day. */
export const STANDARD_DEFICIT = 500;
export const STANDARD_SURPLUS = 300;

/** Lose / maintain / gain targets from maintenance calories, rounded, floor applied. */
export function calorieTargets(maintenance: number, sex: Sex) {
  const m = Math.round(maintenance);
  return {
    lose: Math.max(CALORIE_FLOOR[sex], m - STANDARD_DEFICIT),
    maintain: m,
    gain: m + STANDARD_SURPLUS,
  };
}

/** Approximate energy in 1 kg of body weight change (the "7,700 kcal rule"). */
export const KCAL_PER_KG = 7700;

export type DeficitPlan =
  | { kind: "invalid" }
  | { kind: "noLoss" }
  | { kind: "belowFloor"; floor: number }
  | {
      kind: "plan";
      /** Suggested daily intake, never below the floor. */
      dailyCalories: number;
      /** Daily deficit at that intake. */
      dailyDeficit: number;
      /** True when the date would need fewer calories than the floor. */
      floorApplied: boolean;
      weeklyLossKg: number;
      /** Days to reach the target at this intake (≥ requested days when floorApplied). */
      daysNeeded: number;
      /** Weekly loss above 1% of current body weight. */
      aggressive: boolean;
    };

/**
 * Daily calories to go from currentKg to targetKg in `days` days, using the
 * 7,700 kcal/kg approximation and never going below the calorie floor.
 */
export function deficitPlan(
  maintenance: number,
  sex: Sex,
  currentKg: number,
  targetKg: number,
  days: number,
): DeficitPlan {
  if (!(days > 0) || !(maintenance > 0) || !(currentKg > 0) || !(targetKg > 0)) return { kind: "invalid" };
  if (targetKg >= currentKg) return { kind: "noLoss" };
  const floor = CALORIE_FLOOR[sex];
  const toLose = currentKg - targetKg;
  const raw = maintenance - (toLose * KCAL_PER_KG) / days;
  const dailyCalories = Math.round(Math.max(floor, raw));
  const dailyDeficit = Math.round(maintenance) - dailyCalories;
  if (dailyDeficit <= 0) return { kind: "belowFloor", floor };
  const weeklyLossKg = (dailyDeficit * 7) / KCAL_PER_KG;
  return {
    kind: "plan",
    dailyCalories,
    dailyDeficit,
    floorApplied: raw < floor,
    weeklyLossKg,
    daysNeeded: Math.ceil((toLose * KCAL_PER_KG) / dailyDeficit),
    aggressive: weeklyLossKg > currentKg * 0.01,
  };
}

/** Whole days from `from` to `to` (dates only, time of day ignored). */
export function daysBetween(from: Date, to: Date): number {
  const a = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate());
  const b = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());
  return Math.round((b - a) / 86_400_000);
}

/* ------------------------------------------------------------------ */
/*  Macros and protein                                                 */
/* ------------------------------------------------------------------ */

export const KCAL_PER_GRAM = { protein: 4, carbs: 4, fat: 9 } as const;

/** Grams of each macro for a calorie total and a percentage split. Rounded. */
export function macroGrams(calories: number, split: { p: number; c: number; f: number }) {
  return {
    protein: Math.round((calories * split.p) / 100 / KCAL_PER_GRAM.protein),
    carbs: Math.round((calories * split.c) / 100 / KCAL_PER_GRAM.carbs),
    fat: Math.round((calories * split.f) / 100 / KCAL_PER_GRAM.fat),
  };
}

/**
 * Daily protein ranges in g per kg of body weight.
 * general: RDA 0.8 g/kg (healthy adults with little exercise).
 * active / muscle: ISSN position stand (Jäger et al. 2017) 1.4–2.0 g/kg;
 *   Morton et al. 2018 meta-analysis: gains plateau around 1.6, upper CI 2.2.
 * fatLoss: higher intakes help retain muscle in a deficit (ISSN 2017;
 *   Helms et al. 2014).
 */
export const PROTEIN_G_PER_KG = {
  general: [0.8, 1.0],
  active: [1.2, 1.6],
  muscle: [1.6, 2.2],
  fatLoss: [1.6, 2.4],
} as const;
export type ProteinGoal = keyof typeof PROTEIN_G_PER_KG;

/** Daily protein range in grams for a body weight and goal. Rounded. */
export function proteinRange(weightKg: number, goal: ProteinGoal) {
  const [lo, hi] = PROTEIN_G_PER_KG[goal];
  return { min: Math.round(weightKg * lo), max: Math.round(weightKg * hi) };
}

/* ------------------------------------------------------------------ */
/*  Body size                                                          */
/* ------------------------------------------------------------------ */

export function bmiMetric(heightCm: number, weightKg: number): number {
  return weightKg / Math.pow(heightCm / 100, 2);
}

export function bmiImperial(heightIn: number, weightLb: number): number {
  return (703 * weightLb) / Math.pow(heightIn, 2);
}

/** WHO adult BMI categories. */
export type BmiCategory = "underweight" | "healthy" | "overweight" | "obese";
export function bmiCategory(bmi: number): BmiCategory {
  if (bmi < 18.5) return "underweight";
  if (bmi < 25) return "healthy";
  if (bmi < 30) return "overweight";
  return "obese";
}

/** Weight range (kg) that keeps BMI between 18.5 and 24.9 at this height. */
export function healthyWeightRange(heightCm: number) {
  const m2 = Math.pow(heightCm / 100, 2);
  return { min: 18.5 * m2, max: 24.9 * m2 };
}

/**
 * Ideal body weight formulas (kg) from height in cm. All add a fixed amount
 * per inch over 5 ft; below 5 ft they return the base value.
 * Devine 1974, Robinson 1983, Miller 1983.
 */
export function idealWeights(sex: Sex, heightCm: number) {
  const inches = Math.max(0, (heightCm - 152.4) / 2.54);
  const male = sex === "male";
  return {
    devine: (male ? 50 : 45.5) + 2.3 * inches,
    robinson: male ? 52 + 1.9 * inches : 49 + 1.7 * inches,
    miller: male ? 56.2 + 1.41 * inches : 53.1 + 1.36 * inches,
  };
}

/**
 * U.S. Navy circumference method (Hodgdon & Beckett 1984), metric form.
 * Returns body-fat %, or null when the measurements cannot be valid.
 */
export function navyBodyFat(
  sex: Sex,
  heightCm: number,
  neckCm: number,
  waistCm: number,
  hipCm = 0,
): number | null {
  const girth = sex === "male" ? waistCm - neckCm : waistCm + hipCm - neckCm;
  if (!(heightCm > 0) || !(girth > 0) || (sex === "female" && !(hipCm > 0))) return null;
  const denom =
    sex === "male"
      ? 1.0324 - 0.19077 * Math.log10(girth) + 0.15456 * Math.log10(heightCm)
      : 1.29579 - 0.35004 * Math.log10(girth) + 0.221 * Math.log10(heightCm);
  const bf = 495 / denom - 450;
  return bf > 0 && bf < 75 ? bf : null;
}

/** American Council on Exercise body-fat categories. */
export type BodyFatCategory = "essential" | "athletes" | "fitness" | "average" | "obese";
export function bodyFatCategory(sex: Sex, bf: number): BodyFatCategory {
  const [a, b, c, d] = sex === "male" ? [6, 14, 18, 25] : [14, 21, 25, 32];
  if (bf < a) return "essential";
  if (bf < b) return "athletes";
  if (bf < c) return "fitness";
  if (bf < d) return "average";
  return "obese";
}
