import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out — I'll reply soon!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="surface-section py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="rule-accent text-3xl font-extrabold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
            Have a project in mind or just want to say hello? Feel free to contact me!
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-primary" />
              <a href="mailto:charantejs018@gmail.com" className="hover:text-primary">
                charantejs018@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-primary" />
              <a href="tel:+919345155298" className="hover:text-primary">
                9345155298
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-primary" />
              Tamil Nadu, India
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="card-soft p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Name
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
              />
            </label>
            <label className="block text-sm font-medium">
              Email
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-medium">
            Message
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Type your message..."
              className="mt-2 w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
            />
          </label>

          <button
            type="submit"
            className="btn-gradient mt-6 w-full rounded-md py-3 text-sm font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
