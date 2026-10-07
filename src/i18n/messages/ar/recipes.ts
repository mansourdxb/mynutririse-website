import type { Facts } from "@/data/facts";
import type en from "../en/recipes";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: `${f.RECIPES} وصفة — حلال وصحية ومن ثقافات متنوعة`,
  metaDescription: `استكشف وصفات MyNutriRise من ${f.CUISINES} مطبخاً عالمياً — التركي والمغربي والباكستاني والأفغاني والمزيد — بسعراتها ومغذياتها الكبرى كاملة، إضافة إلى أطباق الفطور والشوربات والأطباق الرئيسية الغنية بالبروتين.`,
  title: `${f.RECIPES} وصفة. <accent>وثقافتك حاضرة.</accent>`,
  intro: `من الكباب التركي إلى البلاو الأفغاني — ${f.CUISINES} مطبخاً عالمياً بسعراتها ومغذياتها الكبرى كاملة، ومناسبة للحلال في كل مكان — اطّلع على صفحة <link>تطبيق التغذية الحلال</link> للقصة الكاملة. إليك لمحة مما ستجده في التطبيق:`,
  featuredTitle: "أطباق مختارة من المكتبة",
  itemListName: "وصفات مختارة من MyNutriRise",
  // Same order as the per-dish nutrition data in the page.
  dishes: [
    { name: "كباب أضنة", cuisine: "تركي" },
    { name: "طاجين الدجاج", cuisine: "مغربي" },
    { name: "كابلي بلاو", cuisine: "أفغاني" },
    { name: "برياني الدجاج", cuisine: "باكستاني" },
    { name: "قورمه سبزي", cuisine: "فارسي" },
    { name: "كشري", cuisine: "مصري · نباتي بالكامل" },
    { name: "رندانغ اللحم", cuisine: "إندونيسي" },
    { name: "أرز جولوف", cuisine: "نيجيري" },
    { name: "نهاري", cuisine: "باكستاني" },
    { name: "شكشوكة", cuisine: "شرق أوسطي" },
    { name: "إسكندر كباب", cuisine: "تركي" },
    { name: "ناسي ليماك", cuisine: "ماليزي" },
  ],
  kcal: "{n} سعرة",
  protein: "<b>{n} غ</b> بروتين",
  carbs: "<b>{n} غ</b> كربوهيدرات",
  fat: "<b>{n} غ</b> دهون",
  categoriesTitle: "وآلاف غيرها، منظّمة على طريقتك",
  // Same order as the category counts in the page.
  categories: [
    "نباتي",
    "حلويات",
    "دجاج",
    "شوربات",
    "معكرونة",
    "فطور",
    "مأكولات بحرية",
    "لحم بقري",
    "أطباق جانبية",
    "أرز",
    "سندويشات",
    "طهي بطيء",
  ],
  cta: {
    title: "كل وصفة، متتبَّعة بالكامل",
    body: "تصفّح حسب المطبخ، وفلتر الحلال أو النباتي أو الكيتو أو عالي البروتين، وسجّل أي طبق بلمسة واحدة.",
  },
});
