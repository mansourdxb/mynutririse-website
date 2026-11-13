"use client";

import { useState } from "react";
import type { Messages } from "@/i18n/messages";

/** "Embed this calculator": reveals a copyable iframe snippet. */
export function EmbedButton({ snippet, t }: { snippet: string; t: Messages["tools"]["shared"]["embed"] }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the text stays selectable in the box.
    }
  };
  return (
    <details className="group mt-6 rounded-2xl ring-1 ring-line">
      <summary className="flex cursor-pointer list-none items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-accent-strong transition-colors hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent [&::-webkit-details-marker]:hidden">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
        </svg>
        {t.button}
      </summary>
      <div className="space-y-3 px-4 pb-4 text-sm text-ink-2">
        <p className="font-semibold text-ink">{t.title}</p>
        <p>{t.intro}</p>
        <textarea
          readOnly
          dir="ltr"
          value={snippet}
          rows={6}
          aria-label={t.title}
          onFocus={(e) => e.currentTarget.select()}
          className="w-full resize-y rounded-xl bg-surface-2 p-3 font-mono text-xs leading-5 text-ink ring-1 ring-line"
        />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-ink-3">{t.resizeNote}</p>
          <button
            type="button"
            onClick={copy}
            className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <span aria-live="polite">{copied ? t.copied : t.copy}</span>
          </button>
        </div>
      </div>
    </details>
  );
}
