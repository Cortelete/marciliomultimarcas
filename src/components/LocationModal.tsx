import { motion } from 'motion/react';
import { Modal } from './Modal';
import { Map, Navigation } from 'lucide-react';

export function LocationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Nossa Localização">
      <div className="space-y-5">
        <div className="text-center space-y-1">
          <h3 className="font-serif text-lg text-white">Marcilio Multimarcas</h3>
          <p className="text-sm text-zinc-400 font-sans">
            Rua Paranatama, 31<br />
            Pau Amarelo, Paulista - PE
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-white/10 aspect-video relative shadow-inner">
          <iframe
            src="https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1781732582326!5m2!1spt-BR!2sbr!6m8!1m7!1seHc-d7B2ftC_INAC0my0vQ!2m2!1d-7.91466049071767!2d-34.83794771555962!3f275.1772344369227!4f-3.0441382430271773!5f0.7820865974627469"
            className="w-full h-full border-0 absolute inset-0 opacity-80"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <motion.a
          href="https://maps.google.com/?q=-7.91466049071767,-34.83794771555962"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#C6B38E] to-[#A18D61] text-[#131114] font-medium py-3 px-4 rounded-xl shadow-md mt-4 hover:shadow-[0_4px_20px_rgba(198,179,142,0.3)] transition-all"
        >
          <Navigation size={18} />
          Abrir no Aplicativo de Mapas
        </motion.a>
      </div>
    </Modal>
  );
}
