"use client"

import { Compass, ArrowRight } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function CareerObjectiveSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="career" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={Compass}
          label="Career Objective"
          title="Where I See Myself"
          description="My vision for the future and the impact I want to create."
        />

        <div ref={ref} className="mx-auto max-w-3xl">
          <div
            className={`relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm reveal-up ${isVisible ? "revealed" : ""}`}
          >
            {/* Decorative accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary" />

            <div className="p-8 pl-10 md:p-10 md:pl-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                  <Compass size={22} className="text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary">
                  My Mission
                </h3>
              </div>

              <p className="text-base leading-relaxed text-foreground/80 md:text-lg md:leading-relaxed">
                To secure an entry-level position in a reputed organization where I
                can apply my technical knowledge, enhance my skills, and contribute
                to innovative and impactful projects in the field of{" "}
                <span className="font-semibold text-primary">
                  software development
                </span>{" "}
                or{" "}
                <span className="font-semibold text-primary">
                  data analytics
                </span>
                .
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Apply Technical Knowledge",
                  "Grow Professionally",
                  "Build Innovative Solutions",
                  "Create Meaningful Impact",
                ].map((goal) => (
                  <span
                    key={goal}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-foreground"
                  >
                    <ArrowRight size={12} className="text-secondary" />
                    {goal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
