import type { Metadata } from "next";
import { QuizFlow } from "@/components/quiz/QuizFlow";

export const metadata: Metadata = {
  title: "Get Your Custom Plan",
  description:
    "Answer four quick questions and get a personalized nutrition plan with your daily calorie target — free, in under a minute.",
  alternates: { canonical: "/quiz" },
};

export default function QuizPage() {
  return (
    <div className="wash-mint pt-24 pb-8">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-center text-h2 text-ink">
          Get your custom plan{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            in 1 minute
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-ink-3">
          Four quick questions — no sign-up needed.
        </p>
        <div className="mt-12">
          <QuizFlow />
        </div>
      </div>
    </div>
  );
}
