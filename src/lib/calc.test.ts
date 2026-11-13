import { describe, expect, it } from "vitest";
import {
  ACTIVITY_FACTORS,
  CALORIE_FLOOR,
  bmiCategory,
  bmiImperial,
  bmiMetric,
  bodyFatCategory,
  calorieTargets,
  daysBetween,
  deficitPlan,
  healthyWeightRange,
  idealWeights,
  macroGrams,
  mifflinBmr,
  navyBodyFat,
  proteinRange,
  tdee,
} from "./calc";

describe("mifflinBmr", () => {
  it("matches the worked examples on the site", () => {
    // Calorie calculator page: 30 y man, 175 cm, 75 kg → 1,699 kcal.
    expect(mifflinBmr("male", 30, 175, 75)).toBeCloseTo(1698.75, 2);
    // BMR page: 28 y woman, 162 cm, 60 kg → 1,312 kcal.
    expect(mifflinBmr("female", 28, 162, 60)).toBeCloseTo(1311.5, 2);
  });

  it("differs by exactly 166 kcal between sexes", () => {
    expect(mifflinBmr("male", 40, 170, 70) - mifflinBmr("female", 40, 170, 70)).toBe(166);
  });
});

describe("tdee", () => {
  it("multiplies BMR by the activity factor", () => {
    expect(tdee(1700, ACTIVITY_FACTORS[2])).toBeCloseTo(2635);
    expect(ACTIVITY_FACTORS).toEqual([1.2, 1.375, 1.55, 1.725, 1.9]);
  });
});

describe("calorieTargets and the calorie floor", () => {
  it("subtracts 500 and adds 300 around maintenance", () => {
    expect(calorieTargets(2633.4, "male")).toEqual({ lose: 2133, maintain: 2633, gain: 2933 });
  });

  it("never goes below 1,200 kcal for women", () => {
    expect(calorieTargets(1500, "female").lose).toBe(1200);
    expect(calorieTargets(1700, "female").lose).toBe(1200);
    expect(calorieTargets(1701, "female").lose).toBe(1201);
  });

  it("never goes below 1,500 kcal for men", () => {
    expect(CALORIE_FLOOR.male).toBe(1500);
    expect(calorieTargets(1800, "male").lose).toBe(1500);
    expect(calorieTargets(2000, "male").lose).toBe(1500);
    expect(calorieTargets(2001, "male").lose).toBe(1501);
  });
});

describe("deficitPlan", () => {
  it("computes the daily intake for a reachable goal", () => {
    // 5 kg in 70 days → 550 kcal/day deficit.
    const plan = deficitPlan(2500, "male", 85, 80, 70);
    expect(plan).toMatchObject({ kind: "plan", dailyCalories: 1950, dailyDeficit: 550, floorApplied: false });
    if (plan.kind === "plan") {
      expect(plan.weeklyLossKg).toBeCloseTo(0.5, 2);
      expect(plan.daysNeeded).toBe(70);
      expect(plan.aggressive).toBe(false);
    }
  });

  it("clamps to the floor and pushes the date out when the goal is too fast", () => {
    const plan = deficitPlan(2000, "female", 70, 60, 30);
    expect(plan).toMatchObject({ kind: "plan", dailyCalories: 1200, dailyDeficit: 800, floorApplied: true });
    if (plan.kind === "plan") {
      expect(plan.daysNeeded).toBe(Math.ceil((10 * 7700) / 800));
      expect(plan.daysNeeded).toBeGreaterThan(30);
    }
  });

  it("applies the higher floor for men", () => {
    const plan = deficitPlan(2200, "male", 90, 70, 20);
    expect(plan).toMatchObject({ kind: "plan", dailyCalories: 1500, floorApplied: true });
  });

  it("flags losses above 1% of body weight per week", () => {
    const plan = deficitPlan(3200, "male", 80, 70, 60);
    expect(plan.kind === "plan" && plan.aggressive).toBe(true);
  });

  it("handles no loss, maintenance at or below the floor, and bad input", () => {
    expect(deficitPlan(2000, "male", 80, 80, 30)).toEqual({ kind: "noLoss" });
    expect(deficitPlan(2000, "male", 80, 85, 30)).toEqual({ kind: "noLoss" });
    expect(deficitPlan(1200, "female", 60, 55, 60)).toEqual({ kind: "belowFloor", floor: 1200 });
    expect(deficitPlan(1400, "male", 60, 55, 60)).toEqual({ kind: "belowFloor", floor: 1500 });
    expect(deficitPlan(2000, "male", 80, 75, 0)).toEqual({ kind: "invalid" });
    expect(deficitPlan(2000, "male", 80, 75, -5)).toEqual({ kind: "invalid" });
    expect(deficitPlan(NaN, "male", 80, 75, 30)).toEqual({ kind: "invalid" });
  });
});

describe("daysBetween", () => {
  it("counts calendar days and ignores time of day", () => {
    expect(daysBetween(new Date(2026, 0, 1, 23, 0), new Date(2026, 0, 31, 1, 0))).toBe(30);
    expect(daysBetween(new Date(2026, 2, 1), new Date(2026, 1, 1))).toBe(-28);
  });
});

describe("macroGrams", () => {
  it("matches the 2,000 kcal balanced example (150 g / 200 g / 67 g)", () => {
    expect(macroGrams(2000, { p: 30, c: 40, f: 30 })).toEqual({ protein: 150, carbs: 200, fat: 67 });
  });
  it("uses 9 kcal per gram of fat", () => {
    expect(macroGrams(1800, { p: 25, c: 5, f: 70 }).fat).toBe(140);
  });
});

describe("proteinRange", () => {
  it("scales g/kg ranges by body weight", () => {
    expect(proteinRange(70, "general")).toEqual({ min: 56, max: 70 });
    expect(proteinRange(80, "muscle")).toEqual({ min: 128, max: 176 });
    expect(proteinRange(60, "fatLoss")).toEqual({ min: 96, max: 144 });
  });
});

describe("BMI", () => {
  it("agrees between metric and imperial", () => {
    expect(bmiMetric(180, 81)).toBeCloseTo(25, 5);
    expect(bmiImperial(70, 150)).toBeCloseTo(21.52, 2);
    expect(bmiImperial(180 / 2.54, 81 / 0.45359237)).toBeCloseTo(bmiMetric(180, 81), 1);
  });

  it("uses WHO band edges", () => {
    expect(bmiCategory(18.49)).toBe("underweight");
    expect(bmiCategory(18.5)).toBe("healthy");
    expect(bmiCategory(24.99)).toBe("healthy");
    expect(bmiCategory(25)).toBe("overweight");
    expect(bmiCategory(29.99)).toBe("overweight");
    expect(bmiCategory(30)).toBe("obese");
  });

  it("gives the BMI 18.5–24.9 weight range", () => {
    const r = healthyWeightRange(170);
    expect(r.min).toBeCloseTo(53.465, 3);
    expect(r.max).toBeCloseTo(71.961, 3);
  });
});

describe("idealWeights", () => {
  it("returns the base values at 5 ft and below", () => {
    expect(idealWeights("male", 152.4)).toEqual({ devine: 50, robinson: 52, miller: 56.2 });
    expect(idealWeights("female", 140)).toEqual({ devine: 45.5, robinson: 49, miller: 53.1 });
  });

  it("adds the per-inch amounts above 5 ft", () => {
    // 10 inches over 5 ft.
    const m = idealWeights("male", 152.4 + 25.4);
    expect(m.devine).toBeCloseTo(73);
    expect(m.robinson).toBeCloseTo(71);
    expect(m.miller).toBeCloseTo(70.3);
    const f = idealWeights("female", 152.4 + 25.4);
    expect(f.devine).toBeCloseTo(68.5);
    expect(f.robinson).toBeCloseTo(66);
    expect(f.miller).toBeCloseTo(66.7);
  });
});

describe("navyBodyFat", () => {
  it("gives plausible values for typical measurements", () => {
    expect(navyBodyFat("male", 178, 38, 86)).toBeCloseTo(17.2, 1);
    expect(navyBodyFat("female", 165, 33, 76, 98)).toBeCloseTo(28.94, 2);
  });

  it("rejects impossible measurements", () => {
    expect(navyBodyFat("male", 178, 40, 40)).toBeNull();
    expect(navyBodyFat("male", 178, 45, 40)).toBeNull();
    expect(navyBodyFat("female", 165, 33, 76)).toBeNull();
    expect(navyBodyFat("male", 0, 38, 86)).toBeNull();
  });

  it("puts results in ACE categories", () => {
    expect(bodyFatCategory("male", 5)).toBe("essential");
    expect(bodyFatCategory("male", 12)).toBe("athletes");
    expect(bodyFatCategory("male", 17.9)).toBe("fitness");
    expect(bodyFatCategory("male", 20)).toBe("average");
    expect(bodyFatCategory("male", 25)).toBe("obese");
    expect(bodyFatCategory("female", 13)).toBe("essential");
    expect(bodyFatCategory("female", 28.5)).toBe("average");
    expect(bodyFatCategory("female", 32)).toBe("obese");
  });
});
