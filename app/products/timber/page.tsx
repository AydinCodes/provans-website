'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const timberProducts = [
  { name: 'Hardwood Timber', description: 'Premium Australian hardwoods for structural and decorative use.' },
  { name: 'Softwood Timber', description: 'Pine and other softwoods for framing and general construction.' },
  { name: 'Dressed Timber', description: 'Smooth finished timber ready for immediate use.' },
  { name: 'Rough Sawn Timber', description: 'Unfinished timber for rustic applications.' },
  { name: 'Treated Pine', description: 'Pressure treated timber for outdoor applications.' },
  { name: 'Specialty Timber', description: 'Unique species for special projects.' },
];

export default function TimberPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    gsap.from(gridRef.current.querySelectorAll('.product-item'), {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, []);

  return (
    <>
      <section className="py-16 px-4 bg-[#231f20]">
        <div className="max-w-4xl mx-auto">
          <Link href="/products" className="text-[#0061af] text-sm hover:underline mb-4 inline-block">
            ← Back to Products
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Timber</h1>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg text-gray-600 mb-12">
            Quality hardwood and softwood timber sourced from sustainable suppliers. 
            Our experienced staff can help you select the right timber for your project.
          </p>
          
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {timberProducts.map((product) => (
              <div
                key={product.name}
                className="product-item bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-[#231f20] text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
