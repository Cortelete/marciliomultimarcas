import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, MapPin, MessageCircle, Star, Sparkles } from 'lucide-react';

import { ContatoModal } from './components/ContatoModal';
import { LocationModal } from './components/LocationModal';
import { ReviewModal } from './components/ReviewModal';
import { AboutModal } from './components/AboutModal';
import { DeveloperModal } from './components/DeveloperModal';

export default function App() {
  const [modals, setModals] = useState({
    contato: false,
    localizacao: false,
    avaliacao: false,
    sobre: false,
    developer: false,
  });

  const openModal = (name: keyof typeof modals) => setModals({ ...modals, [name]: true });
  const closeModal = (name: keyof typeof modals) => setModals({ ...modals, [name]: false });

  return (
    <div className="h-[100dvh] overflow-hidden bg-luxury-gradient animate-gradient-x flex items-center justify-center p-2 sm:p-4 lg:p-8 font-sans selection:bg-[#C6B38E]/30 selection:text-white relative">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-sm sm:max-w-md mx-auto relative z-10 max-h-full flex flex-col"
      >
        <div className="bg-[#050507]/40 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-4 sm:p-6 md:p-8 overflow-y-auto w-full max-h-full flex flex-col justify-between scrollbar-hide relative group/main">
          {/* Subtle overlay border reflection */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none border border-white/[0.03] inner-shadow" />
          
          {/* Profile Section */}
          <div className="text-center w-full flex-shrink-0">
            <motion.div 
              className="relative inline-block cursor-pointer mx-auto group"
              onClick={() => openModal('sobre')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-[#C6B38E] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative rounded-full p-[2px] bg-gradient-to-tr from-[#9E8D61] via-[#F2EBE1] to-[#9E8D61] shadow-[0_8px_24px_rgba(0,0,0,0.6)] animate-coin-spin mx-auto w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32">
                <img 
                  src="/logo.png" 
                  alt="Marcílio Multimarcas Logo" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23111'/%3E%3Ctext x='50' y='55' font-family='serif' font-size='40' fill='%23C6B38E' text-anchor='middle'%3EMM%3C/text%3E%3C/svg%3E";
                  }}
                  className="w-full h-full rounded-full object-cover border-[4px] border-[#131114]" 
                />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-3 sm:mt-4 md:mt-6 text-xl sm:text-2xl md:text-3xl font-serif font-bold text-luxury-gradient animate-gradient-text leading-tight"
            >
              Marcílio Multimarcas
            </motion.h1>
            
            <div className="mt-2 sm:mt-3 md:mt-4 space-y-1 sm:space-y-1.5 text-zinc-300 text-xs sm:text-sm md:text-base">
              <p className="flex items-center justify-center gap-1.5 sm:gap-2">
                👕 Roupas, calçados e acessórios
              </p>
              <p className="flex items-center justify-center gap-1.5 sm:gap-2">
                🚚 Entrega rápida
              </p>
              <p className="flex items-center justify-center gap-1 sm:gap-2 text-[10px] sm:text-xs md:text-sm text-zinc-400 mt-1 sm:mt-2">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C6B38E]" /> Paranatama, 31, Pau Amarelo, PE
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-4 sm:mt-6 md:mt-8 space-y-2 sm:space-y-3 flex-shrink overflow-y-auto overflow-x-hidden w-full px-2 sm:px-4 mx-auto pb-2">
            <LinkButton 
              icon={<Instagram className="w-4 h-4 sm:w-5 sm:h-5" />} 
              text="Instagram" 
              onClick={() => window.open('https://www.instagram.com/marciliomultimarcas_tmk/', '_blank')} 
            />
            <LinkButton 
              icon={<MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />} 
              text="Contato" 
              onClick={() => openModal('contato')} 
            />
            <LinkButton 
              icon={<MapPin className="w-4 h-4 sm:w-5 sm:h-5" />} 
              text="Localização" 
              onClick={() => openModal('localizacao')} 
            />
            <LinkButton 
              icon={<Star className="w-4 h-4 sm:w-5 sm:h-5" />} 
              text="Avaliação" 
              onClick={() => openModal('avaliacao')} 
            />
          </div>

          {/* Footer */}
          <div className="mt-3 sm:mt-4 md:mt-6 pt-2 sm:pt-3 border-t border-white/10 text-center flex-shrink-0 relative z-10">
            <button 
              onClick={() => openModal('developer')}
              className="text-[9.5px] sm:text-[10px] md:text-xs text-[#C6B38E]/70 hover:text-[#F2EBE1] transition-colors flex items-center justify-center gap-1.5 mx-auto font-medium tracking-widest uppercase"
            >
              Desenvolvido por InteligenciArte.IA <Sparkles size={10} className="text-[#C6B38E] animate-pulse" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modals Container */}
      <ContatoModal isOpen={modals.contato} onClose={() => closeModal('contato')} />
      <LocationModal isOpen={modals.localizacao} onClose={() => closeModal('localizacao')} />
      <ReviewModal isOpen={modals.avaliacao} onClose={() => closeModal('avaliacao')} />
      <AboutModal isOpen={modals.sobre} onClose={() => closeModal('sobre')} />
      <DeveloperModal isOpen={modals.developer} onClose={() => closeModal('developer')} />
    </div>
  );
}

function LinkButton({ icon, text, onClick }: { icon: React.ReactNode; text: string; onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full relative group overflow-hidden bg-white/[0.02] border border-white/5 hover:border-[#C6B38E]/30 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 md:p-5 flex items-center justify-between transition-all duration-500 shadow-sm"
    >
      {/* Sleek diagonal reflection animation effect */}
      <div className="absolute inset-0 -translate-x-[150%] group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      
      <div className="flex items-center gap-3 sm:gap-4 relative z-10 w-full text-zinc-300 group-hover:text-white transition-colors duration-500">
        <div className="p-1.5 sm:p-2 md:p-2.5 flex items-center justify-center">
          <div className="text-[#C6B38E] group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
        </div>
        <span className="font-serif font-medium text-[13px] sm:text-sm md:text-base tracking-wider flex-1 text-center pr-8 sm:pr-12 text-zinc-300 group-hover:text-[#F2EBE1] transition-colors duration-500">{text}</span>
      </div>
    </motion.button>
  );
}
