import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calculator } from "@/components/tools/Calculator";
import { toolPages } from "@/data/tools";
import { absoluteUrl, locales, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { embedName } from "@/lib/embed";

export function generateStaticParams() {
  return locales.flatMap((lang) => toolPages.map((p) => ({ lang, name: embedName(p.href) })));
}

function tool(name: string) {
  return toolPages.find((p) => embedName(p.href) === name);
}

export async function generateMetadata({ params }: PageProps<"/embed/[lang]/tools/[name]">): Promise<Metadata> {
  const { lang, name } = await params;
  const page = tool(name);
  if (!page) return {};
  const { tools } = getMessages(lang as Locale);
  return {
    title: tools.shared.embed.iframeTitle.replace("{tool}", tools[page.key].title),
    // The full tool page is the canonical version of this content.
    alternates: { canonical: absoluteUrl(lang as Locale, page.href) },
  };
}

/** Calculator only, plus a "Powered by MyNutriRise" link to the full tool page. */
export default async function EmbedToolPage({ params }: PageProps<"/embed/[lang]/tools/[name]">) {
  const { lang: l, name } = await params;
  const page = tool(name);
  if (!page) notFound();
  const lang = l as Locale;
  const { tools } = getMessages(lang);
  return (
    <main>
      <Calculator toolKey={page.key} lang={lang} />
      <p className="mt-3 text-center text-xs text-ink-3">
        <a
          href={absoluteUrl(lang, page.href)}
          target="_blank"
          rel="noopener"
          className="font-medium text-emerald-700 hover:underline dark:text-emerald-400"
        >
          {tools.shared.embed.poweredBy}
        </a>
      </p>
    </main>
  );
}
