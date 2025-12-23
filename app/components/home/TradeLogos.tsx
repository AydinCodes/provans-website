'use client';

const logos = [
  { name: 'Dunlop Trade', image: '/logos/partners/Dunlop-Trade_Logo.png' },
  { name: 'Makita', image: '/logos/partners/Makita.png' },
  { name: 'Stanley Fatmax', image: '/logos/partners/Stanley_Fatmax_Logo_YellowSquare-768x327.png' },
  { name: 'Soudal', image: '/logos/partners/Soudal-1.png' },
  { name: 'Supplies on Site', image: '/logos/partners/Supplies-on-Site-1-440x440.png' },
  { name: 'Hazard Co', image: '/logos/partners/Hazard-co-logo-1-768x408.png' },
];

export default function TradeLogos() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-24">
        <p className="text-[#0061af] font-medium mb-2 uppercase tracking-wider text-sm text-center">Trusted Brands</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#231f20] text-center">
          Our Partners
        </h2>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll">
          {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center justify-center px-8 py-4 min-w-[150px] h-16 flex-shrink-0"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-[5rem] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
