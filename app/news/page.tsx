'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const newsItems = [
  {
    title: 'Summer of Stanley Promotion',
    excerpt: 'Get great deals on Stanley tools this summer. Quality tools for every project.',
    date: 'December 2025',
    slug: 'summer-stanley',
  },
  {
    title: 'Nedd Brockmann Run',
    excerpt: 'Provans proudly supported the Nedd Brockmann run for mental health awareness.',
    date: 'September 2025',
    slug: 'nedd-brockmann',
  },
  {
    title: 'Protective Eyewear Recycling',
    excerpt: 'Join our initiative to recycle protective eyewear and reduce waste.',
    date: 'August 2025',
    slug: 'eyewear-recycling',
  },
  {
    title: 'Paul Retires',
    excerpt: 'After decades of service, we farewell our beloved team member Paul.',
    date: 'July 2025',
    slug: 'paul-retires',
  },
  {
    title: 'Sustainability Event 2025',
    excerpt: 'Our annual sustainability event showcased eco-friendly building solutions.',
    date: 'June 2025',
    slug: 'sustainability-event',
  },
  {
    title: 'Sustainable Builders Alliance',
    excerpt: 'Provans is a proud sponsor of the Sustainable Builders Alliance.',
    date: 'May 2025',
    slug: 'sustainable-builders',
  },
];

export default function NewsPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.news-card', {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 60,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="py-20 px-4 bg-[#231f20]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            News & Tips
          </h1>
          <p className="text-lg text-gray-300">
            Stay up to date with the latest from Provans
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div ref={gridRef} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="news-card group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 text-gray-400">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-lg font-semibold text-[#231f20] mb-2 group-hover:text-[#0061af] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
