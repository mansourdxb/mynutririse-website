import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const compareFaqs = [
  {
    question: "Is MyNutriRise a good MyFitnessPal alternative?",
    answer:
      "If you eat cultural or halal food, fast during Ramadan, or want AI photo logging on the free tier, MyNutriRise is purpose-built for you. If your diet is mostly Western packaged foods, MyFitnessPal's larger barcode database may serve you better.",
  },
  {
    question: "Is MyFitnessPal halal-friendly?",
    answer:
      "MyFitnessPal has a large general food database but no dedicated halal or cultural cuisine libraries. MyNutriRise includes 50+ cultural libraries with 1,000+ halal dishes and a halal-friendly Middle Eastern Healthy meal plan.",
  },
  {
    question: "Which app has better AI photo scanning?",
    answer:
      "MyNutriRise includes AI photo meal scanning from the free tier (2 scans/day, 30/day with Premium). MyFitnessPal's Meal Scan is available on its Premium plans.",
  },
  {
    question: "Can I track Ramadan fasting in either app?",
    answer:
      "MyNutriRise ships a dedicated Ramadan schedule among 25 fasting protocols. MyFitnessPal offers intermittent fasting tracking with Premium but has no Ramadan-specific schedule.",
  },
];

const compareFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: compareFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export const metadata: Metadata = {
  title: { absolute: "MyFitnessPal Alternative: MyNutriRise vs MyFitnessPal (2026)" },
  description:
    "How MyNutriRise compares to MyFitnessPal for halal & cultural food tracking, AI photo logging, fasting, and workouts.",
  alternates: { canonical: "/compare/mynutririse-vs-myfitnesspal" },
};

const rows: [string, string, string][] = [
  [
    "Halal & cultural cuisine libraries",
    "50+ purpose-built libraries — Turkish, Moroccan, Pakistani, Afghan, Gulf & more, halal throughout",
    "Large general food database; no dedicated halal/cultural libraries",
  ],
  [
    "AI photo meal scanning",
    "Yes — included free (2 scans/day), 30/day with Premium",
    "Meal Scan available on Premium plans",
  ],
  [
    "Intermittent fasting",
    "25 plans incl. 16:8, 5:2, OMAD and a Ramadan schedule",
    "Fasting tracking included with Premium",
  ],
  [
    "Guided meal plans",
    "6 four-week plans incl. Middle Eastern Healthy, Keto, Mediterranean",
    "Meal plans available with Premium",
  ],
  [
    "Workout tracking",
    "318-exercise library, routines, cardio & wearable sync",
    "Exercise logging with large exercise database",
  ],
  [
    "App languages",
    "English, Arabic, Turkish, Urdu",
    "Many languages incl. English, Spanish, French, German",
  ],
  [
    "AI coach",
    "Built-in AI nutrition & fitness coach (5 free messages/day)",
    "No conversational AI coach",
  ],
  [
    "Price",
    "Free to download; optional Premium",
    "Free tier; Premium subscription with 7-day trial",
  ],
];

export default function ComparePage() {
  return (
    <div className="bg-white pt-24">
      <JsonLd data={compareFaqJsonLd} />
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Breadcrumbs
          items={[
            { name: "Compare", href: "/compare/mynutririse-vs-myfitnesspal" },
          ]}
        />
        <h1 className="mt-6 text-center text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
          MyNutriRise vs MyFitnessPal
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-500">
          Both track calories well. The difference is what you eat — and how
          much effort logging takes.
        </p>

        <div className="mt-12 overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-emerald-50/50">
                <th className="px-5 py-4 text-left font-semibold text-slate-700">Feature</th>
                <th className="px-5 py-4 text-left font-semibold text-emerald-700">MyNutriRise</th>
                <th className="px-5 py-4 text-left font-semibold text-slate-700">MyFitnessPal</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([feature, ours, theirs]) => (
                <tr key={feature} className="border-b border-slate-100 last:border-b-0 align-top">
                  <th scope="row" className="px-5 py-4 text-left font-medium text-slate-700">
                    {feature}
                  </th>
                  <td className="px-5 py-4 text-slate-600">{ours}</td>
                  <td className="px-5 py-4 text-slate-600">{theirs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          Comparison based on publicly available information, June 2026.
          Features and pricing may change — check both apps for current
          details.
        </p>

        <div className="mt-12 space-y-4 text-slate-600">
          <h2 className="text-2xl font-bold text-slate-800">
            Who should pick MyFitnessPal
          </h2>
          <p>
            You eat mostly Western and packaged foods, you rely heavily on
            barcode scanning, and you want the largest crowd-sourced food
            database on the market. MyFitnessPal has been refined for over a
            decade and its logging flow is excellent for that use case —
            especially if you already have years of history in it.
          </p>
          <h2 className="text-2xl font-bold text-slate-800">
            Who should pick MyNutriRise
          </h2>
          <p>
            Your plate looks like biryani, tagine, mandi, or kabuli pulao —
            dishes generic databases miss. You want halal-friendly meal plans,
            a Ramadan fasting schedule, an app that speaks Arabic, Turkish, or
            Urdu, and AI photo logging without paying first. That is exactly
            the gap MyNutriRise was built to fill — see the{" "}
            <Link href="/halal-nutrition-app" className="font-medium text-emerald-600 hover:text-emerald-700">
              halal nutrition app
            </Link>{" "}
            page for the full story.
          </p>
          <h2 className="text-2xl font-bold text-slate-800">
            Pricing compared
          </h2>
          <p>
            Both apps are free to download with optional subscriptions.
            MyFitnessPal gates barcode scanning, meal scan, and fasting behind
            Premium (7-day trial). MyNutriRise includes AI photo scanning and
            its cultural food libraries from the free tier, with Premium
            unlocking higher AI limits, full analytics, and all fasting plans.
          </p>
          <h2 className="text-2xl font-bold text-slate-800">
            Frequently asked questions
          </h2>
          {compareFaqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold text-slate-800">{faq.question}</h3>
              <p className="mt-2">{faq.answer}</p>
            </div>
          ))}
          <h2 className="text-2xl font-bold text-slate-800">
            The honest summary
          </h2>
          <p>
            MyFitnessPal is a mature tracker with one of the largest food
            databases anywhere — if your meals are mostly Western and
            packaged-food based, it serves you well. MyNutriRise is built for
            people whose plates those databases under-serve: if you eat kabuli
            pulao, nihari, or tagine, want halal-friendly plans, fast during
            Ramadan, or prefer Arabic, Turkish, or Urdu — that&apos;s exactly
            what we&apos;re for, with AI photo logging included from the free
            tier.
          </p>
          <p>
            Try the{" "}
            <Link href="/quiz" className="font-medium text-emerald-600 hover:text-emerald-700">
              1-minute plan quiz
            </Link>{" "}
            to see what your plan would look like.
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-400 p-8 text-center sm:p-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Track the food you actually eat
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <AppStoreButton store="apple" />
            <AppStoreButton store="google" />
          </div>
        </div>
      </div>
    </div>
  );
}
