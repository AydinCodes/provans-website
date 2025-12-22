'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function ShowroomCallout() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.showroom-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-[#231f20]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 showroom-content">
            <div className="inline-flex items-center gap-3 bg-[#0061af] text-white px-4 py-2 rounded-full mb-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0012 0V2z" />
              </svg>
              <span className="font-semibold text-sm">Showroom of the Year 2025</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Visit Our Award-Winning Showroom
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Come explore our extensive product range including flooring, decking, doors, 
              and hardware. Our expert team is ready to help you find the perfect materials 
              for your project.
            </p>
            <Link
              href="/showroom"
              className="inline-block bg-[#0061af] text-white px-8 py-3 rounded-md font-medium hover:bg-[#0580c7] transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="lg:w-1/2">
            <div className="rounded-lg aspect-video overflow-hidden relative">
              <Image
                src="/images/showroom.webp"
                alt="Provans Showroom"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
