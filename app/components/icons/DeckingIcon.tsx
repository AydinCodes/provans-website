export default function DeckingIcon({ className = "w-6 h-6" }: { className?: string }) {
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
      <path d="M2 8l10-5 10 5" />
      <line x1="2" y1="11" x2="22" y2="11" />
      <line x1="2" y1="14" x2="22" y2="14" />
      <line x1="2" y1="17" x2="22" y2="17" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}
