import React, { useState, useEffect } from 'react';
import { Code2, Database, Globe, Smartphone, Zap, Layers, Cpu, Cloud } from 'lucide-react';

const SkillsOrb: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const skills = [
    { icon: Code2, name: 'Frontend', color: '#7CDA3D', description: 'React, Next.js, TypeScript' },
    { icon: Database, name: 'Backend', color: '#FF6B6B', description: 'Node.js, Express, GraphQL' },
    { icon: Cloud, name: 'AWS', color: '#FF9900', description: 'Lambda, S3, DynamoDB, API Gateway' },
    { icon: Smartphone, name: 'Mobile', color: '#45B7D1', description: 'React Native' },
    { icon: Zap, name: 'Serverless', color: '#FFA726', description: 'Serverless Framework' },
    { icon: Layers, name: 'DevOps', color: '#AB47BC', description: 'Docker, CI/CD, GitHub Actions' },
    { icon: Cpu, name: 'APIs', color: '#EF5350', description: 'REST, GraphQL, Microservices' },
    { icon: Globe, name: 'Testing', color: '#4ECDC4', description: 'Jest, Cypress, Playwright' }
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveSkill((prev) => (prev + 1) % skills.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered, skills.length]);

  return (
    <div
      className="relative w-80 h-80 mx-auto mb-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Central Hub removido */}

      {/* Skill Orbs */}
      {skills.map((skill, index) => {
        const angle = (index * 360) / skills.length;
        const radius = 120;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        const isActive = index === activeSkill;

        return (
          <div
            key={index}
            className={`
              absolute w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 group
              ${isActive ? 'scale-125 shadow-2xl' : 'scale-100 hover:scale-110'}
              z-10
            `}
            style={{
              left: `calc(50% + ${x}px - 32px)`,
              top: `calc(50% + ${y}px - 32px)`,
              backgroundColor: skill.color,
              boxShadow: isActive ? `0 0 30px ${skill.color}50` : `0 0 15px ${skill.color}30`,
              animation: isActive ? 'pulse 2s infinite' : 'none'
            }}
            onClick={() => setActiveSkill(index)}
            onMouseEnter={() => setActiveSkill(index)}
          >
            <skill.icon
              size={24}
              className={`text-white transition-transform duration-300 ${isActive ? 'animate-bounce' : 'group-hover:scale-110'}`}
            />
            {/* Connection Line */}
            <div
              className={`absolute w-px bg-gradient-to-r from-transparent via-white/30 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-20'}`}
              style={{
                height: `${radius - 40}px`,
                left: '50%',
                top: '50%',
                transformOrigin: 'top',
                transform: `rotate(${angle + 180}deg) translateX(-50%)`
              }}
            />
          </div>
        );
      })}

      {/* Tooltip global, posicionado sobre o orb ativo/hovered */}
      {(() => {
        const angle = (activeSkill * 360) / skills.length;
        const radius = 120;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        return (
          <div
            className="pointer-events-none z-50 absolute"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y + 48}px)`,
              transform: 'translate(-50%, 0)'
            }}
          >
            <div className="bg-gray-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg border border-[1px] border-[#388e3c]">
              <div className="font-bold text-white">{skills[activeSkill].name}</div>
              <div className="text-white">{skills[activeSkill].description}</div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default SkillsOrb;