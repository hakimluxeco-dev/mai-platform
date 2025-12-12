import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8" }) => (
  <svg viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563eb" />
        <stop offset="1" stopColor="#06b6d4" />
      </linearGradient>
    </defs>

    {/* M */}
    <path d="M10 50V10L30 35L50 10V50" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

    {/* A (Arrow) - The Hero Element */}
    <path d="M65 50L85 10L105 50" stroke="url(#logo-gradient)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M72 35H98" stroke="url(#logo-gradient)" strokeWidth="4" strokeLinecap="round" /> {/* Crossbar representing A/Arrow */}

    {/* I */}
    <path d="M120 10V50" stroke="white" strokeWidth="6" strokeLinecap="round" />

    {/* BUSINESS SOLUTIONS */}
    <text x="145" y="28" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="16" fill="white" letterSpacing="1">
      BUSINESS
    </text>
    <text x="145" y="48" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="14" fill="#94a3b8" letterSpacing="3">
      SOLUTIONS
    </text>
  </svg>
);

export default Logo;