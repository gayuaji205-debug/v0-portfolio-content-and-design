import { Github, Linkedin, Mail, Heart } from "lucide-react"

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:gayathridevi@example.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="font-heading text-xl font-bold text-primary-foreground tracking-tight"
            >
              {"GD"}
              <span className="text-secondary">.</span>
            </a>
            <p className="mt-1 text-sm text-primary-foreground/50">
              Computer Science Engineering Student
            </p>
          </div>

          {/* Quick Links */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/50 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/50 transition-colors hover:text-secondary"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="flex items-center justify-center gap-1 text-xs text-primary-foreground/40">
            {"Designed & Built with"}
            <Heart size={12} className="text-secondary" />
            {"by Gayathridevi E"}
          </p>
          <p className="mt-1 text-xs text-primary-foreground/30">
            {"© 2026 All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
