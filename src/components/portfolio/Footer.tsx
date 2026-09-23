import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep py-7">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="text-sm text-navy-muted">
          © 2026 <span className="font-semibold text-navy-foreground">Charan</span>. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-navy-muted transition-colors hover:text-navy-foreground"
          >
            <Github className="size-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-navy-muted transition-colors hover:text-navy-foreground"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            href="mailto:charantejs018@gmail.com"
            aria-label="Email"
            className="text-navy-muted transition-colors hover:text-navy-foreground"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
