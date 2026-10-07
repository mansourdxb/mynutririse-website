import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";
import { rich } from "@/i18n/rich";

export async function generateMetadata({ params }: PageProps<"/[lang]/press">): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const t = getMessages(lang).press;
  return pageMetadata(lang, "/press", { title: t.metaTitle, description: t.metaDescription });
}

export default async function PressPage({ params }: PageProps<"/[lang]/press">) {
  const lang = (await params).lang as Locale;
  const t = getMessages(lang).press;

  return (
    <div className="wash-mint pt-24 pb-8">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-center text-h1 text-ink">{t.title}</h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lead text-ink-3">{t.intro}</p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">{t.boilerplateTitle}</h2>
          <p className="mt-4 rounded-2xl bg-surface p-6 leading-7 text-ink-2 shadow-sm ring-1 ring-line">
            {t.boilerplate}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">{t.factSheetTitle}</h2>
          <div className="mt-4 overflow-hidden card">
            <table className="w-full text-sm">
              <tbody>
                {t.factSheet.map(({ key, value }) => (
                  <tr key={key} className="border-b border-line last:border-b-0">
                    <th scope="row" className="w-40 px-5 py-3.5 text-start align-top font-semibold text-ink-2">
                      {key}
                    </th>
                    <td className="px-5 py-3.5 text-ink-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">{t.assetsTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 ps-6 text-ink-2">
            <li>
              <a href="/logo.png" download className="font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
                {t.logo}
              </a>
            </li>
            <li>{t.screenshots}</li>
            <li>
              {rich(t.colors, {
                code: (c) => <code className="rounded bg-surface-2 px-1.5 py-0.5 text-xs">{c}</code>,
              })}
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">{t.contactTitle}</h2>
          <p className="mt-4 text-ink-2">
            {rich(t.contact, {
              link: (c) => (
                <a href="mailto:contact@mynutririse.com" className="font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
                  {c}
                </a>
              ),
            })}
          </p>
        </section>
      </div>
    </div>
  );
}
