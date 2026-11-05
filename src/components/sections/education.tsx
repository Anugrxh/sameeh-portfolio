import { Award, GraduationCap, Users } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { certifications, education, organizations } from "@/data/education";

function ColumnHeader({ icon: Icon, title }: { icon: typeof Award; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-inset ring-white/10">
        <Icon className="h-4 w-4 text-fg/80" strokeWidth={1.8} />
      </span>
      <h3 className="text-[15px] font-semibold tracking-tight">{title}</h3>
    </div>
  );
}

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        index="05"
        eyebrow="Education & more"
        title="Background."
        description="Where the fundamentals came from, plus the certifications and student organizations along the way."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <Reveal className="h-full">
          <GlassCard className="h-full p-6">
            <ColumnHeader icon={GraduationCap} title="Education" />
            <ul className="mt-6 space-y-6">
              {education.map((item) => (
                <li key={item.degree}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg/45">
                    {item.period}
                  </p>
                  <p className="mt-1.5 text-[15px] font-medium leading-snug tracking-tight">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-sm text-fg/55">{item.institution}</p>
                  <p className="text-sm text-fg/40">{item.location}</p>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.08} className="h-full">
          <GlassCard className="h-full p-6">
            <ColumnHeader icon={Award} title="Certifications" />
            <ul className="mt-6 space-y-4">
              {certifications.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.025] px-4 py-3.5"
                >
                  <p className="text-[15px] font-medium tracking-tight">{item.title}</p>
                  {item.note && <p className="mt-0.5 text-sm text-fg/50">{item.note}</p>}
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.16} className="h-full">
          <GlassCard className="h-full p-6">
            <ColumnHeader icon={Users} title="Organizations" />
            <ul className="mt-6 space-y-6">
              {organizations.map((item) => (
                <li key={item.name}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg/45">
                    {item.period}
                  </p>
                  <p className="mt-1.5 text-[15px] font-medium tracking-tight">
                    {item.role}
                    <span className="text-fg/45"> · {item.name}</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-fg/55">{item.description}</p>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
