import type { Facts } from "@/data/facts";
import type en from "../en/press";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "الملف الصحفي",
  metaDescription:
    "موارد صحفية عن MyNutriRise — النبذة التعريفية، وورقة الحقائق، وأصول العلامة التجارية، وجهة التواصل الإعلامي.",
  title: "الملف الصحفي",
  intro: "كل ما تحتاجه للكتابة عن MyNutriRise.",
  boilerplateTitle: "النبذة التعريفية",
  boilerplate: `MyNutriRise تطبيق للتغذية واللياقة مدعوم بالذكاء الاصطناعي، صُمّم لمن تغفلهم تطبيقات التتبّع الكبرى. يلتقط المستخدمون صورة لأي وجبة فيسجّل الذكاء الاصطناعي السعرات والمغذيات الكبرى فوراً — عبر ${f.RECIPES} وصفة و${f.CUISINES} مطبخاً عالمياً، مع خطط وجبات مناسبة للحلال، و${f.FASTING_PLAN_COUNT} خطط للصيام المتقطع منها جدول لرمضان، وتتبّع للتمارين، ومدرّب ذكي. متاح على iOS وAndroid بالإنجليزية والعربية والألمانية والإسبانية والفرنسية والروسية.`,
  factSheetTitle: "ورقة الحقائق",
  factSheet: [
    { key: "المنتج", value: "MyNutriRise — متتبّع للتغذية واللياقة مدعوم بالذكاء الاصطناعي" },
    { key: "المنصات", value: "iOS وAndroid" },
    { key: "اللغات", value: "الإنجليزية والعربية والألمانية والإسبانية والفرنسية والروسية" },
    {
      key: "الوصفات",
      value: `${f.RECIPES} بمقادير مكوّنات حقيقية وخطوات طهي، عبر ${f.DISHES} طبقاً`,
    },
    { key: "المطابخ", value: `${f.CUISINES} مطبخاً عالمياً، مع التحقق من فلترة الحلال في كل طبق` },
    {
      key: "خطط الصيام",
      value: `${f.FASTING_PLAN_COUNT} خطط منها 16:8 و5:2 وOMAD وجدول لرمضان`,
    },
    { key: "الخطط الغذائية", value: `${f.DIET_PLAN_COUNT} خطط موجّهة لمدة 4 أسابيع منها «شرق أوسطي صحي»` },
    {
      key: "مكتبة التمارين",
      value: `${f.STRENGTH_EXERCISE_COUNT} تمرين قوة، و${f.CARDIO_ACTIVITY_COUNT} نشاطاً من الكارديو والرياضات، وروتينات جاهزة`,
    },
    { key: "الأسعار", value: "تحميل مجاني؛ اشتراك بريميوم اختياري" },
    { key: "الموقع الإلكتروني", value: "www.mynutririse.com" },
  ],
  assetsTitle: "أصول العلامة التجارية",
  logo: "شعار التطبيق (PNG)",
  screenshots: "لقطات شاشة التطبيق: متاحة عند الطلب، أو استخدم الشاشات المعروضة في أنحاء هذا الموقع.",
  colors: "ألوان العلامة التجارية: الزمردي <code>#10b981</code>، والأبيض <code>#FFFFFF</code>، والأردوازي <code>#1e293b</code>",
  contactTitle: "التواصل الإعلامي",
  contact: "للمقابلات أو الوصول للمراجعة أو أي أمر آخر: <link>contact@mynutririse.com</link>",
});
