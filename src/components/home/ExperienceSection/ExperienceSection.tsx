import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

interface ExperienceSectionProps {
  theme: 'dark' | 'light';
  themeClasses: { text: string; card: string };
}

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  achievements: string[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ theme, themeClasses }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experiences: ExperienceItem[] = [
    {
      company: "Calindra Technology",
      role: "Software Developer",
      location: "Rio de Janeiro, Brazil",
      period: "Dec 2024 - Present",
      current: true,
      achievements: [
        "Desenvolvimento e evolução de apps mobile para grandes marcas do varejo: DLK, Madesa, Shoulder, Lojas Torra, Montreal, Venancio, Mundo Verde, Blackskull, Ferracini, Polishop, ToyMania e Caedu",
        "Implementação de features críticas como checkout PIX (QR Code), players de vídeo otimizados (Vimeo) e gestão dinâmica de vitrines",
        "Atuação em squads estratégicas para clientes de grande porte: Carrefour e PinBank, desenvolvendo soluções robustas focadas em escalabilidade e segurança",
        "Evolução do Eitri Console e Manager API com implementação de RBAC e dashboards de observabilidade",
        "Desenvolvimento de microserviços Node.js usando Clean Architecture, com foco em autenticação segura (MFA), validação de tokens e comunicação assíncrona"
      ]
    },
    {
      company: "Calindra Technology",
      role: "Software Development Intern",
      location: "Rio de Janeiro, Brazil",
      period: "Jul 2023 - Dec 2024",
      achievements: [
        "Participação em esquema de rotação entre diversas unidades de negócio: Eitri, Ritua, Eu Entrego e VOLTZ",
        "Visão sistêmica do ciclo de desenvolvimento de software em diferentes contextos de negócio (Logística, Fintech e E-commerce)",
        "Migração de APIs legadas para arquitetura de microserviços e padronização de endpoints RESTful",
        "Criação de suítes de testes automatizados (Jest e Cypress) garantindo estabilidade nas entregas"
      ]
    },
    {
      company: "Aquamar",
      role: "Trainee",
      location: "Rio de Janeiro, Brazil",
      period: "Feb 2023 - May 2023",
      achievements: [
        "Gestão de produtos e estoque utilizando sistemas LINX e WMS",
        "Controle logístico e gerenciamento de planilhas"
      ]
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="flex items-center justify-center p-4 py-16">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold ${themeClasses.text} mb-6`}>
            Experiência <span className="text-[#7CDA3D]">Profissional</span>
          </h2>
          <p className={`text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} max-w-2xl mx-auto`}>
            +2 anos construindo soluções escaláveis para empresas de diversos segmentos
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${themeClasses.card} rounded-2xl border-2 ${
                expandedIndex === index
                  ? 'border-[#7CDA3D]'
                  : theme === 'light'
                  ? 'border-gray-200'
                  : 'border-[#7CDA3D]/20'
              } transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-[#7CDA3D]/10`}
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-[#7CDA3D]/5 transition-colors duration-300"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={`p-3 rounded-xl ${exp.current ? 'bg-[#7CDA3D]' : 'bg-[#7CDA3D]/20'} shrink-0`}>
                    <Briefcase size={24} className={exp.current ? 'text-[#030303]' : 'text-[#7CDA3D]'} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className={`text-xl font-bold ${themeClasses.text}`}>
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-3 py-1 bg-[#7CDA3D] text-[#030303] text-xs font-bold rounded-full">
                          ATUAL
                        </span>
                      )}
                    </div>
                    <p className="text-[#7CDA3D] font-semibold text-lg mb-2">
                      {exp.company}
                    </p>
                    <div className={`flex items-center gap-4 text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} flex-wrap`}>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="shrink-0 pt-2">
                  {expandedIndex === index ? (
                    <ChevronUp size={24} className="text-[#7CDA3D]" />
                  ) : (
                    <ChevronDown size={24} className={theme === 'light' ? 'text-gray-400' : 'text-gray-500'} />
                  )}
                </div>
              </button>

              {expandedIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="pl-16 space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-start gap-3"
                        style={{
                          animation: `fade-in-up 0.3s ease-out ${achievementIndex * 0.1}s both`
                        }}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#7CDA3D] mt-2 shrink-0" />
                        <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} leading-relaxed`}>
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
