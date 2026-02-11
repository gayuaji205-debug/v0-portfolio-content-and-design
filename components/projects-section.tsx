"use client"

import { FolderOpen, ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const projects = [
  {
    title: "Student Database Management System",
    description:
      "A comprehensive system to manage student records, course enrollments, and academic performance data with full CRUD operations, search functionality, and automated report generation.",
    tags: ["Python", "SQL", "MySQL", "Tkinter"],
    highlights: [
      "Designed and normalized relational database schema with referential integrity",
      "Implemented secure CRUD operations with input validation and error handling",
      "Built an intuitive GUI for seamless data entry and management",
    ],
    featured: true,
  },
  {
    title: "Sales Data Dashboard",
    description:
      "An interactive BI dashboard visualizing sales performance metrics, trends, and KPIs to enable data-driven decision-making through clear visual reports.",
    tags: ["Power BI", "Excel", "Data Analysis", "DAX"],
    highlights: [
      "Created interactive drill-down charts and filterable reports",
      "Implemented DAX measures for calculated KPIs and metrics",
      "Designed presentation-ready layouts for stakeholder reviews",
    ],
    featured: true,
  },
  {
    title: "Library Management System",
    description:
      "A Java-based application handling library operations including book cataloging, member registration, issue/return tracking, and automated fine calculation.",
    tags: ["Java", "OOP", "MySQL", "JDBC"],
    highlights: [
      "Applied SOLID principles and object-oriented design patterns",
      "Integrated persistent storage with MySQL via JDBC connectivity",
      "Handled edge cases for availability tracking and overdue management",
    ],
    featured: false,
  },
  {
    title: "Weather Data Analyzer",
    description:
      "A Python application that fetches, processes, and visualizes weather data using statistical analysis to identify patterns and present actionable insights.",
    tags: ["Python", "Pandas", "Matplotlib", "API"],
    highlights: [
      "Parsed and cleaned large datasets with Pandas DataFrames",
      "Generated multi-format visualizations for trends and patterns",
      "Applied statistical methods for data interpretation and forecasting",
    ],
    featured: false,
  },
  {
    title: "Expense Tracker Application",
    description:
      "A personal finance tool for logging daily expenses, categorizing spending, and viewing monthly summaries with visual breakdowns of budget allocation.",
    tags: ["Python", "SQLite", "Tkinter", "Charts"],
    highlights: [
      "Built persistent local storage with SQLite database integration",
      "Implemented category-wise analysis with visual spending breakdowns",
      "Designed clean, chart-based UI for at-a-glance financial insights",
    ],
    featured: false,
  },
  {
    title: "Quiz Application",
    description:
      "An interactive quiz platform with multiple-choice questions, real-time score tracking, and timed assessments demonstrating efficient data structure usage.",
    tags: ["C", "Data Structures", "File Handling"],
    highlights: [
      "Implemented dynamic question loading from external file storage",
      "Built real-time scoring system with performance analytics",
      "Used linked lists for memory-efficient question management",
    ],
    featured: false,
  },
]

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal()

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="bg-muted/40 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={FolderOpen}
          label="Projects"
          title="Featured Projects"
          description="A curated selection of academic and personal projects demonstrating my technical capabilities, problem-solving approach, and commitment to building meaningful solutions."
        />

        <div ref={ref}>
          {/* Featured projects - larger cards */}
          <div className="mb-8 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 reveal-up ${isVisible ? "revealed" : ""} stagger-${index + 1}`}
              >
                {/* Top gradient accent */}
                <div className="h-1.5 w-full bg-secondary" />

                <div className="p-7">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
                        <FolderOpen size={18} className="text-secondary" />
                      </div>
                      <span className="rounded-md bg-secondary/10 px-2.5 py-1 text-xs font-semibold text-secondary">
                        Featured
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="#"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-secondary/10 hover:text-secondary"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href="#"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-secondary/10 hover:text-secondary"
                        aria-label={`View ${project.title} live`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <h3 className="mb-3 font-heading text-xl font-bold text-primary transition-colors group-hover:text-secondary">
                    {project.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mb-5 rounded-xl bg-muted/50 p-4">
                    <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Key Contributions
                    </p>
                    <ul className="flex flex-col gap-2">
                      {project.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-foreground/80"
                        >
                          <ArrowUpRight
                            size={14}
                            className="mt-0.5 flex-shrink-0 text-secondary"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other projects - compact grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:border-secondary/30 hover:shadow-lg hover:-translate-y-1 reveal-up ${isVisible ? "revealed" : ""} stagger-${index + 3}`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <FolderOpen
                    size={20}
                    className="text-secondary/60 transition-colors group-hover:text-secondary"
                  />
                  <div className="flex items-center gap-1.5">
                    <a
                      href="#"
                      className="text-muted-foreground/50 transition-colors hover:text-secondary"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={14} />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground/50 transition-colors hover:text-secondary"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <h3 className="mb-2 font-heading text-base font-bold text-primary transition-colors group-hover:text-secondary">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
