import React from 'react';
import SkillsOrb from './SkillsOrb';

interface SkillsSectionProps {
  theme: 'dark' | 'light' | 'neon';
  themeClasses: { text: string };
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ theme, themeClasses }) => (
  <section id="skills" className="min-h-screen flex items-center justify-center p-4">
    <div className="w-full max-w-6xl">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold ${themeClasses.text} mb-6`}>
          Minhas <span className="text-[#7CDA3D]">Especialidades</span>
        </h2>
        <p className={`text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} max-w-2xl mx-auto`}>
          Tecnologias e ferramentas que domino para criar soluções completas
        </p>
      </div>
      <SkillsOrb />
    </div>
  </section>
);

export default SkillsSection;
