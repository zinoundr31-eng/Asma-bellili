import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Le parcours d'Asma Bellili, conseillère et créatrice de contenu immobilier spécialisée dans les biens de prestige en Algérie.",
};

const VALUES = [
  {
    title: "Regard d'architecte",
    text: "Une lecture technique des volumes, de la lumière et du bâti — au-delà de la simple annonce.",
  },
  {
    title: "Transparence totale",
    text: "Chaque prix, chaque étape, chaque document expliqué clairement, du premier contact à la signature.",
  },
  {
    title: "Présence réelle",
    text: "Sur le terrain comme à l'écran, la même personne, la même exigence, la même écoute.",
  },
];

export default function About() {
  return (
    <main className="pt-32">
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="font-body text-[13px] uppercase tracking-widest2 text-gold">
            À propos
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl leading-tight text-charcoal md:text-6xl">
            L&apos;immobilier comme je le vis vraiment.
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden bg-beige">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop"
                alt="Asma Bellili sur le terrain"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center gap-6 md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="font-body text-lg leading-relaxed text-ink/75">
              Je m&apos;appelle Asma Bellili. Mon parcours a commencé loin des
              agences classiques : par une curiosité pour les bâtiments,
              leur histoire, et la manière dont ils façonnent une vie.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-lg leading-relaxed text-ink/75">
              Aujourd&apos;hui, j&apos;accompagne des particuliers et des
              investisseurs dans l&apos;achat et la vente de biens
              d&apos;exception à travers l&apos;Algérie — villas, appartements
              haut de gamme, bâtisses de caractère. En parallèle, je partage
              en vidéo les coulisses du métier : ce que peu de gens expliquent
              vraiment sur l&apos;immobilier.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-lg leading-relaxed text-ink/75">
              Ce double regard — technique et humain — est ce qui distingue
              chaque accompagnement que je propose.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-7xl px-6 pb-32 md:px-10">
        <Reveal>
          <p className="font-body text-[13px] uppercase tracking-widest2 text-gold">
            Ma méthode
          </p>
        </Reveal>
        <div className="mt-8 grid gap-x-8 gap-y-14 border-t border-charcoal/10 pt-14 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.12}>
              <p className="font-display text-2xl text-charcoal">{v.title}</p>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/60">
                {v.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
