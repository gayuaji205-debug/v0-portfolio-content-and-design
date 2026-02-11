"use client"

import {
  Send,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"
import { SectionHeading } from "./section-heading"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
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
    value: "+91-XXXXXXXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/yourusername",
    username: "github.com/yourusername",
    description: "Check out my code and project repositories",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    username: "linkedin.com/in/yourprofile",
    description: "Connect with me professionally",
  },
]

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="contact" className="bg-muted/40 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          icon={Send}
          label="Contact"
          title={"Let's Connect"}
          description={"I'm always eager to discuss opportunities, collaborations, or just have a meaningful conversation about technology and innovation."}
        />

        <div ref={ref} className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Details */}
            <div
              className={`flex flex-col gap-6 reveal-up ${isVisible ? "revealed" : ""}`}
            >
              <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
                <h3 className="mb-5 font-heading text-lg font-bold text-primary">
                  Get in Touch
                </h3>
                <div className="flex flex-col gap-5">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                        <item.icon size={16} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
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

              <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
                <h3 className="mb-5 font-heading text-lg font-bold text-primary">
                  Find Me Online
                </h3>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-border p-4 transition-all hover:border-secondary/30 hover:bg-secondary/5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                        <item.icon
                          size={16}
                          className="text-primary-foreground"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-foreground group-hover:text-secondary">
                          {item.label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="text-muted-foreground/30 transition-all group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div
              className={`flex flex-col gap-6 reveal-up stagger-2 ${isVisible ? "revealed" : ""}`}
            >
              <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl bg-primary p-8 shadow-xl md:p-10">
                {/* Background decorative glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-secondary/10 blur-[80px]" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-secondary/5 blur-[60px]" />

                <div className="relative">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary/15 px-4 py-2">
                    <Sparkles size={14} className="text-secondary" />
                    <span className="text-xs font-semibold text-secondary">
                      Open to Opportunities
                    </span>
                  </div>

                  <h3 className="mb-4 font-heading text-2xl font-bold leading-tight text-primary-foreground md:text-3xl text-balance">
                    {"Let's Build Something Great Together"}
                  </h3>
                  <p className="mb-8 text-sm leading-relaxed text-primary-foreground/60">
                    {
                      "I am open to internships, entry-level roles, and collaborative projects. Feel free to connect with me via email or LinkedIn."
                    }
                  </p>

                  <div className="flex flex-col gap-3.5">
                    {[
                      "Open to internship opportunities",
                      "Available for collaborative projects",
                      "Eager to learn and adapt quickly",
                      "Passionate about clean, impactful code",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary/20">
                          <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        </div>
                        <span className="text-sm text-primary-foreground/70">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="mailto:your-email@example.com"
                  className="relative mt-10 inline-flex items-center justify-center gap-2.5 rounded-xl bg-secondary px-7 py-4 font-heading text-sm font-semibold text-primary shadow-lg shadow-secondary/25 transition-all duration-300 hover:bg-secondary/90 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5"
                >
                  <Mail size={16} />
                  Send Me an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
