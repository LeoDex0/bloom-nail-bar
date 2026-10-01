import Link from "next/link";
import { MapPin, MessageCircle, Phone, Sparkle, Star } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream-2/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 font-display text-xl font-semibold italic text-ink">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-blush via-lilac to-mint">
              <Sparkle className="h-4 w-4 text-white" />
            </span>
            Bloom Nail Bar
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            Manicure, pedicure e nail art nel cuore di Rimini. Un salone
            piccolo nei numeri, grande nella cura dei dettagli.
          </p>
          <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-ink">
            <Star className="h-4 w-4 fill-gold text-gold" />
            {site.rating.toString().replace(".", ",")} su Google
            <span className="font-normal text-ink-soft">
              ({site.reviewCount} recensioni)
            </span>
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-ink-soft">
            Naviga
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="text-ink hover:text-accent-deep">Home</Link></li>
            <li><Link href="/servizi" className="text-ink hover:text-accent-deep">Servizi</Link></li>
            <li><Link href="/galleria" className="text-ink hover:text-accent-deep">Galleria</Link></li>
            <li><Link href="/prenota" className="text-ink hover:text-accent-deep">Prenota</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-ink-soft">
            Contatti
          </p>
          <ul className="mt-4 space-y-3 text-sm text-ink">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" />
              <a
                href={site.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-deep"
              >
                {site.address}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent-deep" />
              <a href={`tel:+${site.whatsappNumber}`} className="hover:text-accent-deep">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 shrink-0 text-accent-deep" />
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-accent-deep"
              >
                Scrivici su WhatsApp
              </a>
            </li>
          </ul>
          <div className="mt-5 space-y-1 text-xs text-ink-soft">
            {site.hours.map((h) => (
              <div key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-ink/10 px-5 py-5 text-center text-xs text-ink-soft sm:px-8">
        © {new Date().getFullYear()} Bloom Nail Bar — {site.address}{" · "}<a href="https://leodex.dev/it/" className="underline-offset-2 hover:underline">Sito realizzato da LeoDex</a>
      </div>
    </footer>
  );
}
