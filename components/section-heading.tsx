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
    <div className="mb-14 text-center md:mb-18">
      <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-secondary/20 bg-secondary/5 px-5 py-2">
        <Icon size={14} className="text-secondary" />
        <span className="font-heading text-xs font-semibold uppercase tracking-[0.15em] text-secondary">
          {label}
        </span>
      </div>
      <h2 className="mb-4 font-heading text-3xl font-bold text-primary sm:text-4xl lg:text-[2.75rem] text-balance leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      )}
      <div className="mx-auto mt-6 flex items-center justify-center gap-1.5">
        <span className="h-1 w-1 rounded-full bg-secondary/40" />
        <span className="h-1 w-8 rounded-full bg-secondary" />
        <span className="h-1 w-1 rounded-full bg-secondary/40" />
      </div>
    </div>
  )
}
