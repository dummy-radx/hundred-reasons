import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flower2, Heart, Sparkles, Smile } from 'lucide-react';

interface EnvelopeProps {
  reason: string;
  index: number;
  onOpen?: () => void;
}

const STICKERS = [Flower2, Heart, Sparkles, Smile];
const COLORS = ['bg-red-300', 'bg-pink-300', 'bg-yellow-300', 'bg-blue-300', 'bg-purple-300', 'bg-emerald-300'];

const Envelope: React.FC<EnvelopeProps> = ({ reason, index, onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Deterministic stickers and colors based on index so they don't change on re-render
  const StickerIcon = STICKERS[index % STICKERS.length];
  const envelopeColor = COLORS[index % COLORS.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={!isOpen ? { scale: 1.05, rotate: index % 2 === 0 ? 2 : -2, y: -5 } : {}}
      transition={{ duration: 0.5, delay: index * 0.02 }}
      className={`relative w-full max-w-md sm:max-w-xl mx-auto cursor-pointer perspective-1000 ${!isOpen ? 'aspect-4/3' : 'aspect-square sm:aspect-4/5'}`}
      onClick={() => {
        if (!isOpen) {
          setIsOpen(true);
          onOpen?.();
        }
      }}
    >
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            key="envelope-closed"
            initial={{ rotateY: -180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 180, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className={`absolute inset-0 rounded-lg shadow-md flex items-center justify-center ${envelopeColor} border-2 border-white/50 backdrop-blur-sm transform-style-3d`}
          >
            {/* Envelope flap aesthetic */}
            <div className="absolute top-0 w-full h-1/2 bg-white/20 clip-path-polygon-[0_0,100%_0,50%_100%] rounded-t-lg"></div>
            
            {/* Sticker */}
            <motion.div 
              whileHover={{ scale: 1.2, rotate: 15 }}
              className="z-10 bg-white p-3 rounded-full shadow-sm relative group"
            >
              <StickerIcon className="w-8 h-8 text-pink-500" />
              <div className="absolute -top-2 -right-2 bg-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-sm text-gray-600">
                {index + 1}
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="envelope-open"
            initial={{ rotateY: -180, opacity: 0, scale: 0.8 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="absolute inset-0 bg-[#fffdf5] rounded-2xl shadow-xl flex flex-col text-center border-4 border-dashed border-pink-200 overflow-hidden"
          >
            {/* Corner decorations */}
            <div className="absolute top-3 left-3 opacity-30 pointer-events-none">
              <Flower2 className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="absolute bottom-3 right-3 opacity-30 pointer-events-none">
              <Heart className="w-6 h-6 text-pink-500" />
            </div>
            
            {/* Card number */}
            <div className="absolute top-3 right-4 text-pink-300 text-sm font-bold pointer-events-none">
              #{index + 1}
            </div>

            {/* Content container with padding and center alignment */}
            <div className="flex-1 w-full h-full flex flex-col items-center justify-center px-4 py-8 sm:px-10 sm:py-12 z-10">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-4xl md:text-2xl lg:text-2xl text-gray-800 font-bold leading-relaxed w-full my-auto"
              >
                {reason}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Envelope;
