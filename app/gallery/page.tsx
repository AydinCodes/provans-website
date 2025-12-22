'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GalleryPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.gallery-item', {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 1.1,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="py-20 px-4 bg-[#231f20]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Gallery
          </h1>
          <p className="text-lg text-gray-300">
            Explore our showroom, products, and completed projects
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div ref={gridRef} className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="gallery-item aspect-square bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12 text-gray-400">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
