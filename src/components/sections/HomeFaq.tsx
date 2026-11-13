import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { localePath, type Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { rich } from "@/i18n/rich";

/**
 * Native <details> accordion: every answer is in the server HTML (it backs the
 * FAQPage JSON-LD), it works without JS, and `name` keeps one item open at a time.
 */
export function HomeFaq({ lang, t }: { lang: Locale; t: Messages["home"]["faq"] }) {
  return (
    <section className="relative section-y">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="eyebrow mb-4">
            {t.eyebrow}
          </p>
          <h2 className="text-h2 text-ink">
            {t.title}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-line/80 bg-surface shadow-sm">
            {t.items.map((faq, i) => (
              <details
                key={faq.question}
                name="home-faq"
                open={i === 0}
                className="group border-b border-line last:border-b-0"
              >
                <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-start transition-colors hover:bg-emerald-50/40 dark:hover:bg-emerald-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-500 sm:px-6 [&::-webkit-details-marker]:hidden">
                  <span className="text-sm font-medium text-ink-2 transition-colors group-open:text-emerald-600 sm:text-[15px] dark:group-open:text-emerald-400">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-2 text-ink-3 transition-[transform,color,background-color] duration-300 group-open:rotate-180 group-open:bg-emerald-100 group-open:text-emerald-600 dark:group-open:bg-emerald-400/15 dark:group-open:text-emerald-400"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M2 4.5L6 8.5L10 4.5" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 sm:px-6">
                  <p className="text-sm leading-relaxed text-ink-3 sm:text-[15px] sm:leading-7">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ink-3">
            {rich(t.more, {
              link: (c) => (
                <Link
                  href={localePath(lang, "/support")}
                  className="font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                >
                  {c}
                </Link>
              ),
            })}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
