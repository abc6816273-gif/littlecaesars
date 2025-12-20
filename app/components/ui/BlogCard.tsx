import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  title: string;
  excerpt?: string;
  imageUrl: string;
  href: string;
  category?: string;
  date?: string;
  featured?: boolean;
};

// CLEAN BLOG CARDS: ${new Date().toISOString()}
export default function BlogCard({ title, excerpt, imageUrl, href, category, date, featured = false }: BlogCardProps) {
  return (
    <article className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
      <Link href={href} className="block">
        <div className="aspect-[16/9] relative overflow-hidden bg-gray-50">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="p-4">
        {category && (
          <span className="inline-block bg-red-50 text-red-600 text-xs font-medium px-2 py-1 rounded-md mb-2">
            {category}
          </span>
        )}
        
        <Link href={href} className="block">
          <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-red-600 transition-colors">
            {title}
          </h3>
        </Link>
        
        {excerpt && (
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
            {excerpt}
          </p>
        )}
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{date}</span>
          <span className="group-hover:text-red-600 transition-colors">Read →</span>
        </div>
      </div>
    </article>
  );
}
