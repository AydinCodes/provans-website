'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FeaturedProductCard from './FeaturedProductCard';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    title: 'Magnum Board™ Flooring',
    description: 'Premium engineered timber flooring with superior durability and stunning natural aesthetics.',
    href: '/products/flooring',
    image: '/images/featured-products/Magnum-Board-Flooring.webp',
  },
  {
    title: 'Wedi® Bathroom Systems',
    description: 'Complete waterproof building systems for bathrooms, wet rooms, and wellness areas.',
    href: '/products/building-materials',
    image: '/images/featured-products/wedi-bathroom-768x336.webp',
  },
  {
    title: 'Done Deck',
    description: 'Easy-to-install modular decking system for beautiful outdoor spaces.',
    href: '/products/decking',
    image: '/images/featured-products/Done-deck-768x768.webp',
  },
  {
    title: 'Highflow Battens',
    description: 'High-performance ventilation battens for cladding and roofing applications.',
    href: '/products/building-materials',
    image: '/images/featured-products/Highwood-Battens-768x512.webp',
  },
  {
    title: 'Hardie™ Oblique™ Cladding',
    description: 'Contemporary fibre cement cladding with a distinctive angular profile.',
    href: '/products/building-materials',
    image: '/images/featured-products/James-Hardie-Oblique-768x633.webp',
  },
  {
    title: 'Passive House Products',
    description: 'Energy-efficient building materials for sustainable construction.',
    href: '/products/building-materials',
    image: '/images/featured-products/proclima-house-768x680.webp',
  },
];

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.featured-card');
      
      cards.forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            once: true,
          },
          opacity: 0,
          y: 60,
          scale: 0.95,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-[#0061af] font-medium mb-2 uppercase tracking-wider text-sm">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#231f20]">
              Featured Products
            </h2>
          </div>
          <div className="text-[#231f20] hover:text-[#0061af] transition-colors mt-4 md:mt-0 inline-flex items-center gap-2 font-medium">
            View All Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.title} className="featured-card">
              <FeaturedProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
