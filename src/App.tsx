import { useState, useEffect } from 'react';
import { Globe, Layers, Zap } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import InteractiveBackground from './components/InteractiveBackground';
import ProjectShowcase from './components/ProjectShowcase';
import ContactForm from './components/ContactForm';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'light' || stored === 'dark' ? stored : 'dark';
  });
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

  // Persistir tema no localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const getThemeClasses = () => {
    switch (theme) {
      case 'light':
        return {
          bg: 'bg-gray-50',
          text: 'text-gray-900',
          card: 'bg-white',
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
      <InteractiveBackground theme={theme} />
      <ThemeToggle theme={theme} onThemeChange={setTheme} />
      <Navigation
        menuItems={menuItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        themeClasses={themeClasses}
      />
      {/* Mouse Follower */}
      <div
        className="fixed w-6 h-6 bg-[#7CDA3D]/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: isHovered ? 'scale(2)' : 'scale(1)'
        }}
      />
      <div className="relative z-10 flex flex-col gap-8 md:gap-10 lg:gap-12">
        <HeroSection
          theme={theme}
          themeClasses={themeClasses}
          scrollY={scrollY}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          technologies={technologies}
          currentTech={currentTech}
          scrollToSection={scrollToSection}
        />
        <div className="mt-8" />
        <SkillsSection theme={theme} themeClasses={themeClasses} />
        <div className="mt-8" />
        <ServicesSection services={services} theme={theme} themeClasses={themeClasses} />
        <div className="mt-8" />
        <section id="projects" className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-6xl">
            <ProjectShowcase theme={theme} themeClasses={themeClasses} />
          </div>
        </section>
        <div className="mt-8" />
        <section id="contact" className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-4xl">
            <ContactForm />
          </div>
        </section>
        <div className="mt-8" />
        <Footer theme={theme} themeClasses={themeClasses} />
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