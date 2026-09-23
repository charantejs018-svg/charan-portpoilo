import { Download, Github, Linkedin, Mail } from "lucide-react";
import profile from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section id="home" className="hero-surface relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-rise">
          <p className="text-sm font-semibold text-primary-foreground/90">
            <span className="text-gradient">Hello, I&apos;m</span>
          </p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-navy-foreground sm:text-6xl">
            Charantej <span className="text-gradient">s</span>
          </h1>
          <p className="mt-3 text-2xl font-bold text-navy-foreground">Full Stack Developer</p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-navy-muted">
            I build simple and useful web applications. I love coding, learning new technologies,
            and turning ideas into real projects.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="btn-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              <Download className="size-4" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-white/10"
            >
              View Projects
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
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

        <div className="relative flex justify-center lg:justify-end">
          <img
            src={profile}
            alt="Charantej s"
            width={816}
            height={816}
            className="avatar-glow size-56 rounded-full object-cover sm:size-72"
          />
          <p className="pointer-events-none absolute -right-2 bottom-4 hidden font-hand text-2xl leading-tight text-navy-foreground/80 lg:block">
            Code
            <br />
            Create
            <br />
            Grow
          </p>
        </div>
      </div>
    </section>
  );
}
