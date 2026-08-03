import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asmabellilimmo.com"),
  title: {
    default: "Asma Bellili — Conseillère Immobilier de Prestige en Algérie",
    template: "%s | Asma Bellili Immo",
  },
  description:
    "Asma Bellili, conseillère et créatrice de contenu immobilier, spécialisée dans les biens d'exception en Algérie. Villas, appartements et propriétés de prestige.",
  keywords: [
    "immobilier de luxe Algérie",
    "agence immobilière prestige",
    "villa à vendre Algérie",
    "conseillère immobilier Algérie",
    "Asma Bellili",
  ],
  openGraph: {
    title: "Asma Bellili — Conseillère Immobilier de Prestige en Algérie",
    description:
      "Un regard d'architecte sur les biens d'exception en Algérie. Découvrez une sélection de propriétés rares, accompagnée d'un service sur-mesure.",
    url: "https://asmabellilimmo.com",
    siteName: "Asma Bellili Immo",
    locale: "fr_DZ",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-warmwhite font-body text-ink antialiased">
        <Navbar />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
