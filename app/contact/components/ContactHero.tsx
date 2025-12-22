'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ContactHero() {
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
    <section ref={ref} className="py-20 px-4 bg-[#231f20]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="hero-text text-[#0061af] text-sm uppercase tracking-wider mb-4">
          Get in Touch
        </p>
        <h1 className="hero-text text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Contact Us
        </h1>
        <p className="hero-text text-lg text-gray-300">
          We&apos;re here to help with all your timber and hardware needs
        </p>
      </div>
    </section>
  );
}
