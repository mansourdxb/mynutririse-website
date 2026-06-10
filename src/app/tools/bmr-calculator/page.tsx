import type { Metadata } from "next";
import Link from "next/link";
import { BmrCalculator } from "@/components/tools/BmrCalculator";
import { StoreButtons } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "BMR Calculator — Calculate Your Basal Metabolic Rate",
  description:
    "Free BMR calculator using the Mifflin–St Jeor equation. Find the calories your body burns at rest and learn how to turn it into a daily target.",
  alternates: { canonical: "/tools/bmr-calculator" },
};

const faqs = [
  {
    question: "What is a normal BMR?",
    answer:
      "Most adults fall between roughly 1,200 and 2,000 kcal/day depending on size, age, and sex. Larger and younger bodies burn more at rest; BMR declines gently with age.",
  },
  {
    question: "Is BMR the same as the calories I should eat?",
    answer:
      "No. BMR is what you burn at complete rest. Your daily target is BMR multiplied by an activity factor — use the calorie calculator for the full number.",
  },
  {
    question: "Does fasting lower my BMR?",
    answer:
      "Daily intermittent fasting, including Ramadan fasts, has little effect on BMR. Only prolonged severe restriction causes meaningful metabolic adaptation.",
  },
  {
    question: "How can I increase my BMR?",
    answer:
      "Building muscle is the most reliable way — muscle tissue burns more energy at rest than fat. Strength training plus adequate protein raises your resting burn over time.",
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

export default function Page() {
  return (
    <div className="bg-white pt-24">
      <JsonLd data={faqJsonLd} />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Breadcrumbs
          items={[
            { name: "Tools", href: "/tools" },
            { name: "BMR Calculator", href: "/tools/bmr-calculator" },
          ]}
        />
        <h1 className="mt-6 text-center text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
          BMR Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-slate-500">
          Find out how many calories your body burns at complete rest.
        </p>

        <div className="mt-10">
          <BmrCalculator />
        </div>

        <div className="mt-12 space-y-4 text-slate-600">
          <h2 className="text-2xl font-bold text-slate-800">What is BMR?</h2>
          <p>
            Your basal metabolic rate is the energy your body needs just to
            stay alive — breathing, circulation, cell repair — before any
            movement at all. It typically accounts for 60–70% of the calories
            you burn in a day, which is why it is the foundation of every
            calorie target.
          </p>
          <p>
            This calculator uses the <strong>Mifflin–St Jeor equation</strong>:
          </p>
          <div className="rounded-2xl bg-slate-50 p-5 font-mono text-sm leading-7">
            <p>Men: BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age + 5</p>
            <p>Women: BMR = 10 × weight(kg) + 6.25 × height(cm) − 5 × age − 161</p>
          </div>
          <p>
            <strong>Worked example:</strong> a 28-year-old woman, 162 cm and 60
            kg: 10×60 + 6.25×162 − 5×28 − 161 = <strong>1,312 kcal/day</strong>{" "}
            at complete rest.
          </p>
          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            From BMR to a daily target
          </h2>
          <p>
            BMR is only the resting half of the picture. Multiply it by an
            activity factor (1.2–1.9) to get your total daily energy
            expenditure — that is exactly what our{" "}
            <Link href="/tools/calorie-calculator" className="font-medium text-emerald-600 hover:text-emerald-700">calorie calculator</Link>{" "}
            does, and the{" "}
            <Link href="/tools/macro-calculator" className="font-medium text-emerald-600 hover:text-emerald-700">macro calculator</Link>{" "}
            then splits the result into protein, carbs, and fat.
          </p>
          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            BMR while fasting
          </h2>
          <p>
            Short-term fasting — 16:8, or daily fasts during Ramadan — does not
            meaningfully lower your BMR. Metabolic slowdown only becomes a
            concern with prolonged, very low intake. During Ramadan, your
            resting needs stay the same; plan suhoor and iftar to cover them.
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
            Put your number to work
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            MyNutriRise builds your daily plan from this same math — then tracks every meal with an AI photo scan.
          </p>
          <StoreButtons className="mt-6" />
        </div>
      </div>
    </div>
  );
}
