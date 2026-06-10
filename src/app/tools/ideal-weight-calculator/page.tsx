import type { Metadata } from "next";
import Link from "next/link";
import { IdealWeightCalculator } from "@/components/tools/IdealWeightCalculator";
import { StoreButtons } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Ideal Weight Calculator — Healthy Weight for Your Height",
  description:
    "Free ideal weight calculator using the Devine and Robinson formulas plus the healthy BMI range — find a realistic target for your height.",
  alternates: { canonical: "/tools/ideal-weight-calculator" },
};

const faqs = [
  {
    question: "How is ideal weight calculated?",
    answer:
      "This tool shows three views: the Devine and Robinson clinical formulas (based on height and sex) and the weight span that keeps your BMI between 18.5 and 24.9.",
  },
  {
    question: "Why do the formulas give different numbers?",
    answer:
      "Each was fitted to different population data. The spread between them is a feature — your healthy weight is a range, not a point.",
  },
  {
    question: "Is ideal weight different for men and women?",
    answer:
      "Yes — at the same height, the formulas assign men a higher baseline due to average differences in muscle mass and frame.",
  },
  {
    question: "What if I am far from my ideal range?",
    answer:
      "Aim for sustainable pacing: 0.25–0.5 kg per week through a moderate calorie deficit or surplus, anchored by protein and regular activity.",
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
            { name: "Ideal Weight", href: "/tools/ideal-weight-calculator" },
          ]}
        />
        <h1 className="mt-6 text-center text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
          Ideal Weight Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-slate-500">
          Estimate a healthy weight range for your height — free, no sign-up needed.
        </p>

        <div className="mt-10">
          <IdealWeightCalculator />
        </div>

        <div className="mt-12 space-y-4 text-slate-600">
          <h2 className="text-2xl font-bold text-slate-800">
            What &ldquo;ideal weight&rdquo; really means
          </h2>
          <p>
            There is no single perfect number. The <strong>Devine</strong> and{" "}
            <strong>Robinson</strong> formulas were developed for clinical
            dosing and give a useful midpoint, while the BMI-based range
            (18.5–24.9) shows the span generally associated with good health:
          </p>
          <div className="rounded-2xl bg-slate-50 p-5 font-mono text-sm leading-7">
            <p>Devine (men): 50 kg + 2.3 kg per inch over 5 ft</p>
            <p>Devine (women): 45.5 kg + 2.3 kg per inch over 5 ft</p>
            <p>Robinson (men): 52 kg + 1.9 kg per inch over 5 ft</p>
            <p>Robinson (women): 49 kg + 1.7 kg per inch over 5 ft</p>
          </div>
          <p>
            Muscle mass, frame size, and ethnicity all shift what is right for
            you — use the range as a direction, not a deadline.
          </p>
          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            Getting there sustainably
          </h2>
          <p>
            Pick a target inside your healthy range, then work backwards: the{" "}
            <Link href="/tools/calorie-calculator" className="font-medium text-emerald-600 hover:text-emerald-700">calorie calculator</Link>{" "}
            gives you the daily intake for 0.25–0.5 kg of change per week, and
            the <Link href="/tools/bmi-calculator" className="font-medium text-emerald-600 hover:text-emerald-700">BMI calculator</Link> lets you
            sanity-check progress along the way.
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
            Get there sustainably
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            MyNutriRise sets a realistic pace, tracks your weight trend, and logs meals from a single photo.
          </p>
          <StoreButtons className="mt-6" />
        </div>
      </div>
    </div>
  );
}
