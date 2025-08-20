import React, { useState } from 'react';
import { ExternalLink, Github, Monitor, Smartphone, Zap, Star } from 'lucide-react';


interface ProjectShowcaseProps {
  theme: 'dark' | 'light' | 'neon';
  themeClasses: { text: string; accent: string };
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ theme, themeClasses }) => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
  title: "Psi Lara Frasson",
      description: "Site institucional para psicóloga, com blog, formulário de contato e área de artigos.",
  image: "/assets/images/psilarafrasson.png",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      features: ["Blog", "Contato", "Responsivo"],
      category: "Frontend",
      color: "#7CDA3D",
      github: "https://github.com/kainamf/psilarafrasson",
      deploy: "https://www.larafrassonpsicologainfantil.com/"
    },
    {
      id: 2,
      title: "Tríade da Apresentação Pessoal",
      description: "Landing page interativa para apresentação de conteúdo e captação de leads.",
  image: "/assets/images/triade.png",
      tech: ["React","Next.js", "TypeScript", "Tailwind CSS"],
      features: ["Landing Page", "Leads", "Performance"],
      category: "Frontend",
      color: "#7CDA3D",
      github: "https://github.com/kainamf/triade-da-apresentacao-pessoal",
      deploy: "https://triade-da-apresentacao-pessoal.vercel.app/"
    },
    {
      id: 3,
      title: "Psi Gabrielle Mazulo",
      description: "Site profissional para psicóloga, com informações, contato e design moderno.",
  image: "/assets/images/psigabrielle.png",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      features: ["Institucional", "Contato", "SEO"],
      category: "Frontend",
      color: "#7CDA3D",
      github: "https://github.com/kainamf/psigabrielle",
      deploy: "https://psigabriellemazulo.vercel.app/"
    }
  ];

  return (
    <div className="mb-16">

      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold ${themeClasses.text} mb-4`}>
          Projetos em <span className={themeClasses.accent}>Destaque</span>
        </h2>
        <p className={`text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
          Alguns exemplos do que posso criar para você
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Project Cards */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`
                p-6 rounded-2xl cursor-pointer transition-all duration-500 border-2
                ${activeProject === index 
                  ? 'bg-[#212328] border-[#7CDA3D] shadow-2xl shadow-[#7CDA3D]/20 scale-105' 
                  : 'bg-[#212328]/50 border-transparent hover:border-[#7CDA3D]/50 hover:bg-[#212328]'
                }
              `}
              onClick={() => setActiveProject(index)}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: project.color }}
                >
                  {project.category === 'Mobile' ? (
                    <Smartphone size={24} className="text-white" />
                  ) : project.category === 'Fullstack' ? (
                    <Zap size={24} className="text-white" />
                  ) : (
                    <Monitor size={24} className="text-white" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-white font-bold text-lg">{project.title}</h3>
                    <span 
                      className="px-2 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: project.color }}
                    >
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-[#030303] text-[#7CDA3D] text-xs rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-1">
                        <Star size={12} className="text-[#7CDA3D]" />
                        <span className="text-gray-400 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Preview */}
        <div className="relative">
          <div className="bg-[#212328] rounded-3xl p-8 border border-[#7CDA3D]/20 overflow-hidden">
            <div className="relative">
              <img 
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-64 object-cover rounded-2xl transition-all duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
              
              {/* Action Buttons */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <a
                  href={projects[activeProject].deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#7CDA3D] text-[#030303] rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                  title="Ver site ao vivo"
                >
                  <ExternalLink size={18} />
                </a>
                <a
                  href={projects[activeProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:scale-110 transition-transform duration-300"
                  title="Ver código no GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {projects[activeProject].title}
              </h3>
              <p className="text-gray-400 mb-4">
                {projects[activeProject].description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {projects[activeProject].tech.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-[#030303] text-[#7CDA3D] text-sm rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center gap-2 text-[#7CDA3D] hover:text-white transition-colors font-medium">
                  Ver Detalhes
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;