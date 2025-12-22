export default function BoardIcon({ className = "w-6 h-6" }: { className?: string }) {
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
      <rect x="2" y="4" width="20" height="16" rx="1" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="2" y1="16" x2="22" y2="16" />
      <line x1="8" y1="4" x2="8" y2="10" />
      <line x1="16" y1="10" x2="16" y2="16" />
      <line x1="12" y1="16" x2="12" y2="20" />
    </svg>
  );
}
