'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function MapPinIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function ClockIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function ContactInfo() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.info-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <h2 className="text-2xl font-bold text-[#231f20] mb-6">Visit Us</h2>
      
      <div className="space-y-6 mb-8">
        <div className="info-item flex items-start gap-4">
          <div className="w-12 h-12 bg-[#0061af] rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPinIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-[#231f20] mb-1">Address</h3>
            <p className="text-gray-600">
              457 Hoddle Street (Cnr Alexandra Pde.)<br />
              Clifton Hill, Victoria 3068
            </p>
            <p className="text-sm text-gray-500 mt-1">Melways 44 D2</p>
          </div>
        </div>

        <div className="info-item flex items-start gap-4">
          <div className="w-12 h-12 bg-[#0061af] rounded-lg flex items-center justify-center flex-shrink-0">
            <PhoneIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-[#231f20] mb-1">Phone</h3>
            <a href="tel:0394898255" className="text-gray-600 hover:text-[#0061af] transition-colors">
              (03) 9489 8255
            </a>
          </div>
        </div>

        <div className="info-item flex items-start gap-4">
          <div className="w-12 h-12 bg-[#0061af] rounded-lg flex items-center justify-center flex-shrink-0">
            <ClockIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-[#231f20] mb-1">Opening Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 6:30am - 5pm<br />
              Saturday: 7am - 4pm (Showroom 8am)
            </p>
          </div>
        </div>
      </div>

      <div className="info-item bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
        <div className="text-center text-gray-500">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12 mx-auto mb-2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p className="text-sm">Map Embed</p>
        </div>
      </div>
    </div>
  );
}
