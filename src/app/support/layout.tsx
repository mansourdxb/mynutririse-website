import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — MyNutriRise",
  description:
    "Get help with MyNutriRise. Contact our support team, browse FAQs, or submit a feature request.",
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
