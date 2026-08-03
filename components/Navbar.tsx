"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/about", label: "À propos" },
  { href: "/listings", label: "Biens" },
  { href: "/content", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-signature ${
        scrolled
          ? "bg-warmwhite/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(25,24,21,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className={`font-display text-xl tracking-wide transition-colors ${
            scrolled ? "text-charcoal" : "text-warmwhite"
          }`}
        >
          Asma Bellili
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-body text-[13px] uppercase tracking-widest2 transition-colors hover:text-gold ${
                scrolled ? "text-ink" : "text-warmwhite/90"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`border px-5 py-2 font-body text-[13px] uppercase tracking-widest2 transition-all duration-300 ${
              scrolled
                ? "border-charcoal text-charcoal hover:bg-charcoal hover:text-warmwhite"
                : "border-warmwhite/70 text-warmwhite hover:bg-warmwhite hover:text-charcoal"
            }`}
          >
            Prendre RDV
          </Link>
        </nav>

        <button
          aria-label="Ouvrir le menu"
          className={`md:hidden ${scrolled ? "text-charcoal" : "text-warmwhite"}`}
          onClick={() => setOpen(true)}
        >
          <Menu size={26} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-charcoal px-8 py-6 text-warmwhite">
          <div className="flex items-center justify-between">
            <span className="font-display text-xl">Asma Bellili</span>
            <button aria-label="Fermer le menu" onClick={() => setOpen(false)}>
              <X size={26} />
            </button>
          </div>
          <nav className="mt-16 flex flex-col gap-8">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto border-t border-warmwhite/20 pt-6 font-body text-sm text-warmwhite/70">
            +213 557 52 84 80 · asmabellilimmo@gmail.com
          </div>
        </div>
      )}
    </header>
  );
      }
