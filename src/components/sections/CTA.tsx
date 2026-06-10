import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StoreButtons } from "@/components/ui/Button";

export function CTA() {
  return (
    <section id="download" className="relative bg-white px-4 py-16 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-emerald-400 to-teal-400 py-20 lg:py-28">
        {/* Floating decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="anim-float absolute top-12 left-[8%] h-48 w-48 rounded-full bg-white/10 blur-3xl"
            style={{ animationDuration: "8s" }}
          />
          <div
            className="anim-float absolute -bottom-10 right-[12%] h-64 w-64 rounded-full bg-teal-200/15 blur-3xl"
            style={{ animationDuration: "10s", animationDelay: "1s" }}
          />
          <div
            className="anim-float absolute top-1/3 right-[25%] h-32 w-32 rounded-full bg-emerald-200/10 blur-2xl"
            style={{ animationDuration: "6s", animationDelay: "0.5s" }}
          />
          <div
            className="anim-float absolute bottom-16 left-[30%] h-40 w-40 rounded-full bg-white/5 blur-2xl"
            style={{ animationDuration: "9s", animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
          <AnimatedSection>
            <h2 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
              Start Your Wellness Journey Today
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Join thousands eating smarter and living better. Your healthier
              life is one download away.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-10">
            <StoreButtons />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
