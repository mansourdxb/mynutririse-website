import type { Facts } from "@/data/facts";
import calorie from "./calorie";
import macro from "./macro";
import bmi from "./bmi";
import bmr from "./bmr";
import idealWeight from "./idealWeight";
import tdee from "./tdee";
import protein from "./protein";
import deficit from "./deficit";

// Long-form explainer + FAQ for each calculator, keyed like data/tools.ts.
const toolGuides = (f: Facts) => ({
  calorie: calorie(f),
  macro: macro(f),
  bmi: bmi(f),
  bmr: bmr(f),
  idealWeight: idealWeight(f),
  tdee: tdee(f),
  protein: protein(f),
  deficit: deficit(f),
});

export default toolGuides;
