import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "accent";
};

export function Chip({ className, tone = "default", ...props }: ChipProps) {
  return (
    <span
      className={cn(
        "glass-chip inline-flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 tracking-tight transition-colors duration-300",
        tone === "default" && "text-fg/75 hover:text-fg",
        tone === "accent" && "text-accent",
        className,
      )}
      {...props}
    />
  );
}
