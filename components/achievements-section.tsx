"use client"

import { Trophy, Award, BookOpen, Star } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const achievements = [
  {
    icon: Award,
    title: "Academic Mini-Projects",
    description:
      "Completed multiple academic mini-projects in programming and data analysis, building practical experience across Python, SQL, Java, C, and Power BI.",
    accent: "border-secondary/20 hover:border-secondary/40",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Actively learning advanced concepts in software development, staying current with industry trends and expanding technical knowledge beyond the classroom.",
    accent: "border-primary/20 hover:border-primary/40",
  },
  {
    icon: Star,
    title: "Technical Seminars & Workshops",
    description:
      "Participated in technical seminars and workshops organized by the college and external technical communities, gaining exposure to real-world practices.",
    accent: "border-secondary/20 hover:border-secondary/40",
  },
]

export function AchievementsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="achievements" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={Trophy}
          label="Achievements"
          title="Milestones & Recognition"
          description="Key achievements and experiences that reflect my dedication to continuous improvement and professional growth."
        />

        <div ref={ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl border bg-card p-7 shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${item.accent} reveal-up ${isVisible ? "revealed" : ""} stagger-${index + 1}`}
            >
              {/* Background number */}
              <span className="pointer-events-none absolute -right-3 -top-6 font-heading text-[7rem] font-bold leading-none text-muted/30 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                  <item.icon size={22} className="text-secondary" />
                </div>
                <h3 className="mb-3 font-heading text-lg font-bold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
