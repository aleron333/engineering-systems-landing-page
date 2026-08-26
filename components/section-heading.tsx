import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', className)}>
      {eyebrow ? (
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[0.6875rem] tracking-[0.28em] text-primary uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      <Reveal delay={80}>
        <h2 className="mt-6 text-3xl leading-[1.12] font-semibold tracking-[-0.025em] text-balance sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={150}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">{description}</p>
        </Reveal>
      ) : null}
    </div>
  )
}
