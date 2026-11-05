import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { RoleRotator } from "@/components/sections/role-rotator";
import { HeroVisual } from "@/components/sections/hero-visual";

const socials = [
  { label: "GitHub", href: profile.links.github, icon: GitHubIcon },
  { label: "LinkedIn", href: profile.links.linkedin, icon: LinkedInIcon },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center pt-28 pb-16 sm:pt-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="min-w-0 max-w-2xl">
          <Reveal delay={0.05} blur>
            <p className="inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-fg/65">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              {profile.current.company} · since {profile.current.since}
            </p>
          </Reveal>

          <Reveal delay={0.15} blur>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              <span className="text-gradient">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.25} blur>
            <p className="mt-4 text-lg font-medium tracking-tight text-fg/80 sm:text-xl">
              <RoleRotator roles={profile.roles} />
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-fg/60 sm:text-lg">
              {profile.headline} {profile.intro}
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="#experience" variant="primary" size="lg">
                View experience
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-y-0.5" />
              </ButtonLink>
              <ButtonLink href={`mailto:${profile.email}`} variant="glass" size="lg">
                <Mail className="h-4 w-4" />
                Get in touch
              </ButtonLink>
              <div className="ml-1 flex items-center gap-1">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full text-fg/60 transition-all duration-300 hover:bg-white/[0.06] hover:text-fg"
                  >
                    <social.icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <p className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-fg/35">
              {profile.locationShort}
              <span className="h-px w-8 bg-white/10" />
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-fg/70"
              >
                linkedin.com/in/sameeh-k
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3} y={40} className="flex min-w-0 justify-center lg:justify-end">
          <HeroVisual />
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-fg/35 transition-colors hover:text-fg/70 sm:flex"
      >
        Scroll
        <span className="relative h-9 w-5 rounded-full border border-white/15">
          <span className="animate-float absolute left-1/2 top-1.5 h-1.5 w-1 -translate-x-1/2 rounded-full bg-fg/60" />
        </span>
      </a>
    </section>
  );
}
