'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ShowroomHero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current.querySelectorAll('.hero-text'), {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out',
    });
  }, []);

  return (
    <section ref={ref} className="py-20 px-4 bg-[#0061af]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="hero-text text-white/80 text-sm uppercase tracking-wider mb-4">
          Award-Winning
        </p>
        <h1 className="hero-text text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Visit Our Showroom
        </h1>
        <p className="hero-text text-lg text-white/90">
          ATFA Showroom of the Year 2025 - Explore our extensive product range
        </p>
      </div>
    </section>
  );
}
