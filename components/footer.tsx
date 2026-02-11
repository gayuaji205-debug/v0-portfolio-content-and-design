import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:gayathridevi@example.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-primary-foreground/10 bg-primary px-6 py-14">
      <div className="mx-auto max-w-6xl">
        {/* Back to top */}
        <div className="mb-10 flex justify-center">
          <a
            href="#"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/40 transition-all duration-300 hover:border-secondary/40 hover:bg-secondary/10 hover:text-secondary hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </a>
        </div>

        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="font-heading text-xl font-bold text-primary-foreground tracking-tight"
            >
              Gayathri
              <span className="text-secondary">.</span>
            </a>
            <p className="mt-1.5 text-sm text-primary-foreground/40">
              Computer Science Engineering Student
            </p>
          </div>

          {/* Quick Links */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/40 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary-foreground/10 text-primary-foreground/40 transition-all hover:border-secondary/30 hover:bg-secondary/10 hover:text-secondary"
                aria-label={link.label}
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="flex items-center justify-center gap-1.5 text-xs text-primary-foreground/30">
            {"Designed & Built with"}
            <Heart size={12} className="text-secondary" />
            {"by Gayathridevi E"}
          </p>
          <p className="mt-1 text-xs text-primary-foreground/20">
            {"© 2026 All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
