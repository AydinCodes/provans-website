export default function MouldingIcon({ className = "w-6 h-6" }: { className?: string }) {
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
      <path d="M4 4c0 0 2 2 8 2s8-2 8-2" />
      <path d="M4 8c0 0 2 2 8 2s8-2 8-2" />
      <path d="M4 12c0 0 2 2 8 2s8-2 8-2" />
      <rect x="4" y="16" width="16" height="4" rx="0.5" />
    </svg>
  );
}
