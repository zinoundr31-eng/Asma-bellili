import Reveal from "@/components/Reveal";
import PropertyCard, { Property } from "@/components/PropertyCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biens à vendre",
  description:
    "Sélection de villas, appartements et propriétés de prestige en Algérie, accompagnée par Asma Bellili.",
};

const PROPERTIES: Property[] = [
  {
    title: "Villa Panorama",
    location: "Bir El Djir, Oran",
    price: "Sur demande",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Résidence Belvédère",
    location: "Hydra, Alger",
    price: "185 000 000 DA",
    type: "Appartement",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Maison d'Architecte",
    location: "Ain El Turck, Oran",
    price: "Sur demande",
    type: "Villa contemporaine",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Duplex Front de Mer",
    location: "Sidi Fredj, Alger",
    price: "220 000 000 DA",
    type: "Duplex",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Bâtisse Coloniale Restaurée",
    location: "Centre-ville, Oran",
    price: "Sur demande",
    type: "Maison de caractère",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Villa Les Oliviers",
    location: "Chéraga, Alger",
    price: "310 000 000 DA",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Listings() {
  return (
    <main className="pt-32">
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="font-body text-[13px] uppercase tracking-widest2 text-gold">
            Portefeuille
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl leading-tight text-charcoal md:text-6xl">
            Des biens choisis, pas seulement listés.
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ink/60">
            Chaque propriété présentée ici a été visitée et évaluée
            personnellement. Certains biens, hors marché, ne sont
            communiqués que sur demande.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6 pb-32 md:px-10">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-3">
          {PROPERTIES.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.1}>
              <PropertyCard property={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
