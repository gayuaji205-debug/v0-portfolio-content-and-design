"use client"

import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Government College of Engineering, Bodinayakanur",
    location: "Bodinayakanur, Tamil Nadu",
    period: "3rd Year (Expected Graduation: 20XX)",
    isCurrent: true,
    description:
      "Pursuing a comprehensive engineering degree with a strong focus on programming, data structures, algorithms, database management, and software engineering principles.",
    highlights: [
      "Hands-on project experience in Python, Java, SQL, C, and Power BI",
      "Core focus on Data Structures, DBMS, OOP, and Problem Solving",
      "Actively building real-world applications through academic projects",
    ],
  },
]

export function EducationSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="education" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={GraduationCap}
          label="Education"
          title="Academic Background"
          description="The educational journey that shapes my technical expertise and professional growth."
        />

        <div ref={ref} className="mx-auto max-w-3xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-border md:left-9" />

            <div className="flex flex-col gap-10">
              {educationData.map((edu, index) => (
                <div
                  key={edu.degree}
                  className={`relative pl-16 md:pl-24 reveal-up ${isVisible ? "revealed" : ""} stagger-${index + 1}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-2 md:left-6">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full border-2 ${
                        edu.isCurrent
                          ? "border-secondary bg-secondary/10"
                          : "border-border bg-card"
                      }`}
                    >
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${
                          edu.isCurrent ? "bg-secondary animate-pulse" : "bg-muted-foreground/30"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-secondary/20">
                    {/* Current badge */}
                    {edu.isCurrent && (
                      <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
                        </span>
                        Currently Pursuing
                      </span>
                    )}

                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
                        <Calendar size={12} />
                        {edu.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                    </div>

                    <h3 className="mb-1.5 font-heading text-lg font-bold text-primary">
                      {edu.degree}
                    </h3>
                    <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-secondary">
                      <BookOpen size={14} />
                      {edu.institution}
                    </p>
                    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                      {edu.description}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {edu.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-foreground/80"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
