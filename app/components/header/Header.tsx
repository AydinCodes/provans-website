'use client';

import { useState } from 'react';
import Logo from '../Logo';
import NavLink from './NavLink';
import PhoneNumber from './PhoneNumber';
import QuoteButton from './QuoteButton';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#231f20]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-28">
            <Logo />
            
            <nav className="hidden lg:flex items-center gap-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/products">Products</NavLink>
              <NavLink href="/showroom">Showroom</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <PhoneNumber />
              <QuoteButton />
              <img
                src="/mitre-10-logo.png"
                alt="Mitre 10"
                className="w-40 h-auto ml-2"
              />
            </div>

            <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)} />
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
