"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type RoleRotatorProps = {
  roles: readonly string[];
  interval?: number;
};

export function RoleRotator({ roles, interval = 2600 }: RoleRotatorProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || roles.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % roles.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [roles.length, interval, reduceMotion]);

  if (reduceMotion) {
    return <span>{roles.join(" · ")}</span>;
  }

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      {/* Invisible longest role keeps the width stable while the text swaps. */}
      <span aria-hidden className="invisible col-start-1 row-start-1 whitespace-nowrap">
        {roles.reduce((a, b) => (a.length >= b.length ? a : b))}
      </span>
      <AnimatePresence initial={false}>
        <motion.span
          key={roles[index]}
          initial={{ y: "110%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-110%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="col-start-1 row-start-1 whitespace-nowrap"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
