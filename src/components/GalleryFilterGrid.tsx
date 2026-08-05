"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ColorSwatchPicker from "@/components/ColorSwatchPicker";
import { useAccent } from "@/context/AccentContext";
import { galleryImages, defaultSwatchId, type SwatchId } from "@/lib/nail-data";

export default function GalleryFilterGrid() {
  const { accentId, setAccentId } = useAccent();
  const [filter, setFilter] = useState<SwatchId | "all">("all");

  const visible =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.colorKey === filter);

  function handleSelect(id: SwatchId) {
    setFilter(id);
    setAccentId(id);
  }

  function handleAll() {
    setFilter("all");
    setAccentId(defaultSwatchId);
  }

  return (
    <div>
      <div className="flex justify-center">
        <ColorSwatchPicker
          value={filter === "all" ? accentId : filter}
          onChange={handleSelect}
          allOption={{ label: "Tutti", active: filter === "all", onSelect: handleAll }}
          size="md"
        />
      </div>

      <p className="mt-6 text-center text-sm text-ink-soft">
        {filter === "all"
          ? `${visible.length} lavori in galleria`
          : `${visible.length} lavori nella tonalità selezionata`}
      </p>

      <motion.div
        layout
        className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-square overflow-hidden rounded-3xl border-4 border-white shadow-[0_10px_24px_rgba(58,44,54,0.12)]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 23vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-cream opacity-0 transition-opacity group-hover:opacity-100">
                {img.label}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
