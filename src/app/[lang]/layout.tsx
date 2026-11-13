import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { inter, manrope, plexArabic } from "../fonts";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  APP_STORE_URL,
  BASE_URL,
  BRAND,
  LOGO_URL,
  ORGANIZATION_ID,
  PLAY_STORE_URL,
  SOCIAL_LINKS,
  dir,
  isLocale,
  locales,
  localePath,
  ogLocale,
  type Locale,
} from "@/i18n/config";
import { languageAlternates } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: BRAND,
  alternateName: "Nutri Rise",
  url: BASE_URL,
  logo: { "@type": "ImageObject", url: LOGO_URL },
  sameAs: [APP_STORE_URL, PLAY_STORE_URL, ...SOCIAL_LINKS.map((s) => s.url)],
};

// Pre-render every language; any other first segment is a 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { site } = getMessages(lang).common;
  return {
    metadataBase: new URL("https://www.mynutririse.com"),
    title: { default: site.title, template: site.titleTemplate },
    description: site.description,
    alternates: {
      canonical: localePath(lang, "/"),
      languages: languageAlternates("/"),
    },
    openGraph: {
      title: site.title,
      description: site.ogDescription,
      type: "website",
      locale: ogLocale[lang],
      siteName: "MyNutriRise",
      url: localePath(lang, "/"),
      images: [{ url: `/og/${lang}.png`, width: 1200, height: 630, alt: "MyNutriRise" }],
    },
    twitter: {
      card: "summary_large_image",
      title: site.title,
      description: site.twitterDescription,
      images: [`/og/${lang}.png`],
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0a110e" },
  ],
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const messages = getMessages(locale);
  const t = messages.common;

  return (
    <html
      lang={locale}
      dir={dir(locale)}
      className={`${inter.variable} ${manrope.variable} ${locale === "ar" ? plexArabic.variable : ""} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <JsonLd data={organizationJsonLd} />
        <Navbar lang={locale} t={t.nav} />
        <main className="flex-1">{children}</main>
        <Footer
          lang={locale}
          t={t}
          tools={{ heading: messages.home.resources.toolsEyebrow, cards: messages.tools.index.cards }}
        />
      </body>
    </html>
  );
}
