import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { Chip } from "@/components/ui/chip";
import { ExpandableList } from "@/components/sections/expandable-list";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="03"
        eyebrow="Experience"
        title="From analyst to shipping the roadmap."
        description="Three roles at Snapshare AI in under a year, each one a step closer to the release process. Plus the internship where the ML interest started."
      />

      <ol className="relative space-y-6 before:absolute before:bottom-6 before:left-[11px] before:top-6 before:w-px before:bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.14)_8%,rgba(255,255,255,0.14)_92%,transparent)] sm:space-y-8">
        {experience.map((job, index) => {
          const isCurrent = job.end === "Present";
          return (
            <li key={`${job.company}-${job.role}`} className="relative pl-10 sm:pl-14">
              <span className="absolute left-0 top-7 flex h-[23px] w-[23px] items-center justify-center rounded-full glass-chip">
                <span
                  className={
                    isCurrent
                      ? "h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]"
                      : "h-2 w-2 rounded-full bg-fg/45"
                  }
                />
              </span>

              <Reveal delay={0.05 * index}>
                <GlassCard className="p-6 sm:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">{job.role}</h3>
                      <p className="mt-1 text-sm text-fg/55">
                        {job.company}
                        {job.type && <span className="text-fg/35"> · {job.type}</span>}
                      </p>
                    </div>
                    <p className="shrink-0 font-mono text-[11.5px] uppercase tracking-[0.14em] text-fg/50">
                      {job.start} – {isCurrent ? <span className="text-emerald-300/90">Present</span> : job.end}
                    </p>
                  </div>

                  <p className="mt-4 text-[15px] leading-relaxed text-fg/80">{job.tagline}</p>

                  <ExpandableList items={job.bullets} className="mt-5" />

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {job.stack.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
