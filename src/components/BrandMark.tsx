interface BrandMarkProps {
  inverted?: boolean;
}

export function BrandMark({ inverted = false }: BrandMarkProps) {
  const strokeColor = inverted ? '#E7D8C3' : '#9A743B';
  const textColor = inverted ? '#FAF7F2' : '#2B211A';

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0">
      <svg
        width="32"
        height="32"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="8"
          stroke={strokeColor}
          strokeWidth="1.25"
        />
        <text
          x="18"
          y="23"
          textAnchor="middle"
          fill={textColor}
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '15px',
            fontWeight: 600,
            letterSpacing: '0.06em',
          }}
        >
          HT
        </text>
      </svg>
      <span
        className={`font-serif text-xl sm:text-2xl font-semibold tracking-tight ${
          inverted ? 'text-[#FAF7F2]' : 'text-[#2B211A]'
        }`}
      >
        Hair by Tsino
      </span>
    </span>
  );
}
