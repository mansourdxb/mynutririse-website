import type { Messages } from "@/i18n/messages";

/** Plain-text overview of the app: what it does for each goal. Server-rendered. */
export function HomeIntro({ t }: { t: Messages["home"]["intro"] }) {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-h2 text-ink">{t.title}</h2>
        <div className="mt-8 space-y-5 text-lg leading-8 text-ink-2">
          {t.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
