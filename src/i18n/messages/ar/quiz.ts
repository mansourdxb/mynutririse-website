import type { Facts } from "@/data/facts";
import type en from "../en/quiz";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "احصل على خطتك المخصصة",
  metaDescription:
    "أجب عن أربعة أسئلة سريعة واحصل على خطة تغذية مخصصة لك مع هدفك اليومي من السعرات — مجاناً وفي أقل من دقيقة.",
  title: "احصل على خطتك المخصصة <accent>في دقيقة واحدة</accent>",
  intro: "أربعة أسئلة سريعة — دون تسجيل.",
  // Passed to the client QuizFlow component.
  flow: {
    yourPlan: "خطتك",
    stepOf: "الخطوة {step} من {total}",
    percent: "{n}%",
    goalTitle: "ما هدفك الأساسي؟",
    goals: {
      lose: { label: "خسارة الوزن", sub: "تناول سعرات أقل من احتياجك" },
      maintain: { label: "ثبات الوزن", sub: "وازن بين ما تأكله ونشاطك" },
      gain: { label: "بناء العضلات", sub: "فائض يعتمد على البروتين" },
    },
    aboutTitle: "أخبرنا عن نفسك",
    aboutBody: "يضبط العمر أهداف السعرات وفق معدل الأيض لديك. ونحافظ على خصوصية هذه المعلومات.",
    genderLabel: "الجنس",
    // Shown with CSS capitalize, so "male" displays as "Male".
    sexes: { male: "ذكر", female: "أنثى" },
    age: "العمر",
    height: "الطول (سم)",
    weight: "الوزن (كغ)",
    unitYears: "سنة",
    unitCm: "سم",
    unitKg: "كغ",
    rangeError: "أدخل قيمة بين {min} و{max} {unit}",
    workoutTitle: "كم مرة تمارس الرياضة؟",
    // Same order as the activity multipliers in QuizFlow.
    workoutLevels: [
      { label: "لا أمارسها", sub: "رياضة قليلة أو معدومة" },
      { label: "1–2 مرة أسبوعياً", sub: "نشاط خفيف" },
      { label: "3–4 مرات أسبوعياً", sub: "نشاط متوسط" },
      { label: "5 مرات أو أكثر أسبوعياً", sub: "نشاط عالٍ" },
    ],
    styleTitle: "اختر نمط أكلك",
    styles: {
      everything: { label: "بلا قيود", sub: "آكل كل شيء" },
      halal: { label: "حلال ومن ثقافتي", sub: `${f.CUISINES} مطبخاً — التركي والباكستاني والأفغاني والمزيد` },
      mediterranean: { label: "حمية البحر المتوسط", sub: "زيت الزيتون والسمك والخضروات" },
      plant: { label: "نباتي / نباتي بالكامل", sub: "تغذية نباتية" },
      keto: { label: "كيتو / منخفض الكربوهيدرات", sub: "أقل من 30 غ من صافي الكربوهيدرات يومياً" },
      protein: { label: "عالي البروتين", sub: "نسبة بروتين 40%" },
    },
    // Real plan names from the app's DietPlanDatabase.
    plans: {
      everything: {
        name: "أكل نظيف",
        blurb: "أطعمة كاملة بأقل قدر من المعالجة — فواكه وخضروات وبروتينات قليلة الدهن وحبوب كاملة.",
      },
      halal: {
        name: "شرق أوسطي صحي",
        blurb:
          "وجبات مناسبة للحلال بنكهات تقليدية — لحوم مشوية وبقوليات وسلطات طازجة وحبوب مغذية.",
      },
      mediterranean: {
        name: "البحر المتوسط",
        blurb: "زيت زيتون صحي للقلب، وسمك طازج، وخضروات، وحبوب كاملة، وبقوليات.",
      },
      plant: {
        name: "توازن نباتي",
        blurb: "تغذية نباتية متوازنة — بقوليات وحبوب كاملة وألبان وبيض ودهون صحية.",
      },
      keto: {
        name: "كيتو",
        blurb: "منخفض جداً في الكربوهيدرات وعالي الدهون — أقل من 30 غ من صافي الكربوهيدرات يومياً مع دهون عالية الجودة.",
      },
      protein: {
        name: "عالي البروتين",
        blurb: "نسبة بروتين 40% لبناء العضلات والشبع — لحوم قليلة الدهن وبيض وبقوليات وألبان.",
      },
    },
    resultEyebrow: "خطتك المخصصة",
    dailyTarget: "هدف السعرات اليومي",
    kcalPerDay: "سعرة/يوم",
    grams: "{n} غ",
    protein: "البروتين",
    carbs: "الكربوهيدرات",
    fat: "الدهون",
    water: "يُنصح بـ{liters} لتر من الماء يومياً",
    resultBody:
      "هذه هي الحسابات نفسها التي يستخدمها التطبيق. حمّل MyNutriRise وستكون خطتك جاهزة — خطة وجبات موجّهة (الأسبوع الأول مجاناً، والأسابيع الأربعة كاملة مع بريميوم)، وتسجيل بالصور عبر الذكاء الاصطناعي، وتدريب مشمول.",
    emailSubject: "خطتي في MyNutriRise",
    emailBody:
      "خطتي في MyNutriRise:\n\nالخطة: {plan}\nالسعرات اليومية: {calories} سعرة\nالبروتين: {protein} غ · الكربوهيدرات: {carbs} غ · الدهون: {fat} غ\nالماء: {water} لتر\n\nحمّل التطبيق: {url}",
    emailCta: "أرسل خطتي إلى بريدي ←",
    back: "→ رجوع",
    seePlan: "اعرض خطتي",
    continue: "متابعة",
  },
});
