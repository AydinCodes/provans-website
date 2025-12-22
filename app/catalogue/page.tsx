'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function CataloguePage() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current.querySelectorAll('.catalogue-item'), {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, []);

  return (
    <>
      <section className="py-20 px-4 bg-[#231f20]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Catalogue
          </h1>
          <p className="text-lg text-gray-300">
            Browse our product catalogues and brochures
          </p>
        </div>
      </section>

      <section ref={ref} className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Mitre 10 Main Catalogue',
              'Timber & Mouldings',
              'Flooring Collection',
              'Decking & Outdoor',
              'Doors & Hardware',
              'Paint & Finishes',
            ].map((catalogue) => (
              <div
                key={catalogue}
                className="catalogue-item bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/4] bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 text-gray-400">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#231f20] mb-2">{catalogue}</h3>
                <Link
                  href="#"
                  className="text-sm text-[#0061af] hover:underline"
                >
                  View Catalogue →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
