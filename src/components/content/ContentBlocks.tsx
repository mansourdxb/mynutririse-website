import type { ReactNode } from "react";
import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import { rich } from "@/i18n/rich";

/** Long-form content stored in messages as language-neutral blocks. */
export type Block = {
  type: string; // "h2" | "h3" | "p" | "ul" | "ol" | "formula" | "table" | "sources"
  text?: string;
  items?: readonly string[];
  head?: readonly string[];
  rows?: readonly (readonly string[])[];
  sources?: readonly { label: string; url: string }[];
};

/**
 * Link tags translators may use in any block text: "<macro>macro calculator</macro>".
 * Tags for pages that do not exist yet must not be added here.
 */
export const LINK_TAGS: Record<string, string> = {
  calorie: "/tools/calorie-calculator",
  macro: "/tools/macro-calculator",
  bmi: "/tools/bmi-calculator",
  bmr: "/tools/bmr-calculator",
  ideal: "/tools/ideal-weight-calculator",
  tdee: "/tools/tdee-calculator",
  protein: "/tools/protein-calculator",
  deficit: "/tools/calorie-deficit-calculator",
  bodyfat: "/tools/body-fat-calculator",
  tools: "/tools",
  ifguide: "/blog/intermittent-fasting-16-8-guide",
  aiguide: "/blog/ai-photo-calorie-tracking",
  macroguide: "/blog/track-macros-halal-cultural-meals",
  halal: "/halal-nutrition-app",
  recipes: "/recipes",
  quiz: "/quiz",
  download: "/download",
};

export const linkClass =
  "font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300";

export function richText(lang: Locale, text: string): ReactNode {
  const tags: Record<string, (c: ReactNode) => ReactNode> = {
    b: (c) => <strong>{c}</strong>,
    em: (c) => <em>{c}</em>,
  };
  for (const [tag, href] of Object.entries(LINK_TAGS)) {
    tags[tag] = (c) => (
      <Link href={localePath(lang, href)} className={linkClass}>
        {c}
      </Link>
    );
  }
  return rich(text, tags);
}

export function ContentBlocks({
  lang,
  blocks,
  sourcesHeading,
}: {
  lang: Locale;
  blocks: readonly Block[];
  sourcesHeading: string;
}) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="pt-4 text-2xl font-bold text-ink">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="pt-2 text-lg font-semibold text-ink">
                {block.text}
              </h3>
            );
          case "ul":
          case "ol": {
            const List = block.type;
            return (
              <List key={i} className={`${block.type === "ul" ? "list-disc" : "list-decimal"} space-y-2 ps-6`}>
                {block.items?.map((item) => <li key={item}>{richText(lang, item)}</li>)}
              </List>
            );
          }
          case "formula":
            return (
              <div key={i} className="rounded-2xl bg-surface-2 p-5 font-mono text-sm leading-7 rtl:font-sans">
                {/* dir=auto: each line follows its own script, so Arabic labels read RTL. */}
                {block.items?.map((line) => (
                  <p key={line} dir="auto" className="whitespace-pre-wrap">
                    {line}
                  </p>
                ))}
              </div>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-2xl ring-1 ring-line">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-emerald-50/60 dark:bg-emerald-400/10 text-start">
                      {block.head?.map((h) => (
                        <th key={h} className="px-4 py-3 text-start font-semibold text-ink-2">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows?.map(([first, ...rest]) => (
                      <tr key={first} className="border-t border-line">
                        <td className="px-4 py-3 font-medium text-ink-2">{first}</td>
                        {rest.map((cell, j) => (
                          <td key={j} className="px-4 py-3">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "sources":
            return (
              <div key={i} className="pt-4">
                <h2 className="text-lg font-semibold text-ink">{sourcesHeading}</h2>
                <ol className="mt-3 list-decimal space-y-1.5 ps-6 text-sm text-ink-3">
                  {block.sources?.map((s) => (
                    <li key={s.url || s.label}>
                      {s.url ? (
                        <a href={s.url} className={linkClass} rel="noopener" target="_blank">
                          {s.label}
                        </a>
                      ) : (
                        s.label
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            );
          default:
            return <p key={i}>{richText(lang, block.text ?? "")}</p>;
        }
      })}
    </>
  );
}
