export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Wild Gayo Luwak"
      role="img"
    >
      {/* Coffee bean/leaf mark */}
      <g transform="translate(0, 4)">
        {/* Stylized coffee bean with leaf detail */}
        <ellipse cx="20" cy="20" rx="14" ry="18" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M 20 3 Q 16 12 20 20 Q 24 28 20 37" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Small leaf accent */}
        <path d="M 28 8 Q 34 4 36 10 Q 32 12 28 8" fill="currentColor" opacity="0.7" />
      </g>
      {/* Brand text */}
      <text
        x="44"
        y="18"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="13"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="0.12em"
      >
        WILD GAYO LUWAK
      </text>
      <text
        x="44"
        y="34"
        fontFamily="'Inter', sans-serif"
        fontSize="7"
        fontWeight="400"
        fill="currentColor"
        opacity="0.6"
        letterSpacing="0.25em"
      >
        PREMIUM WILD KOPI LUWAK
      </text>
    </svg>
  );
}
