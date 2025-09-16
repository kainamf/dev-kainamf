import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';


interface ProjectShowcaseSectionProps {
  theme: 'dark' | 'light';
  themeClasses: { text: string; accent: string };
}

const ProjectShowcaseSection: React.FC<ProjectShowcaseSectionProps> = ({ theme, themeClasses }) => {
  const projects = [
    {
      id: 1,
      title: "Psi Lara Frasson",
  description: "Site profissional para psicóloga Lara Frasson, com presença digital completa e institucional.",
      image: "/assets/images/psilarafrasson.png",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      features: ["CTAs", "Whatsapp", "Instagram", "Google Drive", "Google Maps", "Responsivo", "Leads", "Performance"],
  // category removido
      color: "#7CDA3D",
      github: "https://github.com/kainamf/psilarafrasson",
      deploy: "https://www.larafrassonpsicologainfantil.com/"
    },
    {
      id: 2,
      title: "Tríade da Apresentação Pessoal",
  description: "Site para o evento Tríade da Apresentação Pessoal, realizado no Vogue Square, com foco em divulgação e experiência do participante.",
      image: "/assets/images/triade.png",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      features: ["UTicket", "Google Maps", "Whatsapp", "CTAs", "Material de divulgação", "Responsivo", "Evento"],
  // category removido
      color: "#7CDA3D",
      github: "https://github.com/kainamf/triade-da-apresentacao-pessoal",
      deploy: "https://triade-da-apresentacao-pessoal.vercel.app/"
    },
    {
      id: 3,
      title: "Psi Gabrielle Mazulo",
  description: "Site profissional para psicóloga Gabrielle Mazulo, com identidade visual personalizada e institucional.",
      image: "/assets/images/psigabrielle.png",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      features: ["CTAs", "Whatsapp", "Instagram", "Google Maps", "Responsivo", "Performance"],
  // category removido
      color: "#7CDA3D",
      github: "https://github.com/kainamf/psigabrielle",
      deploy: "https://psigabriellemazulo.vercel.app/"
    }
  ];
  // Removido: lógica de destaque automático e interação manual


  return (
    <div>

      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold ${themeClasses.text} mb-4`}>
          Projetos em <span className={themeClasses.accent}>Destaque</span>
        </h2>
        <p className={`text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
          Alguns exemplos do que posso criar para você
        </p>
      </div>

  <div className="flex flex-col gap-8 items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 sm:p-6 rounded-2xl bg-[#212328]/80 border-2 border-transparent hover:border-[#7CDA3D]/50 transition-all duration-500 shadow-lg flex flex-col h-full w-full max-w-6xl min-h-[700px] items-center text-center"
          >
            <div className="w-full aspect-[16/9] mb-4 rounded-xl overflow-hidden bg-[#18191c] relative flex items-center justify-center overflow-x-hidden">
              <iframe
                src={project.deploy}
                title={project.title}
                className="object-cover w-full h-full"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups"
                frameBorder={0}
                allowFullScreen
                style={{ maxWidth: '100vw', height: '100%' }}
                onError={(e) => {
                  // Fallback para imagem caso o iframe não carregue
                  const target = e.target as HTMLIFrameElement;
                  if (target && target.parentElement) {
                    const img = document.createElement('img');
                    img.src = project.image;
                    img.alt = project.title;
                    img.className = 'object-cover w-full h-full';
                    img.loading = 'lazy';
                    target.parentElement.replaceChild(img, target);
                  }
                }}
              />
              <div className="absolute bottom-2 right-2 flex gap-2 z-10">
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#7CDA3D] text-[#030303] rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                  title="Ver site ao vivo"
                >
                  <ExternalLink size={18} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:scale-110 transition-transform duration-300"
                  title="Ver código no GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
            </div>
            <h3 className="text-white font-bold text-lg mb-1 truncate text-center">{project.title}</h3>
            <p className="text-white mb-3 text-sm sm:text-base break-words md:min-h-[96px] flex items-center justify-center text-center">{project.description}</p>
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3 justify-center text-center">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-[#030303] text-[10px] sm:text-xs rounded-lg font-medium text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2">
              {project.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-1 justify-center text-center">
                  <Star size={12} className="text-[#7CDA3D]" />
                  <span className="text-white text-[10px] sm:text-xs">{feature}</span>
                </div>
              ))}
            </div>
            {/* Botões agora estão sobre a imagem */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcaseSection;