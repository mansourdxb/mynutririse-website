import type { Metadata } from "next";
import { Features } from "@/components/sections/Features";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Features — AI Meal Scan, Cultural Recipes & Fasting Tracker",
  description:
    "Explore the powerful features that make MyNutriRise the smartest way to track nutrition, build healthy habits, and reach your wellness goals.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <>
      <div className="wash-mint pt-24 pb-8">
        <section className="mx-auto max-w-4xl px-6 py-12 text-center">
          <h1 className="text-h1 text-ink">
            Powerful Features for Healthier Living
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink-3">
            Everything you need to understand your nutrition, optimize your
            habits, and feel your best — all in one beautifully designed app.
          </p>
        </section>
      </div>
      <Features showGrid />
      <CTA />
    </>
  );
}
