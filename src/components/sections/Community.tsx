import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";

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

export function Community() {
  if (creators.length === 0) return null;

  return (
    <section className="relative bg-gradient-to-b from-white via-emerald-50/20 to-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-emerald-600 mb-4">
            Community
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-800">
            Creators who track with us
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {creators.map((creator) => (
            <StaggerItem key={creator.handle}>
              <a
                href={creator.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-emerald-200"
              >
                <p className="flex-1 text-[15px] italic leading-relaxed text-slate-600">
                  &ldquo;{creator.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-semibold text-emerald-600">
                    {creator.handle}
                  </span>
                  <span className="text-xs text-slate-500">{creator.platform}</span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
