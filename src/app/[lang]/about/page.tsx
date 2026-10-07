import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreButton } from "@/components/ui/Button";
import { localePath, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";
import { rich } from "@/i18n/rich";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const t = getMessages(lang).about;
  return pageMetadata(lang, "/about", { title: t.metaTitle, description: t.metaDescription });
}

const linkClass =
  "font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300";

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const lang = (await params).lang as Locale;
  const { about: t, common } = getMessages(lang);

  return (
    <div className="wash-mint pt-24 pb-8">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-center text-h1 text-ink">{t.title}</h1>

        <div className="mt-12 space-y-6 text-base leading-7 text-ink-2">
          {t.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {t.facts.map((fact) => (
            <div key={fact.label} className="rounded-2xl bg-surface p-5 text-center shadow-sm ring-1 ring-line">
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{fact.value}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-3">{fact.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-ink-2">
            {rich(t.contact, {
              support: (c) => (
                <Link href={localePath(lang, "/support")} className={linkClass}>
                  {c}
                </Link>
              ),
              press: (c) => (
                <Link href={localePath(lang, "/press")} className={linkClass}>
                  {c}
                </Link>
              ),
            })}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <AppStoreButton store="apple" t={common.store} />
            <AppStoreButton store="google" t={common.store} />
          </div>
        </div>
      </div>
    </div>
  );
}
