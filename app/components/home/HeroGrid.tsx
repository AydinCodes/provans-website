'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  { title: 'Timber', href: '/products/timber', image: '/images/product-categories/timber.webp' },
  { title: 'Mouldings', href: '/products/mouldings', image: '/images/product-categories/mouldings.webp' },
  { title: 'Decking & Screening', href: '/products/decking', image: '/images/product-categories/decking.webp' },
  { title: 'Building Materials', href: '/products/building-materials', image: '/images/product-categories/building-materials.webp' },
  { title: 'Doors', href: '/products/doors', image: '/images/product-categories/doors.webp' },
  { title: 'Door Furniture', href: '/products/door-furniture', image: '/images/product-categories/door-furniture.webp' },
  { title: 'Showroom', href: '/showroom', image: '/images/product-categories/flooring.webp' },
  { title: 'Tools', href: '/products/tools', image: '/images/product-categories/tools.webp' },
  { title: 'Hardware', href: '/products/hardware', image: '/images/product-categories/bolts.webp' },
  { title: 'Paint', href: '/products/paint', image: '/images/product-categories/paint.webp' },
  { title: 'Safety Gear', href: '/products/safety', image: '/images/product-categories/safety.webp' },
  { title: 'Flooring', href: '/products/flooring', image: '/images/product-categories/custom-cutting.webp' },
];

export default function HeroGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !subtitleRef.current) return;

    const ctx = gsap.context(() => {
      // Animate header
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      });
      
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.2,
        ease: 'power2.out',
      });

      // Animate product cards with scroll trigger
      const cards = gsap.utils.toArray('.product-card');
      
      cards.forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            once: true,
          },
          opacity: 0,
          y: 60,
          scale: 0.9,
          rotation: i % 2 === 0 ? -2 : 2,
          duration: 0.8,
          ease: 'power3.out',
        });
        
        // Parallax effect on scroll
        gsap.to(card.querySelector('.product-image'), {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
          y: -30,
          ease: 'none',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p ref={subtitleRef} className="text-[#0061af] font-medium mb-3 uppercase tracking-wider text-sm">Browse Categories</p>
          <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold text-[#231f20]">
            Explore Our Products
          </h2>
        </div>
        
        {/* Masonry-inspired flexible layout */}
        <div className="flex flex-wrap gap-4">
          {products.map((product, index) => {
            // Define varied sizes for visual interest
            const sizes = [
              'w-full md:w-[calc(66.666%-8px)] h-[400px]', // Large - Timber
              'w-full md:w-[calc(33.333%-8px)] h-[400px]', // Tall - Mouldings
              'w-full md:w-[calc(33.333%-8px)] h-[300px]', // Medium
              'w-full md:w-[calc(33.333%-8px)] h-[300px]', // Medium
              'w-full md:w-[calc(33.333%-8px)] h-[300px]', // Medium
              'w-full md:w-[calc(50%-8px)] h-[350px]',     // Wide
              'w-full md:w-[calc(50%-8px)] h-[350px]',     // Wide
              'w-full md:w-[calc(33.333%-8px)] h-[280px]', // Small
              'w-full md:w-[calc(33.333%-8px)] h-[280px]', // Small
              'w-full md:w-[calc(33.333%-8px)] h-[280px]', // Small
              'w-full md:w-[calc(50%-8px)] h-[320px]',     // Wide
              'w-full md:w-[calc(50%-8px)] h-[320px]',     // Wide
            ];
            
            return (
              <div
                key={product.title}
                className={`product-card group relative ${sizes[index]} rounded-2xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500`}
              >
                <div className="product-image absolute inset-0">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className={`font-bold text-white mb-2 ${
                    index === 0 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                  }`}>
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">Browse</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Border accent */}
                <div className="absolute inset-0 border-2 border-[#0061af] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}