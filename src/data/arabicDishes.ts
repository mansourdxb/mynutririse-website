/**
 * Gulf, Levantine and Egyptian dishes from the MyNutriRise app's built-in
 * cuisine catalogue, copied verbatim (per serving) from the app repository:
 * lib/app/data/halal_dishes_expansion.dart (Gulf & Emirati, Yemeni, Lebanese
 * and Egyptian sections), checked 2026-11-13. Values are approximate
 * per-serving estimates; only list dishes that exist in that catalogue.
 * Mandi and zurbian are Yemeni in the app and grouped with the Gulf here
 * because they are eaten widely across the Gulf.
 */
export type ArabicDish = {
  region: "gulf" | "levant" | "egypt";
  en: string;
  ar: string;
  serving: string;
  servingAr: string;
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
};

export const arabicDishes: readonly ArabicDish[] = [
  { region: "gulf", en: "Machboos", ar: "مجبوس", serving: "350g", servingAr: "350 غ", kcal: 480, protein: 30, carbs: 50, fat: 18 },
  { region: "gulf", en: "Harees", ar: "هريس", serving: "300g", servingAr: "300 غ", kcal: 380, protein: 26, carbs: 42, fat: 12 },
  { region: "gulf", en: "Thareed", ar: "ثريد", serving: "350g", servingAr: "350 غ", kcal: 420, protein: 24, carbs: 40, fat: 18 },
  { region: "gulf", en: "Margoog", ar: "مرقوق", serving: "350g", servingAr: "350 غ", kcal: 400, protein: 22, carbs: 38, fat: 18 },
  { region: "gulf", en: "Balaleet", ar: "بلاليط", serving: "250g", servingAr: "250 غ", kcal: 350, protein: 12, carbs: 48, fat: 14 },
  { region: "gulf", en: "Luqaimat", ar: "لقيمات", serving: "100g (6 pieces)", servingAr: "100 غ (6 قطع)", kcal: 280, protein: 3, carbs: 40, fat: 12 },
  { region: "gulf", en: "Mandi", ar: "مندي", serving: "400g", servingAr: "400 غ", kcal: 520, protein: 32, carbs: 52, fat: 20 },
  { region: "gulf", en: "Zurbian", ar: "زربيان", serving: "350g", servingAr: "350 غ", kcal: 480, protein: 30, carbs: 50, fat: 18 },
  { region: "levant", en: "Chicken Shawarma Plate", ar: "صحن شاورما دجاج", serving: "350g", servingAr: "350 غ", kcal: 480, protein: 32, carbs: 40, fat: 20 },
  { region: "levant", en: "Shish Tawook", ar: "شيش طاووق", serving: "200g", servingAr: "200 غ", kcal: 320, protein: 34, carbs: 8, fat: 16 },
  { region: "levant", en: "Kafta bil Sayniyeh", ar: "كفتة بالصينية", serving: "250g", servingAr: "250 غ", kcal: 380, protein: 24, carbs: 18, fat: 24 },
  { region: "levant", en: "Mujaddara", ar: "مجدرة", serving: "250g", servingAr: "250 غ", kcal: 280, protein: 12, carbs: 44, fat: 6 },
  { region: "levant", en: "Fatteh", ar: "فتة", serving: "300g", servingAr: "300 غ", kcal: 420, protein: 18, carbs: 35, fat: 24 },
  { region: "levant", en: "Warak Enab", ar: "ورق عنب", serving: "150g (6 pieces)", servingAr: "150 غ (6 قطع)", kcal: 180, protein: 6, carbs: 22, fat: 8 },
  { region: "levant", en: "Knafeh", ar: "كنافة", serving: "150g", servingAr: "150 غ", kcal: 380, protein: 8, carbs: 48, fat: 18 },
  { region: "egypt", en: "Koshari", ar: "كشري", serving: "300g", servingAr: "300 غ", kcal: 380, protein: 14, carbs: 62, fat: 8 },
  { region: "egypt", en: "Molokhia", ar: "ملوخية", serving: "300g", servingAr: "300 غ", kcal: 280, protein: 22, carbs: 20, fat: 12 },
  { region: "egypt", en: "Fattah", ar: "فتة", serving: "350g", servingAr: "350 غ", kcal: 520, protein: 30, carbs: 42, fat: 24 },
  { region: "egypt", en: "Mahshi", ar: "محشي", serving: "250g", servingAr: "250 غ", kcal: 280, protein: 10, carbs: 35, fat: 12 },
  { region: "egypt", en: "Hawawshi", ar: "حواوشي", serving: "200g", servingAr: "200 غ", kcal: 420, protein: 24, carbs: 35, fat: 20 },
  { region: "egypt", en: "Taameya", ar: "طعمية", serving: "100g (4 pieces)", servingAr: "100 غ (4 قطع)", kcal: 240, protein: 10, carbs: 26, fat: 12 },
  { region: "egypt", en: "Ful Medames", ar: "فول مدمس مصري", serving: "200g", servingAr: "200 غ", kcal: 220, protein: 14, carbs: 30, fat: 6 },
];
