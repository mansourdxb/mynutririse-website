import type { Metadata } from "next";
import Link from "next/link";
import { StoreButtons } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  CUISINES,
  DISHES,
  FASTING_PLAN_COUNT,
  LANGUAGE_LIST,
} from "@/data/facts";

export const metadata: Metadata = {
  title: { absolute: "Halal Calorie Tracker & Muslim Nutrition App | MyNutriRise" },
  description:
    `Track calories with a halal-friendly nutrition app: ${CUISINES} world cuisines, a Ramadan fasting schedule, AI photo meal logging, and full Arabic support.`,
  alternates: { canonical: "/halal-nutrition-app" },
};

const cuisines = [
  "Turkish", "Moroccan", "Persian", "Egyptian", "Pakistani", "Indonesian",
  "Malaysian", "Afghan", "Somali & East African", "Nigerian & West African",
  "Gulf & Emirati", "Yemeni", "Lebanese", "Uzbek & Central Asian",
  "Bangladeshi", "Indian", "Arabic & Middle Eastern",
];

const faqs = [
  {
    question: "Is MyNutriRise halal-friendly?",
    answer:
      `Yes. Halal filtering is checked across every one of the ${DISHES} dishes in the catalogue, spanning ${CUISINES} world cuisines, with halal-friendly recipes and meal plans — including a dedicated Middle Eastern Healthy plan.`,
  },
  {
    question: "Does it have a Ramadan mode?",
    answer:
      `Yes. Among its ${FASTING_PLAN_COUNT} fasting plans, MyNutriRise includes a dedicated Ramadan schedule that tracks your dawn-to-sunset fast, while you keep logging meals to stay balanced through the month.`,
  },
  {
    question: "Can I track traditional dishes like biryani or kabuli pulao?",
    answer:
      "Yes. Dishes such as chicken biryani, kabuli pulao, nihari, mandi, koshari, and tagine are in the food library with calories, protein, carbs, and fat per serving — or snap a photo and AI estimates your exact portion.",
  },
  {
    question: "Which languages does the app support?",
    answer:
      `MyNutriRise is available in ${LANGUAGE_LIST} on both iPhone and Android.`,
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

export default function HalalNutritionAppPage() {
  return (
    <div className="wash-mint pt-24 pb-8">
      <JsonLd data={faqJsonLd} />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Breadcrumbs items={[{ name: "Halal Nutrition App", href: "/halal-nutrition-app" }]} />

        <h1 className="mt-6 text-h1 text-ink">
          The halal-friendly calorie tracker built for your kitchen
        </h1>
        <p className="mt-6 text-lead text-ink-3">
          Most calorie apps were built around Western menus — search for
          biryani, mandi, or kabuli pulao and you get a shrug. MyNutriRise is
          different: halal food tracking is a first-class feature, not an
          afterthought.
        </p>

        <StoreButtons reassurance className="mt-8" />

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-ink">
            Halal-checked across {DISHES}{" "}dishes and {CUISINES}{" "}cuisines
          </h2>
          <p className="mt-4 leading-7 text-ink-2">
            Every dish comes with calories, protein, carbs, and fat per serving
            — from Adana kebab (380 kcal) to chicken tagine (380 kcal) to
            kabuli pulao (480 kcal). Browse the libraries your family actually
            cooks from:
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {cuisines.map((cuisine) => (
              <span
                key={cuisine}
                className="rounded-full bg-emerald-50 dark:bg-emerald-400/10 px-3 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300"
              >
                {cuisine}
              </span>
            ))}
            <span className="rounded-full bg-surface-2 px-3 py-1.5 text-sm font-medium text-ink-2">
              + many more
            </span>
          </div>
          <p className="mt-4 leading-7 text-ink-2">
            See a sample of the dishes on our{" "}
            <Link href="/recipes" className="font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
              recipes page
            </Link>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">
            Ramadan-ready fasting
          </h2>
          <p className="mt-4 leading-7 text-ink-2">
            MyNutriRise includes {FASTING_PLAN_COUNT}{" "}fasting plans — and one of them is a
            dedicated <strong>Ramadan schedule</strong> that tracks your
            dawn-to-sunset fast. Keep logging your meals to hold calories and
            protein steady through the month. Outside
            Ramadan, the same tracker covers 16:8, 5:2, OMAD, and more —
            see our{" "}
            <Link
              href="/blog/intermittent-fasting-16-8-guide"
              className="font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
            >
              beginner&apos;s guide to 16:8 fasting
            </Link>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">
            Snap a photo — AI does the logging
          </h2>
          <p className="mt-4 leading-7 text-ink-2">
            Family-style meals make &ldquo;one serving&rdquo; hard to estimate.
            Photograph your plate and the AI identifies the dish, estimates
            your portion, and logs calories and macros in seconds. Set your
            daily target with our free{" "}
            <Link
              href="/tools/calorie-calculator"
              className="font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
            >
              calorie calculator
            </Link>{" "}
            and the app keeps score for you.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">
            In your language
          </h2>
          <p className="mt-4 leading-7 text-ink-2">
            The app speaks <strong>{LANGUAGE_LIST}</strong>{" "}
            — including the AI coach and meal plans like{" "}
            <strong>Middle Eastern Healthy</strong>, a 4-week halal-friendly
            plan with grilled meats, legumes, fresh salads, and wholesome
            grains.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-semibold text-ink">{faq.question}</h3>
                <p className="mt-2 leading-7 text-ink-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-14 rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 shadow-[0_30px_60px_-30px_rgb(4_120_87/0.55)] dark:from-emerald-900 dark:via-emerald-800 dark:to-teal-900 dark:shadow-none dark:ring-1 dark:ring-white/10 p-8 text-center sm:p-10">
          <h2 className="text-h3 text-white">
            Your culture&apos;s food, tracked properly
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            Free to download on iPhone and Android — or take the{" "}
            <Link href="/quiz" className="underline decoration-white/50 underline-offset-2 hover:decoration-white">
              1-minute plan quiz
            </Link>{" "}
            first.
          </p>
          <StoreButtons className="mt-6" />
        </div>
      </div>
    </div>
  );
}
