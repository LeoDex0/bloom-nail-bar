"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { swatches, type SwatchId } from "@/lib/nail-data";

interface ColorSwatchPickerProps {
  value: SwatchId;
  onChange: (id: SwatchId) => void;
  /** Extra option shown first, used as the "show everything" state on /galleria */
  allOption?: { label: string; active: boolean; onSelect: () => void };
  size?: "md" | "lg";
}

export default function ColorSwatchPicker({
  value,
  onChange,
  allOption,
  size = "lg",
}: ColorSwatchPickerProps) {
  const dot = size === "lg" ? "h-14 w-14 sm:h-16 sm:w-16" : "h-11 w-11";

  return (
    <div
      role="radiogroup"
      aria-label="Scegli un colore di smalto"
      className="flex flex-wrap items-center gap-4 sm:gap-5"
    >
      {allOption && (
        <button
          type="button"
          role="radio"
          aria-checked={allOption.active}
          onClick={allOption.onSelect}
          className={clsx(
            dot,
            "relative grid place-items-center rounded-full border-2 text-[0.65rem] font-bold uppercase tracking-wide transition-transform hover:-translate-y-1",
            allOption.active
              ? "border-ink bg-ink text-cream scale-105"
              : "border-ink/20 bg-white text-ink-soft"
          )}
        >
          Tutti
        </button>
      )}

      {swatches.map((swatch) => {
        const active = value === swatch.id;
        return (
          <div key={swatch.id} className="flex flex-col items-center gap-2">
            <button
              type="button"
              role="radio"
              aria-checked={active && !allOption?.active}
              aria-label={swatch.name}
              onClick={() => onChange(swatch.id)}
              className={clsx(
                dot,
                "gloss relative rounded-full shadow-[0_6px_16px_rgba(58,44,54,0.18)] transition-transform duration-300 hover:-translate-y-1.5 hover:scale-110 focus-visible:-translate-y-1.5"
              )}
              style={{
                background: `radial-gradient(circle at 32% 28%, color-mix(in srgb, white 55%, ${swatch.hex}) 0%, ${swatch.hex} 45%, ${swatch.hexDeep} 100%)`,
              }}
            >
              {active && !allOption?.active && (
                <motion.span
                  layoutId="swatch-ring"
                  className="absolute -inset-1.5 rounded-full border-2 border-ink"
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                />
              )}
              <span className="pointer-events-none absolute left-[18%] top-[14%] h-[30%] w-[22%] rounded-full bg-white/70 blur-[2px]" />
            </button>
            <span className="text-[0.7rem] font-semibold text-ink-soft">
              {swatch.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
