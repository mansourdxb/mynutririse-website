import type { Facts } from "@/data/facts";
import type en from "../en/common";

// Shared UI strings: site metadata, navigation, footer, buttons, 404, download.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  site: {
    title: "MyNutriRise: عدّاد سعرات بالذكاء الاصطناعي وتغذية حلال",
    titleTemplate: "%s — MyNutriRise",
    description:
      "تتبّع سعراتك، وحلّل وجباتك بالذكاء الاصطناعي، واتبع خطط وجبات مخصصة لك، وابنِ عادات أكثر صحة مع MyNutriRise — رفيقك الذكي نحو العافية.",
    ogDescription:
      "تتبّع سعراتك، وحلّل وجباتك بالذكاء الاصطناعي، واتبع خطط وجبات مخصصة لك، وابنِ عادات أكثر صحة كل يوم.",
    twitterDescription:
      "رفيقك الذكي نحو العافية لتتبّع التغذية وتحليل الوجبات وحياة أكثر صحة.",
    ogImageAlt: "MyNutriRise — تتبّع التغذية واللياقة لحياتك الحقيقية",
  },
  nav: {
    features: "المزايا",
    tools: "الأدوات",
    customPlan: "خطة مخصصة",
    premium: "بريميوم",
    recipes: "الوصفات",
    blog: "المدونة",
    support: "الدعم",
    download: "حمّل التطبيق",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    language: "اللغة",
  },
  footer: {
    tagline:
      "رفيقك الذكي نحو العافية — تحليل الوجبات بالذكاء الاصطناعي، ووصفات حلال من ثقافات متنوعة، والصيام، والتدريب في تطبيق واحد.",
    product: "المنتج",
    resources: "المصادر",
    company: "الشركة",
    features: "المزايا",
    recipes: "الوصفات",
    halal: "التغذية الحلال",
    premium: "بريميوم",
    compare: "المقارنة",
    download: "التحميل",
    helpCenter: "مركز المساعدة",
    blog: "المدونة",
    quiz: "اختبار الخطة المخصصة",
    tools: "أدوات مجانية",
    about: "من نحن",
    press: "الملف الصحفي",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    contact: "تواصل معنا",
    rights: "MyNutriRise. جميع الحقوق محفوظة.",
    madeWith: "صُنع بـ{heart} من أجل حياة أكثر صحة",
    heartLabel: "قلب أخضر",
    languages: "اللغات",
  },
  store: {
    appleSmall: "حمّله من",
    appleBig: "App Store",
    googleSmall: "احصل عليه من",
    googleBig: "Google Play",
    reassurance: "تحميل مجاني · بريميوم اختياري · إلغاء الاشتراك في أي وقت",
  },
  breadcrumbs: {
    home: "الرئيسية",
    label: "مسار التنقل",
  },
  notFound: {
    eyebrow: "404",
    title: "يبدو أن هذه الصفحة ضلّت طريقها",
    body: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
    back: "العودة إلى الرئيسية",
  },
  download: {
    metaTitle: "حمّل تطبيق MyNutriRise",
    metaDescription:
      "حمّل MyNutriRise على iPhone أو Android — تحليل الوجبات بالذكاء الاصطناعي، وخطط وجبات حلال من ثقافات متنوعة، والصيام، والتدريب.",
    title: "احصل على MyNutriRise",
    body: "على هاتفك، ستنتقل مباشرة إلى متجر التطبيقات. وعلى الكمبيوتر، اختر منصتك:",
  },
  // Language names as written in this language (used in prose and lists).
  languageNames: ["الإنجليزية", "العربية", "الألمانية", "الإسبانية", "الفرنسية", "الروسية"],
  /** "English, Arabic, German, Spanish, French, and Russian" */
  languageList: "الإنجليزية والعربية والألمانية والإسبانية والفرنسية والروسية",
  /** Shown at the top of translated legal pages; empty in English. */
  legalBindingNote:
    "هذه ترجمة مقدَّمة للتيسير فقط. النسخة الإنجليزية هي النسخة الملزمة قانونياً، وتكون لها الأولوية في حال وجود أي تعارض.",
});
