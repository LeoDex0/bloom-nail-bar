export const site = {
  name: "Unique Nail Spa",
  phoneDisplay: "333 106 0639",
  whatsappNumber: "393331060639",
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  whatsappMessageDefault:
    "Ciao! Vorrei prenotare un appuntamento da Unique Nail Spa.",
  address: "Via XX Settembre 1870, 73, Rimini",
  addressShort: "Via XX Settembre 1870, 73 — Rimini",
  mapsQuery: "Via XX Settembre 1870, 73, Rimini",
  get mapsEmbedSrc() {
    return `https://www.google.com/maps?q=${encodeURIComponent(this.mapsQuery)}&output=embed`;
  },
  get mapsLink() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.mapsQuery)}`;
  },
  rating: 4.7,
  reviewCount: 196,
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
