import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../../globals.css";
import { inter, manrope, plexArabic } from "../../fonts";
import { EmbedAutoResize } from "@/components/tools/EmbedAutoResize";
import { dir, isLocale, locales, type Locale } from "@/i18n/config";

// Second root layout: embeddable calculators render without the site's
// navbar and footer. Public URLs are /embed/tools/<name>?lang=<lang>; the
// proxy rewrites them here. Framing and noindex headers: next.config.ts.
export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mynutririse.com"),
  robots: { index: false, follow: true },
};

export default async function EmbedLayout({ children, params }: LayoutProps<"/embed/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  return (
    <html
      lang={locale}
      dir={dir(locale)}
      className={`${inter.variable} ${manrope.variable} ${locale === "ar" ? plexArabic.variable : ""}`}
    >
      <body className="bg-canvas p-2 antialiased">
        {children}
        <EmbedAutoResize />
      </body>
    </html>
  );
}
