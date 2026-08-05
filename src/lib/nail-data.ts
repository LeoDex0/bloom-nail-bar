// Central data for the signature color-swatch interaction: each polish shade
// carries the accent colors it should paint across the UI, plus the real
// nail-art photo it swaps in when selected. Reused on the homepage (accent +
// featured look) and on /galleria (as a working color filter).

export type SwatchId =
  | "blush"
  | "fucsia"
  | "lilla"
  | "menta"
  | "nude"
  | "glam";

export interface Swatch {
  id: SwatchId;
  name: string;
  hex: string;
  hexDeep: string;
  hexSoft: string;
  featureImage: string;
  featureAlt: string;
  featureCaption: string;
}

export const swatches: Swatch[] = [
  {
    id: "blush",
    name: "Rosa Cipria",
    hex: "#F2AFC2",
    hexDeep: "#E27D98",
    hexSoft: "#FBE4EA",
    featureImage:
      "https://images.unsplash.com/photo-1604902396830-aca29e19b067?q=80&w=1200&auto=format&fit=crop",
    featureAlt: "Manicure rosa cipria opaca su sfondo rosa",
    featureCaption: "Delicata, pulita, perfetta ogni giorno.",
  },
  {
    id: "fucsia",
    name: "Fucsia Pop",
    hex: "#EC5C8C",
    hexDeep: "#C43A69",
    hexSoft: "#FBDCE6",
    featureImage:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop",
    featureAlt: "Applicazione di smalto fucsia brillante sulle unghie",
    featureCaption: "Un colore che si fa notare, senza esagerare.",
  },
  {
    id: "lilla",
    name: "Lilla Wisteria",
    hex: "#B79BD9",
    hexDeep: "#8C6BB8",
    hexSoft: "#EBE1F7",
    featureImage:
      "https://images.unsplash.com/photo-1597999709389-e29dc41e218a?q=80&w=1200&auto=format&fit=crop",
    featureAlt: "Manicure lilla pastello su mani intrecciate",
    featureCaption: "Morbido, romantico, di gran classe.",
  },
  {
    id: "menta",
    name: "Verde Menta",
    hex: "#86C9AC",
    hexDeep: "#5AA684",
    hexSoft: "#DBF0E6",
    featureImage:
      "https://images.unsplash.com/photo-1708036632171-ffff12627ffc?q=80&w=1200&auto=format&fit=crop",
    featureAlt: "Manicure verde menta contro il cielo",
    featureCaption: "Frizzante come una giornata di primavera.",
  },
  {
    id: "nude",
    name: "Nude Cappuccino",
    hex: "#D8AE84",
    hexDeep: "#B9895E",
    hexSoft: "#F3E5D3",
    featureImage:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=1200&auto=format&fit=crop",
    featureAlt: "Manicure nude cappuccino su pelliccia bianca",
    featureCaption: "Il jolly che sta bene con tutto.",
  },
  {
    id: "glam",
    name: "Nero Glam",
    hex: "#3A3238",
    hexDeep: "#1E1A1E",
    hexSoft: "#E7D9C4",
    featureImage:
      "https://images.unsplash.com/photo-1777288390469-828f8816231c?q=80&w=1200&auto=format&fit=crop",
    featureAlt: "Nail art animalier nero e oro",
    featureCaption: "Per chi non passa mai inosservata.",
  },
];

export const defaultSwatchId: SwatchId = "blush";

export function getSwatch(id: SwatchId): Swatch {
  return swatches.find((s) => s.id === id) ?? swatches[0];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  colorKey: SwatchId;
  label: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?q=80&w=900&auto=format&fit=crop",
    alt: "Manicure rosa cipria opaca su sfondo rosa",
    colorKey: "blush",
    label: "Rosa cipria opaco",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1754799670410-b282791342c3?q=80&w=900&auto=format&fit=crop",
    alt: "Unghie bianche con cuoricini rosa dipinti a mano",
    colorKey: "blush",
    label: "Cuoricini dipinti a mano",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1769687209448-025548dfca8b?q=80&w=900&auto=format&fit=crop",
    alt: "Nail art rosa perlata con micro perline dorate",
    colorKey: "blush",
    label: "Perlato con micro perline",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=900&auto=format&fit=crop",
    alt: "Applicazione di smalto fucsia brillante",
    colorKey: "fucsia",
    label: "Fucsia lucido",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=900&auto=format&fit=crop",
    alt: "Nail art rossa lucida con scritta decorativa",
    colorKey: "fucsia",
    label: "Rosso lucido con scritta",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1777287852750-53eb2ca506e9?q=80&w=900&auto=format&fit=crop",
    alt: "Unghie stiletto rosse e bianche con strass",
    colorKey: "fucsia",
    label: "Stiletto con strass",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1597999709389-e29dc41e218a?q=80&w=900&auto=format&fit=crop",
    alt: "Manicure lilla pastello su mani intrecciate",
    colorKey: "lilla",
    label: "Lilla pastello",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1743617206507-447c78118622?q=80&w=900&auto=format&fit=crop",
    alt: "Unghie a stiletto viola lucido tra il verde",
    colorKey: "lilla",
    label: "Viola lucido a stiletto",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1772322586785-3a34772cbc61?q=80&w=900&auto=format&fit=crop",
    alt: "Unghie bianche con punta glitter viola marmorizzata",
    colorKey: "lilla",
    label: "French glitter marmorizzato",
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1772322586754-34c9e6f5be6f?q=80&w=900&auto=format&fit=crop",
    alt: "Dettaglio di unghia con glitter viola e bianco",
    colorKey: "lilla",
    label: "Dettaglio glitter",
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1708036632171-ffff12627ffc?q=80&w=900&auto=format&fit=crop",
    alt: "Manicure verde salvia contro il cielo",
    colorKey: "menta",
    label: "Verde salvia",
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1584566006505-8923576e70d4?q=80&w=900&auto=format&fit=crop",
    alt: "Unghie verde smeraldo lucido con anelli",
    colorKey: "menta",
    label: "Verde smeraldo lucido",
  },
  {
    id: "g13",
    src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=900&auto=format&fit=crop",
    alt: "Manicure nude cappuccino su pelliccia bianca",
    colorKey: "nude",
    label: "Nude cappuccino",
  },
  {
    id: "g14",
    src: "https://images.unsplash.com/photo-1688583417757-9060cba25399?q=80&w=900&auto=format&fit=crop",
    alt: "Mano con manicure multicolore pastello",
    colorKey: "nude",
    label: "Mix pastello su base nude",
  },
  {
    id: "g15",
    src: "https://images.unsplash.com/photo-1777288390469-828f8816231c?q=80&w=900&auto=format&fit=crop",
    alt: "Nail art animalier nero e oro",
    colorKey: "glam",
    label: "Animalier nero e oro",
  },
  {
    id: "g16",
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=900&auto=format&fit=crop",
    alt: "Unghie nere lucide con effetto tartaruga",
    colorKey: "glam",
    label: "Nero con effetto tartaruga",
  },
];
