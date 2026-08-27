interface BrandRingProps {
  className?: string;
}

/**
 * A faint segmented ring, echoing the broken circular border on the
 * Elev8 Co. seal logo. Purely decorative -- keep it out of the a11y tree.
 */
export default function BrandRing({ className }: BrandRingProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={`pointer-events-none text-white ${className ?? ''}`}
    >
      <circle
        cx="100"
        cy="100"
        r="94"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeDasharray="128 16 128 16 128 16"
      />
    </svg>
  );
}
