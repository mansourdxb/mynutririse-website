import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import type { Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const t = getMessages(lang).privacy;
  return pageMetadata(lang, "/privacy", { title: t.metaTitle, description: t.metaDescription });
}

export default async function PrivacyPage({ params }: PageProps<"/[lang]/privacy">) {
  const lang = (await params).lang as Locale;
  return <LegalPage t={getMessages(lang).privacy} />;
}
