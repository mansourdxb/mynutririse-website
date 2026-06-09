import type { Metadata } from "next";
import { Features } from "@/components/sections/Features";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the powerful features that make MyNutriRise the smartest way to track nutrition, build healthy habits, and reach your wellness goals.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <>
      <div className="pt-24">
        <section className="mx-auto max-w-4xl px-6 py-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
            Powerful Features for Healthier Living
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Everything you need to understand your nutrition, optimize your
            habits, and feel your best — all in one beautifully designed app.
          </p>
        </section>
      </div>
      <Features />
      <CTA />
    </>
  );
}
