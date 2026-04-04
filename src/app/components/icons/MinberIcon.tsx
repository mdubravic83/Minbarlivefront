// Minber (Minbar/Pulpit) Icon Component
export function MinberIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Crescent moon on top */}
      <path
        d="M12 2C11.5 2.5 11 3.5 11 4.5C11 6 12 7 13.5 7C14.5 7 15.5 6.5 16 6C15 8 13 9 11 9C8.8 9 7 7.2 7 5C7 2.8 8.8 1 11 1C11.3 1 11.7 1.1 12 1.2V2Z"
        fill="currentColor"
      />
      
      {/* Minber structure - simplified */}
      <path
        d="M8 10L10 10C10.5 10 11 10.5 11 11L11 12L13 12L13 11C13 10.5 13.5 10 14 10L16 10C16 10 17 10.5 16.5 11.5L15 14L15 22L9 22L9 14L7.5 11.5C7 10.5 8 10 8 10Z"
        fill="currentColor"
      />
      
      {/* Steps */}
      <rect x="10" y="14" width="4" height="1.5" rx="0.5" fill="currentColor" opacity="0.7"/>
      <rect x="10" y="16.5" width="4" height="1.5" rx="0.5" fill="currentColor" opacity="0.7"/>
      <rect x="10" y="19" width="4" height="1.5" rx="0.5" fill="currentColor" opacity="0.7"/>
    </svg>
  );
}

// Simplified Minber Icon (more geometric)
export function MinberIconSimple({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Dome/Top */}
      <path
        d="M12 3L8 7H16L12 3Z"
        fill="currentColor"
      />
      
      {/* Platform */}
      <rect x="9" y="7" width="6" height="2" rx="0.5" fill="currentColor"/>
      
      {/* Steps */}
      <rect x="8" y="9" width="8" height="2" rx="0.5" fill="currentColor" opacity="0.8"/>
      <rect x="7" y="11" width="10" height="2" rx="0.5" fill="currentColor" opacity="0.7"/>
      <rect x="6" y="13" width="12" height="2" rx="0.5" fill="currentColor" opacity="0.6"/>
      
      {/* Base */}
      <rect x="5" y="15" width="14" height="7" rx="1" fill="currentColor"/>
      
      {/* Door */}
      <rect x="10" y="17" width="4" height="5" rx="2" fill="white" opacity="0.3"/>
    </svg>
  );
}
