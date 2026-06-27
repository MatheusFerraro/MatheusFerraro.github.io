import type { LucideIcon } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface IconLinkProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
  variant?: Variant;
  /** Opens in a new tab with safe rel. Defaults to true for http(s) links. */
  external?: boolean;
  download?: boolean;
  className?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-hover',
  secondary: 'border border-border bg-surface text-fg hover:border-accent hover:text-accent',
  ghost: 'text-muted hover:text-accent',
};

/** A labelled link with a leading lucide icon, styled by variant. Handles
 *  safe external-link attributes so callers don't repeat them. */
export function IconLink({
  href,
  icon: Icon,
  children,
  variant = 'secondary',
  external,
  download,
  className = '',
}: IconLinkProps) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      download={download}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <Icon aria-hidden className="h-4 w-4 shrink-0" />
      <span>{children}</span>
    </a>
  );
}
