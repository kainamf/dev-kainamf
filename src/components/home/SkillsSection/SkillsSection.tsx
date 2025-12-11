import React from 'react';
import SkillsOrb from './SkillsOrb';

interface SkillsSectionProps {
  theme: 'dark' | 'light';
  themeClasses: { text: string };
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ theme, themeClasses }) => (
  <section id="skills" className="flex items-center justify-center p-4 pb-0">
    <div className="w-full max-w-6xl">
      <div className="text-center mb-8">
        <h2 className={`text-4xl md:text-5xl font-bold ${themeClasses.text} mb-8`}>
          Stack <span className="text-[#7CDA3D]">Tecnológico</span>
        </h2>
        <p className={`text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} max-w-2xl mx-auto mb-8`}>
          TypeScript, JavaScript, Python, Java, Go e ferramentas modernas de desenvolvimento
        </p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <SkillsOrb />
      </div>
    </div>
  </section>
);

export default SkillsSection;
