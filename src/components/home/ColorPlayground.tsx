"use client";

import { useAccent } from "@/context/AccentContext";
import ColorSwatchPicker from "@/components/ColorSwatchPicker";
import ScrollReveal from "@/components/ScrollReveal";
import { getSwatch } from "@/lib/nail-data";

export default function ColorPlayground() {
  const { accentId, setAccentId } = useAccent();
  const swatch = getSwatch(accentId);

  return (
    <section className="relative border-y border-ink/10 bg-cream-2/60 py-20">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <ScrollReveal>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent-deep">
            Prova il colore
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Prima di prenotare, scegli la tonalità.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Tocca uno smalto: l&apos;intera pagina si tinge della tua
            sfumatura preferita e ti mostriamo un lavoro reale in quel
            colore. Un piccolo assaggio di quello che possiamo fare sulle
            tue unghie.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10 flex justify-center">
          <ColorSwatchPicker value={accentId} onChange={setAccentId} />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-8 text-sm font-semibold text-ink-soft">
            Hai selezionato{" "}
            <span className="text-accent-deep">{swatch.name}</span> —{" "}
            {swatch.featureCaption}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
