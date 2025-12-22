'use client';

import { MenuIcon } from '../icons';

interface MobileMenuButtonProps {
  onClick?: () => void;
}

export default function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-2 hover:bg-white/10 rounded-md transition-colors text-white"
    >
      <MenuIcon className="w-6 h-6" />
    </button>
  );
}
