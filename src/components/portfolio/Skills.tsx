const skills = [
  { name: "HTML", label: "</>", color: "oklch(0.62 0.2 40)" },
  { name: "CSS", label: "#", color: "oklch(0.58 0.17 250)" },
  { name: "JavaScript", label: "JS", color: "oklch(0.75 0.16 92)" },
  { name: "React", label: "( )", color: "oklch(0.7 0.13 220)" },
  { name: "Node.js", label: "N", color: "oklch(0.62 0.16 145)" },
  { name: "MySQL", label: "SQL", color: "oklch(0.6 0.11 230)" },
  { name: "Python", label: "Py", color: "oklch(0.65 0.14 240)" },
];

export function Skills() {
  return (
    <section id="skills" className="surface-section py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="rule-accent text-3xl font-extrabold tracking-tight sm:text-4xl">
            My Skills
          </h2>
          <p className="text-sm text-muted-foreground">Technologies I work with</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="card-soft card-lift flex flex-col items-center justify-center gap-3 px-3 py-7"
            >
              <span className="text-2xl font-black" style={{ color: skill.color }}>
                {skill.label}
              </span>
              <span className="text-sm font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
