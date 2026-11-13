"use client";

import { useEffect } from "react";
import { EMBED_RESIZE_MESSAGE } from "@/lib/embed";

/** Inside an iframe, reports the page height to the parent whenever it changes. */
export function EmbedAutoResize() {
  useEffect(() => {
    if (window.parent === window) return;
    const post = () =>
      window.parent.postMessage(
        // The body's own height: documentElement.scrollHeight never drops
        // below the iframe's viewport, so the frame could only grow.
        { type: EMBED_RESIZE_MESSAGE, height: Math.ceil(document.body.getBoundingClientRect().height) },
        "*",
      );
    const observer = new ResizeObserver(post);
    observer.observe(document.body);
    post();
    return () => observer.disconnect();
  }, []);
  return null;
}
