import React from 'react';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  theme: 'dark' | 'light';
  onThemeChange: (theme: 'dark' | 'light') => void;
  menuItems: Array<{ id: string; label: string }>;
  activeSection: string;
  scrollToSection: (id: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  themeClasses: { text: string; [key: string]: string };
}

const Header: React.FC<HeaderProps> = ({
  theme,
  onThemeChange,
  menuItems,
  activeSection,
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  themeClasses
}) => {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Navigation
            menuItems={menuItems}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            themeClasses={themeClasses}
            showLogo={true}
          />
        </div>
        {/* Theme Toggle */}
        <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
      </div>
    </header>
  );
};

export default Header;
