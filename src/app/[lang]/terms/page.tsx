import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import type { Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";

export async function generateMetadata({ params }: PageProps<"/[lang]/terms">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const t = getMessages(lang).terms;
  return pageMetadata(lang, "/terms", { title: t.metaTitle, description: t.metaDescription });
}

export default async function TermsPage({ params }: PageProps<"/[lang]/terms">) {
  const lang = (await params).lang as Locale;
  return <LegalPage t={getMessages(lang).terms} />;
}
