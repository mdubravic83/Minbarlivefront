// Mosque/Minaret Icon Component - inspired by modern mosque design
export function MosqueIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Minaret (tall tower) */}
      <g>
        {/* Crescent on top of minaret */}
        <path
          d="M20 2C19.7 2.3 19.5 2.7 19.5 3.2C19.5 3.9 20 4.5 20.7 4.5C21.1 4.5 21.4 4.3 21.6 4C21.2 4.8 20.5 5.3 19.5 5.3C18.4 5.3 17.5 4.4 17.5 3.3C17.5 2.2 18.4 1.3 19.5 1.3C19.7 1.3 19.9 1.3 20 1.4V2Z"
          fill="currentColor"
        />
        
        {/* Minaret top balcony */}
        <rect x="18" y="5.5" width="4" height="0.8" rx="0.4" fill="currentColor"/>
        <rect x="18.3" y="6" width="3.4" height="0.5" rx="0.25" fill="currentColor" opacity="0.7"/>
        
        {/* Minaret body (tapered) */}
        <path
          d="M18.5 6.5L18.8 15.5L21.2 15.5L21.5 6.5L18.5 6.5Z"
          fill="currentColor"
          opacity="0.9"
        />
        
        {/* Minaret base */}
        <rect x="18" y="15.5" width="4" height="1" rx="0.3" fill="currentColor"/>
      </g>

      {/* Main building with dome */}
      <g>
        {/* Teal/turquoise dome */}
        <ellipse
          cx="9"
          cy="9"
          rx="6"
          ry="4"
          fill="currentColor"
          opacity="0.3"
        />
        
        {/* Dome details/pattern */}
        <path
          d="M9 5C6 5 3.5 6.5 3.5 9C3.5 9 5 8 9 8C13 8 14.5 9 14.5 9C14.5 6.5 12 5 9 5Z"
          fill="currentColor"
          opacity="0.15"
        />
        
        {/* Small crescent on dome */}
        <path
          d="M9 4.5C8.8 4.7 8.7 4.9 8.7 5.1C8.7 5.4 9 5.7 9.3 5.7C9.5 5.7 9.6 5.6 9.7 5.5C9.5 5.9 9.1 6.2 8.7 6.2C8.2 6.2 7.8 5.8 7.8 5.3C7.8 4.8 8.2 4.4 8.7 4.4C8.8 4.4 8.9 4.4 9 4.5Z"
          fill="currentColor"
        />

        {/* Main entrance arch */}
        <path
          d="M6 13L6 20L12 20L12 13C12 13 11 11 9 11C7 11 6 13 6 13Z"
          fill="currentColor"
        />
        
        {/* Arch shape */}
        <path
          d="M7 13C7 13 7.5 12 9 12C10.5 12 11 13 11 13L11 20L7 20L7 13Z"
          fill="white"
          opacity="0.2"
        />
        
        {/* Side walls */}
        <rect x="3" y="16" width="3" height="6" rx="0.5" fill="currentColor" opacity="0.8"/>
        <rect x="12" y="16" width="3" height="6" rx="0.5" fill="currentColor" opacity="0.8"/>
      </g>

      {/* Base/ground */}
      <rect x="2" y="21" width="20" height="1.5" rx="0.5" fill="currentColor" opacity="0.4"/>
    </svg>
  );
}

// Simplified Mosque Icon (cleaner for small sizes)
export function MosqueIconSimple({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Minaret */}
      <g>
        <path d="M19 2L19 3.5" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="19" cy="1.5" r="0.8" fill="currentColor"/>
        <rect x="18" y="3.5" width="2" height="0.8" rx="0.4" fill="currentColor"/>
        <path d="M18.3 4.3L18.5 13L19.5 13L19.7 4.3Z" fill="currentColor"/>
        <rect x="18" y="13" width="2" height="0.8" rx="0.3" fill="currentColor"/>
      </g>

      {/* Dome */}
      <ellipse cx="9" cy="8" rx="5.5" ry="3.5" fill="currentColor" opacity="0.3"/>
      
      {/* Crescent on dome */}
      <circle cx="9" cy="4.5" r="0.6" fill="currentColor"/>
      
      {/* Main building */}
      <path
        d="M5 11L5 19L13 19L13 11C13 11 11.5 9 9 9C6.5 9 5 11 5 11Z"
        fill="currentColor"
      />
      
      {/* Arch */}
      <path
        d="M7 12C7 12 7.5 11 9 11C10.5 11 11 12 11 12L11 19L7 19L7 12Z"
        fill="white"
        opacity="0.25"
      />

      {/* Base */}
      <rect x="3" y="19" width="18" height="2" rx="0.5" fill="currentColor" opacity="0.4"/>
    </svg>
  );
}

// Minaret Only Icon (for HutbaLive specifically)
export function MinaretIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
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
        d="M12 2C11.6 2.4 11.3 3 11.3 3.6C11.3 4.6 12.1 5.4 13.1 5.4C13.7 5.4 14.2 5.1 14.5 4.6C13.9 5.8 12.7 6.6 11.3 6.6C9.5 6.6 8 5.1 8 3.3C8 1.5 9.5 0 11.3 0C11.6 0 11.9 0.1 12.2 0.2V2Z"
        fill="currentColor"
      />
      
      {/* Top decorative ring */}
      <ellipse cx="12" cy="7" rx="3" ry="0.8" fill="currentColor"/>
      <rect x="9" y="7.5" width="6" height="0.6" rx="0.3" fill="currentColor" opacity="0.8"/>
      
      {/* Balcony */}
      <path d="M10 8.5L10.5 12L13.5 12L14 8.5Z" fill="currentColor" opacity="0.9"/>
      <rect x="9.5" y="12" width="5" height="1" rx="0.3" fill="currentColor"/>
      
      {/* Main tower body (slightly tapered) */}
      <path
        d="M10.5 13L11 19L13 19L13.5 13Z"
        fill="currentColor"
        opacity="0.95"
      />
      
      {/* Tower details/windows */}
      <rect x="11.3" y="14.5" width="1.4" height="1" rx="0.5" fill="white" opacity="0.2"/>
      <rect x="11.3" y="16.5" width="1.4" height="1" rx="0.5" fill="white" opacity="0.2"/>
      
      {/* Base */}
      <rect x="9.5" y="19" width="5" height="1.5" rx="0.5" fill="currentColor"/>
      <rect x="8" y="20.5" width="8" height="1.5" rx="0.5" fill="currentColor" opacity="0.7"/>
    </svg>
  );
}
