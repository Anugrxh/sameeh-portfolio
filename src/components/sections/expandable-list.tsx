"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

type ExpandableListProps = {
  items: string[];
  /** How many items stay visible when collapsed. */
  initial?: number;
  className?: string;
};

export function ExpandableList({ items, initial = 3, className }: ExpandableListProps) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  const hidden = items.slice(initial);
  const canExpand = hidden.length > 0;

  return (
    <div className={className}>
      <ul className="space-y-2.5">
        {items.slice(0, initial).map((item) => (
          <Bullet key={item}>{item}</Bullet>
        ))}
      </ul>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.ul
            id={id}
            key="more"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2.5 overflow-hidden pt-2.5"
          >
            {hidden.map((item) => (
              <Bullet key={item}>{item}</Bullet>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {canExpand && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls={id}
          className="mt-4 inline-flex items-center gap-1.5 rounded-full text-[13px] font-medium text-fg/55 transition-colors hover:text-fg"
        >
          {expanded ? "Show less" : `Show ${hidden.length} more`}
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-300",
              expanded && "rotate-180",
            )}
          />
        </button>
      )}
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-fg/65">
      <span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent/70" />
      <span>{children}</span>
    </li>
  );
}
