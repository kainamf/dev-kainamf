import React from 'react';
import { Star } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

interface ServicesSectionProps {
  services: Service[];
  theme: 'dark' | 'light';
  themeClasses: { card: string; text: string };
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services, theme, themeClasses }) => (
  <section id="services" className="flex items-center justify-center p-4 pt-4">
    <div className="w-full max-w-6xl">
  <div className="text-center mb-10">
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
            className={`group ${themeClasses.card} p-8 rounded-2xl border ${theme === 'light' ? 'border-[#7CDA3D] border-2' : 'border-[#7CDA3D]/20'} hover:border-[#7CDA3D] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#7CDA3D]/20 cursor-pointer relative overflow-hidden`}
            style={{
              animation: `slide-up 0.6s ease-out ${index * 0.2}s both`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#7CDA3D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <service.icon size={40} className="text-[#7CDA3D] mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className={`${theme === 'light' ? 'text-black' : themeClasses.text} font-bold text-xl mb-3 group-hover:text-[#7CDA3D] transition-colors duration-300 text-center`}>
                {service.title}
              </h3>
              <p className={`${theme === 'light' ? 'text-black' : 'text-gray-400'} mb-4 group-hover:text-gray-300 transition-colors duration-300 min-h-[48px] flex items-center`}> 
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className={`flex items-center gap-2 text-sm ${theme === 'light' ? 'text-black' : 'text-gray-400'} group-hover:text-gray-400 transition-colors duration-300`}
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
);

export default ServicesSection;
