import React from 'react';

interface IslamicStarProps {
  size?: number;
  className?: string;
}

/**
 * Islamic Octagon Star Icon
 * 8-pointed star commonly used in Islamic art and architecture
 */
export function IslamicStar({ size = 8, className = '' }: IslamicStarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      {/* 8-pointed star (Rub el Hizb inspired) */}
      <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
      
      {/* Optional: Add small center circle for more detail */}
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}

/**
 * Simpler 4-pointed star variant
 */
export function IslamicStarSimple({ size = 8, className = '' }: IslamicStarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      {/* Simple 4-pointed star */}
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
    </svg>
  );
}

/**
 * Octagon shape (commonly used in Islamic patterns)
 */
export function IslamicOctagon({ size = 8, className = '' }: IslamicStarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      {/* Regular octagon */}
      <path d="M7.76 2 L16.24 2 L22 7.76 L22 16.24 L16.24 22 L7.76 22 L2 16.24 L2 7.76 Z" />
    </svg>
  );
}

/**
 * Rub el Hizb - Traditional Islamic symbol (two overlapping squares)
 */
export function RubElHizb({ size = 8, className = '' }: IslamicStarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      {/* First square rotated 0° */}
      <path d="M6 6 L18 6 L18 18 L6 18 Z" transform="rotate(0 12 12)" opacity="0.7" />
      
      {/* Second square rotated 45° */}
      <path d="M6 6 L18 6 L18 18 L6 18 Z" transform="rotate(45 12 12)" opacity="0.7" />
      
      {/* Center circle */}
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    </svg>
  );
}

/**
 * Small dot/bullet for minimal lists
 */
export function IslamicDot({ size = 6, className = '' }: IslamicStarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
