import type { HTMLAttributes } from "react";
import type { SectionId } from "@/config/site";
import { cn } from "@/lib/cn";

type SectionProps = HTMLAttributes<HTMLElement> & {
  id: SectionId;
};

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-28 py-20 sm:py-28 lg:py-32", className)}
      {...props}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}
