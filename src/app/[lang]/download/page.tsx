import type { Metadata } from "next";
import { DownloadRedirect } from "@/components/ui/DownloadRedirect";
import type { Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";

export async function generateMetadata({ params }: PageProps<"/[lang]/download">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const t = getMessages(lang).common.download;
  return pageMetadata(lang, "/download", { title: t.metaTitle, description: t.metaDescription });
}

export default async function DownloadPage({ params }: PageProps<"/[lang]/download">) {
  const lang = (await params).lang as Locale;
  const { common } = getMessages(lang);
  return <DownloadRedirect t={common.download} store={common.store} />;
}
