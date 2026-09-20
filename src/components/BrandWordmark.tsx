import React from 'react';
import { SITE_CONFIG } from '../config/site';

interface BrandWordmarkProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BrandWordmark: React.FC<BrandWordmarkProps> = ({
  size = 'md',
  className = '',
}) => {
  const heightClass =
    size === 'sm'
      ? 'h-8 sm:h-9'
      : size === 'lg'
      ? 'h-11 sm:h-14'
      : 'h-9 sm:h-11';

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={SITE_CONFIG.labelPath}
        alt="Pertama Jaya Construction & Engineering Sdn Bhd"
        className={`w-auto ${heightClass} object-contain`}
        loading="eager"
      />
    </div>
  );
};

