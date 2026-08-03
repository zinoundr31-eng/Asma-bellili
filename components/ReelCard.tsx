import Image from "next/image";
import { Play } from "lucide-react";

export type Reel = {
  title: string;
  tag: string;
  image: string;
};

export default function ReelCard({
  reel,
  className = "w-[220px] shrink-0 snap-start md:w-[260px]",
}: {
  reel: Reel;
  className?: string;
}) {
  return (
    <div className={`group relative aspect-[9/16] overflow-hidden bg-charcoal ${className}`}>
      <Image
        src={reel.image}
        alt={reel.title}
        fill
        sizes="260px"
        className="object-cover opacity-90 transition-transform duration-700 ease-signature group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />
      <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-warmwhite/50">
        <Play size={14} className="ml-0.5 fill-warmwhite text-warmwhite" />
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <p className="font-body text-[11px] uppercase tracking-widest2 text-gold">
          {reel.tag}
        </p>
        <p className="mt-1 font-display text-lg leading-snug text-warmwhite">
          {reel.title}
        </p>
      </div>
    </div>
  );
}
