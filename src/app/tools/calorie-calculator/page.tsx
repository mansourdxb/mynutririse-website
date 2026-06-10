import type { Metadata } from "next";
import Link from "next/link";
import { CalorieCalculator } from "@/components/tools/CalorieCalculator";
import { StoreButtons } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Calorie Calculator — Daily Calories to Lose or Gain Weight",
  description:
    "Calculate how many calories you need per day with the Mifflin–St Jeor equation. Free targets for losing weight, maintaining, or building muscle — plus a Ramadan guide.",
  alternates: { canonical: "/tools/calorie-calculator" },
};

const faqs = [
  {
    question: "How many calories should I eat to lose weight?",
    answer:
      "A deficit of about 500 kcal below your maintenance level leads to roughly 0.5 kg (1 lb) of weight loss per week. Use the calculator above to find your maintenance calories, then subtract 500 — but avoid going below 1,200 kcal/day without medical guidance.",
  },
  {
    question: "What formula does this calorie calculator use?",
    answer:
      "It uses the Mifflin–St Jeor equation, widely considered the most accurate formula for estimating resting energy needs, multiplied by an activity factor between 1.2 (sedentary) and 1.9 (extra active).",
  },
  {
    question: "How accurate are calorie calculators?",
    answer:
      "Equations estimate within about ±10% for most people. Treat the number as a starting point: track your intake and weight for 2–3 weeks, then adjust by 100–200 kcal if your real-world trend differs from the goal.",
  },
  {
    question: "Do my calorie needs change during Ramadan?",
    answer:
      "Your total daily energy needs stay roughly the same — what changes is the eating window. Aim to reach your normal daily target across suhoor and iftar, anchoring each meal with protein and fluids rather than compressing everything into one large meal.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const activityTable = [
  ["Sedentary", "1.2", "Desk job, little or no exercise"],
  ["Lightly active", "1.375", "Light exercise 1–3 days/week"],
  ["Moderately active", "1.55", "Moderate exercise 3–5 days/week"],
  ["Very active", "1.725", "Hard exercise 6–7 days/week"],
  ["Extra active", "1.9", "Physical job plus training"],
];

export default function CalorieCalculatorPage() {
  return (
    <div className="bg-white pt-24">
      <JsonLd data={faqJsonLd} />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Breadcrumbs
          items={[
            { name: "Tools", href: "/tools" },
            { name: "Calorie Calculator", href: "/tools/calorie-calculator" },
          ]}
        />
        <h1 className="mt-6 text-center text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
          Calorie Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-slate-500">
          See how many calories you need each day to lose weight, maintain, or
          build muscle — free, no sign-up needed.
        </p>

        <div className="mt-10">
          <CalorieCalculator />
        </div>

        <div className="mt-12 space-y-4 text-slate-600">
          <h2 className="text-2xl font-bold text-slate-800">
            How your calorie needs are calculated
          </h2>
          <p>
            This calculator uses the <strong>Mifflin–St Jeor equation</strong>,
            the formula dietitians most commonly rely on for estimating basal
            metabolic rate (BMR) — the energy your body burns at rest:
          </p>
          <div className="rounded-2xl bg-slate-50 p-5 font-mono text-sm leading-7">
            <p>Men: BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5</p>
            <p>Women: BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age − 161</p>
          </div>
          <p>
            Your BMR is then multiplied by an activity factor to estimate your
            total daily energy expenditure (TDEE):
          </p>
          <div className="overflow-hidden rounded-2xl ring-1 ring-slate-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-emerald-50/60 text-left">
                  <th className="px-4 py-3 font-semibold text-slate-700">Activity level</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Multiplier</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Typical week</th>
                </tr>
              </thead>
              <tbody>
                {activityTable.map(([level, factor, desc]) => (
                  <tr key={level} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-medium text-slate-700">{level}</td>
                    <td className="px-4 py-3">{factor}</td>
                    <td className="px-4 py-3 text-slate-500">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            <strong>Worked example:</strong> a 30-year-old man, 175 cm and 75
            kg, has a BMR of 10×75 + 6.25×175 − 5×30 + 5 = 1,699 kcal. If he
            exercises 3–5 days a week (×1.55), his maintenance is ≈ 2,633
            kcal/day — about 2,133 to lose ~0.5 kg/week, or ~2,933 to gain
            muscle in a lean surplus.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            What to do with your number
          </h2>
          <p>
            A target only works if you track against it. Split your calories
            sensibly across the day — our free{" "}
            <Link href="/tools/macro-calculator" className="font-medium text-emerald-600 hover:text-emerald-700">
              macro calculator
            </Link>{" "}
            turns the number into protein, carb, and fat targets — and weigh in
            weekly, adjusting by 100–200 kcal if your trend is off. If you want
            to understand the resting-energy half of the math, see the{" "}
            <Link href="/tools/bmr-calculator" className="font-medium text-emerald-600 hover:text-emerald-700">
              BMR calculator
            </Link>
            .
          </p>

          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            Calories during Ramadan and fasting
          </h2>
          <p>
            Fasting changes <em>when</em> you eat, not how much your body
            needs. During Ramadan, aim to reach your daily target across suhoor
            and iftar: anchor suhoor with protein and slow carbs, break the
            fast with fluids and dates, and keep the main iftar meal balanced
            rather than compressed into one oversized plate. The same logic
            applies to 16:8 and other protocols — our{" "}
            <Link href="/blog/intermittent-fasting-16-8-guide" className="font-medium text-emerald-600 hover:text-emerald-700">
              16:8 beginner&apos;s guide
            </Link>{" "}
            covers the details.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            Frequently asked questions
          </h2>
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold text-slate-800">{faq.question}</h3>
              <p className="mt-2">{faq.answer}</p>
            </div>
          ))}
          <p className="text-sm text-slate-500">
            This tool provides general estimates, not medical advice. Consult a
            professional before major dietary changes.
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-400 p-8 text-center sm:p-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Hit your target every day
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            MyNutriRise tracks your calories automatically — snap a photo of
            your meal and AI logs it for you.
          </p>
          <StoreButtons className="mt-6" />
        </div>
      </div>
    </div>
  );
}
