"use client"

import { FolderOpen, ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const projects = [
  {
    title: "Data Management & Analytics System",
    description:
      "Developed a project that manages and analyzes data efficiently using Python and SQL. Implemented database connectivity, data retrieval, and basic analytics features to improve data handling and reporting.",
    tags: ["Python", "SQL"],
    highlights: [
      "Designed database schema for structured data storage",
      "Wrote optimized SQL queries for data retrieval and analysis",
      "Implemented backend logic using Python for automation",
    ],
    featured: true,
  },
  {
    title: "Student Management System",
    description:
      "Built a console-based application to manage student records including adding, updating, deleting, and viewing student information with clean and structured code.",
    tags: ["Java", "C", "OOP"],
    highlights: [
      "Applied OOP concepts for modular and maintainable code",
      "Implemented complete CRUD operations for record management",
      "Ensured clean, well-structured, and readable codebase",
    ],
    featured: true,
  },
  {
    title: "Sales Dashboard using Power BI",
    description:
      "Created an interactive dashboard to visualize sales performance, revenue trends, and regional data insights with dynamic filtering and clear visual reporting.",
    tags: ["Power BI", "Data Analysis", "Excel"],
    highlights: [
      "Designed interactive charts and visuals for KPI tracking",
      "Used filters and slicers for dynamic, drill-down analysis",
      "Improved data presentation and insights clarity for stakeholders",
    ],
    featured: true,
  },
]

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="projects" className="bg-muted/40 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={FolderOpen}
          label="Projects"
          title="Featured Projects"
          description="A curated selection of academic and personal projects demonstrating my technical capabilities, problem-solving approach, and commitment to building meaningful solutions."
        />

        <div ref={ref} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 reveal-up ${isVisible ? "revealed" : ""} stagger-${index + 1}`}
            >
              {/* Top accent */}
              <div className="h-1.5 w-full bg-secondary" />

              <div className="p-7">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
                      <FolderOpen size={18} className="text-secondary" />
                    </div>
                    <span className="rounded-md bg-secondary/10 px-2.5 py-1 text-xs font-semibold text-secondary">
                      {String(index + 1).padStart(2, "0")}
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

                <h3 className="mb-3 font-heading text-lg font-bold text-primary transition-colors group-hover:text-secondary">
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
      </div>
    </section>
  )
}
