'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  'Solid Timber Flooring',
  'Engineered Flooring',
  'Hybrid Flooring',
  'Vinyl Plank',
  'Decking (Millboard, Newtechwood)',
  'Cladding (Thermory, saveBoard)',
  'Mouldings (Tasmanian Oak, Porta Contours)',
  'Doors (Period Style, Contemporary, Entrance)',
  'Door Hardware (Traditional, Contemporary, Cabinet)',
  'Laminex/Easycraft Panels',
  'James Hardie Display',
  'Weathertex Display',
];

export default function ShowroomCategories() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.category-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.4,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#231f20] mb-4 text-center">
          Product Categories on Display
        </h2>
        <p className="text-gray-600 text-center mb-12">
          See and touch our products before you buy
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category}
              className="category-item bg-gray-50 rounded-lg p-4 text-center hover:bg-[#231f20] hover:text-white transition-colors cursor-pointer"
            >
              <span className="text-sm font-medium">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
