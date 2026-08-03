import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PropertyCard, { Property } from "@/components/PropertyCard";
import ReelCard, { Reel } from "@/components/ReelCard";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const FEATURED: Property[] = [
  {
    title: "Villa Panorama",
    location: "Bir El Djir, Oran",
    price: "Sur demande",
    type: "Villa",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Résidence Belvédère",
    location: "Hydra, Alger",
    price: "185 000 000 DA",
    type: "Appartement",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Maison d'Architecte",
    location: "Ain El Turck, Oran",
    price: "Sur demande",
    type: "Villa contemporaine",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
  },
];

const REELS: Reel[] = [
  { title: "Ce qui rend un bien inoubliable", tag: "Move In", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
  { title: "Visite privée — Villa F4", tag: "Reste", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop" },
  { title: "Les questions à poser avant d'acheter", tag: "Conseil", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop" },
  { title: "Une bâtisse coloniale réinventée", tag: "Patrimoine", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop" },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative flex h-[100svh] min-h-[640px] items-end overflow-hidden bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2400&auto=format&fit=crop"
          alt="Villa de prestige en Algérie"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/40" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 md:pb-24">
          <Reveal delay={0.1}>
            <p className="font-body text-[13px] uppercase tracking-widest2 text-gold">
              Conseillère &amp; créatrice de contenu immobilier
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <h1 className="mt-5 max-w-3xl font-display text-[13vw] font-light leading-[0.98] text-warmwhite sm:text-6xl md:text-7xl">
              L&apos;immobilier
              <br />
              <span className="italic text-gold">se raconte</span>,
              <br />
              il ne se vend pas.
            </h1>
          </Reveal>
          <Reveal delay={0.45}>
            <p className="mt-8 max-w-md font-body text-base leading-relaxed text-warmwhite/75">
              Je suis Asma Bellili. J&apos;accompagne mes clients dans
              l&apos;achat et la vente de biens d&apos;exception en Algérie,
              avec un œil formé à l&apos;architecture et une présence
              authentique, du premier échange à la signature.
            </p>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/listings"
                className="border border-warmwhite/80 px-7 py-3 font-body text-[13px] uppercase tracking-widest2 text-warmwhite transition-all duration-300 hover:bg-warmwhite hover:text-charcoal"
              >
                Découvrir les biens
              </Link>
              <Link
                href="/contact"
                className="font-body text-[13px] uppercase tracking-widest2 text-gold underline underline-offset-4 hover:text-goldlight"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 right-6 z-10 hidden animate-bounce text-warmwhite/60 md:block md:right-10">
          <ArrowDown size={20} />
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-beige">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
                  alt="Asma Bellili"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="font-body text-[13px] uppercase tracking-widest2 text-gold">
                À propos
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-5xl">
                Une approche d&apos;architecte,
                <br /> une voix qui lui ressemble.
              </h2>
              <p className="mt-6 font-body text-base leading-relaxed text-ink/70">
                Avant d&apos;être conseillère, je suis passionnée par ce que
                les bâtiments racontent. Sur le terrain comme sur les réseaux,
                je documente le patrimoine, décrypte le marché et accompagne
                chaque client avec la même exigence : trouver le bien qui lui
                correspond vraiment, pas seulement celui qui se vend vite.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 font-body text-[13px] uppercase tracking-widest2 text-charcoal hover:text-gold"
              >
                Mon parcours <ArrowUpRight size={15} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-charcoal/10 bg-sand/60 px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-4">
          {[
            ["11,7 K", "Communauté engagée"],
            ["+120", "Biens accompagnés"],
            ["3", "Villes couvertes"],
            ["100%", "Sur-mesure"],
          ].map(([n, l]) => (
            <Reveal key={l}>
              <p className="font-display text-4xl text-charcoal md:text-5xl">{n}</p>
              <p className="mt-2 font-body text-xs uppercase tracking-widest2 text-ink/50">
                {l}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-body text-[13px] uppercase tracking-widest2 text-gold">
                Sélection
              </p>
              <h2 className="mt-4 font-display text-4xl text-charcoal md:text-5xl">
                Biens à la une
              </h2>
            </div>
            <Link
              href="/listings"
              className="font-body text-[13px] uppercase tracking-widest2 text-charcoal underline underline-offset-4 hover:text-gold"
            >
              Voir tous les biens
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-3">
          {FEATURED.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <PropertyCard property={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTENT / REELS STRIP */}
      <section className="bg-charcoal py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="font-body text-[13px] uppercase tracking-widest2 text-gold">
              Le journal
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl text-warmwhite md:text-5xl">
              L&apos;immobilier vu autrement, épisode après épisode.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 flex gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] snap-x snap-mandatory md:px-10 [&::-webkit-scrollbar]:hidden">
            {REELS.map((r) => (
              <ReelCard key={r.title} reel={r} />
            ))}
          </div>
        </Reveal>

        <div className="mt-10 px-6 md:px-10">
          <Link
            href="/content"
            className="inline-flex items-center gap-2 font-body text-[13px] uppercase tracking-widest2 text-gold hover:text-goldlight"
          >
            Voir tout le contenu <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center md:px-10">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight text-charcoal md:text-5xl">
            Un projet immobilier en tête ?
            <br />
            <span className="italic text-gold">Parlons-en, simplement.</span>
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-block bg-charcoal px-9 py-4 font-body text-[13px] uppercase tracking-widest2 text-warmwhite transition-colors duration-300 hover:bg-gold"
          >
            Prendre rendez-vous
          </Link>
        </Reveal>
      </section>
    </main>
  );
      }
