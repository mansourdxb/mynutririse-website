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
    <div className="bg-white pt-24">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-center text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
          Get your custom plan{" "}
          <span className="text-emerald-600">
            in 1 minute
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-slate-500">
          Four quick questions — no sign-up needed.
        </p>
        <div className="mt-12">
          <QuizFlow />
        </div>
      </div>
    </div>
  );
}
