export default function FlooringIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="8" height="20" rx="0.5" />
      <rect x="10" y="2" width="6" height="10" rx="0.5" />
      <rect x="10" y="12" width="6" height="10" rx="0.5" />
      <rect x="16" y="2" width="6" height="20" rx="0.5" />
      <line x1="2" y1="12" x2="10" y2="12" />
    </svg>
  );
}
