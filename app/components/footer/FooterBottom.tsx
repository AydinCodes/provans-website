// import Link from 'next/link';

export default function FooterBottom() {
  return (
    <div className="border-t border-gray-700 mt-12 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © 2025 Provans Timber & Hardware Pty Ltd. All rights reserved.
        </p>
        <div className="text-gray-500 hover:text-white text-sm transition-colors">
          Privacy Policy
        </div>
      </div>
    </div>
  );
}
