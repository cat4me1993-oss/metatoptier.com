import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tierGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#bc13fe" />
          <stop offset="50%" stopColor="#00f3ff" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Base Tier (Foundation) - Darker Purple/Blue */}
      <path 
        d="M20 75 L50 55 L80 75 L80 88 L50 68 L20 88 Z" 
        fill="#1300ff" 
        opacity="0.8"
      />

      {/* Middle Tier (Process) - Neon Purple */}
      <path 
        d="M20 55 L50 35 L80 55 L80 68 L50 48 L20 68 Z" 
        fill="#bc13fe" 
        opacity="0.9"
      />

      {/* Top Tier (The Peak) - Neon Cyan/White */}
      <path 
        d="M20 35 L50 15 L80 35 L80 48 L50 28 L20 48 Z" 
        fill="url(#tierGradient)" 
        filter="url(#glow)"
      />
      
      {/* Center Shine Line */}
      <path d="M50 15 L50 88" stroke="white" strokeWidth="1" opacity="0.3" />
    </svg>
  );
};