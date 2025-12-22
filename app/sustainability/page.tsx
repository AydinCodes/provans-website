'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const initiatives = [
  {
    title: 'Sustainable Timber Sourcing',
    description: 'We source timber from certified sustainable forests and suppliers.',
  },
  {
    title: 'Recycling Programs',
    description: 'Protective eyewear recycling and packaging reduction initiatives.',
  },
  {
    title: 'Energy Efficiency',
    description: 'LED lighting and energy-efficient equipment throughout our facility.',
  },
  {
    title: 'Sustainable Builders Alliance',
    description: 'Proud sponsor supporting sustainable building practices.',
  },
  {
    title: 'Eco-Friendly Products',
    description: 'Stocking environmentally friendly building materials and finishes.',
  },
  {
    title: 'Waste Reduction',
    description: 'Minimizing waste through efficient cutting and material management.',
  },
];

export default function SustainabilityPage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.initiative-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="py-20 px-4 bg-green-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Sustainability
          </h1>
          <p className="text-lg text-green-100">
            Our commitment to environmental responsibility
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#231f20] mb-6">
            Building a Sustainable Future
          </h2>
          <p className="text-lg text-gray-600">
            At Provans, we believe in responsible business practices that protect our environment 
            for future generations. We&apos;re committed to reducing our environmental footprint 
            while providing quality products and services.
          </p>
        </div>
      </section>

      <section ref={sectionRef} className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#231f20] mb-12 text-center">
            Our Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((item) => (
              <div
                key={item.title}
                className="initiative-card bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-green-700">
                    <path d="M12 2l8 4v6c0 5.5-3.5 10-8 11-4.5-1-8-5.5-8-11V6l8-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#231f20] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
