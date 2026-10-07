import { AnimatedSection } from "@/components/ui/AnimatedSection";

/**
 * Add real press mentions, App Store features, or awards here and the bar
 * appears automatically. Leave the array empty and the section renders
 * nothing. Example entry:
 *   { name: "TechCrunch", href: "https://techcrunch.com/your-article" }
 * Only list outlets that have genuinely covered the app.
 */
const pressMentions: { name: string; href?: string }[] = [];

export function PressBar() {
  if (pressMentions.length === 0) return null;

  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-3">
            As featured in
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {pressMentions.map((mention) =>
              mention.href ? (
                <a
                  key={mention.name}
                  href={mention.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-ink-3 transition-colors hover:text-ink-2"
                >
                  {mention.name}
                </a>
              ) : (
                <span key={mention.name} className="text-lg font-bold text-ink-3">
                  {mention.name}
                </span>
              )
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
