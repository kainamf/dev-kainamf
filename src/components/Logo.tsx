import React from 'react';
import { Code2, Zap } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'text';
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'full', 
  animated = true 
}) => {
  const sizeClasses = {
    sm: { container: 'h-8', icon: 'w-6 h-6', text: 'text-lg', iconSize: 20 },
    md: { container: 'h-12', icon: 'w-8 h-8', text: 'text-xl', iconSize: 24 },
    lg: { container: 'h-16', icon: 'w-12 h-12', text: 'text-2xl', iconSize: 32 },
    xl: { container: 'h-20', icon: 'w-16 h-16', text: 'text-3xl', iconSize: 40 }
  };

  const currentSize = sizeClasses[size];

  if (variant === 'icon') {
    return (
      <div className={`${currentSize.icon} relative`}>
        <div className={`
          ${currentSize.icon} 
          bg-gradient-to-br from-[#7CDA3D] to-[#7CDA3D]/80 
          rounded-xl 
          flex items-center justify-center 
          shadow-lg shadow-[#7CDA3D]/30
          ${animated ? 'hover:scale-110 hover:rotate-12 transition-all duration-300' : ''}
        `}>
          <Code2 size={currentSize.iconSize * 0.6} className="text-[#030303]" />
        </div>
        {animated && (
          <div className="absolute -top-1 -right-1">
            <Zap size={currentSize.iconSize * 0.3} className="text-[#7CDA3D] animate-pulse" />
          </div>
        )}
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className="flex items-center gap-2">
        <span className={`${currentSize.text} font-bold text-white`}>
          Dev
        </span>
        <span className={`${currentSize.text} font-bold text-[#7CDA3D]`}>
          KMF
        </span>
      </div>
    );
  }

  return (
    <div className={`${currentSize.container} flex items-center gap-3`}>
      {/* Icon */}
      <div className="relative">
        <div className={`
          ${currentSize.icon} 
          bg-gradient-to-br from-[#7CDA3D] to-[#7CDA3D]/80 
          rounded-xl 
          flex items-center justify-center 
          shadow-lg shadow-[#7CDA3D]/30
          ${animated ? 'hover:scale-110 hover:rotate-12 transition-all duration-300' : ''}
        `}>
          <Code2 size={currentSize.iconSize * 0.6} className="text-[#030303]" />
        </div>
        {animated && (
          <div className="absolute -top-1 -right-1">
            <Zap size={currentSize.iconSize * 0.3} className="text-[#7CDA3D] animate-pulse" />
          </div>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span className={`${currentSize.text} font-bold text-white`}>
            Dev
          </span>
          <span className={`${currentSize.text} font-bold text-[#7CDA3D]`}>
            KMF
          </span>
        </div>
        <span className="text-xs text-gray-400 font-medium tracking-wider">
          FULL STACK
        </span>
      </div>
    </div>
  );
};

export default Logo;