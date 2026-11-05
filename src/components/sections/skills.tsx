import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { Chip } from "@/components/ui/chip";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="02"
        eyebrow="Skills"
        title="The toolkit."
        description="Python first, with the data, AI, and infrastructure tooling needed to take an idea from a notebook to a running service."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={0.06 * index} className="h-full">
            <GlassCard className="h-full p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-inset ring-white/10">
                  <group.icon className="h-4 w-4 text-fg/80" strokeWidth={1.8} />
                </span>
                <h3 className="text-[15px] font-semibold tracking-tight">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
