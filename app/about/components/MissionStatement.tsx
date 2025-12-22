'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const missionPoints = [
  'Customer service excellence',
  'Courteous and prompt delivery',
  'Quality products at competitive prices',
  'Specialist advice from experienced staff',
  'Adequate stock levels to meet your needs',
];

export default function MissionStatement() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.mission-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#231f20] mb-8 text-center">
          Our Mission
        </h2>
        <p className="text-lg text-gray-600 mb-10 text-center">
          To develop our business by learning from our customers on how to better serve their needs.
        </p>
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="font-semibold text-[#231f20] mb-6">We are committed to:</h3>
          <ul className="space-y-4">
            {missionPoints.map((point, index) => (
              <li key={index} className="mission-item flex items-center gap-3">
                <span className="w-2 h-2 bg-[#0061af] rounded-full flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
