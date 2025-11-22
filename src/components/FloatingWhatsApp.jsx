import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/3883765466?text=Ciao!%20Voglio%20la%20bozza%20gratuita"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Contattaci su WhatsApp"
    >
      {/* Pulse ring animation */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75" />
      
      {/* Icon */}
      <MessageCircle className="w-7 h-7 relative z-10 group-hover:rotate-12 transition-transform" />
    </a>
  );
};

export default FloatingWhatsApp;
