import { useState } from 'react';
import { motion } from 'motion/react';
import { Modal } from './Modal';
import { MessageSquare, Send } from 'lucide-react';

export function ContatoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [nome, setNome] = useState('');
  const [motivo, setMotivo] = useState('Dúvida geral');
  const whatsappNumber = '5581985090327';

  const handleSend = () => {
    if (!nome.trim()) return;
    const msg = `Olá! Meu nome é *${nome.trim()}*.%0A%0AEstou entrando em contato pelo site sobre: *${motivo}*.%0A%0AGostaria de mais informações.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Contato Direto">
      <div className="space-y-4">
        <p className="text-zinc-300 text-sm font-sans mb-4">
          Preencha os dados abaixo para enviarmos uma mensagem personalizada via WhatsApp.
        </p>

        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-400">Qual seu nome?</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#C6B38E]/50 focus:bg-white/[0.05] transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-400">Sobre o que deseja falar?</label>
          <div className="grid gap-2">
            {[
              'Informações sobre Roupas',
              'Informações sobre Calçados',
              'Informações sobre Acessórios',
              'Dúvida geral'
            ].map((op) => (
              <label key={op} className="flex items-center space-x-3 bg-white/[0.02] border border-white/5 p-3 rounded-lg cursor-pointer hover:border-[#C6B38E]/40 hover:bg-white/[0.04] transition-all">
                <input
                  type="radio"
                  name="motivo"
                  value={op}
                  checked={motivo === op}
                  onChange={(e) => setMotivo(e.target.value)}
                  className="text-[#C6B38E] focus:ring-[#C6B38E] bg-zinc-800 border-zinc-600"
                />
                <span className="text-sm text-zinc-300">{op}</span>
              </label>
            ))}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSend}
          disabled={!nome.trim()}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#C6B38E] to-[#A18D61] text-[#131114] font-medium py-3 px-4 rounded-xl shadow-md disabled:opacity-50 disabled:cursor-not-allowed mt-4 hover:shadow-[0_4px_20px_rgba(198,179,142,0.3)] transition-all"
        >
          <Send size={18} />
          Enviar Mensagem
        </motion.button>
      </div>
    </Modal>
  );
}
