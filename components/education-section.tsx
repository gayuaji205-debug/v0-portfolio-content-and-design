import { GraduationCap, MapPin, Calendar } from "lucide-react"
import { SectionHeading } from "./section-heading"

const educationData = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "Government College of Engineering, Bodinayakanur",
    location: "Bodinayakanur, Tamil Nadu",
    period: "2023 - 2027 (Expected)",
    description:
      "Currently pursuing a bachelor's degree in Computer Science and Engineering with a strong focus on programming fundamentals, data structures, algorithms, database management, and software engineering principles.",
    highlights: [
      "Core subjects: DSA, DBMS, OS, OOP, Computer Networks",
      "Hands-on project work in Python, Java, SQL, and Power BI",
      "Active participation in coding events and technical workshops",
    ],
  },
  {
    degree: "Higher Secondary Education (XII)",
    institution: "Higher Secondary School",
    location: "Tamil Nadu",
    period: "2021 - 2023",
    description:
      "Completed higher secondary education with a focus on Mathematics, Physics, and Computer Science, laying a strong academic foundation for engineering studies.",
    highlights: [
      "Studied core science and mathematics",
      "Developed early interest in computers and programming",
    ],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={GraduationCap}
          label="Education"
          title="Academic Background"
          description="My educational journey that has built the foundation for my career in Computer Science."
        />

        <div className="mx-auto max-w-3xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-8" />

            <div className="flex flex-col gap-8">
              {educationData.map((edu, index) => (
                <div key={edu.degree} className="relative pl-14 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-secondary bg-card md:left-6">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                  </div>

                  <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                        <Calendar size={12} />
                        {edu.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                    </div>
                    <h3 className="mb-1 font-heading text-lg font-semibold text-primary">
                      {edu.degree}
                    </h3>
                    <p className="mb-3 text-sm font-medium text-secondary">
                      {edu.institution}
                    </p>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {edu.description}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {edu.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
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
