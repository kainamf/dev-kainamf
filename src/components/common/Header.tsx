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
    <header className="fixed top-0 left-0 w-full z-30 flex items-center justify-between px-4 py-2 bg-transparent">
      <Navigation
        menuItems={menuItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        themeClasses={themeClasses}
      />
      <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
    </header>
  );
};

export default Header;
