"use client"

import {
  Wrench,
  Database,
  Code,
  BarChart3,
  Terminal,
  Globe,
} from "lucide-react"
import { SectionHeading } from "./section-heading"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    accent: "from-secondary to-secondary/70",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "C", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    icon: Database,
    title: "Database & Data",
    accent: "from-primary to-primary/70",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 65 },
      { name: "Data Analysis", level: 70 },
      { name: "Data Modeling", level: 65 },
    ],
  },
  {
    icon: BarChart3,
    title: "Visualization & Tools",
    accent: "from-secondary to-secondary/70",
    skills: [
      { name: "Power BI", level: 75 },
      { name: "MS Excel", level: 80 },
      { name: "Data Reporting", level: 70 },
      { name: "Dashboards", level: 70 },
    ],
  },
  {
    icon: Terminal,
    title: "Development Tools",
    accent: "from-primary to-primary/70",
    skills: [
      { name: "Git & GitHub", level: 70 },
      { name: "VS Code", level: 85 },
      { name: "Jupyter Notebook", level: 75 },
      { name: "Eclipse IDE", level: 65 },
    ],
  },
  {
    icon: Globe,
    title: "Web Fundamentals",
    accent: "from-secondary to-secondary/70",
    skills: [
      { name: "HTML", level: 75 },
      { name: "CSS", level: 70 },
      { name: "JavaScript", level: 60 },
      { name: "Flask (Basics)", level: 55 },
    ],
  },
  {
    icon: Wrench,
    title: "Core Competencies",
    accent: "from-primary to-primary/70",
    skills: [
      { name: "DSA", level: 70 },
      { name: "OOP", level: 80 },
      { name: "DBMS", level: 78 },
      { name: "OS Fundamentals", level: 65 },
    ],
  },
]

export function SkillsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="skills" className="bg-primary px-6 py-24 md:py-32">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute left-0 right-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center md:mb-18">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-secondary/20 bg-secondary/10 px-5 py-2">
            <Wrench size={14} className="text-secondary" />
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.15em] text-secondary">
              Technical Skills
            </span>
          </div>
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-[2.75rem] text-balance leading-tight">
            My Technical Toolkit
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-primary-foreground/60 text-pretty">
            Technologies, tools, and core competencies developed through academic
            coursework and hands-on project experience.
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-secondary/40" />
            <span className="h-1 w-8 rounded-full bg-secondary" />
            <span className="h-1 w-1 rounded-full bg-secondary/40" />
          </div>
        </div>

        <div ref={ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-secondary/30 hover:bg-primary-foreground/8 reveal-up ${isVisible ? "revealed" : ""} stagger-${index + 1}`}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15">
                  <category.icon size={18} className="text-secondary" />
                </div>
                <h3 className="font-heading text-base font-semibold text-primary-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-primary-foreground/80">
                        {skill.name}
                      </span>
                      <span className="font-heading text-xs font-semibold text-secondary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-primary-foreground/10">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${category.accent} transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 150}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
