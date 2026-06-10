import type { Metadata } from "next";
import { DownloadRedirect } from "@/components/ui/DownloadRedirect";

export const metadata: Metadata = {
  title: "Download MyNutriRise",
  description:
    "Download MyNutriRise for iPhone or Android — AI meal scanning, halal & cultural meal plans, fasting, and coaching.",
};

export default function DownloadPage() {
  return <DownloadRedirect />;
}
