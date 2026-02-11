import type { LucideIcon } from "lucide-react"

interface SectionHeadingProps {
  icon: LucideIcon
  label: string
  title: string
  description?: string
}

export function SectionHeading({
  icon: Icon,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center md:mb-16">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-1.5">
        <Icon size={14} className="text-secondary" />
        <span className="font-heading text-xs font-semibold uppercase tracking-widest text-secondary">
          {label}
        </span>
      </div>
      <h2 className="mb-4 font-heading text-3xl font-bold text-primary sm:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
