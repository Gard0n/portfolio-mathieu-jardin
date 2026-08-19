export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 12"
      className={className}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M2 8c15-8 25 6 40-2s25 6 40-2 25 6 40-2 25 6 38-1"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
