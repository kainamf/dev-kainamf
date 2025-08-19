import React, { useState, useEffect } from 'react';
import { Code2, Globe, Layers, ArrowRight, Github, Instagram, Linkedin, Monitor, Smartphone, Zap, Palette, Rocket, Star } from 'lucide-react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  const technologies = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'];
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Sites Corporativos",
      description: "Presença digital profissional para sua empresa",
      features: ["Design Responsivo", "SEO Otimizado", "Performance"]
    },
    {
      icon: Layers,
      title: "Landing Pages",
      description: "Páginas de alta conversão para campanhas",
      features: ["Alta Conversão", "A/B Testing", "Analytics"]
    },
    {
      icon: Zap,
      title: "Aplicações Web",
      description: "Sistemas completos e interativos",
      features: ["React/Next.js", "APIs REST", "Banco de Dados"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-[#7CDA3D] rounded-full opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float 6s ease-in-out infinite ${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-6 h-6 bg-[#7CDA3D]/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: isHovered ? 'scale(2)' : 'scale(1)'
        }}
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <div 
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#7CDA3D] to-[#7CDA3D]/80 rounded-3xl mb-8 transform transition-all duration-500 hover:scale-110 hover:rotate-12 shadow-2xl shadow-[#7CDA3D]/20"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Code2 size={48} className="text-[#030303] animate-pulse" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 relative">
              <span className="inline-block animate-bounce">D</span>
              <span className="inline-block animate-bounce" style={{animationDelay: '0.1s'}}>e</span>
              <span className="inline-block animate-bounce" style={{animationDelay: '0.2s'}}>s</span>
              <span className="inline-block animate-bounce" style={{animationDelay: '0.3s'}}>e</span>
              <span className="inline-block animate-bounce" style={{animationDelay: '0.4s'}}>n</span>
              <span className="inline-block animate-bounce" style={{animationDelay: '0.5s'}}>v</span>
              <span className="inline-block animate-bounce" style={{animationDelay: '0.6s'}}>o</span>
              <span className="inline-block animate-bounce" style={{animationDelay: '0.7s'}}>l</span>
              <span className="inline-block animate-bounce" style={{animationDelay: '0.8s'}}>v</span>
              <span className="inline-block animate-bounce" style={{animationDelay: '0.9s'}}>e</span>
              <span className="inline-block animate-bounce" style={{animationDelay: '1s'}}>d</span>
              <span className="inline-block animate-bounce" style={{animationDelay: '1.1s'}}>o</span>
              <span className="inline-block animate-bounce" style={{animationDelay: '1.2s'}}>r</span>
              <br />
              <span className="text-[#7CDA3D] bg-gradient-to-r from-[#7CDA3D] to-[#7CDA3D]/70 bg-clip-text text-transparent animate-pulse">
                Full Stack
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 opacity-0 animate-fade-in-up" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
              Criação de sites e landing pages modernas, responsivas e otimizadas para conversão
            </p>

            {/* Rotating Tech Display */}
            <div className="inline-flex items-center gap-2 bg-[#212328] px-6 py-3 rounded-full border border-[#7CDA3D]/30 mb-8">
              <Rocket size={20} className="text-[#7CDA3D]" />
              <span className="text-white font-medium">Especialista em:</span>
              <span className="text-[#7CDA3D] font-bold min-w-[100px] text-left transition-all duration-500">
                {technologies[currentTech]}
              </span>
            </div>
          </div>

          {/* Interactive Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-[#212328] p-8 rounded-2xl border border-[#7CDA3D]/20 hover:border-[#7CDA3D] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#7CDA3D]/20 cursor-pointer relative overflow-hidden"
                style={{
                  animation: `slide-up 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7CDA3D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <service.icon size={40} className="text-[#7CDA3D] mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#7CDA3D] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Feature List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300"
                        style={{
                          animation: `fade-in 0.3s ease-out ${featureIndex * 0.1}s both`
                        }}
                      >
                        <Star size={12} className="text-[#7CDA3D] group-hover:animate-spin" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive CTA Section */}
          <div className="bg-gradient-to-r from-[#212328] to-[#212328]/80 rounded-3xl p-12 mb-12 relative overflow-hidden border border-[#7CDA3D]/20 hover:border-[#7CDA3D]/50 transition-all duration-500 group">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-32 h-32 border-2 border-[#7CDA3D] rounded-full animate-spin-slow"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 bg-[#7CDA3D] rounded-full animate-pulse"></div>
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:scale-105 transition-transform duration-300">
                Pronto para transformar sua ideia em 
                <span className="text-[#7CDA3D] animate-pulse"> realidade?</span>
              </h2>
              <p className="text-gray-300 mb-8 text-xl max-w-2xl mx-auto">
                Vamos criar uma presença digital que impacta e converte
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://www.linkedin.com/in/kainafreitas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn bg-[#7CDA3D] text-[#030303] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#7CDA3D]/90 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl hover:shadow-[#7CDA3D]/30 relative overflow-hidden"
                >
                  <span className="relative z-10">Entre em contato</span>
                  <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                </a>

                <a
                  href="https://github.com/kainamf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#7CDA3D] text-[#7CDA3D] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#7CDA3D]/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#7CDA3D]/20 relative overflow-hidden group/btn2 flex items-center justify-center gap-3"
                >
                  <span className="relative z-10">Ver Portfólio</span>
                  <Github size={24} />
                  <div className="absolute inset-0 bg-[#7CDA3D]/5 scale-x-0 group-hover/btn2:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              </div>
            </div>
          </div>

          {/* Animated Social Links */}
          <div className="flex justify-center gap-8">
            <a 
              href="https://github.com/kainamf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-[#7CDA3D] transition-all duration-300 hover:scale-110 group bg-[#212328] px-6 py-3 rounded-full border border-[#7CDA3D]/20 hover:border-[#7CDA3D]/50 hover:shadow-lg hover:shadow-[#7CDA3D]/20"
            >
              <Github size={28} className="group-hover:animate-bounce" />
              <span className="font-medium">kainamf</span>
            </a>
            <a 
              href="https://www.instagram.com/dev.kmf/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-[#7CDA3D] transition-all duration-300 hover:scale-110 group bg-[#212328] px-6 py-3 rounded-full border border-[#7CDA3D]/20 hover:border-[#7CDA3D]/50 hover:shadow-lg hover:shadow-[#7CDA3D]/20"
            >
              <Instagram size={28} className="group-hover:animate-bounce" />
              <span className="font-medium">dev.kmf</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/kainafreitas/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-[#7CDA3D] transition-all duration-300 hover:scale-110 group bg-[#212328] px-6 py-3 rounded-full border border-[#7CDA3D]/20 hover:border-[#7CDA3D]/50 hover:shadow-lg hover:shadow-[#7CDA3D]/20"
            >
              <Linkedin size={28} className="group-hover:animate-bounce" />
              <span className="font-medium">Kainã Freitas</span>
            </a>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;