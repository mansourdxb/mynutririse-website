import type { Metadata } from "next";
import Link from "next/link";
import { BmiCalculator } from "@/components/tools/BmiCalculator";
import { StoreButtons } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "BMI Calculator — Check Your Body Mass Index",
  description:
    "Free BMI calculator with metric and imperial units. Check your Body Mass Index against healthy ranges and learn what the number really means.",
  alternates: { canonical: "/tools/bmi-calculator" },
};

const faqs = [
  {
    question: "What is a healthy BMI?",
    answer:
      "For most adults, 18.5–24.9. Below 18.5 is underweight; 25–29.9 overweight; 30 and above obese. Muscle mass, frame, and ethnicity shift what is right for an individual.",
  },
  {
    question: "Is BMI accurate for muscular people?",
    answer:
      "No — BMI cannot tell muscle from fat, so muscular athletes often read as overweight. Waist measurements and body-fat estimates give a fuller picture.",
  },
  {
    question: "How quickly can I safely change my BMI?",
    answer:
      "Through 0.25–0.5 kg of weight change per week — roughly a 250–500 kcal daily deficit or surplus. Faster usually means losing muscle and rebounding.",
  },
  {
    question: "Should I use metric or imperial?",
    answer:
      "Either — the calculator supports both. The formula is identical; imperial just multiplies by 703 to convert units.",
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
            { name: "BMI Calculator", href: "/tools/bmi-calculator" },
          ]}
        />
        <h1 className="mt-6 text-center text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
          BMI Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-slate-500">
          Find out your Body Mass Index in seconds — free, no sign-up needed.
        </p>

        <div className="mt-10">
          <BmiCalculator />
        </div>

        <div className="mt-12 space-y-4 text-slate-600">
          <h2 className="text-2xl font-bold text-slate-800">What is BMI?</h2>
          <p>
            Body Mass Index compares your weight to your height:{" "}
            <strong>BMI = weight(kg) ÷ height(m)²</strong>. For adults, 18.5 to
            24.9 is generally considered the healthy range, 25–29.9 overweight,
            and 30+ obese.
          </p>
          <p>
            BMI does not measure body fat directly — athletes with high muscle
            mass often score &ldquo;overweight&rdquo; while being perfectly
            healthy, and healthy ranges can shift slightly by ethnicity. Treat
            it as a screening signal, not a verdict.
          </p>
          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            What to do with your result
          </h2>
          <p>
            If your BMI sits outside the healthy band, the sustainable response
            is a modest calorie adjustment, not a crash diet. Find your daily
            target with the{" "}
            <Link href="/tools/calorie-calculator" className="font-medium text-emerald-600 hover:text-emerald-700">calorie calculator</Link>, see the
            weight range behind the math in the{" "}
            <Link href="/tools/ideal-weight-calculator" className="font-medium text-emerald-600 hover:text-emerald-700">ideal weight calculator</Link>,
            and aim for 0.25–0.5 kg of change per week.
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
            Ready to act on your number?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            MyNutriRise tracks your meals, workouts, and progress — snap a photo and AI does the logging.
          </p>
          <StoreButtons className="mt-6" />
        </div>
      </div>
    </div>
  );
}
