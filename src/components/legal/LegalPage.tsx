import type { ReactNode } from "react";
import { rich } from "@/i18n/rich";

type LegalBlock = {
  type: string; // "p" | "h3" | "ul"
  text?: string;
  items?: readonly string[];
  variant?: string; // p only: "important" | "caps" | "tight"
};

export type LegalMessages = {
  title: string;
  lastUpdated: string;
  bindingNote: string;
  sections: readonly { heading: string; blocks: readonly LegalBlock[] }[];
};

const linkClass =
  "font-medium text-emerald-600 dark:text-emerald-400 underline underline-offset-4 hover:text-emerald-700 dark:hover:text-emerald-300";

function external(href: string) {
  return function ExternalLink(c: ReactNode) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {c}
      </a>
    );
  };
}
function plain(href: string) {
  return function PlainLink(c: ReactNode) {
    return (
      <a href={href} className={linkClass}>
        {c}
      </a>
    );
  };
}

const tags = {
  b: (c: ReactNode) => <strong>{c}</strong>,
  email: plain("mailto:support@mynutririse.com"),
  site: plain("https://mynutririse.com"),
  fatsecret: external("https://platform.fatsecret.com"),
  fatsecretPrivacy: external("https://platform.fatsecret.com/privacy"),
};

const pClass: Record<string, string> = {
  important: "mt-3 font-semibold text-ink",
  caps: "mt-3 text-xs font-semibold uppercase tracking-wide text-ink-3",
  tight: "mt-1",
};

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "h3") {
    return <h3 className="mt-6 font-semibold text-ink">{block.text}</h3>;
  }
  if (block.type === "ul") {
    return (
      <ul className="mt-3 list-disc space-y-2 ps-6">
        {block.items?.map((item) => (
          <li key={item}>{rich(item, tags)}</li>
        ))}
      </ul>
    );
  }
  return <p className={pClass[block.variant ?? ""] ?? "mt-3"}>{rich(block.text ?? "", tags)}</p>;
}

/** Shared renderer for the privacy policy and terms of service pages. */
export function LegalPage({ t }: { t: LegalMessages }) {
  return (
    <div className="wash-mint pt-24 pb-8">
      <article className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight text-ink">
          {t.title}
        </h1>
        <p className="mt-4 text-sm text-ink-3">
          {t.lastUpdated}
        </p>
        {t.bindingNote && (
          <p className="mt-4 rounded-xl border border-line bg-surface px-4 py-3 text-xs leading-5 text-ink-3">
            {t.bindingNote}
          </p>
        )}

        <div className="mt-12 space-y-10 text-base leading-7 text-ink-2">
          {t.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-h4 text-ink">
                {section.heading}
              </h2>
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
