import Link from 'next/link';
import Image from 'next/image';

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  href: string;
  image?: string;
}

export default function NewsCard({ title, excerpt, date, href, image }: NewsCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    >
      <div className="h-64 relative overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center text-gray-400">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="w-12 h-12 mb-2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="text-xs">Add Image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#231f20]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6 relative">
        <div className="absolute top-0 left-6 -mt-4 bg-[#0061af] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
          {date}
        </div>
        <h3 className="text-lg font-bold text-[#231f20] mb-3 mt-2 group-hover:text-[#0061af] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{excerpt}</p>
        <span className="text-sm font-semibold text-[#0061af] opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1">
          Read More
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
