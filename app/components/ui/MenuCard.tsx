import Image from "next/image";
import Aspect from "./Aspect";

type MenuCardProps = {
  name: string;
  imageUrl: string;
  calories?: string;
  tag?: string; // e.g., "POPULAR"
  price?: string;
  category?: string;
  description?: string;
};

export default function MenuCard({ name, imageUrl, calories, tag, price, category, description }: MenuCardProps) {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
      <Aspect ratio={16/9} className="bg-neutral-100">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center"
          loading="lazy"
        />
        {tag && (
          <span className="absolute left-3 top-3 rounded-full bg-rose-600/95 px-2.5 py-1 text-xs font-semibold text-white">
            {tag}
          </span>
        )}
      </Aspect>

      <div className="flex h-full flex-col p-3 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-sm sm:text-base font-semibold leading-snug line-clamp-2">
            {name}
          </h4>
          {price && (
            <span className="shrink-0 text-xs sm:text-sm font-bold text-emerald-700">
              ${price}
            </span>
          )}
        </div>
        {category && (
          <div className="mt-1 text-xs text-amber-700 line-clamp-1">
            {category}
          </div>
        )}
        {description && (
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-600 line-clamp-1 sm:line-clamp-2">
            {description}
          </p>
        )}
        {calories && (
          <div className="mt-auto pt-1 sm:pt-2 text-xs text-neutral-500">
            {calories} cal
          </div>
        )}
      </div>
    </div>
  );
}
