"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { useAccent } from "@/context/AccentContext";
import FeaturedNailArt from "@/components/FeaturedNailArt";
import Blob from "@/components/Blob";
import { site } from "@/lib/site";

export default function Hero() {
  const { accentId } = useAccent();

  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20">
      <Blob
        className="-left-24 -top-20 h-72 w-72 bg-blush opacity-60"
        animate="float-slow"
      />
      <Blob
        className="right-[-4rem] top-40 h-64 w-64 bg-mint opacity-60"
        animate="float-slower"
      />
      <Blob
        className="bottom-0 left-1/3 h-56 w-56 bg-lilac opacity-60"
        animate="float-slow"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ink-soft shadow-sm">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            {site.rating.toString().replace(".", ",")} su Google · {site.reviewCount} recensioni
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            Le tue mani meritano
            <br />
            <span className="italic text-accent-deep">un colore tutto loro.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
            Manicure, pedicure, semipermanente e nail art su misura nel
            cuore di Rimini. Scegli il colore, scrivici su WhatsApp: al
            resto pensiamo noi.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="gloss flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-cream shadow-[0_12px_28px_rgba(58,44,54,0.35)] transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Scrivici su WhatsApp
            </a>
            <Link
              href="/servizi"
              className="flex items-center gap-2 rounded-full border-2 border-ink/15 bg-white px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:border-accent-deep hover:text-accent-deep"
            >
              Scopri i servizi
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-6 text-sm text-ink-soft">
            Via XX Settembre 1870, 73 — Rimini
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <FeaturedNailArt swatchId={accentId} />
        </motion.div>
      </div>
    </section>
  );
}
