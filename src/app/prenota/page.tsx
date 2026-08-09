import type { Metadata } from "next";
import { Clock, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BookingForm from "@/components/BookingForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prenota — Bloom Nail Bar Rimini",
  description:
    "Prenota il tuo appuntamento da Bloom Nail Bar a Rimini. Scrivici su WhatsApp o compila il modulo di richiesta.",
};

export default function PrenotaPage() {
  return (
    <>
      <PageHeader eyebrow="Prenota" title="Fissiamo un appuntamento.">
        Il modo più veloce è scriverci su WhatsApp. In alternativa,
        compila il modulo qui sotto: ti apriremo automaticamente un
        messaggio già pronto da inviarci.
      </PageHeader>

      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="gloss flex items-center justify-center gap-3 rounded-[2rem] bg-[#25D366] px-6 py-6 text-center text-lg font-bold text-white shadow-[0_16px_36px_rgba(37,211,102,0.35)] transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-6 w-6" />
              Scrivici su WhatsApp
            </a>

            <div className="rounded-[2rem] border-2 border-ink/10 bg-white p-6 shadow-[0_10px_24px_rgba(58,44,54,0.08)]">
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-deep" />
                  <div>
                    <p className="font-semibold text-ink">Indirizzo</p>
                    <a
                      href={site.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-soft hover:text-accent-deep"
                    >
                      {site.address}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-deep" />
                  <div>
                    <p className="font-semibold text-ink">Telefono</p>
                    <a
                      href={`tel:+${site.whatsappNumber}`}
                      className="text-ink-soft hover:text-accent-deep"
                    >
                      {site.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent-deep" />
                  <div className="w-full">
                    <p className="font-semibold text-ink">Orari</p>
                    <div className="mt-1 space-y-1 text-ink-soft">
                      {site.hours.map((h) => (
                        <div key={h.day} className="flex justify-between gap-4">
                          <span>{h.day}</span>
                          <span>{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="mt-0.5 h-5 w-5 shrink-0 fill-gold text-gold" />
                  <div>
                    <p className="font-semibold text-ink">
                      {site.rating.toString().replace(".", ",")} su Google
                    </p>
                    <p className="text-ink-soft">
                      {site.reviewCount} recensioni
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-[2rem] border-2 border-ink/10 shadow-[0_10px_24px_rgba(58,44,54,0.08)]">
              <iframe
                title="Mappa: Bloom Nail Bar, Rimini"
                src={site.mapsEmbedSrc}
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
                style={{ border: 0 }}
              />
            </div>
          </div>

          <BookingForm />
        </div>
      </div>
    </>
  );
}
