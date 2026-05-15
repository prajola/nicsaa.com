/**
 * Nicsaa brand mark.
 *
 * Visual idea: an angular gradient-stroked "N" sitting inside a soft
 * orbital ring, with a pulsing node at the upper-right vertex to suggest
 * autonomous-AI activity. The mark is fully self-contained SVG — no
 * runtime fonts, no raster fallbacks — so it stays crisp at every size
 * from a 16px favicon to a 128px hero badge.
 */
type LogoProps = {
  size?: number;
  className?: string;
  /** Disable the animated pulse on the accent node (e.g. for favicons / OG). */
  static?: boolean;
};

export function Logo({ size = 32, className, static: isStatic = false }: LogoProps) {
  // Unique gradient/filter IDs so multiple Logo instances on the same
  // page don't collide via shared defs.
  const uid = String(size) + (isStatic ? "s" : "a");
  const gradId = `nicsaa-grad-${uid}`;
  const ringId = `nicsaa-ring-${uid}`;
  const haloId = `nicsaa-halo-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Nicsaa"
      role="img"
    >
      <defs>
        <linearGradient id={gradId} x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="55%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id={ringId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id={haloId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.55" />
          <stop offset="70%" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer glow halo — soft purple wash behind the mark */}
      <circle cx="20" cy="20" r="20" fill={`url(#${haloId})`} />

      {/* Gradient frame — rounded square */}
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="10"
        fill={`url(#${gradId})`}
      />

      {/* Dark inset that makes the gradient read as a 1px ring */}
      <rect x="3.25" y="3.25" width="33.5" height="33.5" rx="8.75" fill="#070707" />

      {/* Orbital ring — autonomous-loop accent, drawn as a dashed arc
          so it reads as motion rather than a solid frame */}
      <circle
        cx="20"
        cy="20"
        r="13.5"
        fill="none"
        stroke={`url(#${ringId})`}
        strokeWidth="0.6"
        strokeOpacity="0.55"
        strokeDasharray="2 3"
      />

      {/* The N stroke — single continuous path, gradient-stroked */}
      <path
        d="M11.5 28.5 L11.5 11.5 L28.5 28.5 L28.5 11.5"
        stroke={`url(#${gradId})`}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Solid accent node at the upper-right vertex (the "decision" point) */}
      <circle cx="28.5" cy="11.5" r="2.3" fill="#22d3ee" />

      {/* Outer pulsing halo around the accent node — the autonomous-AI tell */}
      {!isStatic && (
        <circle cx="28.5" cy="11.5" r="2.3" fill="#22d3ee" opacity="0.45">
          <animate
            attributeName="r"
            values="2.3;6.5;2.3"
            dur="2.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.55;0;0.55"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>
      )}
    </svg>
  );
}
