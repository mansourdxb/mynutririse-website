import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import type { Messages } from "@/i18n/messages";
import { rich } from "@/i18n/rich";

const stepStyles = [
  {
    number: "1",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    number: "2",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
      </svg>
    ),
  },
  {
    number: "3",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
];

export function HowItWorks({ t }: { t: Messages["home"]["howItWorks"] }) {
  const steps = stepStyles.map((s, i) => ({ ...s, ...t.steps[i] }));

  return (
    <section className="relative section-y">
      <div className="container-page">
        <AnimatedSection className="mx-auto max-w-2xl text-center mb-14">
          <p className="eyebrow mb-4">
            {t.eyebrow}
          </p>
          <h2 className="text-h2 text-ink">
            {rich(t.title, {
              hl: (c) => <span className="text-emerald-600 dark:text-emerald-400">{c}</span>,
            })}
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative h-full card p-8 card-hover">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400">
                    {step.icon}
                  </div>
                  <span className="text-5xl font-bold text-emerald-100 dark:text-emerald-400/25">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-3">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
