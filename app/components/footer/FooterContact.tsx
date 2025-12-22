function MapPinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function ClockIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function FooterContact() {
  return (
    <div>
      <h3 className="font-semibold text-white mb-4">Contact Us</h3>
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <MapPinIcon className="w-5 h-5 text-[#0061af] flex-shrink-0 mt-0.5" />
          <span className="text-gray-400 text-sm">
            457 Hoddle Street (Cnr Alexandra Pde.)<br />
            Clifton Hill, Victoria 3068
          </span>
        </li>
        <li className="flex items-center gap-3">
          <PhoneIcon className="w-5 h-5 text-[#0061af] flex-shrink-0" />
          <div className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
            (03) 9489 8255
          </div>
        </li>
        <li className="flex items-start gap-3">
          <ClockIcon className="w-5 h-5 text-[#0061af] flex-shrink-0 mt-0.5" />
          <span className="text-gray-400 text-sm">
            Mon-Fri: 6:30am - 5pm<br />
            Sat: 7am - 4pm (Showroom 8am)
          </span>
        </li>
      </ul>
    </div>
  );
}
