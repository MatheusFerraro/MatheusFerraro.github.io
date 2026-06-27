interface SectionHeadingProps {
  id: string;
  title: string;
  subtitle?: string;
}

/** Consistent section header: an accent eyebrow rule, the title, and an
 *  optional subtitle. Used by every section so headings stay uniform. */
export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <span aria-hidden className="mb-3 block h-1 w-10 rounded-full bg-accent" />
      <h2 id={id} className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
    </div>
  );
}
