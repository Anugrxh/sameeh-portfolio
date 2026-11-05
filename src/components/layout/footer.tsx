import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { Year } from "@/components/ui/year";

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-10 text-sm text-fg/50 sm:flex-row sm:items-center">
        <p className="font-mono text-xs tracking-tight">
          © <Year /> {profile.name}. Built with Next.js.
        </p>
        <div className="flex items-center gap-1">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full text-fg/60 transition-colors hover:bg-white/[0.06] hover:text-fg"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full text-fg/60 transition-colors hover:bg-white/[0.06] hover:text-fg"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href="#top"
            className="ml-2 inline-flex h-9 items-center gap-1.5 rounded-full border border-line px-3.5 text-xs font-medium text-fg/70 transition-colors hover:border-white/20 hover:text-fg"
          >
            Top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
