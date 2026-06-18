import { motion } from 'motion/react';
import { Modal } from './Modal';
import { Award, Gem, Truck } from 'lucide-react';

export function AboutModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Quem Somos">
      <div className="space-y-6 pb-2">
        <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 group shadow-inner">
          {/* Animated subtle background instead of an image to look premium */}
          <div className="absolute inset-0 bg-luxury-gradient animate-gradient-x opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <h3 className="text-2xl font-serif text-white drop-shadow-lg scale-95 group-hover:scale-100 transition-transform duration-500">
              Marcílio Multimarcas
            </h3>
          </div>
        </div>

        <p className="text-zinc-300 font-sans text-sm leading-relaxed text-justify">
          Nascemos do desejo de entregar <span className="text-[#C6B38E] font-semibold">exclusividade</span> e <span className="text-[#C6B38E] font-semibold">luxo</span> em cada detalhe. 
          Localizada em Pau Amarelo, nossa loja é referência em sofisticação, oferecendo peças selecionadas a dedo para clientes que valorizam a verdadeira elegância acima de tudo.
        </p>

        <div className="grid grid-cols-1 gap-3">
          {[
            { icon: <Gem size={20} className="text-[#C6B38E]" />, title: "Seleção Premium", desc: "Roupas, calçados e acessórios das melhores marcas." },
            { icon: <Award size={20} className="text-[#C6B38E]" />, title: "Qualidade Impecável", desc: "Verificação rigorosa na escolha de cada peça do nosso catálogo." },
            { icon: <Truck size={20} className="text-[#C6B38E]" />, title: "Entrega Rápida", desc: "Agilidade e segurança para você brilhar o quanto antes." }
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              key={i} 
              className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all hover:bg-white/[0.04]"
            >
              <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                {item.icon}
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">{item.title}</h4>
                <p className="text-zinc-400 text-xs mt-1 leading-snug">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
