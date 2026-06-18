import { useState } from 'react';
import { motion } from 'motion/react';
import { Modal } from './Modal';
import { Instagram, Send, Sparkles } from 'lucide-react';

export function DeveloperModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [nome, setNome] = useState('');
  const devWhatsapp = '5541988710303';

  const handleSend = () => {
    if (!nome.trim()) return;
    const msg = `Olá, meu nome é *${nome.trim()}*.%0A%0AVi o link da *Marcílio Multimarcas* e quero um site igual!`;
    window.open(`https://wa.me/${devWhatsapp}?text=${msg}`, '_blank');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={<span className="flex items-center gap-2"><Sparkles size={20} className="text-[#C6B38E]" /> Desenvolvedor</span>}>
      <div className="space-y-6 text-center">
        
        <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/5">
          <h3 className="text-lg font-serif text-white mb-2">InteligenciArte.IA</h3>
          <p className="text-sm text-zinc-400 font-sans mb-4">
            Especialistas em experiências digitais premium e com alta conversão.
          </p>
          
          <motion.a
            href="https://www.instagram.com/inteligenciarte.ia"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-[#C6B38E] hover:text-[#F2EBE1] font-medium text-sm transition-colors border border-white/10 px-4 py-2 rounded-full hover:bg-white/[0.05]"
          >
            <Instagram size={16} />
            @inteligenciarte.ia
          </motion.a>
        </div>

        <div className="space-y-4 text-left">
          <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Crie o seu hoje</p>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-400">Como podemos te chamar?</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome completo"
              className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#C6B38E]/50 focus:bg-white/[0.05] transition-all"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSend}
            disabled={!nome.trim()}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#C6B38E] to-[#A18D61] text-[#131114] font-medium py-4 px-4 rounded-xl shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_4px_20px_rgba(198,179,142,0.3)] mt-2 transition-all"
          >
            <Send size={18} />
            Quer um site incrível como esse? Fale comigo! 🚀
          </motion.button>
        </div>
      </div>
    </Modal>
  );
}
