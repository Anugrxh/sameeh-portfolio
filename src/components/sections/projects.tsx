import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { Chip } from "@/components/ui/chip";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        index="04"
        eyebrow="Projects"
        title="Built end to end."
        description="Full-stack Django projects from university, each one covering scraping or data entry, storage, backend logic, and a usable interface."
      />

      <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={0.08 * index} className="h-full">
            <GlassCard className="flex h-full flex-col overflow-hidden">
              <div className="relative border-b border-white/[0.06] bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_60%)] p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] ring-1 ring-inset ring-white/10">
                    <project.icon className="h-5 w-5 text-fg/85" strokeWidth={1.7} />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg/45">
                    {project.period}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-fg/65">{project.summary}</p>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <ul className="space-y-2.5">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg/65">
                      <span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-7">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-fg/70 transition-colors hover:text-fg"
                    >
                      View project
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
