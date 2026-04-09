import React from "react";

interface OctagonalStarProps {
  size?: number;
  className?: string;
}

export function OctagonalStar({ size = 16, className = "" }: OctagonalStarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Octagonal star with 8 points */}
      <path d="M12 2L13.5 8.5L18.5 5.5L15.5 10.5L22 12L15.5 13.5L18.5 18.5L13.5 15.5L12 22L10.5 15.5L5.5 18.5L8.5 13.5L2 12L8.5 10.5L5.5 5.5L10.5 8.5L12 2Z" />
    </svg>
  );
}