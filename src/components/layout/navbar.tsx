"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems, sectionIds } from "@/config/site";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/lib/use-active-section";
import { cn } from "@/lib/cn";

export function Navbar() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      <div className="relative w-full max-w-3xl">
        <motion.nav
          aria-label="Primary"
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className={cn(
            "glass-dense flex h-14 items-center gap-1 rounded-full pl-1.5 pr-2 transition-[box-shadow] duration-500",
            scrolled && "shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_24px_60px_-20px_rgba(0,0,0,0.95)]",
          )}
        >
          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-10 shrink-0 items-center rounded-full px-3.5 text-[15px] font-semibold tracking-tight text-fg transition-colors hover:bg-white/[0.06]"
          >
            {profile.name}
          </a>

          <ul className="mx-auto hidden items-center md:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative block rounded-full px-3.5 py-2 text-[13.5px] font-medium tracking-tight transition-colors duration-300",
                      isActive ? "text-fg" : "text-fg/60 hover:text-fg",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-white/[0.1] shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href={`mailto:${profile.email}`}
            className="ml-auto hidden h-10 items-center gap-1.5 rounded-full bg-fg pl-4 pr-3 text-[13px] font-medium text-ink transition-all duration-300 hover:bg-white hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.5)] md:inline-flex"
          >
            Say hello
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-fg/80 transition-colors hover:bg-white/[0.08] hover:text-fg md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </motion.nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="glass-dense lens-off absolute inset-x-0 top-full mt-2 origin-top rounded-[1.75rem] p-2 md:hidden"
            >
              <ul className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index, duration: 0.3 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium tracking-tight transition-colors",
                        active === item.id
                          ? "bg-white/[0.08] text-fg"
                          : "text-fg/70 hover:bg-white/[0.05] hover:text-fg",
                      )}
                    >
                      {item.label}
                      <span className="font-mono text-[11px] text-fg/35">
                        0{index + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="mt-2 flex h-12 items-center justify-center gap-2 rounded-2xl bg-fg text-[15px] font-medium text-ink"
              >
                Say hello
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
