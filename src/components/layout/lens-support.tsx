"use client";

import { useEffect } from "react";

type NavigatorWithBrands = Navigator & {
  userAgentData?: { brands?: { brand: string }[] };
};

// Only Chromium renders SVG filters inside backdrop-filter reliably, so the
// refracted edge is switched on there and everything else keeps the CSS blur.
export function LensSupport() {
  useEffect(() => {
    const nav = navigator as NavigatorWithBrands;
    const brands = nav.userAgentData?.brands ?? [];
    const chromium = brands.some((b) => /Chromium/i.test(b.brand)) || "chrome" in window;
    const reduceTransparency = window.matchMedia("(prefers-reduced-transparency: reduce)").matches;
    if (chromium && !reduceTransparency) {
      document.documentElement.dataset.lens = "true";
    }
  }, []);

  return null;
}
