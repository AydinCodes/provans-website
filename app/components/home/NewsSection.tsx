'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NewsCard from './NewsCard';

gsap.registerPlugin(ScrollTrigger);

const newsItems = [
  {
    title: 'Summer of Stanley Promotion',
    excerpt: 'Get great deals on Stanley tools this summer. Quality tools for every project.',
    date: 'December 2025',
    href: '/news/summer-stanley',
    image: '/images/featured-news/PROVANS-M10-SFM-Sale-pdf-724x1024.webp',
  },
  {
    title: 'Nedd Brockmann Run',
    excerpt: 'Provans proudly supported the Nedd Brockmann run for mental health awareness.',
    date: 'September 2025',
    href: '/news/nedd-brockmann',
    image: '/images/featured-news/Banner-Nedds-run-1024x512.webp',
  },
  {
    title: 'Protective Eyewear Recycling',
    excerpt: 'Join our initiative to recycle protective eyewear and reduce waste.',
    date: 'August 2025',
    href: '/news/eyewear-recycling',
    image: '/images/featured-news/Protective-eyewear-glasses-recycling-1157x1536.webp',
  },
  {
    title: 'Paul Retires',
    excerpt: 'After decades of service, we farewell our beloved team member Paul.',
    date: 'July 2025',
    href: '/news/paul-retires',
    image: '/images/featured-news/Paul-Calleya-Retirement-1157x1536.webp',
  },
  {
    title: 'Sustainable Builders Alliance',
    excerpt: 'Provans is a proud sponsor of the Sustainable Builders Alliance.',
    date: 'May 2025',
    href: '/news/sustainable-builders',
    image: '/images/featured-news/SBA-logo-1024x394.webp',
  },
];

export default function NewsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.news-card-item');
      
      cards.forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            once: true,
          },
          opacity: 0,
          x: 100,
          scale: 0.95,
          duration: 0.8,
          ease: 'power2.out',
          delay: i * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[#0061af] font-medium mb-2 uppercase tracking-wider text-sm">Latest Updates</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#231f20]">
              News & Events
            </h2>
          </div>
          <div className="text-[#231f20] hover:text-[#0061af] transition-colors inline-flex items-center gap-2 font-medium">
            View All
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="flex gap-6 overflow-x-scroll snap-x snap-mandatory px-4 md:px-8 pb-4 cursor-grab active:cursor-grabbing">
        {newsItems.map((item) => (
          <div
            key={item.title}
            className="news-card-item group flex-shrink-0 w-[400px] md:w-[450px] snap-center"
          >
            <div className="relative h-[533px] md:h-[600px] rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* Portrait image with 3:4 ratio */}
              <div className="relative h-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>
              
              {/* Text content overlaying bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block bg-[#0061af] text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                  {item.date}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base mb-4 line-clamp-2">{item.excerpt}</p>
                
                <div className="inline-flex items-center gap-2 text-white font-semibold">
                  <span className="text-sm">Read More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
