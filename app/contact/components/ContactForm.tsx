'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!formRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.form-field', {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.out',
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  return (
    <form ref={formRef} className="space-y-6">
      <h2 className="text-2xl font-bold text-[#231f20] mb-6">Send us a Message</h2>
      
      <div className="form-field">
        <label className="block text-sm font-medium text-[#231f20] mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#0061af]"
        />
      </div>

      <div className="form-field">
        <label className="block text-sm font-medium text-[#231f20] mb-1">
          Company
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#0061af]"
        />
      </div>

      <div className="form-field">
        <label className="block text-sm font-medium text-[#231f20] mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#0061af]"
        />
      </div>

      <div className="form-field">
        <label className="block text-sm font-medium text-[#231f20] mb-1">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#0061af]"
        />
      </div>

      <div className="form-field">
        <label className="block text-sm font-medium text-[#231f20] mb-1">
          Preferred Contact Method
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="contact" value="phone" className="text-[#0061af]" />
            <span className="text-sm">Phone</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="contact" value="email" className="text-[#0061af]" />
            <span className="text-sm">Email</span>
          </label>
        </div>
      </div>

      <div className="form-field">
        <label className="block text-sm font-medium text-[#231f20] mb-1">
          Message
        </label>
        <textarea
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#0061af] resize-none"
        />
      </div>

      <button
        type="submit"
        className="form-field w-full bg-[#231f20] text-white py-3 rounded-md font-medium hover:bg-[#3a3536] transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
