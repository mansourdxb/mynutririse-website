import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreButton } from "@/components/ui/Button";
import {
  CUISINES,
  DIET_PLAN_COUNT,
  FASTING_PLAN_COUNT,
  FREE_COACH_MESSAGES_PER_DAY,
  FREE_PHOTO_SCANS_PER_DAY,
  LANGUAGES,
  PREMIUM_PHOTO_SCANS_PER_DAY,
  STRENGTH_EXERCISE_COUNT,
} from "@/data/facts";
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
      `MyFitnessPal has a large general food database but no dedicated halal or cultural cuisine libraries. MyNutriRise covers ${CUISINES} world cuisines, checks halal filtering across every dish in its catalogue, and includes a halal-friendly Middle Eastern Healthy meal plan.`,
  },
  {
    question: "Which app has better AI photo scanning?",
    answer:
      `MyNutriRise includes AI photo meal scanning from the free tier (${FREE_PHOTO_SCANS_PER_DAY} scans/day, ${PREMIUM_PHOTO_SCANS_PER_DAY}/day with Premium). MyFitnessPal's Meal Scan is available on its Premium plans.`,
  },
  {
    question: "Can I track Ramadan fasting in either app?",
    answer:
      `MyNutriRise ships a dedicated Ramadan schedule among ${FASTING_PLAN_COUNT} fasting plans. MyFitnessPal offers intermittent fasting tracking with Premium but has no Ramadan-specific schedule.`,
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
    `${CUISINES} world cuisines — Turkish, Moroccan, Pakistani, Afghan, Gulf & more, halal-checked throughout`,
    "Large general food database; no dedicated halal/cultural libraries",
  ],
  [
    "AI photo meal scanning",
    `Yes — included free (${FREE_PHOTO_SCANS_PER_DAY} scans/day), ${PREMIUM_PHOTO_SCANS_PER_DAY}/day with Premium`,
    "Meal Scan available on Premium plans",
  ],
  [
    "Intermittent fasting",
    `${FASTING_PLAN_COUNT} plans incl. 16:8, 5:2, OMAD and a Ramadan schedule`,
    "Fasting tracking included with Premium",
  ],
  [
    "Guided meal plans",
    `${DIET_PLAN_COUNT} four-week plans incl. Middle Eastern Healthy, Keto Friendly, Mediterranean`,
    "Meal plans available with Premium",
  ],
  [
    "Workout tracking",
    `${STRENGTH_EXERCISE_COUNT}-exercise strength library, routines, cardio & wearable sync`,
    "Exercise logging with large exercise database",
  ],
  [
    "App languages",
    LANGUAGES.join(", "),
    "Many languages incl. English, Spanish, French, German",
  ],
  [
    "AI coach",
    `Built-in AI nutrition & fitness coach (${FREE_COACH_MESSAGES_PER_DAY} free messages/day)`,
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
    <div className="wash-mint pt-24 pb-8">
      <JsonLd data={compareFaqJsonLd} />
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Breadcrumbs
          items={[
            { name: "Compare", href: "/compare/mynutririse-vs-myfitnesspal" },
          ]}
        />
        <h1 className="mt-6 text-center text-h1 text-ink">
          MyNutriRise vs MyFitnessPal
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lead text-ink-3">
          Both track calories well. The difference is what you eat — and how
          much effort logging takes.
        </p>

        <div className="mt-12 overflow-x-auto card">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-line bg-emerald-50/50 dark:bg-emerald-400/10">
                <th className="px-5 py-4 text-left font-semibold text-ink-2">Feature</th>
                <th className="px-5 py-4 text-left font-semibold text-emerald-700 dark:text-emerald-300">MyNutriRise</th>
                <th className="px-5 py-4 text-left font-semibold text-ink-2">MyFitnessPal</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([feature, ours, theirs]) => (
                <tr key={feature} className="border-b border-line last:border-b-0 align-top">
                  <th scope="row" className="px-5 py-4 text-left font-medium text-ink-2">
                    {feature}
                  </th>
                  <td className="px-5 py-4 text-ink-2">{ours}</td>
                  <td className="px-5 py-4 text-ink-2">{theirs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-xs text-ink-3">
          Comparison based on publicly available information, June 2026.
          Features and pricing may change — check both apps for current
          details.
        </p>

        <div className="mt-12 space-y-4 text-ink-2">
          <h2 className="text-2xl font-bold text-ink">
            Who should pick MyFitnessPal
          </h2>
          <p>
            You eat mostly Western and packaged foods, you rely heavily on
            barcode scanning, and you want the largest crowd-sourced food
            database on the market. MyFitnessPal has been refined for over a
            decade and its logging flow is excellent for that use case —
            especially if you already have years of history in it.
          </p>
          <h2 className="text-2xl font-bold text-ink">
            Who should pick MyNutriRise
          </h2>
          <p>
            Your plate looks like biryani, tagine, mandi, or kabuli pulao —
            dishes generic databases miss. You want halal-friendly meal plans,
            a Ramadan fasting schedule, an app that speaks Arabic, and AI
            photo logging without paying first. That is exactly
            the gap MyNutriRise was built to fill — see the{" "}
            <Link href="/halal-nutrition-app" className="font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
              halal nutrition app
            </Link>{" "}
            page for the full story.
          </p>
          <h2 className="text-2xl font-bold text-ink">
            Pricing compared
          </h2>
          <p>
            Both apps are free to download with optional subscriptions.
            MyFitnessPal gates barcode scanning, meal scan, and fasting behind
            Premium (7-day trial). MyNutriRise includes AI photo scanning and
            its cultural food libraries from the free tier, with Premium
            unlocking higher AI limits, full analytics, and all fasting plans.
          </p>
          <h2 className="text-2xl font-bold text-ink">
            Frequently asked questions
          </h2>
          {compareFaqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold text-ink">{faq.question}</h3>
              <p className="mt-2">{faq.answer}</p>
            </div>
          ))}
          <h2 className="text-2xl font-bold text-ink">
            The honest summary
          </h2>
          <p>
            MyFitnessPal is a mature tracker with one of the largest food
            databases anywhere — if your meals are mostly Western and
            packaged-food based, it serves you well. MyNutriRise is built for
            people whose plates those databases under-serve: if you eat kabuli
            pulao, nihari, or tagine, want halal-friendly plans, fast during
            Ramadan, or prefer an app in Arabic — that&apos;s exactly
            what we&apos;re for, with AI photo logging included from the free
            tier.
          </p>
          <p>
            Try the{" "}
            <Link href="/quiz" className="font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
              1-minute plan quiz
            </Link>{" "}
            to see what your plan would look like.
          </p>
        </div>

        <div className="mt-12 rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 shadow-[0_30px_60px_-30px_rgb(4_120_87/0.55)] dark:from-emerald-900 dark:via-emerald-800 dark:to-teal-900 dark:shadow-none dark:ring-1 dark:ring-white/10 p-8 text-center sm:p-10">
          <h2 className="text-h3 text-white">
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
