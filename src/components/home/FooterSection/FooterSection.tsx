import React from 'react';

interface FooterSectionProps {
  theme: 'dark' | 'light';
  themeClasses: { card: string };
}

const FooterSection: React.FC<FooterSectionProps> = ({ theme }) => (
  <footer className="py-2 px-4">
    <div className="max-w-6xl mx-auto">
  {/* Contatos removidos do footer */}
      <div className="text-center mt-8 pt-8 border-t border-[#7CDA3D]/20">
        <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
          © 2024 DevKMF. Transformando ideias em realidade digital.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
