import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StoreButtons } from "@/components/ui/Button";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";

export function CTA({
  t,
  store,
}: {
  lang: Locale;
  t: Messages["home"]["cta"];
  store: Messages["common"]["store"];
}) {
  return (
    <section id="download" className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 px-6 py-16 shadow-[0_40px_80px_-30px_rgb(4_120_87/0.55)] sm:rounded-[2.5rem] sm:px-10 sm:py-24 dark:from-emerald-900 dark:via-emerald-800 dark:to-teal-900 dark:shadow-none dark:ring-1 dark:ring-white/10">
        {/* Soft light blooms */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className="anim-float absolute -top-16 start-[6%] h-64 w-64 rounded-full bg-white/15 blur-3xl"
            style={{ animationDuration: "9s" }}
          />
          <div
            className="anim-float absolute -bottom-20 end-[8%] h-72 w-72 rounded-full bg-teal-300/20 blur-3xl"
            style={{ animationDuration: "11s", animationDelay: "1s" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgb(255_255_255/0.12),transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="text-h1 text-white">
              {t.title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lead text-white/85">
              {t.lead}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-10">
            <StoreButtons t={store} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
