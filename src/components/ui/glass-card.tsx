"use client";

import { useRef, type HTMLAttributes, type MouseEvent } from "react";
import { cn } from "@/lib/cn";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  /** Soft highlight that follows the cursor. */
  glow?: boolean;
  /** Lift the card slightly on hover. */
  hover?: boolean;
};

export function GlassCard({
  className,
  children,
  glow = true,
  hover = true,
  onMouseMove,
  ...props
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (node) {
      const rect = node.getBoundingClientRect();
      node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      node.style.setProperty("--my", `${event.clientY - rect.top}px`);
    }
    onMouseMove?.(event);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn(
        "glass group/card relative rounded-3xl transition-[transform,box-shadow] duration-500 [transition-timing-function:var(--ease-out-expo)]",
        hover &&
          "hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_30px_70px_-30px_rgba(0,0,0,0.9)]",
        className,
      )}
      {...props}
    >
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
          style={{
            background:
              "radial-gradient(460px circle at var(--mx, 50%) var(--my, 0%), rgba(255,255,255,0.09), transparent 45%)",
          }}
        />
      )}
      <div className="relative h-full">{children}</div>
    </div>
  );
}
