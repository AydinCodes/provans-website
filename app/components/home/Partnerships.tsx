'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Award-Winning Showroom',
    description: 'Explore our extensive range of flooring, decking, doors, and hardware. Our expert team is ready to help you find the perfect materials.',
    href: '/showroom',
    image: '/images/showroom.webp',
    badge: 'Showroom of the Year 2025',
  },
  {
    title: 'Supplies on Site',
    description: 'Convenient delivery service bringing quality materials directly to your worksite. Fast, reliable, and always on time.',
    href: '/about/delivery',
    image: '/logos/partners/Supplies-on-Site-1-440x440.png',
    badge: null,
  },
  {
    title: 'HazardCo Safety',
    description: 'Complete safety management systems for construction sites. Keep your team safe and compliant.',
    href: '/products/safety',
    image: '/logos/partners/Hazard-co-logo-1-768x408.png',
    badge: null,
  },
  {
    title: 'Raw Smith Cafe',
    description: 'On-site café open 7am-2pm weekdays. Great coffee, fresh food, and a friendly atmosphere for tradies.',
    href: '/contact',
    image: '/images/partners/Lumbershack-Cafe-e1592192823445-768x623.webp',
    badge: null,
  },
];

export default function Partnerships() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.discover-card');
      
      cards.forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-[#231f20]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0061af] font-medium mb-2 uppercase tracking-wider text-sm">More Than Just Hardware</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Discover What&apos;s at Provans
          </h2>
        </div>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`discover-card group flex flex-col gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="lg:w-1/2 flex flex-col justify-center">
                {service.badge && (
                  <span className="inline-block bg-[#0061af] text-white text-sm font-semibold px-4 py-2 rounded-full mb-4 w-fit">
                    {service.badge}
                  </span>
                )}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#0061af] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-lg mb-6">{service.description}</p>
                
                <div className="inline-flex items-center gap-2 text-white font-semibold w-fit">
                  <span>Learn More</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
