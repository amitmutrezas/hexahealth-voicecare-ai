import type { ReactNode } from "react";

export function TechnologyCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-7">
      <h3 className="text-xl font-semibold tracking-[-0.03em]">{title}</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <div className="mt-7 flex-1">{children}</div>
    </article>
  );
}
