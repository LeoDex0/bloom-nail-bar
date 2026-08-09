import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { AccentProvider } from "@/context/AccentContext";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bloom Nail Bar — Manicure, Pedicure e Nail Art a Rimini",
  description:
    "Bloom Nail Bar: manicure, pedicure, semipermanente, ricostruzione e nail art su misura a Rimini. Prenota in un messaggio su WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${fraunces.variable} ${nunito.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-cream text-ink antialiased" suppressHydrationWarning>
        <AccentProvider>
          <SmoothScroll>
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFAB />
          </SmoothScroll>
        </AccentProvider>
      </body>
    </html>
  );
}
