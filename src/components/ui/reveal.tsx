"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  once?: boolean;
  blur?: boolean;
};

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  delay = 0,
  y = 28,
  once = true,
  blur = false,
  children,
  ...rest
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <motion.div {...rest}>{children}</motion.div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y, filter: blur ? "blur(8px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, delay, ease: easeOutExpo }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
