import type { Facts } from "@/data/facts";
import calorie from "./calorie";
import macro from "./macro";
import bmi from "./bmi";
import bmr from "./bmr";
import idealWeight from "./idealWeight";

// Long-form explainer + FAQ for each calculator, keyed like data/tools.ts.
const toolGuides = (f: Facts) => ({
  calorie: calorie(f),
  macro: macro(f),
  bmi: bmi(f),
  bmr: bmr(f),
  idealWeight: idealWeight(f),
});

export default toolGuides;
