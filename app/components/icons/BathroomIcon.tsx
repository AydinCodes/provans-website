export default function BathroomIcon({ className = "w-6 h-6" }: { className?: string }) {
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
      <path d="M4 12h16" />
      <path d="M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6" />
      <path d="M6 12V5a2 2 0 012-2h1" />
      <circle cx="9" cy="3" r="1" />
      <path d="M18 20v2" />
      <path d="M6 20v2" />
    </svg>
  );
}
