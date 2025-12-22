export default function PaintIcon({ className = "w-6 h-6" }: { className?: string }) {
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
      <rect x="3" y="3" width="18" height="10" rx="2" />
      <path d="M12 13v4" />
      <rect x="9" y="17" width="6" height="4" rx="1" />
    </svg>
  );
}
