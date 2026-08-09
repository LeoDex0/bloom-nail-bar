"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { buildWhatsappLink } from "@/lib/site";

const serviceOptions = [
  "Manicure",
  "Pedicure",
  "Semipermanente",
  "Ricostruzione",
  "Nail Art",
  "Non so ancora, vorrei un consiglio",
];

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const lines = [
      `Ciao! Vorrei prenotare da Bloom Nail Bar.`,
      name && `Nome: ${name}`,
      phone && `Telefono: ${phone}`,
      `Servizio: ${service}`,
      date && `Data preferita: ${date}`,
      message && `Note: ${message}`,
    ].filter(Boolean);

    const link = buildWhatsappLink(lines.join("\n"));
    window.open(link, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const inputClasses =
    "w-full rounded-2xl border-2 border-ink/10 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink-soft/70 outline-none transition-colors focus:border-accent-deep";

  return (
    <form
      onSubmit={handleSubmit}
      className="gloss space-y-4 rounded-[2rem] border-2 border-ink/10 bg-white p-6 shadow-[0_16px_40px_rgba(58,44,54,0.12)] sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">
            Nome
          </span>
          <input
            className={inputClasses}
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Il tuo nome"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">
            Telefono
          </span>
          <input
            className={inputClasses}
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="347 123 4567"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-ink">
          Servizio desiderato
        </span>
        <select
          className={inputClasses}
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-ink">
          Data preferita (facoltativa)
        </span>
        <input
          className={inputClasses}
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Es. sabato mattina, 12 settembre..."
        />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-ink">
          Note (facoltative)
        </span>
        <textarea
          className={`${inputClasses} min-h-24 resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Allergie, colore che hai in mente, richieste particolari..."
        />
      </label>

      <button
        type="submit"
        className="gloss flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(37,211,102,0.3)] transition-transform hover:-translate-y-0.5"
      >
        <Send className="h-4 w-4" />
        Invia la richiesta su WhatsApp
      </button>

      <p className="text-center text-xs text-ink-soft" role="status">
        {sent
          ? "Abbiamo aperto WhatsApp con il tuo messaggio pronto: invialo per completare la richiesta."
          : "Compilando il modulo si aprirà WhatsApp con un messaggio già pronto da inviarci."}
      </p>
    </form>
  );
}
