"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in the middle band of the viewport.
 * Returns "" when none of the given ids is in view (for example, the hero).
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    if (sections.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }

        if (visible.size === 0) {
          setActive("");
          return;
        }

        let best = "";
        let bestRatio = -1;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        setActive(best);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
