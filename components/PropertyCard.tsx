import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export type Property = {
  title: string;
  location: string;
  price: string;
  type: string;
  image: string;
};

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <a href="/contact" className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-beige">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[1200ms] ease-signature group-hover:scale-[1.06]"
        />
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-warmwhite/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight size={18} className="text-charcoal" />
        </div>
        <span className="absolute left-4 top-4 bg-charcoal/85 px-3 py-1 font-body text-[11px] uppercase tracking-widest2 text-warmwhite">
          {property.type}
        </span>
      </div>
      <div className="mt-4">
        <p className="font-display text-xl text-charcoal">{property.title}</p>
        <p className="mt-1 font-body text-sm text-ink/60">{property.location}</p>
        <p className="mt-2 font-body text-sm tracking-wide text-gold">{property.price}</p>
      </div>
    </a>
  );
}
