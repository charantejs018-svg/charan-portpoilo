import { ExternalLink, Github } from "lucide-react";
import weather from "@/assets/project-weather.jpg";
import tasks from "@/assets/project-tasks.jpg";
import portfolio from "@/assets/project-portfolio.jpg";

const projects = [
  {
    title: "Weather App",
    image: weather,
    description: "A simple weather application that shows real-time weather data using an API.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Task Manager",
    image: tasks,
    description: "A to-do list application with add, edit and delete functionality.",
    tags: ["Node.js", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description: "My personal portfolio website with projects, skills and contact form.",
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="rule-accent text-3xl font-extrabold tracking-tight sm:text-4xl">
            My Projects
          </h2>
          <p className="text-sm text-muted-foreground">Some of my recent work</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="card-soft card-lift overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={992}
                height={672}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-base font-bold">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <a
                    href="#projects"
                    className="btn-gradient inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold"
                  >
                    <ExternalLink className="size-3.5" />
                    View Demo
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:bg-secondary"
                  >
                    <Github className="size-3.5" />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
