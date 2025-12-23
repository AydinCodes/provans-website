'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CompanyIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      tl.from(taglineRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from(subtextRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')
      .from(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.3')
      .from(descriptionRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power2.out',
      }, '-=0.5');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-[#231f20]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 ref={taglineRef} className="text-2xl md:text-3xl font-bold text-white mb-4">
          Trusted reliable service. Competitive prices.
        </h2>
        <p ref={subtextRef} className="text-lg text-gray-300 mb-12">
          Serving Melbourne since 1903
        </p>
        
        <div ref={imageRef} className="mb-10">
          <img
            src="/images/Provans-illustration-3.webp"
            alt="Provans Services Illustration"
            className="w-full max-w-3xl mx-auto"
          />
        </div>
        
        <h3 ref={descriptionRef} className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
          <strong className="font-bold">Provans Timber & Hardware</strong> are an Independent, Family Owned and Run Timber Yard, Hardware Store and Showroom.
        </h3>
      </div>
    </section>
  );
}
