import Reveal from "@/components/Reveal";
import ReelCard, { Reel } from "@/components/ReelCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Conseils, coulisses et visites en vidéo par Asma Bellili — le regard d'une conseillère immobilière sur le marché algérien.",
};

const REELS: Reel[] = [
  { title: "Ce qui rend un bien inoubliable", tag: "Move In", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
  { title: "Visite privée — Villa F4", tag: "Reste", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop" },
  { title: "Les questions à poser avant d'acheter", tag: "Conseil", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop" },
  { title: "Une bâtisse coloniale réinventée", tag: "Patrimoine", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop" },
  { title: "Négocier sans perdre la relation", tag: "Conseil", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" },
  { title: "Dans les coulisses d'une signature", tag: "Move In", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" },
];

export default function ContentPage() {
  return (
    <main className="bg-charcoal pt-32">
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="font-body text-[13px] uppercase tracking-widest2 text-gold">
            Journal vidéo
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl leading-tight text-warmwhite md:text-6xl">
            L&apos;immobilier expliqué, montré, vécu.
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-warmwhite/60">
            Retrouvez les visites, les conseils et les coulisses du métier
            que je partage chaque semaine.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6 pb-32 md:px-10">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
          {REELS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 4) * 0.08} className="w-full">
              <ReelCard reel={r} className="w-full" />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
