export default function SawIcon({ className = "w-6 h-6" }: { className?: string }) {
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
      <path d="M3 12h4l2-3 2 6 2-6 2 6 2-3h4" />
      <rect x="17" y="8" width="4" height="8" rx="1" />
    </svg>
  );
}
