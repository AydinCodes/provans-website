'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CloseIcon } from '../icons';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current || !modalRef.current) return;

    const overlay = overlayRef.current;
    const modal = modalRef.current;
    const fields = modal.querySelectorAll('.form-field');

    if (isOpen) {
      gsap.set(overlay, { display: 'flex' });
      gsap.to(overlay, { opacity: 1, duration: 0.2 });
      gsap.fromTo(
        modal,
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.4)' }
      );
      gsap.fromTo(
        fields,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.3, delay: 0.2 }
      );
    } else {
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => { gsap.set(overlay, { display: 'none' }); },
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 hidden opacity-0 items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div
        ref={modalRef}
        className="relative bg-white rounded-lg shadow-xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-[#231f20]">Request a Quote</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>
        <form className="p-6 space-y-4">
          <div className="form-field">
            <label className="block text-sm font-medium text-[#231f20] mb-1">
              Product Code
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0061af]"
              placeholder="Enter product code"
            />
          </div>
          <div className="form-field">
            <label className="block text-sm font-medium text-[#231f20] mb-1">
              Quantity / Meters
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0061af]"
              placeholder="e.g. 10"
            />
          </div>
          <div className="form-field">
            <label className="block text-sm font-medium text-[#231f20] mb-1">
              Notes
            </label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0061af] resize-none"
              placeholder="Please specify number of pieces and lengths you require. Eg. 10/5.4, 6/3.0"
            />
          </div>
          <p className="form-field text-xs text-gray-500">
            Please specify number of pieces and lengths you require.
          </p>
          <div className="form-field flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-[#231f20] hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-[#231f20] text-white rounded-md hover:bg-[#3a3536] transition-colors"
            >
              Add to Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
