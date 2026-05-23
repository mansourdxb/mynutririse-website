import type { Metadata } from "next";
import { Features } from "@/components/sections/Features";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Features — MyNutriRise",
  description:
    "Explore the powerful features that make MyNutriRise the smartest way to track nutrition, build healthy habits, and reach your wellness goals.",
};

export default function FeaturesPage() {
  return (
    <>
      <div className="pt-24">
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Powerful Features for Healthier Living
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
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
