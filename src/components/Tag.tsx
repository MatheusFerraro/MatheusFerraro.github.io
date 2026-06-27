interface TagProps {
  children: React.ReactNode;
}

/** Small, neutral pill used for tech-stack tags. */
export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-bg px-2.5 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}
