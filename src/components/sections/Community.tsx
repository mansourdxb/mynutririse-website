import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import type { Messages } from "@/i18n/messages";

/**
 * Add real creators/users who feature MyNutriRise and the section appears
 * automatically. Leave the array empty and it renders nothing.
 * Example entry:
 *   {
 *     handle: "@fitwithamira",
 *     quote: "I scan every iftar plate — game changer.",
 *     href: "https://instagram.com/reel/...",
 *     platform: "Instagram",
 *   }
 * Only list real people with their permission.
 */
const creators: {
  handle: string;
  quote: string;
  href: string;
  platform: string;
}[] = [];

export function Community({ t }: { t: Messages["home"]["community"] }) {
  if (creators.length === 0) return null;

  return (
    <section className="relative wash-mint section-y">
      <div className="container-page">
        <AnimatedSection className="mx-auto max-w-2xl text-center mb-14">
          <p className="eyebrow mb-4">
            {t.eyebrow}
          </p>
          <h2 className="text-h2 text-ink">
            {t.title}
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {creators.map((creator) => (
            <StaggerItem key={creator.handle}>
              <a
                href={creator.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-emerald-200 dark:hover:ring-emerald-400/20"
              >
                <p className="flex-1 text-[15px] italic leading-relaxed text-ink-2">
                  &ldquo;{creator.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    {creator.handle}
                  </span>
                  <span className="text-xs text-ink-3">{creator.platform}</span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
