import React, { useState, useEffect } from 'react';
import { Code2, Globe, Layers, ArrowRight, Github, Instagram, Monitor, Smartphone, Zap, Palette, Rocket, Star, Menu, X } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import SkillsOrb from './components/SkillsOrb';
import InteractiveBackground from './components/InteractiveBackground';
import ProjectShowcase from './components/ProjectShowcase';
import ContactForm from './components/ContactForm';
import Logo from './components/Logo'

function App() {
  const [theme, setTheme] = useState<'dark' | 'light' | 'neon'>('dark');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const technologies = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'];
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getThemeClasses = () => {
    switch (theme) {
      case 'light':
        return {
          bg: 'bg-gray-50',
          text: 'text-gray-900',
          card: 'bg-white',
          accent: 'text-[#7CDA3D]'
        };
      case 'neon':
        return {
          bg: 'bg-black',
          text: 'text-white',
          card: 'bg-gray-900',
          accent: 'text-[#7CDA3D]'
        };
      default:
        return {
          bg: 'bg-[#030303]',
          text: 'text-white',
          card: 'bg-[#212328]',
          accent: 'text-[#7CDA3D]'
        };
    }
  };

  const themeClasses = getThemeClasses();

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

  const menuItems = [
    { id: 'home', label: 'Início' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Serviços' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };


  return (
    <div className={`min-h-screen ${themeClasses.bg} relative overflow-hidden transition-all duration-500`}>
      {/* Interactive Background */}
      <InteractiveBackground theme={theme} />

      {/* Theme Toggle */}
      <ThemeToggle theme={theme} onThemeChange={setTheme} />

      {/* Navigation */}
      <nav className="fixed top-6 left-6 z-40">
        <div className="flex items-center gap-4">
          <Logo size="sm" />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full p-2 border border-white/10">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium
                  ${activeSection === item.id 
                    ? 'bg-[#7CDA3D] text-black' 
                    : `${themeClasses.text} hover:bg-white/10`
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 bg-black/20 backdrop-blur-md rounded-full border border-white/10 text-white"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 bg-black/90 backdrop-blur-md rounded-2xl p-4 border border-white/10 min-w-[200px]">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium
                  ${activeSection === item.id 
                    ? 'bg-[#7CDA3D] text-black' 
                    : 'text-white hover:bg-white/10'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Mouse Follower */}
      <div
        className="fixed w-6 h-6 bg-[#7CDA3D]/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: isHovered ? 'scale(2)' : 'scale(1)'
        }}
      />

      <div className="relative z-10">
        {/* Hero Section */}
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
            
            <p className={`text-xl md:text-2xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} max-w-3xl mx-auto leading-relaxed mb-8 opacity-0 animate-fade-in-up`} style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
              Criação de sites e landing pages modernas, responsivas e otimizadas para conversão
            </p>

            <div className={`inline-flex items-center gap-2 ${themeClasses.card} px-6 py-3 rounded-full border border-[#7CDA3D]/30 mb-8`}>
              <Rocket size={20} className="text-[#7CDA3D]" />
              <span className={`${themeClasses.text} font-medium`}>Especialista em:</span>
              <span className="text-[#7CDA3D] font-bold min-w-[100px] text-left transition-all duration-500">
                {technologies[currentTech]}
              </span>
            </div>

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

        {/* Skills Section */}
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

        {/* Services Section */}
        <section id="services" className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-6xl">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold ${themeClasses.text} mb-6`}>
                O que posso fazer por <span className="text-[#7CDA3D]">você</span>
              </h2>
              <p className={`text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} max-w-2xl mx-auto`}>
                Soluções completas para sua presença digital
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group ${themeClasses.card} p-8 rounded-2xl border border-[#7CDA3D]/20 hover:border-[#7CDA3D] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#7CDA3D]/20 cursor-pointer relative overflow-hidden`}
                  style={{
                    animation: `slide-up 0.6s ease-out ${index * 0.2}s both`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7CDA3D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <service.icon size={40} className="text-[#7CDA3D] mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <h3 className={`${themeClasses.text} font-bold text-xl mb-3 group-hover:text-[#7CDA3D] transition-colors duration-300`}>
                      {service.title}
                    </h3>
                    <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} mb-4 group-hover:text-gray-300 transition-colors duration-300`}>
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className={`flex items-center gap-2 text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-500'} group-hover:text-gray-400 transition-colors duration-300`}
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
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-6xl">
            <ProjectShowcase />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-4xl">
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <Logo size="md" />
              
              <div className="flex justify-center gap-8">
                <a 
                  href="https://github.com/kainamf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} hover:text-[#7CDA3D] transition-all duration-300 hover:scale-110 group ${themeClasses.card} px-6 py-3 rounded-full border border-[#7CDA3D]/20 hover:border-[#7CDA3D]/50 hover:shadow-lg hover:shadow-[#7CDA3D]/20`}
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
      </div>

      {/* Custom Styles */}
      <style>{`
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;