import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onThemeChange: (theme: 'dark' | 'light') => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onThemeChange }) => {
  const themes = [
    { key: 'dark', icon: Moon, label: 'Escuro' },
    { key: 'light', icon: Sun, label: 'Claro' }
  ];

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2 bg-black/20 backdrop-blur-md rounded-full p-2 border border-white/10">
      {themes.map(({ key, icon: Icon, label }) => (
        <button
          key={key}
          onClick={() => onThemeChange(key as any)}
          className={`
            p-3 rounded-full transition-all duration-300 group relative
            ${theme === key 
              ? 'bg-[#7CDA3D] text-black shadow-lg shadow-[#7CDA3D]/30' 
              : 'text-white/70 hover:text-white hover:bg-white/10'
            }
          `}
          title={label}
        >
          <Icon size={18} className="transition-transform group-hover:scale-110" />
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {label}
          </div>
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;