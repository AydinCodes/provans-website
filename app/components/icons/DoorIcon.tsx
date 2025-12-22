export default function DoorIcon({ className = "w-6 h-6" }: { className?: string }) {
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
      <rect x="4" y="2" width="14" height="20" rx="1" />
      <circle cx="15" cy="12" r="1" />
      <line x1="4" y1="22" x2="20" y2="22" />
    </svg>
  );
}
