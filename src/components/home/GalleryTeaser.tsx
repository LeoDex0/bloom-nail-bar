import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { galleryImages } from "@/lib/nail-data";

const teaser = ["g4", "g7", "g11", "g15", "g3", "g13"]
  .map((id) => galleryImages.find((g) => g.id === id))
  .filter(Boolean) as typeof galleryImages;

export default function GalleryTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <ScrollReveal className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent-deep">
            Galleria
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Un assaggio dei nostri lavori.
          </h2>
        </div>
        <Link
          href="/galleria"
          className="gloss flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-cream transition-transform hover:-translate-y-0.5"
        >
          Vedi tutta la galleria
          <ArrowRight className="h-4 w-4" />
        </Link>
      </ScrollReveal>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5">
        {teaser.map((img, i) => (
          <ScrollReveal
            key={img.id}
            delay={i * 0.06}
            className={
              i === 0
                ? "col-span-2 row-span-2 sm:col-span-1"
                : undefined
            }
          >
            <div className="group relative aspect-square overflow-hidden rounded-3xl border-4 border-white shadow-[0_10px_24px_rgba(58,44,54,0.12)]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 45vw, 30vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute bottom-2 left-2 text-xs font-semibold text-cream opacity-0 transition-opacity group-hover:opacity-100">
                {img.label}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
