
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { reasons } from './reasons';
import Envelope from './components/Envelope';
import GrandFinaleModal from './components/GrandFinaleModal';
import { Sparkles, Heart } from 'lucide-react';
import './index.css';

function App() {
  const [showFinale, setShowFinale] = useState(false);

  return (
    <div className="min-h-screen py-10 px-4 sm:px-8 relative overflow-hidden">
      {/* Decorative floating background elements */}
      <div className="absolute top-10 left-10 opacity-30 animate-float text-pink-400">
        <Heart size={40} />
      </div>
      <div className="absolute top-40 right-20 opacity-30 animate-float-delayed text-yellow-500">
        <Sparkles size={50} />
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-20 animate-float text-red-400">
        <Heart size={60} />
      </div>
      <div className="absolute top-1/2 right-10 opacity-30 animate-float-delayed text-purple-400">
        <Sparkles size={30} />
      </div>

      <header className="text-center mb-10 sm:mb-16 relative z-10 px-2">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-pink-500 mb-3 drop-shadow-sm">
          100 Reasons
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-5xl text-gray-700 animate-pulse">
          Why I Love Sreeparna 🌻
        </h2>
        <p className="mt-3 text-base sm:text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto">
          Tap an envelope to reveal a reason...
        </p>
      </header>

      <main className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-10 pb-20 px-6 sm:px-0 mx-auto w-full max-w-sm sm:max-w-none">
          {reasons.map((reason, idx) => (
            <Envelope key={idx} index={idx} reason={reason} />
          ))}
        </div>
      </main>
      
      <footer className="text-center pb-10 text-gray-600 text-xl">
        <p>Made with endless love by Ishan 💖</p>
      </footer>

      {/* Special Surprise button */}
      <div className="text-center pb-16 px-4">
        <button
          onClick={() => setShowFinale(true)}
          className="relative inline-flex items-center justify-center gap-2 sm:gap-3 w-full max-w-xs sm:max-w-none sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-linear-to-r from-pink-400 via-rose-400 to-pink-500 text-white font-bold text-base sm:text-xl rounded-full shadow-xl hover:shadow-pink-300/60 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <span className="text-xl sm:text-2xl animate-bounce">🎁</span>
          <span>A Special Surprise for You</span>
          <span className="text-xl sm:text-2xl animate-bounce">💖</span>
          {/* Glowing ring */}
          <span className="absolute inset-0 rounded-full ring-4 ring-pink-300/50 animate-ping pointer-events-none" />
        </button>
      </div>
      <AnimatePresence>
        {showFinale && <GrandFinaleModal onClose={() => setShowFinale(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;