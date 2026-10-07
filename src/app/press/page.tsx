import type { Metadata } from "next";
import {
  CARDIO_ACTIVITY_COUNT,
  CUISINES,
  DIET_PLAN_COUNT,
  DISHES,
  FASTING_PLAN_COUNT,
  LANGUAGES,
  LANGUAGE_LIST,
  RECIPES,
  STRENGTH_EXERCISE_COUNT,
} from "@/data/facts";

export const metadata: Metadata = {
  title: "Press Kit",
  description:
    "Press resources for MyNutriRise — boilerplate, fact sheet, brand assets, and media contact.",
  alternates: { canonical: "/press" },
};

const factSheet = [
  ["Product", "MyNutriRise — AI-powered nutrition & fitness tracker"],
  ["Platforms", "iOS and Android"],
  ["Languages", LANGUAGES.join(", ")],
  ["Recipes", `${RECIPES} with real ingredient amounts and cooking steps, across ${DISHES} dishes`],
  ["Cuisines", `${CUISINES} world cuisines, halal filtering checked across every dish`],
  ["Fasting plans", `${FASTING_PLAN_COUNT} plans including 16:8, 5:2, OMAD, and a Ramadan schedule`],
  ["Diet plans", `${DIET_PLAN_COUNT} guided 4-week plans incl. Middle Eastern Healthy`],
  ["Workout library", `${STRENGTH_EXERCISE_COUNT} strength exercises, ${CARDIO_ACTIVITY_COUNT} cardio and sports activities, and prebuilt routines`],
  ["Pricing", "Free to download; optional Premium subscription"],
  ["Website", "www.mynutririse.com"],
];

export default function PressPage() {
  return (
    <div className="bg-white pt-24">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-center text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
          Press Kit
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-slate-500">
          Everything you need to write about MyNutriRise.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-800">Boilerplate</h2>
          <p className="mt-4 rounded-2xl bg-white p-6 leading-7 text-slate-600 shadow-sm ring-1 ring-slate-100">
            MyNutriRise is an AI-powered nutrition and fitness app built for
            people the big trackers overlook. Users snap a photo of any meal
            and AI logs the calories and macros instantly — across {RECIPES}{" "}
            recipes and {CUISINES}{" "}world cuisines, with halal-friendly
            meal plans, {FASTING_PLAN_COUNT}{" "}intermittent-fasting plans including a Ramadan
            schedule, workout tracking, and an AI coach. Available on iOS and
            Android in {LANGUAGE_LIST}.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-800">Fact sheet</h2>
          <div className="mt-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
            <table className="w-full text-sm">
              <tbody>
                {factSheet.map(([key, value]) => (
                  <tr key={key} className="border-b border-slate-100 last:border-b-0">
                    <th scope="row" className="w-40 px-5 py-3.5 text-left align-top font-semibold text-slate-700">
                      {key}
                    </th>
                    <td className="px-5 py-3.5 text-slate-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-800">Brand assets</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
            <li>
              <a href="/icon.svg" download className="font-medium text-emerald-600 hover:text-emerald-700">
                App logo (SVG)
              </a>
            </li>
            <li>
              App screenshots: available on request, or use the screens shown
              throughout this site.
            </li>
            <li>
              Brand colors: Emerald <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">#10b981</code>,
              White <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">#FFFFFF</code>,
              Slate <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">#1e293b</code>
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-800">Media contact</h2>
          <p className="mt-4 text-slate-600">
            For interviews, review access, or anything else:{" "}
            <a href="mailto:contact@mynutririse.com" className="font-medium text-emerald-600 hover:text-emerald-700">
              contact@mynutririse.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
