import Link from "next/link";
import { Footprints, Gem, Hand, Wand2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Hand,
    title: "Manicure",
    text: "Cura classica delle mani: forma, cuticole e finish impeccabile.",
    price: "da €15",
    bg: "bg-blush",
  },
  {
    icon: Footprints,
    title: "Pedicure",
    text: "Scrub, massaggio e smalto per piedi curati in ogni stagione.",
    price: "da €20",
    bg: "bg-mint",
  },
  {
    icon: Wand2,
    title: "Nail Art",
    text: "Decorazioni su misura, dal minimal ai dettagli più preziosi.",
    price: "da €2 a unghia",
    bg: "bg-lilac",
  },
  {
    icon: Gem,
    title: "Semipermanente & Ricostruzione",
    text: "Colore che dura settimane, forma su misura, tenuta impeccabile.",
    price: "da €25",
    bg: "bg-gold",
  },
];

export default function ServicesHighlight() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <ScrollReveal className="mx-auto max-w-2xl text-center">
        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent-deep">
          I nostri servizi
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Tutto quello che serve alle tue mani (e ai tuoi piedi).
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.08}>
            <Link
              href="/servizi"
              className="gloss group flex h-full flex-col rounded-3xl border-2 border-ink/10 bg-white p-6 shadow-[0_10px_24px_rgba(58,44,54,0.08)] transition-transform hover:-translate-y-1.5 hover:border-ink/20"
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl ${service.bg} text-ink shadow-inner`}
              >
                <service.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                {service.text}
              </p>
              <p className="mt-4 text-sm font-bold text-accent-deep">
                {service.price}
              </p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
