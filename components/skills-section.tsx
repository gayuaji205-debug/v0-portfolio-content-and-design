import { Wrench, Database, Code, BarChart3, Terminal, Globe } from "lucide-react"
import { SectionHeading } from "./section-heading"

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
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
    skills: [
      { name: "Power BI", level: 75 },
      { name: "Excel", level: 80 },
      { name: "Data Reporting", level: 70 },
      { name: "Dashboards", level: 70 },
    ],
  },
  {
    icon: Terminal,
    title: "Development Tools",
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
    skills: [
      { name: "DSA", level: 70 },
      { name: "OOP", level: 80 },
      { name: "DBMS", level: 78 },
      { name: "OS Fundamentals", level: 65 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="bg-muted/50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={Wrench}
          label="Technical Skills"
          title="My Technical Toolkit"
          description="A comprehensive overview of the technologies, tools, and core competencies I have developed through coursework and projects."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary p-2">
                  <category.icon size={18} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading text-base font-semibold text-primary">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-secondary transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
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
