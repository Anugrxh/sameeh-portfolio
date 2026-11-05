"use client";

import type { MouseEvent, ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { Brain, MapPin, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { GlassCard } from "@/components/ui/glass-card";
import { Chip } from "@/components/ui/chip";
import { LocalTime } from "@/components/ui/local-time";
import { cn } from "@/lib/cn";

const spring = { stiffness: 150, damping: 22, mass: 0.6 };

export function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [6, -6]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-8, 8]), spring);

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div style={{ perspective: 1400 }} className="relative w-full max-w-md">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(124,196,255,0.16),rgba(99,102,241,0.08)_55%,transparent)] blur-2xl"
      />
      <FloatingPill className="-left-8 -top-6 hidden lg:flex" style={{ animationDelay: "-1s" }}>
        <Sparkles className="h-3.5 w-3.5 text-accent" />
        MCP Server
      </FloatingPill>
      <FloatingPill className="-bottom-6 -right-8 hidden lg:flex" style={{ animationDelay: "-3.5s" }}>
        <Brain className="h-3.5 w-3.5 text-accent" />
        LangChain · RAG
      </FloatingPill>

      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="grid grid-cols-5 gap-3"
      >
        <Tile depth={36} className="col-span-3 p-5">
          <div className="flex h-full flex-col justify-between gap-4">
            <div>
              <p className="text-[17px] font-semibold tracking-tight">{profile.name}</p>
              <p className="mt-0.5 text-[13px] leading-snug text-fg/55">B.Tech CSE · Class of 2024</p>
            </div>
            <div className="flex items-center gap-1.5">
              <SocialLink href={profile.links.github} label="GitHub">
                <GitHubIcon className="h-3.5 w-3.5" />
              </SocialLink>
              <SocialLink href={profile.links.linkedin} label="LinkedIn">
                <LinkedInIcon className="h-3.5 w-3.5" />
              </SocialLink>
              <a
                href={`mailto:${profile.email}`}
                className="ml-1 truncate text-xs text-fg/50 transition-colors hover:text-fg"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </Tile>

        <Tile depth={60} className="col-span-2 p-5">
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-fg/45">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Now
          </p>
          <p className="mt-2.5 text-[15px] font-semibold leading-tight tracking-tight">
            {profile.current.company}
          </p>
          <p className="mt-1 text-xs leading-snug text-fg/55">{profile.current.role}</p>
        </Tile>

        <Tile depth={24} className="col-span-5 p-5">
          <div className="flex items-baseline justify-between gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg/45">
              Prototype → production
            </p>
            <p className="hidden text-[11px] text-fg/40 sm:block">one release at a time</p>
          </div>
          <Pipeline steps={profile.pipeline} />
        </Tile>

        <Tile depth={48} className="col-span-2 p-5">
          <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-fg/45">
            <MapPin className="h-3 w-3" strokeWidth={2} />
            {profile.locationShort.split(",")[0]}
          </p>
          <LocalTime
            timeZone={profile.timeZone}
            className="mt-2 block whitespace-nowrap font-mono text-2xl font-medium tabular-nums tracking-tight text-fg"
          />
          <p className="mt-1 text-[11px] text-fg/45">{profile.timeZoneLabel}</p>
        </Tile>

        <Tile depth={16} className="col-span-3 overflow-hidden">
          <div className="flex h-full flex-col justify-center py-4">
            <p className="px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-fg/45">Stack</p>
            <Ticker items={profile.stack} />
          </div>
        </Tile>
      </motion.div>
    </div>
  );
}

type TileProps = {
  depth: number;
  className?: string;
  children: ReactNode;
};

function Tile({ depth, className, children }: TileProps) {
  return (
    <GlassCard
      className={cn("rounded-[1.4rem]", className)}
      style={{ transform: `translateZ(${depth}px)` }}
    >
      {children}
    </GlassCard>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="glass-chip flex h-8 w-8 items-center justify-center rounded-full text-fg/70 transition-colors hover:text-fg"
    >
      {children}
    </a>
  );
}

function Pipeline({ steps }: { steps: string[] }) {
  return (
    <div className="relative mt-4">
      <div className="absolute inset-x-[10%] top-1/2 h-px -translate-y-1/2 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.18)_15%,rgba(255,255,255,0.18)_85%,transparent)]" />
      <span
        aria-hidden
        className="animate-travel absolute top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_14px_3px_rgba(124,196,255,0.55)]"
      />
      <ol className="relative grid grid-cols-5">
        {steps.map((step, index) => (
          <li key={step} className="flex justify-center">
            <span
              style={{ animationDelay: `${index * 1.25}s` }}
              className="animate-node-glow rounded-full border border-white/[0.09] bg-ink/80 px-2 py-1 font-mono text-[10px] tracking-tight text-fg/55 sm:px-2.5 sm:text-[11px]"
            >
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Ticker({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="mt-2.5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="animate-marquee flex w-max gap-1.5 pr-1.5 hover:[animation-play-state:paused]">
        {row.map((item, index) => (
          <Chip key={`${item}-${index}`} aria-hidden={index >= items.length || undefined}>
            {item}
          </Chip>
        ))}
      </div>
    </div>
  );
}

type FloatingPillProps = {
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
};

function FloatingPill({ className, style, children }: FloatingPillProps) {
  return (
    <span
      style={style}
      className={cn(
        "glass-dense animate-float absolute z-10 items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium tracking-tight text-fg/90",
        className,
      )}
    >
      {children}
    </span>
  );
}
