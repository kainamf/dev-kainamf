import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Globe, Zap, Code, FileText, Phone } from 'lucide-react';
import Header from '../components/common/Header';

const services = [
  {
    name: "Landing Page",
    description: "Página única estratégica, voltada para conversão. Ideal para campanhas, portfólios e captação de leads. Entrega rápida e otimizada para SEO.",
    price: "R$ 750,00"
  },
  {
    name: "Site Institucional (até 5 páginas)",
    description: "Site profissional para empresas ou marcas pessoais. Inclui páginas como Home, Sobre, Serviços e Contato. Design responsivo e otimizado para usabilidade.",
    price: "R$ 1.500,00",
    highlight: true
  },
  {
    name: "Site Profissional com Blog/Rotas Avançadas",
    description: "Plataforma completa com múltiplas rotas, seção de blog, SEO aprimorado e experiência fluida em desktop e mobile.",
    price: "R$ 2.200,00"
  },
  {
    name: "Plataforma com Login e Autenticação",
    description: "Sistema robusto com cadastro de usuários, autenticação segura (JWT/OAuth) e fluxo personalizado. Ideal para startups e negócios digitais.",
    price: "A partir de R$ 3.500,00"
  },
  {
    name: "Serviços Sob Medida",
    description: "Integrações, dashboards, automações, consultorias e soluções personalizadas, conforme a necessidade do cliente.",
    price: "À combinar"
  }
];

const benefits = [
  { icon: Globe, text: "Layout responsivo (desktop e mobile)" },
  { icon: Zap, text: "SEO básico configurado" },
  { icon: Code, text: "Otimização de performance e carregamento rápido" },
  { icon: FileText, text: "Entrega documentada e suporte inicial" },
  { icon: Phone, text: "Orientação na escolha de hospedagem e domínio" }
];

function ServicesPage() {
  // Tema fixo para página de serviços
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const themeClasses = {
    bg: 'bg-[#030303]',
    text: 'text-white',
    card: 'bg-[#212328]',
    accent: 'text-[#7CDA3D]'
  };
  const menuItems = [
    { id: 'home', label: 'Início' },
    { id: 'services', label: 'Serviços' }
  ];
  const navigate = useNavigate();
  // Função para navegação e scroll
  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'services') return;
    navigate('/');
  };
  return (
    <div className={`min-h-screen ${themeClasses.bg}`}>
      <Header
        theme={theme}
        onThemeChange={setTheme}
        menuItems={menuItems}
        activeSection={"services"}
        scrollToSection={handleNavigate}
        mobileMenuOpen={false}
        setMobileMenuOpen={() => {}}
        themeClasses={themeClasses}
      />
      <div className="h-20" />
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Services Table */}
        <div className={`${themeClasses.card} rounded-2xl shadow-xl overflow-hidden mb-12 border border-[#7CDA3D]/20`}>
          <div className="px-6 py-8">
            <h2 className={`text-2xl font-bold ${themeClasses.text} mb-8 text-center`}>
              Nossos Serviços e Investimentos
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#7CDA3D]/30">
                    <th className={`text-left py-4 px-6 font-semibold ${themeClasses.text} text-lg`}>
                      Serviço
                    </th>
                    <th className={`text-left py-4 px-6 font-semibold ${themeClasses.text} text-lg`}>
                      Descrição
                    </th>
                    <th className={`text-right py-4 px-6 font-semibold ${themeClasses.text} text-lg`}>
                      Investimento
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-[#7CDA3D]/10 hover:bg-[#7CDA3D]/5 transition-colors ${
                        service.highlight ? 'bg-[#7CDA3D]/10 border-[#7CDA3D]/40' : ''
                      }`}
                    >
                      <td className="py-6 px-6">
                        <div className={`font-semibold ${themeClasses.text} text-base`}>
                          {service.name}
                          {service.highlight && (
                            <span className="ml-2 px-2 py-1 bg-[#7CDA3D] text-[#030303] text-xs font-medium rounded-full">
                              Mais Popular
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-6 px-6">
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {service.description}
                        </p>
                      </td>
                      <td className="py-6 px-6 text-right">
                        <span className="font-bold text-[#7CDA3D] text-lg">
                          {service.price}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className={`${themeClasses.card} rounded-2xl shadow-xl overflow-hidden mb-12 border border-[#7CDA3D]/20`}>
          <div className="px-6 py-8">
            <h2 className={`text-2xl font-bold ${themeClasses.text} mb-8 text-center`}>
              Benefícios Inclusos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-[#7CDA3D]/10 border border-[#7CDA3D]/30">
                  <div className="flex-shrink-0">
                    <Check className="w-5 h-5 text-[#7CDA3D] mt-0.5" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <benefit.icon className="w-4 h-4 text-[#7CDA3D]" />
                    <span className={`font-medium text-sm ${themeClasses.text}`}>
                      {benefit.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Observations Section */}
        <div className="bg-gradient-to-r from-[#212328] to-[#030303] rounded-2xl shadow-xl text-white p-8 border border-[#7CDA3D]/20">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#7CDA3D]">
            Observações Importantes
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-[#7CDA3D] mt-2 flex-shrink-0"></div>
              <p className="text-gray-300 leading-relaxed">
                Os valores apresentados são base e podem variar conforme o escopo detalhado do projeto.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-[#7CDA3D] mt-2 flex-shrink-0"></div>
              <p className="text-gray-300 leading-relaxed">
                A hospedagem e o registro de domínio são sempre de responsabilidade do cliente.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-[#7CDA3D] mt-2 flex-shrink-0"></div>
              <p className="text-gray-300 leading-relaxed">
                Prazo de entrega definido em conjunto, conforme briefing do projeto.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-[#7CDA3D] hover:bg-[#6bb82f] transition-colors px-6 py-3 rounded-full">
              <Phone className="w-4 h-4 text-[#030303]" />
              <span className="font-medium text-[#030303]">Entre em contato para um orçamento personalizado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
