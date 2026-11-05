import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { CopyEmail } from "@/components/sections/copy-email";
import { profile } from "@/data/profile";

const details = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: LinkedInIcon, label: "LinkedIn", value: "in/sameeh-k", href: profile.links.linkedin },
  { icon: GitHubIcon, label: "GitHub", value: "sameehk", href: profile.links.github },
];

export function Contact() {
  return (
    <Section id="contact" className="pb-24 sm:pb-32">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(124,196,255,0.22),transparent)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.18),transparent)]"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-fg/50">
                <span className="text-accent">06</span>
                <span className="h-px w-6 bg-white/15" />
                Contact
              </p>
              <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Let&apos;s build something that ships.
              </h2>
              <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-fg/60 sm:text-lg">
                Whether it&apos;s a GenAI product that needs an engineer, a data question that
                needs an answer, or a release process that needs an owner, I&apos;d like to hear
                about it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={`mailto:${profile.email}`} variant="primary" size="lg">
                  <Mail className="h-4 w-4" />
                  Email me
                </ButtonLink>
                <CopyEmail email={profile.email} />
              </div>
            </div>

            <ul className="divide-y divide-white/[0.07] self-center border-y border-white/[0.07]">
              {details.map((item) => {
                const content = (
                  <>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] ring-1 ring-inset ring-white/10">
                      <item.icon className="h-4 w-4 text-fg/75" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[10.5px] uppercase tracking-[0.18em] text-fg/40">
                        {item.label}
                      </span>
                      <span className="block truncate text-[15px] text-fg/85">{item.value}</span>
                    </span>
                    {item.href && (
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-fg/30 transition-all duration-300 group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5 group-hover/row:text-fg" />
                    )}
                  </>
                );

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="group/row flex items-center gap-4 py-3.5 transition-colors hover:text-fg"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 py-3.5">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
