import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simular envio
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-[#212328] rounded-3xl p-8 border border-[#7CDA3D]/20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#7CDA3D] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#7CDA3D] rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vamos conversar sobre seu <span className="text-[#7CDA3D]">projeto?</span>
          </h2>
          <p className="text-gray-400">
            Conte-me sua ideia e vamos transformá-la em realidade
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div className="relative">
            <div className={`
              flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300
              ${focusedField === 'name' 
                ? 'border-[#7CDA3D] bg-[#7CDA3D]/5' 
                : 'border-gray-600 bg-[#030303]/50'
              }
            `}>
              <User size={20} className={focusedField === 'name' ? 'text-[#7CDA3D]' : 'text-gray-400'} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                placeholder="Seu nome"
                required
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <div className={`
              flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300
              ${focusedField === 'email' 
                ? 'border-[#7CDA3D] bg-[#7CDA3D]/5' 
                : 'border-gray-600 bg-[#030303]/50'
              }
            `}>
              <Mail size={20} className={focusedField === 'email' ? 'text-[#7CDA3D]' : 'text-gray-400'} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                placeholder="seu@email.com"
                required
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
              />
            </div>
          </div>

          {/* Mensagem */}
          <div className="relative">
            <div className={`
              flex items-start gap-3 p-4 rounded-xl border-2 transition-all duration-300
              ${focusedField === 'message' 
                ? 'border-[#7CDA3D] bg-[#7CDA3D]/5' 
                : 'border-gray-600 bg-[#030303]/50'
              }
            `}>
              <MessageSquare size={20} className={`mt-1 ${focusedField === 'message' ? 'text-[#7CDA3D]' : 'text-gray-400'}`} />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                placeholder="Conte-me sobre seu projeto..."
                required
                rows={4}
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`
              w-full p-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden
              ${status === 'success' 
                ? 'bg-green-500 text-white' 
                : status === 'error'
                ? 'bg-red-500 text-white'
                : 'bg-[#7CDA3D] text-[#030303] hover:bg-[#7CDA3D]/90 hover:scale-105 hover:shadow-2xl hover:shadow-[#7CDA3D]/30'
              }
              ${status === 'sending' ? 'animate-pulse' : ''}
            `}
          >
            {status === 'sending' && (
              <div className="animate-spin w-5 h-5 border-2 border-[#030303] border-t-transparent rounded-full" />
            )}
            {status === 'success' && <CheckCircle size={20} />}
            {status === 'error' && <AlertCircle size={20} />}
            {status === 'idle' && <Send size={20} />}
            
            <span>
              {status === 'sending' && 'Enviando...'}
              {status === 'success' && 'Mensagem Enviada!'}
              {status === 'error' && 'Erro ao Enviar'}
              {status === 'idle' && 'Enviar Mensagem'}
            </span>

            {/* Hover Effect */}
            {status === 'idle' && (
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            )}
          </button>
        </form>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center">
            Obrigado! Entrarei em contato em breve 🚀
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;