import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary px-6">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Teal accent glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-4 font-heading text-sm font-medium uppercase tracking-widest text-secondary">
          Computer Science Engineering Student
        </p>
        <h1 className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-balance">{"Hi, I'm "}</span>
          <span className="text-secondary">Gayathridevi E</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
          A passionate and driven third-year CSE student at Government College of
          Engineering, Bodinayakanur. I build meaningful solutions with Python,
          Java, SQL, and data visualization tools, turning ideas into impactful
          projects.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-heading text-sm font-semibold text-accent-foreground transition-all hover:bg-secondary/90 hover:shadow-lg hover:shadow-secondary/25"
          >
            View My Work
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-all hover:border-secondary hover:text-secondary"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/50 transition-colors hover:text-secondary"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/50 transition-colors hover:text-secondary"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:gayathridevi@example.com"
            className="text-primary-foreground/50 transition-colors hover:text-secondary"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-primary-foreground/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-secondary" />
        </div>
      </div>
    </section>
  )
}
