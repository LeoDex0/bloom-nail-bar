import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PriceTable, { type PriceRow } from "@/components/PriceTable";
import type { LucideIcon } from "lucide-react";

interface ServiceSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  rows: PriceRow[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  accentBg: string;
}

export default function ServiceSection({
  icon: Icon,
  title,
  description,
  rows,
  image,
  imageAlt,
  reverse,
  accentBg,
}: ServiceSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <ScrollReveal className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_16px_40px_rgba(58,44,54,0.16)]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 90vw, 480px"
            className="object-cover"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <span
            className={`grid h-12 w-12 place-items-center rounded-2xl ${accentBg} text-ink`}
          >
            <Icon className="h-6 w-6" strokeWidth={2} />
          </span>
          <h2 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-md text-ink-soft">{description}</p>
          <div className="mt-6">
            <PriceTable rows={rows} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
