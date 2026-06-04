import { ChildrenProps } from '@/types/children';
import React from 'react';

interface GlassCardProps extends ChildrenProps {
  className?: string;
  blur?: 'sm' | 'md' | 'lg';
}

function GlassCard({ children, className = '', blur = 'md' }: GlassCardProps) {
  const blurMap = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
  };

  return (
    <div
      className={`
        relative
        rounded-2xl
        border border-white/10
        ${blurMap[blur]}
        bg-white/5
        shadow-2xl
        hover:border-white/20
        hover:bg-white/8
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default GlassCard;