"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { getSwatch, type SwatchId } from "@/lib/nail-data";

export default function FeaturedNailArt({ swatchId }: { swatchId: SwatchId }) {
  const swatch = getSwatch(swatchId);

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        aria-hidden="true"
        className="animate-float-slower absolute -inset-6 -z-10 rounded-[3rem] blur-2xl transition-colors duration-700"
        style={{ background: `color-mix(in srgb, ${swatch.hex} 55%, transparent)` }}
      />
      <div className="gloss relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-4 border-white shadow-[0_24px_60px_rgba(58,44,54,0.28)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={swatch.id}
            initial={{ opacity: 0, scale: 1.06, rotate: -1.5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.97, rotate: 1.5 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={swatch.featureImage}
              alt={swatch.featureAlt}
              fill
              sizes="(max-width: 640px) 90vw, 380px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent p-5 pt-12">
              <p className="font-display text-lg font-semibold italic text-cream">
                {swatch.name}
              </p>
              <p className="text-sm text-cream/90">{swatch.featureCaption}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        key={`badge-${swatch.id}`}
        initial={{ opacity: 0, y: 8, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
        transition={{ duration: 0.35, delay: 0.15 }}
        className="gloss absolute -right-4 -top-4 grid h-20 w-20 place-items-center rounded-full border-4 border-white shadow-[0_10px_24px_rgba(58,44,54,0.25)] sm:-right-6 sm:-top-6 sm:h-24 sm:w-24"
        style={{
          background: `radial-gradient(circle at 32% 28%, color-mix(in srgb, white 55%, ${swatch.hex}) 0%, ${swatch.hex} 45%, ${swatch.hexDeep} 100%)`,
        }}
      >
        <span className="rotate-6 text-center font-display text-[0.7rem] font-bold leading-tight text-ink sm:text-xs">
          Prova
          <br />
          questo
        </span>
      </motion.div>
    </div>
  );
}
