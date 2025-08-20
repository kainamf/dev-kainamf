import React, { useState } from 'react';
import Logo from './Logo';
import { Copy, Check, ArrowLeft } from 'lucide-react';

interface LogoShowcaseProps {
  onBack?: () => void;
}

const LogoShowcase: React.FC<LogoShowcaseProps> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    const logoCode = `import Logo from './components/Logo';

// Uso básico
<Logo />

// Diferentes tamanhos
<Logo size="sm" />
<Logo size="md" />
<Logo size="lg" />
<Logo size="xl" />

// Diferentes variantes
<Logo variant="full" />
<Logo variant="icon" />
<Logo variant="text" />

// Sem animação
<Logo animated={false} />`;

    navigator.clipboard.writeText(logoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#030303] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {onBack && (
            <button
              onClick={onBack}
              className="absolute top-8 left-8 flex items-center gap-2 bg-[#212328] text-white px-4 py-2 rounded-lg hover:bg-[#7CDA3D] hover:text-[#030303] transition-colors"
            >
              <ArrowLeft size={16} />
              Voltar
            </button>
          )}
          <h1 className="text-5xl font-bold text-white mb-4">
            Logo <span className="text-[#7CDA3D]">DevKMF</span>
          </h1>
          <p className="text-gray-400 text-xl">
            Sistema de identidade visual completo e responsivo
          </p>
        </div>

        {/* Logo Principal */}
        <div className="bg-[#212328] rounded-3xl p-12 mb-12 text-center border border-[#7CDA3D]/20">
          <h2 className="text-2xl font-bold text-white mb-8">Logo Principal</h2>
          <div className="flex justify-center mb-8">
            <Logo size="xl" />
          </div>
          <p className="text-gray-400">
            Versão completa com ícone, texto e subtítulo
          </p>
        </div>

        {/* Variações de Tamanho */}
        <div className="bg-[#212328] rounded-3xl p-12 mb-12 border border-[#7CDA3D]/20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Tamanhos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center">
              <Logo size="sm" />
              <p className="text-gray-400 text-sm mt-2">Small</p>
            </div>
            <div className="text-center">
              <Logo size="md" />
              <p className="text-gray-400 text-sm mt-2">Medium</p>
            </div>
            <div className="text-center">
              <Logo size="lg" />
              <p className="text-gray-400 text-sm mt-2">Large</p>
            </div>
            <div className="text-center">
              <Logo size="xl" />
              <p className="text-gray-400 text-sm mt-2">Extra Large</p>
            </div>
          </div>
        </div>

        {/* Variações de Estilo */}
        <div className="bg-[#212328] rounded-3xl p-12 mb-12 border border-[#7CDA3D]/20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Variações</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#030303] rounded-2xl">
              <Logo variant="full" size="lg" />
              <p className="text-gray-400 text-sm mt-4">Completa</p>
            </div>
            <div className="text-center p-6 bg-[#030303] rounded-2xl">
              <Logo variant="icon" size="lg" />
              <p className="text-gray-400 text-sm mt-4">Apenas Ícone</p>
            </div>
            <div className="text-center p-6 bg-[#030303] rounded-2xl">
              <Logo variant="text" size="lg" />
              <p className="text-gray-400 text-sm mt-4">Apenas Texto</p>
            </div>
          </div>
        </div>

        {/* Demonstração em Diferentes Fundos */}
        <div className="bg-[#212328] rounded-3xl p-12 mb-12 border border-[#7CDA3D]/20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Versatilidade</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#030303] p-8 rounded-2xl text-center">
              <Logo size="lg" />
              <p className="text-gray-400 text-sm mt-4">Fundo Escuro</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center">
              <div style={{ filter: 'invert(1)' }}>
                <Logo size="lg" animated={false} />
              </div>
              <p className="text-gray-600 text-sm mt-4">Fundo Claro</p>
            </div>
            <div className="bg-gradient-to-br from-[#7CDA3D]/20 to-[#7CDA3D]/5 p-8 rounded-2xl text-center">
              <Logo size="lg" />
              <p className="text-gray-400 text-sm mt-4">Fundo Colorido</p>
            </div>
          </div>
        </div>

        {/* Especificações Técnicas */}
        <div className="bg-[#212328] rounded-3xl p-12 mb-12 border border-[#7CDA3D]/20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Especificações</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[#7CDA3D] font-bold mb-4">Cores</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#7CDA3D] rounded"></div>
                  <span className="text-white font-mono">#7CDA3D</span>
                  <span className="text-gray-400">Verde Principal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#030303] rounded border border-gray-600"></div>
                  <span className="text-white font-mono">#030303</span>
                  <span className="text-gray-400">Preto</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#212328] rounded"></div>
                  <span className="text-white font-mono">#212328</span>
                  <span className="text-gray-400">Cinza Escuro</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[#7CDA3D] font-bold mb-4">Características</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Totalmente responsivo</li>
                <li>• Animações suaves</li>
                <li>• Múltiplas variações</li>
                <li>• Fácil implementação</li>
                <li>• Otimizado para web</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Código de Uso */}
        <div className="bg-[#212328] rounded-3xl p-12 border border-[#7CDA3D]/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Como Usar</h2>
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-2 bg-[#7CDA3D] text-[#030303] px-4 py-2 rounded-lg font-medium hover:bg-[#7CDA3D]/90 transition-colors"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copiado!' : 'Copiar Código'}
            </button>
          </div>
          <div className="bg-[#030303] rounded-xl p-6 overflow-x-auto">
            <pre className="text-[#7CDA3D] text-sm">
{`import Logo from './components/Logo';

// Uso básico
<Logo />

// Diferentes tamanhos
<Logo size="sm" />
<Logo size="md" />
<Logo size="lg" />
<Logo size="xl" />

// Diferentes variantes
<Logo variant="full" />
<Logo variant="icon" />
<Logo variant="text" />

// Sem animação
<Logo animated={false} />`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;