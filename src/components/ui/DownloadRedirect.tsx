"use client";

import { useEffect } from "react";
import { StoreButtons } from "@/components/ui/Button";

const APP_STORE_URL = "https://apps.apple.com/app/mynutririse/id6764006876";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.nutririse.app";

export function DownloadRedirect() {
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
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 pt-24 pb-16 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
          <path
            d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
        Get MyNutriRise
      </h1>
      <p className="mt-3 max-w-md text-slate-500">
        On your phone, you&apos;ll be taken straight to your app store. On
        desktop, pick your platform:
      </p>
      <StoreButtons reassurance className="mt-8" />
    </div>
  );
}
