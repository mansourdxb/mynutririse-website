import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";
import SupportContent from "./SupportContent";
import { MotionProvider } from "@/components/ui/MotionProvider";

export async function generateMetadata({ params }: PageProps<"/[lang]/support">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const t = getMessages(lang).support;
  return pageMetadata(lang, "/support", { title: t.metaTitle, description: t.metaDescription });
}

export default async function SupportPage({ params }: PageProps<"/[lang]/support">) {
  const lang = (await params).lang as Locale;
  return (
    <MotionProvider>
      <SupportContent lang={lang} t={getMessages(lang).support} />
    </MotionProvider>
  );
}
