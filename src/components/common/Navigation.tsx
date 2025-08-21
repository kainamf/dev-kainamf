import { Menu, X } from 'lucide-react';
import React from 'react';
import Logo from './Logo';

interface NavigationProps {
  menuItems: { id: string; label: string }[];
  activeSection: string;
  scrollToSection: (id: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  themeClasses: { text: string };
  showLogo?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ menuItems, activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen, themeClasses, showLogo }) => (
  <nav className="flex items-center gap-4">
    {showLogo && (
      <Logo size="sm" theme={themeClasses.text === 'text-gray-900' ? 'light' : 'dark'} />
    )}
    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full p-2 border border-white/10">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`
            px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium
            ${activeSection === item.id 
              ? 'bg-[#7CDA3D] text-black' 
              : `${themeClasses.text === 'text-gray-900' ? 'text-white' : themeClasses.text} hover:bg-white/10` 
            }
          `}
        >
          {item.label}
        </button>
      ))}
    </div>
    {/* Mobile Menu Button */}
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="md:hidden p-3 bg-black/20 backdrop-blur-md rounded-full border border-white/10 text-white ml-auto"
    >
      {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <div className="md:hidden absolute top-16 left-4 right-4 bg-black/90 backdrop-blur-md rounded-2xl p-4 border border-white/10 min-w-[200px] z-50">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium
              ${activeSection === item.id 
                ? 'bg-[#7CDA3D] text-black' 
                : 'text-white hover:bg-white/10'
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    )}
  </nav>
);

export default Navigation;
