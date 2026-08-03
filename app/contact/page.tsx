import Reveal from "@/components/Reveal";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Prenez rendez-vous avec Asma Bellili pour votre projet immobilier en Algérie.",
};

export default function Contact() {
  return (
    <main className="pt-32">
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="font-body text-[13px] uppercase tracking-widest2 text-gold">
            Contact
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl leading-tight text-charcoal md:text-6xl">
            Parlons de votre projet.
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-16 px-6 pb-32 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <Reveal>
            <div className="space-y-8">
              <div>
                <p className="font-body text-xs uppercase tracking-widest2 text-ink/40">
                  Téléphone / WhatsApp
                </p>
                <a
                  href="tel:+213557528480"
                  className="mt-2 flex items-center gap-2 font-display text-xl text-charcoal hover:text-gold"
                >
                  <Phone size={18} /> +213 557 52 84 80
                </a>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest2 text-ink/40">
                  Email
                </p>
                <a
                  href="mailto:asmabellilimmo@gmail.com"
                  className="mt-2 flex items-center gap-2 font-display text-xl text-charcoal hover:text-gold"
                >
                  <Mail size={18} /> asmabellilimmo@gmail.com
                </a>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest2 text-ink/40">
                  Zone d&apos;intervention
                </p>
                <p className="mt-2 flex items-center gap-2 font-display text-xl text-charcoal">
                  <MapPin size={18} /> Oran · Alger · national sur demande
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <Reveal delay={0.1}>
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="font-body text-xs uppercase tracking-widest2 text-ink/50">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-2 w-full border-b border-charcoal/20 bg-transparent py-2 font-body text-base text-charcoal outline-none transition-colors focus:border-gold"
                  />
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-widest2 text-ink/50">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="mt-2 w-full border-b border-charcoal/20 bg-transparent py-2 font-body text-base text-charcoal outline-none transition-colors focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-xs uppercase tracking-widest2 text-ink/50">
                  Vous souhaitez
                </label>
                <select
                  name="intent"
                  className="mt-2 w-full border-b border-charcoal/20 bg-transparent py-2 font-body text-base text-charcoal outline-none transition-colors focus:border-gold"
                >
                  <option>Visiter un bien</option>
                  <option>Vendre un bien</option>
                  <option>Estimer un bien</option>
                  <option>Autre demande</option>
                </select>
              </div>

              <div>
                <label className="font-body text-xs uppercase tracking-widest2 text-ink/50">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full border-b border-charcoal/20 bg-transparent py-2 font-body text-base text-charcoal outline-none transition-colors focus:border-gold"
                />
              </div>

              <button
                type="submit"
                className="mt-4 bg-charcoal px-9 py-4 font-body text-[13px] uppercase tracking-widest2 text-warmwhite transition-colors duration-300 hover:bg-gold"
              >
                Envoyer la demande
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
