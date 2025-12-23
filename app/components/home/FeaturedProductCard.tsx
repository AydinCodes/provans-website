import Image from 'next/image';

interface FeaturedProductCardProps {
  title: string;
  description: string;
  href?: string;
  image?: string;
}

export default function FeaturedProductCard({ title, description, href, image }: FeaturedProductCardProps) {
  return (
    <div
      className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="h-56 relative overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center text-gray-400">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10 mb-2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="text-xs">Add Image</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-[#231f20] mb-2 group-hover:text-[#0061af] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}