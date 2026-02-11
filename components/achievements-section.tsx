import { Trophy, Award, BookOpen, Users, Star } from "lucide-react"
import { SectionHeading } from "./section-heading"

const achievements = [
  {
    icon: Award,
    title: "Academic Excellence",
    description:
      "Consistently maintained strong academic performance throughout the undergraduate program with distinction in core Computer Science subjects.",
  },
  {
    icon: BookOpen,
    title: "Technical Workshop Participant",
    description:
      "Actively participated in workshops on Python programming, data analytics, and web development organized by the college and external technical communities.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Successfully collaborated on multiple group projects, demonstrating strong teamwork, communication, and project management skills in academic settings.",
  },
  {
    icon: Star,
    title: "Coding Event Participant",
    description:
      "Participated in intra-college coding competitions and hackathons, strengthening problem-solving skills under time constraints.",
  },
  {
    icon: Trophy,
    title: "Self-Directed Learning",
    description:
      "Completed online courses and certifications in Python, SQL, and Power BI to complement academic learning with industry-relevant practical skills.",
  },
  {
    icon: Award,
    title: "Project Showcase",
    description:
      "Presented academic projects in department seminars, receiving positive feedback from faculty for technical depth and presentation clarity.",
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={Trophy}
          label="Achievements"
          title="Milestones & Recognition"
          description="Key achievements and experiences that reflect my commitment to continuous learning and professional growth."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-secondary/30 hover:shadow-md"
            >
              {/* Background accent number */}
              <span className="pointer-events-none absolute -right-2 -top-4 font-heading text-8xl font-bold text-muted/50">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <div className="mb-4 inline-flex rounded-lg bg-secondary/10 p-2.5">
                  <item.icon size={20} className="text-secondary" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-primary">
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
