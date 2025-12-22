'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { CloseIcon } from '../icons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'News & Tips', href: '/news' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Showroom', href: '/showroom' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Catalogue', href: '/catalogue' },
  { label: 'Contact', href: '/contact' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current || !menuRef.current || !itemsRef.current) return;

    const overlay = overlayRef.current;
    const menu = menuRef.current;
    const items = itemsRef.current.querySelectorAll('.menu-item');

    if (isOpen) {
      gsap.set(overlay, { display: 'block' });
      gsap.to(overlay, { opacity: 1, duration: 0.3 });
      gsap.fromTo(menu, { x: '100%' }, { x: '0%', duration: 0.4, ease: 'power3.out' });
      gsap.fromTo(
        items,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, stagger: 0.05, duration: 0.4, ease: 'power2.out', delay: 0.2 }
      );
    } else {
      gsap.to(overlay, { opacity: 0, duration: 0.3 });
      gsap.to(menu, {
        x: '100%',
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => { gsap.set(overlay, { display: 'none' }); },
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 hidden opacity-0"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div
        ref={menuRef}
        className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <span className="font-semibold text-[#231f20]">Menu</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <nav ref={itemsRef} className="p-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="menu-item block py-3 px-4 text-[#231f20] hover:bg-gray-50 hover:text-[#0061af] rounded-md transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 space-y-3">
          <div className="flex justify-center">
            <img
              src="/mitre-10-logo.png"
              alt="Mitre 10"
              className="w-32 h-auto opacity-80"
            />
          </div>
          <a
            href="tel:0394898255"
            className="block w-full text-center bg-[#231f20] text-white py-3 rounded-md font-medium hover:bg-[#3a3536] transition-colors"
          >
            Call: 03 9489 8255
          </a>
        </div>
      </div>
    </div>
  );
}
