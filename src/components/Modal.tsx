import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: ReactNode;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#050507]/60 backdrop-blur-3xl border border-white/10 rounded-2xl sm:rounded-3xl w-full max-w-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col max-h-[90dvh] relative"
            >
              <div className="absolute inset-0 pointer-events-none border border-white/[0.03] rounded-2xl sm:rounded-3xl" />
              <div className="flex items-center justify-between p-3 sm:p-4 border-b border-white/5 flex-shrink-0 relative z-10">
                <h2 className="text-lg sm:text-xl font-serif text-luxury-gradient animate-gradient-text tracking-wide px-2">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full text-[#C6B38E]/70 hover:text-[#F2EBE1] hover:bg-[#C6B38E]/10 transition-all border border-transparent hover:border-[#C6B38E]/30"
                >
                  <X size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
              <div className="p-4 sm:p-5 overflow-y-auto scrollbar-hide flex-grow relative z-10">
                {children}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
