import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Globe, Layers, Zap } from 'lucide-react';
import Header from './components/common/Header';
import InteractiveBackground from './components/common/InteractiveBackground';
import ProjectShowcaseSection from './components/home/ProjectShowcaseSection/ProjectShowcaseSection';
import HeroSection from './components/home/HeroSection/HeroSection';
import SkillsSection from './components/home/SkillsSection/SkillsSection';
import ServicesSection from './components/home/ServicesSection/ServicesSection';
import FooterSection from './components/home/FooterSection/FooterSection';
import ContactSection from './components/home/ContactSection/ContactSection';

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'light' || stored === 'dark' ? stored : 'dark';
  });
  const [isHovered, setIsHovered] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const technologies = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
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

  // Scroll-based section detection
  useEffect(() => {
    const sectionIds = ['home', 'skills', 'services', 'projects-section', 'contact-section'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top + window.scrollY - 80 <= scrollPosition) {
            current = id;
          }
        }
      }
      // Map DOM ids to menu ids
      const idMap: Record<string, string> = {
        'home': 'home',
        'skills': 'skills',
        'services': 'services',
        'projects-section': 'projects',
        'contact-section': 'contact',
      };
      setActiveSection(idMap[current]);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detecta navegação vinda de outra página e faz scroll para a seção
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

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
    // Mapeia os ids do menu para os ids reais das seções
    const idMap: Record<string, string> = {
      home: 'home',
      skills: 'skills',
      services: 'services',
      projects: 'projects-section',
      contact: 'contact-section',
    };
    const element = document.getElementById(idMap[sectionId] || sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };


  return (
    <div className={`min-h-screen ${themeClasses.bg} relative overflow-hidden transition-all duration-500`}>
      <InteractiveBackground theme={theme} />
      <Header
        theme={theme}
        onThemeChange={setTheme}
        menuItems={menuItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        themeClasses={themeClasses}
      />
      <div className="relative z-10 flex flex-col">
        <div className="mb-8">
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
        </div>
        <div className="mb-8">
          <SkillsSection theme={theme} themeClasses={themeClasses} />
        </div>
        <div className="mb-8">
          <ServicesSection services={services} theme={theme} themeClasses={themeClasses} />
        </div>
        <div className="mb-8">
          <section id="projects-section" className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-6xl">
              <ProjectShowcaseSection theme={theme} themeClasses={themeClasses} />
            </div>
          </section>
        </div>
        <div className="mb-2">
          <section id="contact-section" className="flex items-center justify-center p-4">
            <div className="w-full max-w-4xl">
              <ContactSection />
            </div>
          </section>
        </div>
        <FooterSection theme={theme} themeClasses={themeClasses} />
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