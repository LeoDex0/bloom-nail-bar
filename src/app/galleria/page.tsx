import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryFilterGrid from "@/components/GalleryFilterGrid";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Galleria nail art — Unique Nail Spa Rimini",
  description:
    "Sfoglia la galleria di manicure e nail art di Unique Nail Spa, filtrata per tonalità: rosa cipria, fucsia, lilla, menta, nude e nero glam.",
};

export default function GalleriaPage() {
  return (
    <>
      <PageHeader eyebrow="Galleria" title="Sfoglia i lavori per tonalità.">
        Tocca uno smalto per filtrare la galleria e vedere solo i lavori
        in quella sfumatura: lo stesso gesto che usi nella home per
        scegliere il tuo colore.
      </PageHeader>

      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <GalleryFilterGrid />
      </div>

      <CtaBanner />
    </>
  );
}
