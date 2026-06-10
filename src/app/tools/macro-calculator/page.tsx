import type { Metadata } from "next";
import Link from "next/link";
import { MacroCalculator } from "@/components/tools/MacroCalculator";
import { StoreButtons } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Macro Calculator — Protein, Carbs & Fat Targets",
  description:
    "Free macro calculator: turn your daily calories into protein, carb, and fat targets with balanced, high-protein, keto, or endurance splits.",
  alternates: { canonical: "/tools/macro-calculator" },
};

const faqs = [
  {
    question: "What macro split is best for weight loss?",
    answer:
      "Higher protein helps most — 35–40% protein preserves muscle and keeps you full in a calorie deficit. The deficit itself, not the exact split, drives the weight loss.",
  },
  {
    question: "How much protein do I need to build muscle?",
    answer:
      "Around 1.6–2.2g per kg of body weight daily. The High Protein split (40%) on a moderate surplus reaches that range for most people.",
  },
  {
    question: "Do macros matter more than calories?",
    answer:
      "Calories determine weight change; macros determine how it feels and what you keep. Set calories first, then use macros to protect muscle and energy.",
  },
  {
    question: "Can I track macros with halal or cultural food?",
    answer:
      "Yes — mixed dishes like biryani or tagine have known macro profiles. MyNutriRise includes 50+ cultural cuisine libraries with per-serving protein, carbs, and fat.",
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
            { name: "Macro Calculator", href: "/tools/macro-calculator" },
          ]}
        />
        <h1 className="mt-6 text-center text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
          Macro Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-slate-500">
          Turn your calorie goal into daily protein, carb, and fat targets — free, no sign-up needed.
        </p>

        <div className="mt-10">
          <MacroCalculator />
        </div>

        <div className="mt-12 space-y-4 text-slate-600">
          <h2 className="text-2xl font-bold text-slate-800">
            How to choose your split
          </h2>
          <p>
            A <strong>balanced</strong> split (30% protein / 40% carbs / 30%
            fat) suits most people. Go <strong>high-protein</strong> (40%) when
            building muscle or preserving it in a deficit — protein is also the
            most satiating macro. <strong>Keto</strong> keeps carbs near 5% for
            low-carb plans, and <strong>endurance</strong> raises carbs to 50%
            to fuel high training volumes.
          </p>
          <p>
            The math is simple: protein and carbs provide{" "}
            <strong>4 kcal per gram</strong>, fat provides{" "}
            <strong>9 kcal per gram</strong>. On 2,000 kcal with a balanced
            split that is 150g protein, 200g carbs, and 67g fat.
          </p>
          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            Start from the right calorie number
          </h2>
          <p>
            Your split is only as good as the calories it divides. If you have
            not set a daily target yet, run the{" "}
            <Link href="/tools/calorie-calculator" className="font-medium text-emerald-600 hover:text-emerald-700">calorie calculator</Link>{" "}
            first — and if you eat traditional dishes, our guide to{" "}
            <Link href="/blog/track-macros-halal-cultural-meals" className="font-medium text-emerald-600 hover:text-emerald-700">tracking macros with cultural meals</Link>{" "}
            shows how to hit these targets with biryani, tagine, and kabuli
            pulao on the menu.
          </p>
          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            Hitting your macros in practice
          </h2>
          <p>
            Anchor each meal around a protein source, let carbs scale with
            your training day, and treat fat as the remainder. Consistency
            beats precision: landing within ±10g of each target is a good day.
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
            Track your macros automatically
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            Snap a photo and MyNutriRise logs the protein, carbs, and fat for you — with daily breakdowns against your targets.
          </p>
          <StoreButtons className="mt-6" />
        </div>
      </div>
    </div>
  );
}
