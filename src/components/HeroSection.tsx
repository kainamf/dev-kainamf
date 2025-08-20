import { Code2, ArrowRight, Rocket } from 'lucide-react';
import React from 'react';

interface HeroSectionProps {
  theme: 'dark' | 'light' | 'neon';
  themeClasses: { text: string; card: string };
  scrollY: number;
  isHovered: boolean;
  setIsHovered: (v: boolean) => void;
  technologies: string[];
  currentTech: number;
  scrollToSection: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ theme, themeClasses, scrollY, isHovered, setIsHovered, technologies, currentTech, scrollToSection }) => (
  <section id="home" className="min-h-screen flex items-center justify-center p-4">
    <div className="w-full max-w-6xl text-center">
      <div 
        className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#7CDA3D] to-[#7CDA3D]/80 rounded-3xl mb-8 transform transition-all duration-500 hover:scale-110 hover:rotate-12 shadow-2xl shadow-[#7CDA3D]/20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: `translateY(${scrollY * 0.1}px) ${isHovered ? 'scale(1.1) rotate(12deg)' : ''}`
        }}
      >
        <Code2 size={48} className="text-[#030303] animate-pulse" />
      </div>
      <h1 className={`text-6xl md:text-8xl font-bold ${themeClasses.text} mb-6 relative`}>
        Desenvolvedor
        <br />
        <span className="text-[#7CDA3D] bg-gradient-to-r from-[#7CDA3D] to-[#7CDA3D]/70 bg-clip-text text-transparent animate-pulse">
          Full Stack
        </span>
      </h1>
      <p className={`text-xl md:text-2xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} max-w-3xl mx-auto leading-relaxed mb-8 opacity-0 animate-fade-in-up`} style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
        Criação de sites e landing pages modernas, responsivas e otimizadas para conversão
      </p>
    
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button 
          onClick={() => scrollToSection('contact')}
          className="group/btn bg-[#7CDA3D] text-[#030303] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#7CDA3D]/90 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl hover:shadow-[#7CDA3D]/30 relative overflow-hidden"
        >
          <span className="relative z-10">Iniciar Projeto</span>
          <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          className="border-2 border-[#7CDA3D] text-[#7CDA3D] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#7CDA3D]/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#7CDA3D]/20 relative overflow-hidden group/btn2"
        >
          <span className="relative z-10">Ver Portfolio</span>
          <div className="absolute inset-0 bg-[#7CDA3D]/5 scale-x-0 group-hover/btn2:scale-x-100 transition-transform duration-300 origin-left" />
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
