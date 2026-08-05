import { MapPin, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Blob from "@/components/Blob";
import { site } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="relative mx-5 mb-20 overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-center sm:mx-8 sm:px-12">
      <Blob className="-left-16 -top-16 h-56 w-56 bg-blush opacity-30" animate="float-slow" />
      <Blob className="-bottom-16 -right-10 h-64 w-64 bg-mint opacity-25" animate="float-slower" />

      <ScrollReveal className="relative mx-auto max-w-xl">
        <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
          Prenota il tuo appuntamento
          <span className="italic text-blush"> oggi stesso.</span>
        </h2>
        <p className="mt-4 text-cream/80">
          Un messaggio su WhatsApp basta per fissare data e servizio.
          Rispondiamo appena possibile.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="gloss flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(37,211,102,0.35)] transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" />
            {site.phoneDisplay}
          </a>
          <a
            href={site.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border-2 border-cream/25 px-6 py-3.5 text-sm font-bold text-cream transition-colors hover:border-cream/60"
          >
            <MapPin className="h-4 w-4" />
            {site.addressShort}
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
