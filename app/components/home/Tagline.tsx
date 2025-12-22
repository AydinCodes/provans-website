'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Tagline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Set initial state
    gsap.set(ref.current.querySelectorAll('.tagline-text'), {
      opacity: 0,
      y: 30,
    });

    // Animate to visible state
    gsap.to(ref.current.querySelectorAll('.tagline-text'), {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out',
    });
  }, []);

  return (
    <section ref={ref} className="py-16 bg-[#231f20] text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="tagline-text text-3xl md:text-4xl font-bold mb-4">
          Trusted reliable service. Competitive prices.
        </h2>
        <p className="tagline-text text-lg text-gray-300">
          Serving Melbourne since 1903
        </p>
      </div>
    </section>
  );
}
