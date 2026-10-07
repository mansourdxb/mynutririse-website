"use client";

import Image from "next/image";
import { useEffect } from "react";
import { StoreButtons } from "@/components/ui/Button";
import type { Messages } from "@/i18n/messages";

const APP_STORE_URL = "https://apps.apple.com/app/mynutririse/id6764006876";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.nutririse.app";

export function DownloadRedirect({
  t,
  store,
}: {
  t: Messages["common"]["download"];
  store: Messages["common"]["store"];
}) {
  useEffect(() => {
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(ua)) {
      window.location.replace(APP_STORE_URL);
    } else if (/Android/i.test(ua)) {
      window.location.replace(PLAY_STORE_URL);
    }
    // Desktop: stay on this page and show both options
  }, []);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-surface px-6 pt-24 pb-16 text-center">
      <Image src="/logo.png" alt="" width={56} height={56} className="h-14 w-14" priority />
      <h1 className="mt-6 text-h2 text-ink">{t.title}</h1>
      <p className="mt-3 max-w-md text-ink-3">{t.body}</p>
      <StoreButtons t={store} reassurance className="mt-8" />
    </div>
  );
}
