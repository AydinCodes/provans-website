export default function HammerIcon({ className = "w-6 h-6" }: { className?: string }) {
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
      <path d="M15 12l-8.5 8.5a2.12 2.12 0 01-3-3L12 9" />
      <path d="M17.64 15L22 10.64" />
      <path d="M20.91 11.7l-1.25-1.25a2.12 2.12 0 00-3 0l-1.4 1.4" />
      <path d="M13.04 2.82l-1.4 1.4a2.12 2.12 0 000 3l1.25 1.25" />
      <path d="M8.36 9l5.64-5.64" />
    </svg>
  );
}
