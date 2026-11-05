import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "glass" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight whitespace-nowrap select-none transition-all duration-300 [transition-timing-function:var(--ease-ios)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-fg text-ink shadow-[0_10px_30px_-10px_rgba(255,255,255,0.45),inset_0_-1px_0_rgba(0,0,0,0.15)] hover:bg-white hover:shadow-[0_16px_40px_-12px_rgba(255,255,255,0.55)]",
  glass:
    "glass text-fg hover:bg-white/[0.06] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_18px_40px_-20px_rgba(0,0,0,0.9)]",
  ghost: "text-fg/70 hover:text-fg hover:bg-white/[0.05]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

export function buttonStyles(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
};

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <a className={buttonStyles(variant, size, className)} {...props} />;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonStyles(variant, size, className)} {...props} />;
}
