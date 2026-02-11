import { User, Code2, Target, Lightbulb } from "lucide-react"
import { SectionHeading } from "./section-heading"

const highlights = [
  {
    icon: Code2,
    title: "Technical Versatility",
    description:
      "Proficient across multiple languages including Python, Java, SQL, and C, with hands-on experience in data visualization through Power BI.",
  },
  {
    icon: Target,
    title: "Project-Driven Learner",
    description:
      "I believe in learning by building. Every project I undertake is an opportunity to deepen my understanding and create tangible solutions.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "Passionate about algorithmic thinking and analytical problem-solving, with a keen interest in database management and software development.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={User}
          label="About Me"
          title="Passionate About Building Meaningful Solutions"
          description="I am a dedicated and curious Computer Science Engineering student driven by the desire to solve real-world problems through technology."
        />

        <div className="mx-auto max-w-3xl">
          <div className="mb-12 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <p className="mb-4 text-base leading-relaxed text-foreground">
              {"I'm "}
              <span className="font-semibold text-primary">Gayathridevi E</span>, a
              third-year Computer Science Engineering student at{" "}
              <span className="font-semibold text-primary">
                Government College of Engineering, Bodinayakanur
              </span>
              . My academic journey has been shaped by a genuine love for
              programming, data analysis, and creative problem-solving.
            </p>
            <p className="mb-4 text-base leading-relaxed text-foreground">
              With hands-on experience in Python, SQL, Java, and C, I have
              developed a strong foundation in both software development and
              database management. My exploration of Power BI has further
              strengthened my ability to transform raw data into meaningful
              visual stories.
            </p>
            <p className="text-base leading-relaxed text-foreground">
              I am actively seeking opportunities to apply my skills in a
              professional environment, contribute to impactful projects, and
              continue growing as a well-rounded software engineer. I thrive
              in collaborative environments and am always eager to learn new
              technologies.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-secondary/30 hover:shadow-md"
            >
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
          ))}
        </div>
      </div>
    </section>
  )
}
