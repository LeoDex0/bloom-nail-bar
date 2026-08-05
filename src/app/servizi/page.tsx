import type { Metadata } from "next";
import { Footprints, Gem, Hand, Wand2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ServiceSection from "@/components/ServiceSection";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Servizi e listino prezzi — Unique Nail Spa Rimini",
  description:
    "Manicure, pedicure, nail art, semipermanente e ricostruzione unghie a Rimini. Scopri il listino prezzi di Unique Nail Spa in Via XX Settembre.",
};

export default function ServiziPage() {
  return (
    <>
      <PageHeader eyebrow="Servizi" title="Un trattamento per ogni esigenza.">
        Dalla manicure veloce prima di un weekend alla ricostruzione
        completa: ogni servizio è pensato per durare e stare bene su di
        te. I prezzi partono da un minimo e vengono confermati sul posto
        in base a lunghezza e stato dell&apos;unghia.
      </PageHeader>

      <ServiceSection
        icon={Hand}
        title="Manicure"
        description="Forma, cuticole curate e finish impeccabile. La base di ogni mano ben curata, con o senza colore."
        image="https://images.unsplash.com/photo-1659391542239-9648f307c0b1?q=80&w=1000&auto=format&fit=crop"
        imageAlt="Applicazione di smalto durante una manicure"
        accentBg="bg-blush"
        rows={[
          { name: "Manicure semplice", price: "da €15" },
          { name: "Manicure con smalto classico", price: "da €18" },
          { name: "Manicure con semipermanente", price: "da €25" },
          { name: "Rimozione semipermanente", price: "da €8" },
          {
            name: "Trattamento paraffina mani",
            price: "da €10",
            note: "Idratazione intensiva, consigliata in inverno",
          },
        ]}
      />

      <ServiceSection
        icon={Footprints}
        title="Pedicure"
        description="Un momento di relax per i piedi, tutto l'anno: scrub, massaggio e colore a lunga tenuta."
        image="https://images.unsplash.com/photo-1668237150532-945907c2450d?q=80&w=1000&auto=format&fit=crop"
        imageAlt="Pedicure con smalto blu su piedi in un contesto domestico"
        accentBg="bg-mint"
        reverse
        rows={[
          { name: "Pedicure semplice", price: "da €20" },
          {
            name: "Pedicure completa",
            price: "da €30",
            note: "Con scrub esfoliante e massaggio",
          },
          { name: "Pedicure con smalto semipermanente", price: "da €35" },
          { name: "Rimozione semipermanente piedi", price: "da €8" },
        ]}
      />

      <ServiceSection
        icon={Wand2}
        title="Nail Art"
        description="Dal dettaglio minimal al design più elaborato: la nail art è dove ci divertiamo davvero."
        image="https://images.unsplash.com/photo-1772322586754-34c9e6f5be6f?q=80&w=1000&auto=format&fit=crop"
        imageAlt="Dettaglio di nail art con glitter"
        accentBg="bg-lilac"
        rows={[
          { name: "Nail art (per unghia)", price: "da €2" },
          { name: "French manicure", price: "da €5" },
          { name: "Decorazione 3D o strass (per unghia)", price: "da €3" },
          {
            name: "Baby boomer / ombré",
            price: "da €10",
            note: "Prezzo per mani intere",
          },
        ]}
      />

      <ServiceSection
        icon={Gem}
        title="Semipermanente & Ricostruzione"
        description="Colore che dura settimane e forma su misura, con la tenuta di un lavoro fatto con calma e cura."
        image="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000&auto=format&fit=crop"
        imageAlt="Manicure sotto lampada UV per la ricostruzione unghie"
        accentBg="bg-gold"
        reverse
        rows={[
          { name: "Semipermanente", price: "da €25" },
          { name: "Ricostruzione (gel o acrigel)", price: "da €40" },
          {
            name: "Ricostruzione con nail art inclusa",
            price: "da €48",
          },
          { name: "Rinfresco ricostruzione", price: "da €35" },
          { name: "Rimozione ricostruzione", price: "da €12" },
        ]}
      />

      <div className="mx-auto max-w-3xl px-5 pb-4 text-center text-sm text-ink-soft sm:px-8">
        I prezzi indicati partono da un minimo e possono variare in base
        alla lunghezza, alla forma scelta e allo stato dell&apos;unghia.
        Per un preventivo preciso scrivici su WhatsApp, anche con una
        foto delle tue mani.
      </div>

      <div className="mt-10">
        <CtaBanner />
      </div>
    </>
  );
}
