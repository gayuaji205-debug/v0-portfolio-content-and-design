"use client"

import { User, Code2, Target, Lightbulb, Rocket, BookOpen, Zap } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { AnimatedCounter } from "./animated-counter"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const stats = [
  { value: 6, suffix: "+", label: "Projects Built" },
  { value: 5, suffix: "+", label: "Technologies" },
  { value: 3, suffix: "rd", label: "Year CSE Student" },
  { value: 100, suffix: "%", label: "Commitment" },
]

const highlights = [
  {
    icon: Code2,
    title: "Technical Versatility",
    description:
      "Proficient across multiple programming paradigms with Python, Java, SQL, and C. I bridge the gap between software development and data analytics through Power BI visualization.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Target,
    title: "Project-Driven Learner",
    description:
      "Every project is a stepping stone. From database systems to interactive dashboards, I learn by building real-world solutions that solve genuine problems.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Lightbulb,
    title: "Analytical Problem Solver",
    description:
      "I thrive on breaking down complex challenges into elegant, efficient solutions. My approach combines algorithmic thinking with creative design to deliver meaningful results.",
    color: "bg-secondary/10 text-secondary",
  },
]

const interests = [
  { icon: Rocket, label: "Software Development" },
  { icon: BookOpen, label: "Data Analytics" },
  { icon: Zap, label: "Problem Solving" },
]

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal()
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal()

  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={User}
          label="About Me"
          title="Passionate About Building Meaningful Solutions"
          description="A curious mind driven by the desire to transform ideas into impactful technology."
        />

        <div ref={ref} className="mx-auto max-w-4xl">
          {/* Main about card */}
          <div
            className={`relative mb-12 overflow-hidden rounded-2xl border border-border bg-card shadow-sm reveal-up ${isVisible ? "revealed" : ""}`}
          >
            {/* Decorative top accent */}
            <div className="h-1 w-full bg-secondary" />

            <div className="p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                  <User size={22} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary">
                    Gayathridevi E
                  </h3>
                  <p className="text-sm text-secondary font-medium">
                    B.E. Computer Science & Engineering
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground/80">
                <p>
                  I am a dedicated and growth-oriented{" "}
                  <span className="font-semibold text-primary">
                    third-year Computer Science Engineering student
                  </span>{" "}
                  at{" "}
                  <span className="font-semibold text-primary">
                    Government College of Engineering, Bodinayakanur
                  </span>
                  . My journey in technology began with a simple curiosity about how
                  software works, and has since evolved into a deep passion for building
                  solutions that make a difference.
                </p>
                <p>
                  Through hands-on projects spanning{" "}
                  <span className="font-medium text-secondary">
                    Python, SQL, Java, C, and Power BI
                  </span>
                  , I have cultivated a versatile skill set that bridges the worlds of
                  software development and data analytics. I believe in the power of clean
                  code, thoughtful design, and data-driven insights to solve real-world
                  challenges.
                </p>
                <p>
                  What drives me is the belief that technology, when applied with intention
                  and creativity, can transform the way we live and work. I am actively
                  seeking opportunities to contribute to meaningful projects, collaborate
                  with industry professionals, and continue evolving as a well-rounded
                  engineer who delivers impact from day one.
                </p>
              </div>

              {/* Interest tags */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {interests.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3.5 py-2 text-sm font-medium text-foreground"
                  >
                    <item.icon size={14} className="text-secondary" />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className={`mx-auto mb-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 reveal-scale ${statsVisible ? "revealed" : ""}`}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center shadow-sm"
            >
              <span className="font-heading text-3xl font-bold text-secondary">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  isVisible={statsVisible}
                />
              </span>
              <span className="mt-1 text-xs font-medium text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Highlight cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-500 hover:border-secondary/30 hover:shadow-lg hover:-translate-y-1 reveal-up ${isVisible ? "revealed" : ""} stagger-${index + 1}`}
            >
              <div className={`mb-5 inline-flex rounded-xl p-3 ${item.color}`}>
                <item.icon size={22} />
              </div>
              <h3 className="mb-3 font-heading text-lg font-bold text-primary">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
