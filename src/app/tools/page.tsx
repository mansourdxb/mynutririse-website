import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Nutrition Tools",
  description:
    "Free calculators for BMI, daily calories, macros, BMR, and ideal weight — no sign-up needed.",
  alternates: { canonical: "/tools" },
};

const tools = [
  {
    href: "/tools/calorie-calculator",
    emoji: "🔥",
    title: "Calorie Calculator",
    description: "Daily targets for losing, maintaining, or gaining — Mifflin–St Jeor.",
  },
  {
    href: "/tools/macro-calculator",
    emoji: "🥩",
    title: "Macro Calculator",
    description: "Protein, carbs & fat targets from your calorie goal.",
  },
  {
    href: "/tools/bmi-calculator",
    emoji: "📏",
    title: "BMI Calculator",
    description: "Body Mass Index with healthy-range guidance, metric or imperial.",
  },
  {
    href: "/tools/bmr-calculator",
    emoji: "💤",
    title: "BMR Calculator",
    description: "Calories your body burns at complete rest.",
  },
  {
    href: "/tools/ideal-weight-calculator",
    emoji: "🎯",
    title: "Ideal Weight Calculator",
    description: "Healthy weight range for your height — Devine & Robinson formulas.",
  },
];

export default function ToolsPage() {
  return (
    <div className="bg-white pt-24">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-center text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
          Free Nutrition Tools
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-slate-500">
          Five calculators, zero sign-up. The same math MyNutriRise uses to
          build your plan.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <span className="text-3xl" aria-hidden="true">{tool.emoji}</span>
              <h2 className="mt-4 font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                {tool.title}
              </h2>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500">
                {tool.description}
              </p>
            </Link>
          ))}
          <Link
            href="/quiz"
            className="group flex h-full flex-col rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-400 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <span className="text-3xl" aria-hidden="true">✨</span>
            <h2 className="mt-4 font-semibold text-white">Custom Plan Quiz</h2>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-white/85">
              All of the above in one — answer 4 questions, get your full plan.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
