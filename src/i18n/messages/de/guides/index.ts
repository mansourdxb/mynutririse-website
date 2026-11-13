import type { Facts } from "@/data/facts";
import calorie from "./calorie";
import bmr from "./bmr";

// Long-form explainer + FAQ for each calculator, keyed like data/tools.ts.
const toolGuides = (f: Facts) => ({
  calorie: calorie(f),
  bmr: bmr(f),
});

export default toolGuides;
