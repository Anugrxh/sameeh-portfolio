import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-12 max-w-2xl sm:mb-16", className)}>
      <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-fg/50">
        <span className="text-accent">{index}</span>
        <span className="h-px w-6 bg-white/15" />
        {eyebrow}
      </p>
      <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-fg/60 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
