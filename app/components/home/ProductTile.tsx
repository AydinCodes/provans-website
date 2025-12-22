import Link from 'next/link';

interface ProductTileProps {
  title: string;
  href: string;
  image?: string;
}

export default function ProductTile({ title, href, image }: ProductTileProps) {
  return (
    <Link
      href={href}
      className="group relative rounded-xl overflow-hidden aspect-square bg-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#231f20]/90 via-[#231f20]/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
      <div className="absolute inset-0 flex items-end p-4">
        <div className="w-full">
          <h3 className="text-sm md:text-base font-bold text-white drop-shadow-2xl group-hover:text-[#0061af] transition-colors duration-300">
            {title}
          </h3>
          <div className="h-0.5 w-0 bg-[#0061af] group-hover:w-full transition-all duration-500 mt-1" />
        </div>
      </div>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 rounded-full bg-[#0061af] flex items-center justify-center shadow-lg">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
