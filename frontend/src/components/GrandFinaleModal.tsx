import { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';

interface GrandFinaleModalProps {
  onClose?: () => void;
}

const GrandFinaleModal: React.FC<GrandFinaleModalProps> = ({ onClose }) => {
  useEffect(() => {
    // Trigger confetti burst on mount
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ['#ffb7b2', '#ff9ceb', '#ffdac1']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ['#ffb7b2', '#ff9ceb', '#ffdac1']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
        className="relative max-w-4xl w-full bg-[#fffdf5] rounded-3xl shadow-2xl overflow-hidden border-4 border-pink-300 flex flex-col items-center p-6 sm:p-10 text-center max-h-[90vh] overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 flex items-center justify-center rounded-full bg-pink-50 text-gray-400 hover:text-pink-500 hover:bg-pink-100 transition-colors text-xl font-bold"
        >
          ✕
        </button>

        <Heart className="w-10 h-10 sm:w-16 sm:h-16 text-pink-500 animate-pulse mb-3 sm:mb-4" fill="currentColor" />
        
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-4 sm:mb-6 font-serif leading-snug">
          To my beautiful girl, Sreeparna 🌻
        </h2>
        
        <p className="text-sm sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed font-medium">
          You made it to the end! These 100 reasons are just a small fraction of why I adore you. 
          To celebrate you, here are some of your favorite things—bright sunflowers to match your radiant soul, 
          some delicious Oreo Silk chocolate, and the fluffiest plushies just for you. 
          I love you endlessly, cutu! 💖
        </p>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full mb-6 sm:mb-8">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="flex flex-col items-center"
          >
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-yellow-200">
              <img src="/images/sunflowers.png" alt="Sunflowers" className="w-full h-full object-cover" />
            </div>
            <p className="mt-3 text-pink-500 font-semibold text-lg">For your beautiful soul ✨</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-purple-200">
              <img src="/images/oreo_silk.png" alt="Oreo Silk" className="w-full h-full object-cover" />
            </div>
            <p className="mt-3 text-pink-500 font-semibold text-lg">Something sweet for my sweet 🍫</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="flex flex-col items-center"
          >
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-pink-200">
              <img src="/images/plushies.png" alt="Cute Plushies" className="w-full h-full object-cover" />
            </div>
            <p className="mt-3 text-pink-500 font-semibold text-lg">Soft cuddles for you 🧸</p>
          </motion.div>
        </div>

        <div className="text-2xl text-pink-400 font-bold mb-4">
          Forever & Always
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GrandFinaleModal;
