"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { homeFaqs } from "./homeFaqData";

function HomeFaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `home-faq-${question.replace(/\W+/g, "-").toLowerCase()}`;
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-500 sm:px-6"
      >
        <span
          className={`text-sm font-medium transition-colors sm:text-[15px] ${
            isOpen ? "text-emerald-600" : "text-slate-700"
          }`}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${
            isOpen
              ? "bg-emerald-100 text-emerald-600"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M2 4.5L6 8.5L10 4.5" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
            id={panelId}
          >
            <div className="px-5 pb-5 sm:px-6">
              <p className="text-sm leading-relaxed text-slate-500 sm:text-[15px] sm:leading-7">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-emerald-600 mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-800">
            Questions, answered
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
            {homeFaqs.map((faq, i) => (
              <HomeFaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            More questions?{" "}
            <Link
              href="/support"
              className="font-medium text-emerald-600 hover:text-emerald-700"
            >
              Visit the Help Center
            </Link>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
