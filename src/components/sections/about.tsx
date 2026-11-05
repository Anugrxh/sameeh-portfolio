import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { pillars, profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="Comfortable on both sides of the release."
        description={profile.summary}
      />

      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={0.08 * index} className="h-full">
            <GlassCard className="h-full p-6 sm:p-7">
              <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg/60">{pillar.description}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
