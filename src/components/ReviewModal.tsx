import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Modal } from './Modal';
import { Star, Send } from 'lucide-react';

export function ReviewModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRate = (val: number) => {
    setRating(val);
    setTimeout(() => {
      if (val === 5) {
        alert("Página de avaliação do Google: Em Breve");
        onClose();
        setStep(1);
        setRating(0);
      } else {
        setStep(2);
      }
    }, 400);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will use formsubmit in the future as requested.
    // For now, we simulate success.
    alert("Obrigado pelo seu feedback! Tentaremos melhorar.");
    onClose();
    setTimeout(() => {
      setStep(1);
      setRating(0);
    }, 500);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => { onClose(); setStep(1); setRating(0); }} title="Sua Avaliação">
      <div className="py-2">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6 text-center"
            >
              <p className="text-zinc-300 font-sans">
                Como foi sua experiência com nossos produtos e atendimento?
              </p>
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRate(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="focus:outline-none transition-transform hover:scale-110 p-1"
                  >
                    <Star
                      size={36}
                      className={`transition-colors duration-200 ${
                        (hoverRating || rating) >= star
                          ? 'fill-[#C6B38E] text-[#C6B38E]'
                          : 'text-zinc-600'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-4"
            >
              <p className="text-zinc-300 font-sans text-sm text-center">
                Poxa! O que houve? Seu feedback é muito importante para nós. Nos conte como podemos melhorar.
              </p>
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <textarea
                  required
                  placeholder="Deixe seu comentário aqui..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#C6B38E]/50 focus:bg-white/[0.05] transition-all min-h-[100px] resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#C6B38E] to-[#A18D61] text-[#131114] font-medium py-3 px-4 rounded-xl shadow-md hover:shadow-[0_4px_20px_rgba(198,179,142,0.3)] transition-all"
                >
                  <Send size={18} />
                  Enviar Feedback
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Modal>
  );
}
