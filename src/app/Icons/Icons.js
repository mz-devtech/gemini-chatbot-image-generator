import React from "react";

/* 1. Clover / overlapping circles icon */
export const CloverIcon = ({ className = "w-10 h-10", color = "currentColor" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="26" cy="24" r="14" stroke={color} strokeWidth="2" />
    <circle cx="40" cy="24" r="14" stroke={color} strokeWidth="2" />
    <circle cx="26" cy="38" r="14" stroke={color} strokeWidth="2" />
    <circle cx="40" cy="38" r="14" stroke={color} strokeWidth="2" />
  </svg>
);

/* 2. Spiral / radiating waves icon */
export const SpiralWaveIcon = ({ className = "w-10 h-10", color = "currentColor" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="44" cy="44" r="3" fill={color} />
    <path
      d="M44 34a10 10 0 1 1-10 10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M44 24a20 20 0 1 1-20 20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M44 14a30 30 0 1 1-30 30"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/* 3. Nested diamond (layers) icon */
export const NestedDiamondIcon = ({ className = "w-10 h-10", color = "currentColor" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M32 10 L54 32 L32 54 L10 32 Z"
      stroke={color}
      strokeWidth="2"
    />
    <path
      d="M32 20 L44 32 L32 44 L20 32 Z"
      stroke={color}
      strokeWidth="2"
    />
  </svg>
);

/* 4. Scattered squares icon */
export const ScatteredSquaresIcon = ({ className = "w-10 h-10", color = "currentColor" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="10" y="10" width="22" height="22" stroke={color} strokeWidth="2" />
    <rect x="38" y="24" width="12" height="12" stroke={color} strokeWidth="2" />
    <rect x="46" y="40" width="10" height="10" stroke={color} strokeWidth="2" />
    <rect x="30" y="42" width="8" height="8" stroke={color} strokeWidth="2" />
  </svg>
);