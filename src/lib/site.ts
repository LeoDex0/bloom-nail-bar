export const site = {
  name: "Bloom Nail Bar",
  phoneDisplay: "347 512 8036",
  whatsappNumber: "393475128036",
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  whatsappMessageDefault:
    "Ciao! Vorrei prenotare un appuntamento da Bloom Nail Bar.",
  address: "Rimini, Italia",
  addressShort: "Rimini, Italia",
  mapsQuery: "Rimini, Italia",
  get mapsEmbedSrc() {
    return `https://www.google.com/maps?q=${encodeURIComponent(this.mapsQuery)}&output=embed`;
  },
  get mapsLink() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.mapsQuery)}`;
  },
  rating: 4.8,
  reviewCount: 142,
  hours: [
    { day: "Lunedì", time: "14:00 – 19:00" },
    { day: "Martedì – Venerdì", time: "9:30 – 19:30" },
    { day: "Sabato", time: "9:00 – 18:00" },
    { day: "Domenica", time: "chiuso" },
  ],
};

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
