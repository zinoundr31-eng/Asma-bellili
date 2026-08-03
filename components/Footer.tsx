import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 py-16 text-warmwhite md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">Asma Bellili</p>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-warmwhite/60">
              Conseillère et créatrice de contenu immobilier. Un regard
              d&apos;architecte sur les biens d&apos;exception en Algérie.
            </p>
          </div>

          <div className="font-body text-sm text-warmwhite/70">
            <p className="mb-4 uppercase tracking-widest2 text-warmwhite/40">
              Contact
            </p>
            <a
              href="tel:+213557528480"
              className="flex items-center gap-2 py-1 hover:text-gold"
            >
              <Phone size={15} /> +213 557 52 84 80
            </a>
            <a
              href="mailto:asmabellilimmo@gmail.com"
              className="flex items-center gap-2 py-1 hover:text-gold"
            >
              <Mail size={15} /> asmabellilimmo@gmail.com
            </a>
            <a
              href="https://instagram.com/asmabellilimmo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-1 hover:text-gold"
            >
              <Instagram size={15} /> @asmabellilimmo
            </a>
          </div>

          <div className="font-body text-sm text-warmwhite/70">
            <p className="mb-4 uppercase tracking-widest2 text-warmwhite/40">
              Navigation
            </p>
            <ul className="space-y-1">
              <li><Link href="/about" className="hover:text-gold">À propos</Link></li>
              <li><Link href="/listings" className="hover:text-gold">Biens</Link></li>
              <li><Link href="/content" className="hover:text-gold">Journal</Link></li>
              <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-warmwhite/10 pt-6 font-body text-xs text-warmwhite/40 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Asma Bellili Immo. Tous droits réservés.</p>
          <p>Algérie — Immobilier de prestige</p>
        </div>
      </div>
    </footer>
  );
}
