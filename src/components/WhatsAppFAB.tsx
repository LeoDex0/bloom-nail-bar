"use client";

import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsAppFAB() {
  return (
    <a
      href={site.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      className="group fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7"
    >
      <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
      <span className="gloss relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition-transform group-hover:scale-105 sm:h-16 sm:w-16">
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.2} />
      </span>
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-cream opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 hidden sm:block">
        Scrivici su WhatsApp
      </span>
    </a>
  );
}
