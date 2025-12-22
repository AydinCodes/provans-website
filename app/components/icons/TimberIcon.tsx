export default function TimberIcon({ className = "w-6 h-6" }: { className?: string }) {
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
      <rect x="3" y="4" width="18" height="4" rx="0.5" />
      <rect x="3" y="10" width="18" height="4" rx="0.5" />
      <rect x="3" y="16" width="18" height="4" rx="0.5" />
      <line x1="7" y1="4" x2="7" y2="8" />
      <line x1="12" y1="10" x2="12" y2="14" />
      <line x1="17" y1="16" x2="17" y2="20" />
    </svg>
  );
}
