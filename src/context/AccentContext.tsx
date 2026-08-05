"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { defaultSwatchId, getSwatch, type SwatchId } from "@/lib/nail-data";

interface AccentContextValue {
  accentId: SwatchId;
  setAccentId: (id: SwatchId) => void;
}

const AccentContext = createContext<AccentContextValue | null>(null);

export function AccentProvider({ children }: { children: ReactNode }) {
  const [accentId, setAccentId] = useState<SwatchId>(defaultSwatchId);
  const swatch = getSwatch(accentId);

  const value = useMemo(() => ({ accentId, setAccentId }), [accentId]);

  return (
    <AccentContext.Provider value={value}>
      <div
        style={
          {
            "--accent": swatch.hex,
            "--accent-deep": swatch.hexDeep,
            "--accent-soft": swatch.hexSoft,
          } as React.CSSProperties
        }
        className="contents"
      >
        {children}
      </div>
    </AccentContext.Provider>
  );
}

export function useAccent() {
  const ctx = useContext(AccentContext);
  if (!ctx) throw new Error("useAccent must be used within AccentProvider");
  return ctx;
}
