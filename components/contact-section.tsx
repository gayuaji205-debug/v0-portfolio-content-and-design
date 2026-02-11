import { Send, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"
import { SectionHeading } from "./section-heading"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "gayathridevi@example.com",
    href: "mailto:gayathridevi@example.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bodinayakanur, Tamil Nadu, India",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/",
    username: "github.com/gayathridevi",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/",
    username: "linkedin.com/in/gayathridevi",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-muted/50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={Send}
          label="Contact"
          title="Let's Connect"
          description="I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology."
        />

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Details */}
            <div className="flex flex-col gap-6">
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 font-heading text-lg font-semibold text-primary">
                  Reach Out
                </h3>
                <div className="flex flex-col gap-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-lg bg-secondary/10 p-2">
                        <item.icon size={16} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-foreground transition-colors hover:text-secondary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 font-heading text-lg font-semibold text-primary">
                  Social Profiles
                </h3>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
                    >
                      <div className="rounded-lg bg-primary p-2">
                        <item.icon
                          size={16}
                          className="text-primary-foreground"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground group-hover:text-secondary">
                          {item.label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.username}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Message Card */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-1 flex-col justify-between rounded-xl border border-border bg-primary p-8 shadow-sm">
                <div>
                  <h3 className="mb-3 font-heading text-2xl font-bold text-primary-foreground">
                    {"Let's Build Something Great Together"}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-primary-foreground/70">
                    {
                      "I'm a motivated Computer Science student eager to contribute to meaningful projects. Whether it's an internship, freelance work, or a collaborative project, I'd love to hear from you."
                    }
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      <span className="text-sm text-primary-foreground/80">
                        Open to internship opportunities
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      <span className="text-sm text-primary-foreground/80">
                        Available for collaborative projects
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      <span className="text-sm text-primary-foreground/80">
                        Interested in learning new technologies
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:gayathridevi@example.com"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 font-heading text-sm font-semibold text-accent-foreground transition-all hover:bg-secondary/90 hover:shadow-lg"
                >
                  <Mail size={16} />
                  Send an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
