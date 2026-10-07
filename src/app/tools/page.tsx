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
    <div className="wash-mint pt-24 pb-8">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-center text-h1 text-ink">
          Free Nutrition Tools
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lead text-ink-3">
          Five calculators, zero sign-up. The same math MyNutriRise uses to
          build your plan.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex h-full flex-col card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-emerald-200 dark:hover:ring-emerald-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <span className="text-3xl" aria-hidden="true">{tool.emoji}</span>
              <h2 className="mt-4 font-semibold text-ink group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {tool.title}
              </h2>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-3">
                {tool.description}
              </p>
            </Link>
          ))}
          <Link
            href="/quiz"
            className="group flex h-full flex-col rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 shadow-[0_30px_60px_-30px_rgb(4_120_87/0.55)] dark:from-emerald-900 dark:via-emerald-800 dark:to-teal-900 dark:shadow-none dark:ring-1 dark:ring-white/10 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
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
