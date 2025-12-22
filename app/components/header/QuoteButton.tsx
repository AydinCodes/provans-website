'use client';

import { CartIcon } from '../icons';

interface QuoteButtonProps {
  count?: number;
  onClick?: () => void;
}

export default function QuoteButton({ count = 0, onClick }: QuoteButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-[#231f20] text-white px-4 py-2 rounded-md hover:bg-[#3a3536] transition-colors"
    >
      <CartIcon className="w-5 h-5" />
      <span className="text-sm font-medium whitespace-nowrap">Request a Quote</span>
      {count > 0 && (
        <span className="bg-[#0061af] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
}
