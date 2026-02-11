"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"

const roles = [
  "Aspiring Software Developer",
  "Data Enthusiast",
  "Problem Solver",
  "Continuous Learner",
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary px-6">
      {/* Animated grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Teal accent glows */}
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-secondary/8 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 top-0 h-[300px] w-[300px] rounded-full bg-secondary/4 blur-[80px]" />

      {/* Floating decorative elements */}
      <div className="pointer-events-none absolute left-[15%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-secondary/40" />
      <div className="pointer-events-none absolute right-[20%] top-[30%] h-1.5 w-1.5 animate-pulse rounded-full bg-secondary/30" style={{ animationDelay: "1s" }} />
      <div className="pointer-events-none absolute left-[25%] bottom-[25%] h-1 w-1 animate-pulse rounded-full bg-secondary/50" style={{ animationDelay: "2s" }} />
      <div className="pointer-events-none absolute right-[30%] bottom-[35%] h-2.5 w-2.5 animate-pulse rounded-full bg-secondary/20" style={{ animationDelay: "0.5s" }} />

      <div
        className={`relative z-10 mx-auto max-w-4xl text-center transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Status badge */}
        <div
          className={`mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-5 py-2 transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
          </span>
          <span className="font-heading text-xs font-semibold uppercase tracking-widest text-secondary">
            Open to Opportunities
          </span>
        </div>

        <h1
          className={`mb-6 font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-balance block">{"Hi, I'm"}</span>
          <span className="relative mt-2 inline-block text-secondary">
            Gayathridevi E
            <svg
              className="absolute -bottom-2 left-0 w-full opacity-30"
              viewBox="0 0 300 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 8 C50 2, 100 2, 150 6 S250 2, 298 8"
                stroke="hsl(var(--secondary))"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Animated role switcher */}
        <div
          className={`mb-8 h-8 overflow-hidden transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Sparkles size={16} className="text-secondary/60" />
            <p
              key={currentRole}
              className="animate-fade-in-up font-heading text-lg font-medium text-primary-foreground/60 sm:text-xl"
            >
              {roles[currentRole]}
            </p>
          </div>
        </div>

        <p
          className={`mx-auto mb-10 max-w-2xl text-base leading-relaxed text-primary-foreground/60 sm:text-lg transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Computer Science Engineering Student at Government College of
          Engineering, Bodinayakanur. Passionate about technology,
          problem-solving, and building efficient solutions with code and data.
        </p>

        <div
          className={`flex flex-wrap items-center justify-center gap-4 transition-all duration-1000 delay-[900ms] ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-secondary px-7 py-3.5 font-heading text-sm font-semibold text-primary shadow-lg shadow-secondary/25 transition-all duration-300 hover:bg-secondary/90 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5"
          >
            View Projects
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2.5 rounded-xl border border-primary-foreground/15 px-7 py-3.5 font-heading text-sm font-semibold text-primary-foreground transition-all duration-300 hover:border-secondary/40 hover:text-secondary hover:bg-secondary/5"
          >
            Know More About Me
          </a>
        </div>

        {/* Social links */}
        <div
          className={`mt-14 flex items-center justify-center gap-4 transition-all duration-1000 delay-[1100ms] ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {[
            { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
            { icon: Mail, href: "mailto:your-email@example.com", label: "Email" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex h-10 w-10 items-center justify-center rounded-lg border border-primary-foreground/10 text-primary-foreground/40 transition-all duration-300 hover:border-secondary/40 hover:bg-secondary/10 hover:text-secondary"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" className="group flex flex-col items-center gap-2" aria-label="Scroll to content">
          <span className="font-heading text-[10px] font-medium uppercase tracking-[0.2em] text-primary-foreground/30 transition-colors group-hover:text-secondary/60">
            Scroll
          </span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-primary-foreground/20 p-1 transition-colors group-hover:border-secondary/40">
            <div className="h-2 w-1 animate-bounce rounded-full bg-secondary" />
          </div>
        </a>
      </div>
    </section>
  )
}
