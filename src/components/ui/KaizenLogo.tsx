// src/components/ui/KaizenLogo.tsx
"use client";

interface KaizenLogoProps {
  size?: number;
  className?: string;
}

export function KaizenLogo({ size = 56, className = "" }: KaizenLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Crossed chopsticks / tong lines */}
      <line x1="28" y1="70" x2="92" y2="30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="92" y1="70" x2="28" y2="30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />

      {/* Flame at top center */}
      <path
        d="M60 10 C57 16 52 20 53 27 C54 33 58 36 60 38 C62 36 66 33 67 27 C68 20 63 16 60 10Z"
        fill="#B11226"
      />
      <path
        d="M60 20 C59 23 57 25 57.5 28 C58 31 59.5 33 60 34 C60.5 33 62 31 62.5 28 C63 25 61 23 60 20Z"
        fill="#ff4444"
        opacity="0.7"
      />

      {/* KAIZEN text */}
      <text
        x="60"
        y="68"
        textAnchor="middle"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="26"
        fontWeight="700"
        letterSpacing="3"
        fill="white"
      >
        KAIZEN
      </text>

      {/* ESTD · 2020 small text */}
      <text
        x="35"
        y="57"
        fontFamily="Arial, sans-serif"
        fontSize="5"
        fill="white"
        opacity="0.7"
        letterSpacing="0.5"
      >
        ESTD
      </text>
      <text
        x="78"
        y="57"
        fontFamily="Arial, sans-serif"
        fontSize="5"
        fill="white"
        opacity="0.7"
        letterSpacing="0.5"
      >
        2020
      </text>

      {/* Divider line */}
      <line x1="20" y1="73" x2="100" y2="73" stroke="white" strokeWidth="0.8" opacity="0.5" />

      {/* BBQ GRILL & SHABU-SHABU */}
      <text
        x="60"
        y="81"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="6.5"
        letterSpacing="1.5"
        fill="white"
        opacity="0.85"
      >
        BBQ GRILL &amp; SHABU-SHABU
      </text>
    </svg>
  );
}
