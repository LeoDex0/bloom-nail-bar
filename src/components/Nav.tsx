"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, Sparkle, X } from "lucide-react";
import clsx from "clsx";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/galleria", label: "Galleria" },
  { href: "/prenota", label: "Prenota" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 font-display text-xl font-semibold italic text-ink"
        >
          <span className="gloss grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-blush via-lilac to-mint shadow-[0_4px_10px_rgba(58,44,54,0.25)]">
            <Sparkle className="h-4 w-4 text-white" strokeWidth={2.5} />
          </span>
          Bloom Nail Bar
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative text-sm font-semibold tracking-wide transition-colors",
                  active ? "text-ink" : "text-ink-soft hover:text-ink"
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[3px] rounded-full bg-accent"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="gloss hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-bold text-cream shadow-[0_8px_18px_rgba(58,44,54,0.3)] transition-transform hover:-translate-y-0.5 sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            Scrivici
          </a>
          <button
            type="button"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-white text-ink md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink/10 bg-cream md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-3 py-2.5 text-base font-semibold text-ink hover:bg-white"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-bold text-cream"
              >
                <MessageCircle className="h-4 w-4" />
                Scrivici su WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
