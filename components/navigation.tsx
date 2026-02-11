"use client"

import { useState, useEffect } from "react"
import { Menu, X, Download } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      )
      const scrollPos = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && (section as HTMLElement).offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].href)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/80 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="group flex items-center gap-1 font-heading text-xl font-bold tracking-tight"
        >
          <span className={isScrolled ? "text-primary" : "text-primary-foreground"}>
            Gayathri
          </span>
          <span className="text-secondary transition-transform duration-300 group-hover:scale-110">
            .
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-lg px-3.5 py-2 font-heading text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href
                    ? "text-secondary"
                    : isScrolled
                      ? "text-muted-foreground hover:text-secondary hover:bg-secondary/5"
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute bottom-0.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-secondary" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`hidden items-center gap-2 rounded-lg px-4 py-2 font-heading text-sm font-semibold transition-all duration-300 md:inline-flex ${
            isScrolled
              ? "bg-secondary text-accent-foreground hover:bg-secondary/90 shadow-md shadow-secondary/20"
              : "bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/20"
          }`}
        >
          <Download size={14} />
          Resume
        </a>

        {/* Mobile Toggle */}
        <button
          type="button"
          className={`md:hidden transition-colors ${isScrolled ? "text-primary" : "text-primary-foreground"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border/50 bg-card/95 backdrop-blur-xl">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 font-heading text-sm font-medium transition-all ${
                    activeSection === link.href
                      ? "bg-secondary/10 text-secondary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      activeSection === link.href
                        ? "bg-secondary"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
