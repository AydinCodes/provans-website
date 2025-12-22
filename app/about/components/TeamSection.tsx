'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const team = [
  { name: 'Barry Rosenberg', role: 'Owner', years: '40+ years' },
  { name: 'Jarrod Rosenberg', role: 'Director', years: '20+ years' },
  { name: 'Marnie Rosenberg', role: 'Director', years: '15+ years' },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.team-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#231f20] mb-4 text-center">
          The Rosenberg Family
        </h2>
        <p className="text-gray-600 text-center mb-12">
          100+ years combined experience in timber and hardware
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="team-card bg-white rounded-lg p-6 text-center shadow-sm"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="w-12 h-12 text-gray-400"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M20 21a8 8 0 10-16 0" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#231f20] text-lg">{member.name}</h3>
              <p className="text-[#0061af] text-sm mb-2">{member.role}</p>
              <p className="text-gray-500 text-sm">{member.years}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
