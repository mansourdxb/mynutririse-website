import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Why we built MyNutriRise — nutrition tracking that respects your culture, with AI that removes the friction.",
  alternates: { canonical: "/about" },
};

const facts = [
  { value: "9,000+", label: "Recipes with full nutrition details" },
  { value: "50+", label: "Cultural cuisine libraries" },
  { value: "25", label: "Fasting plans, incl. a Ramadan schedule" },
  { value: "318", label: "Exercises in the workout library" },
  { value: "6", label: "Guided 4-week diet plans" },
  { value: "4", label: "Languages: English, Arabic, Turkish, Urdu" },
];

export default function AboutPage() {
  return (
    <div className="bg-white pt-24">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-center text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
          Nutrition tracking that speaks your language
        </h1>

        <div className="mt-12 space-y-6 text-base leading-7 text-slate-600">
          <p>
            Most nutrition apps were built around Western menus. Search for
            kabuli pulao, mandi, or nihari and you get a shrug — or a generic
            &ldquo;rice with meat&rdquo; entry that misses by hundreds of
            calories. For millions of people, that means choosing between the
            food they love and the goals they care about.
          </p>
          <p>
            MyNutriRise was built to remove that choice. Our food libraries
            cover 50+ cultural cuisines — Turkish, Moroccan, Persian,
            Pakistani, Afghan, Bangladeshi, Gulf &amp; Emirati, and many more —
            with halal-friendly recipes and meal plans as first-class features,
            not afterthoughts. The app speaks English, Arabic, Turkish, and
            Urdu, and even includes a Ramadan fasting schedule alongside 16:8,
            5:2, and 20+ other protocols.
          </p>
          <p>
            The second thing we removed is friction. Tracking fails when it
            feels like accounting — so we put AI at the center: snap a photo
            and your meal is identified, portioned, and logged in seconds. A
            coach in your pocket gives guidance rooted in behavioral science,
            not guilt trips.
          </p>
          <p>
            Everything rests on established nutrition math — the Mifflin–St
            Jeor equation for energy needs, verified food data, and sustainable
            pacing instead of crash-diet promises. Small wins, every day.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-100">
              <p className="text-2xl font-bold text-emerald-600">{fact.value}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{fact.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-slate-600">
            Questions, feedback, or press inquiries?{" "}
            <Link href="/support" className="font-medium text-emerald-600 hover:text-emerald-700">
              Get in touch
            </Link>{" "}
            or see our{" "}
            <Link href="/press" className="font-medium text-emerald-600 hover:text-emerald-700">
              press kit
            </Link>
            .
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <AppStoreButton store="apple" />
            <AppStoreButton store="google" />
          </div>
        </div>
      </div>
    </div>
  );
}
