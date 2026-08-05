import type { ReactNode } from "react";
import Blob from "@/components/Blob";

export default function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <Blob className="-left-20 -top-16 h-56 w-56 bg-blush opacity-50" animate="float-slow" />
      <Blob className="right-[-3rem] top-8 h-48 w-48 bg-mint opacity-50" animate="float-slower" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent-deep">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {children && (
          <div className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
