export default function BuildingIcon({ className = "w-6 h-6" }: { className?: string }) {
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
      <rect x="4" y="8" width="16" height="14" rx="1" />
      <path d="M12 2l8 6H4l8-6z" />
      <rect x="8" y="12" width="3" height="4" />
      <rect x="13" y="12" width="3" height="4" />
      <rect x="10" y="18" width="4" height="4" />
    </svg>
  );
}
