import React from 'react';
import Logo from '../../common/Logo';
import { Github, Instagram } from 'lucide-react';

interface FooterSectionProps {
  theme: 'dark' | 'light';
  themeClasses: { card: string };
}

const FooterSection: React.FC<FooterSectionProps> = ({ theme, themeClasses }) => (
  <footer className="py-2 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
  <Logo size="md" theme={themeClasses.card === 'bg-white' ? 'light' : 'dark'} />
        <div className="flex justify-center gap-8">
          <a 
            href="https://github.com/kainamf" 
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} hover:text-[#7CDA3D] transition-all duration-300 hover:scale-110 group ${themeClasses.card} px-6 rounded-full border border-[#7CDA3D]/20 hover:border-[#7CDA3D]/50 hover:shadow-lg hover:shadow-[#7CDA3D]/20`}
          >
            <Github size={28} className="group-hover:animate-bounce" />
            <span className="font-medium">kainamf</span>
          </a>
          <a 
            href="https://www.instagram.com/dev.kmf/" 
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} hover:text-[#7CDA3D] transition-all duration-300 hover:scale-110 group ${themeClasses.card} px-6 py-3 rounded-full border border-[#7CDA3D]/20 hover:border-[#7CDA3D]/50 hover:shadow-lg hover:shadow-[#7CDA3D]/20`}
          >
            <Instagram size={28} className="group-hover:animate-bounce" />
            <span className="font-medium">dev.kmf</span>
          </a>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t border-[#7CDA3D]/20">
        <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
          © 2024 DevKMF. Transformando ideias em realidade digital.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
