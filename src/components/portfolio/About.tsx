import { GraduationCap, MapPin, Target } from "lucide-react";
import laptop from "@/assets/about-laptop.png";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "B.E. CSE (3rd Year)",
  },
  {
    icon: MapPin,
    title: "College",
    text: "Er.Perumal Manimekalai College of Engineering",
  },
  {
    icon: Target,
    title: "Career Objective",
    text: "Become a skilled software developer and build innovative solutions.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">About Me</p>
            <h2 className="rule-accent mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Who am I?
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              I am a Computer Science and Engineering student with a passion for web development and
              software solutions. I enjoy building projects that solve real-world problems and help
              me grow my skills in both frontend and backend technologies.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {cards.map((card) => (
                <div key={card.title} className="card-soft card-lift p-5">
                  <card.icon className="size-5 text-primary" />
                  <h3 className="mt-3 text-sm font-bold">{card.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </div>

          <img
            src={laptop}
            alt="Laptop with code on screen"
            loading="lazy"
            width={928}
            height={720}
            className="mx-auto w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
