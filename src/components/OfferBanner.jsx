import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const OfferBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isVisible || isMobile) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 text-center text-sm md:text-base font-medium">
          <span className="inline-flex items-center gap-2">
            <span className="text-lg">🔥</span>
            <span>OFFERTA LIMITATA: Solo 5 posti disponibili questo mese • Prima bozza GRATUITA</span>
          </span>
          <a 
            href="#contact" 
            className="ml-4 inline-block bg-white text-orange-600 px-4 py-1 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Prenota →
          </a>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Chiudi banner"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default OfferBanner;
