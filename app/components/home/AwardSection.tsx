'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function TrophyIcon({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0012 0V2z" />
    </svg>
  );
}

export default function AwardSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      });

      tl.from('.trophy-icon', {
        opacity: 0,
        scale: 0.8,
        rotationY: -15,
        duration: 1,
        ease: 'back.out(1.7)',
      }).from(
        '.award-text',
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.15,
        },
        '-=0.4'
      );

      gsap.to(shineRef.current, {
        x: '200%',
        duration: 1.5,
        ease: 'power2.inOut',
        repeat: -1,
        repeatDelay: 3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-[#0061af]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="relative trophy-icon text-white flex-shrink-0">
          <TrophyIcon className="w-24 h-24 md:w-32 md:h-32" />
        </div>
        <div className="text-center md:text-left">
          <p className="award-text text-white/90 text-sm uppercase tracking-wider mb-2">
            ATFA Excellence Award
          </p>
          <h2 className="award-text text-2xl md:text-3xl font-bold text-white mb-3">
            Showroom of the Year 2025
          </h2>
          <p className="award-text text-white/90 text-lg">
            Recognised for excellence in timber and flooring display
          </p>
        </div>
      </div>
    </section>
  );
}
