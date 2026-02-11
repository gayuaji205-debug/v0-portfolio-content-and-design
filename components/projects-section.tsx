import { FolderOpen, ExternalLink, Github } from "lucide-react"
import { SectionHeading } from "./section-heading"

const projects = [
  {
    title: "Student Database Management System",
    description:
      "A comprehensive database management system built to manage student records, course enrollments, and academic performance data. Features CRUD operations, search functionality, and report generation.",
    tags: ["Python", "SQL", "MySQL", "Tkinter"],
    highlights: [
      "Designed and normalized relational database schema",
      "Implemented secure CRUD operations with input validation",
      "Built an intuitive GUI for easy data management",
    ],
  },
  {
    title: "Sales Data Dashboard",
    description:
      "An interactive business intelligence dashboard that visualizes sales performance metrics, trends, and KPIs. Enables data-driven decision-making through clear and insightful visual reports.",
    tags: ["Power BI", "Excel", "Data Analysis", "DAX"],
    highlights: [
      "Created interactive charts and drill-down reports",
      "Implemented DAX measures for calculated metrics",
      "Designed for stakeholder presentation and decision support",
    ],
  },
  {
    title: "Library Management System",
    description:
      "A Java-based application for managing library operations including book cataloging, member registration, issue/return tracking, and fine calculation with an organized interface.",
    tags: ["Java", "OOP", "MySQL", "JDBC"],
    highlights: [
      "Applied object-oriented design principles",
      "Integrated with MySQL database via JDBC",
      "Handled edge cases for book availability and overdue tracking",
    ],
  },
  {
    title: "Weather Data Analyzer",
    description:
      "A Python program that fetches, processes, and visualizes weather data. Uses data analysis techniques to identify patterns and present insights through graphs and statistical summaries.",
    tags: ["Python", "Pandas", "Matplotlib", "API"],
    highlights: [
      "Parsed and cleaned large datasets with Pandas",
      "Generated visualizations for temperature trends and rainfall",
      "Applied statistical methods for data interpretation",
    ],
  },
  {
    title: "Expense Tracker Application",
    description:
      "A personal finance management tool that allows users to log daily expenses, categorize spending, and view monthly summaries with visual breakdowns of budget allocation.",
    tags: ["Python", "SQLite", "Tkinter", "Charts"],
    highlights: [
      "Built persistent storage with SQLite database",
      "Implemented category-wise spending analysis",
      "Designed clean UI with chart-based summaries",
    ],
  },
  {
    title: "Quiz Application",
    description:
      "An interactive quiz platform built with C that supports multiple-choice questions, score tracking, and timed assessments. Demonstrates strong understanding of data structures and logic building.",
    tags: ["C", "Data Structures", "File Handling"],
    highlights: [
      "Implemented dynamic question loading from files",
      "Built scoring system with performance analytics",
      "Used linked lists for efficient question management",
    ],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-muted/50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={FolderOpen}
          label="Projects"
          title="Featured Projects"
          description="A curated selection of academic and personal projects that demonstrate my technical capabilities and problem-solving approach."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-card shadow-sm transition-all hover:border-secondary/30 hover:shadow-lg"
            >
              {/* Card header accent */}
              <div className="h-1 w-full rounded-t-xl bg-secondary/60 transition-all group-hover:bg-secondary" />

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center justify-between">
                  <FolderOpen size={20} className="text-secondary" />
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-secondary"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-secondary"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <h3 className="mb-2 font-heading text-lg font-semibold text-primary transition-colors group-hover:text-secondary">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mb-4 flex flex-col gap-1.5">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
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
