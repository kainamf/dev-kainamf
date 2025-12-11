import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

interface EducationSectionProps {
  theme: 'dark' | 'light';
  themeClasses: { text: string; card: string };
}

interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  type: 'education' | 'certification';
}

const EducationSection: React.FC<EducationSectionProps> = ({ theme, themeClasses }) => {
  const education: EducationItem[] = [
    {
      institution: "Centro Universitário IBMR",
      degree: "Bachelor's Degree in Mathematics",
      location: "Rio de Janeiro, Brazil",
      period: "2023 - 2025",
      type: 'education'
    },
    {
      institution: "Universidade Federal Rural do Rio de Janeiro (UFRRJ)",
      degree: "Licenciatura in Mathematics",
      location: "Seropédica, Brazil",
      period: "2018 - 2023",
      type: 'education'
    }
  ];

  const certifications: EducationItem[] = [
    {
      institution: "ADA Tech",
      degree: "Santander Coders 2024",
      location: "Online",
      period: "2024",
      type: 'certification'
    },
    {
      institution: "Harvard Business Publishing",
      degree: "Business for All 2024",
      location: "Online",
      period: "2024",
      type: 'certification'
    },
    {
      institution: "Alura",
      degree: "Advanced Training in TypeScript, Node.js, and AWS Fundamentals",
      location: "Online",
      period: "2024",
      type: 'certification'
    }
  ];

  return (
    <section id="education" className="flex items-center justify-center p-4 py-16">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold ${themeClasses.text} mb-6`}>
            Educação & <span className="text-[#7CDA3D]">Certificações</span>
          </h2>
          <p className={`text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} max-w-2xl mx-auto`}>
            Formação acadêmica em Matemática e certificações em tecnologias modernas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Educação */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#7CDA3D]">
                <GraduationCap size={24} className="text-[#030303]" />
              </div>
              <h3 className={`text-2xl font-bold ${themeClasses.text}`}>Educação</h3>
            </div>
            {education.map((item, index) => (
              <div
                key={index}
                className={`${themeClasses.card} p-6 rounded-2xl border-2 ${
                  theme === 'light' ? 'border-gray-200' : 'border-[#7CDA3D]/20'
                } hover:border-[#7CDA3D] transition-all duration-300 hover:shadow-xl hover:shadow-[#7CDA3D]/10`}
                style={{
                  animation: `slide-up 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                <h4 className={`text-lg font-bold ${themeClasses.text} mb-2`}>
                  {item.degree}
                </h4>
                <p className="text-[#7CDA3D] font-semibold mb-3">
                  {item.institution}
                </p>
                <div className={`flex flex-col gap-2 text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  <span className="flex items-center gap-2">
                    <Calendar size={14} />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} />
                    {item.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Certificações */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#7CDA3D]">
                <Award size={24} className="text-[#030303]" />
              </div>
              <h3 className={`text-2xl font-bold ${themeClasses.text}`}>Certificações</h3>
            </div>
            {certifications.map((item, index) => (
              <div
                key={index}
                className={`${themeClasses.card} p-6 rounded-2xl border-2 ${
                  theme === 'light' ? 'border-gray-200' : 'border-[#7CDA3D]/20'
                } hover:border-[#7CDA3D] transition-all duration-300 hover:shadow-xl hover:shadow-[#7CDA3D]/10`}
                style={{
                  animation: `slide-up 0.6s ease-out ${(index + 2) * 0.2}s both`
                }}
              >
                <h4 className={`text-lg font-bold ${themeClasses.text} mb-2`}>
                  {item.degree}
                </h4>
                <p className="text-[#7CDA3D] font-semibold mb-3">
                  {item.institution}
                </p>
                <div className={`flex items-center gap-2 text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  <Calendar size={14} />
                  {item.period}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Idiomas */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#7CDA3D]/10 to-transparent border-2 border-[#7CDA3D]/20">
          <div className="text-center">
            <h3 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>
              Idiomas
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#7CDA3D]" />
                <span className={`text-lg ${themeClasses.text}`}>
                  <strong>Português:</strong> Nativo
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#7CDA3D]" />
                <span className={`text-lg ${themeClasses.text}`}>
                  <strong>Inglês:</strong> Intermediário (B2)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
