"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { fill } from "@/i18n/rich";

type SupportMessages = Messages["support"];
type CategoryId = keyof SupportMessages["categories"];

const categories: { id: CategoryId; emoji: string }[] = [
  { id: "all", emoji: "📋" },
  { id: "gettingStarted", emoji: "🚀" },
  { id: "mealTracking", emoji: "📸" },
  { id: "nutrition", emoji: "🥗" },
  { id: "health", emoji: "💪" },
  { id: "fasting", emoji: "⏱️" },
  { id: "progress", emoji: "📊" },
  { id: "account", emoji: "⚙️" },
];

function FaqItem({
  panelId,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  panelId: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-line last:border-b-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-start transition-colors hover:bg-emerald-50/40 dark:hover:bg-emerald-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-500 sm:px-6"
      >
        <span
          className={`text-sm font-medium transition-colors sm:text-[15px] ${isOpen ? "text-emerald-600 dark:text-emerald-400" : "text-ink-2"}`}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? "bg-emerald-100 dark:bg-emerald-400/15 text-emerald-600 dark:text-emerald-400" : "bg-surface-2 text-ink-3"}`}
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
              <p className="text-sm leading-relaxed text-ink-3 sm:text-[15px] sm:leading-7">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SupportContent({ lang, t }: { lang: Locale; t: SupportMessages }) {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Index in the full list gives a stable, script-independent panel id.
  const faqs = t.faqs.map((faq, index) => ({ ...faq, index }));
  const filtered =
    activeCategory === "all"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const handleCategoryChange = (id: CategoryId) => {
    setActiveCategory(id);
    setOpenIndex(null);
  };

  return (
    <div className="wash-mint pt-24 pb-8">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <h1 className="text-h1 text-ink">
            {t.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink-3">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-2xl border border-line bg-surface p-8 transition-all hover:border-emerald-200 dark:hover:border-emerald-400/20 hover:shadow-lg hover:shadow-emerald-50">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <h2 className="mt-6 text-lg font-semibold text-ink">{t.cards.email.title}</h2>
            <p className="mt-2 text-sm leading-6 text-ink-3">{t.cards.email.text}</p>
            <a href="mailto:support@mynutririse.com" className="mt-4 inline-block text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
              {t.cards.email.link}
            </a>
          </div>

          <div className="group rounded-2xl border border-line bg-surface p-8 transition-all hover:border-emerald-200 dark:hover:border-emerald-400/20 hover:shadow-lg hover:shadow-emerald-50">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <h2 className="mt-6 text-lg font-semibold text-ink">{t.cards.faq.title}</h2>
            <p className="mt-2 text-sm leading-6 text-ink-3">{t.cards.faq.text}</p>
            <a href="#faq" className="mt-4 inline-block text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
              {t.cards.faq.link}
            </a>
          </div>

          <div className="group rounded-2xl border border-line bg-surface p-8 transition-all hover:border-emerald-200 dark:hover:border-emerald-400/20 hover:shadow-lg hover:shadow-emerald-50 sm:col-span-2 lg:col-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <h2 className="mt-6 text-lg font-semibold text-ink">{t.cards.feature.title}</h2>
            <p className="mt-2 text-sm leading-6 text-ink-3">{t.cards.feature.text}</p>
            <a href="mailto:contact@mynutririse.com" className="mt-4 inline-block text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
              {t.cards.feature.link}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="wash-lilac section-y">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="eyebrow mb-3">
              {t.faqEyebrow}
            </p>
            <h2 className="text-h2 text-ink">
              {t.faqTitle}
            </h2>
            <p className="mt-4 text-base text-ink-3 max-w-xl mx-auto">
              {t.faqSubtitle}
            </p>
          </div>

          {/* Category filter pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                aria-pressed={activeCategory === cat.id}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                  activeCategory === cat.id
                    ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/25"
                    : "bg-surface text-ink-2 border border-line hover:border-emerald-300 dark:hover:border-emerald-400/30 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-400/10"
                }`}
              >
                <span className="text-sm">{cat.emoji}</span>
                <span className="hidden sm:inline">{t.categories[cat.id]}</span>
              </button>
            ))}
          </div>

          {/* Count badge */}
          <div className="mt-6 text-center">
            <span className="text-xs text-ink-3">
              {fill(t.questionCount[new Intl.PluralRules(lang).select(filtered.length)], {
                n: filtered.length,
              })}
            </span>
          </div>

          {/* FAQ list */}
          <motion.div
            layout
            className="mt-6 overflow-hidden rounded-2xl border border-line/80 bg-surface shadow-sm"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                {filtered.map((faq, i) => (
                  <FaqItem
                    key={`${activeCategory}-${i}`}
                    panelId={`faq-${faq.index}`}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
