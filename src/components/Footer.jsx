import React from 'react';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Colonna 1 - Contatti */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#d4af37]">Contatti</h3>
            <div className="space-y-3">
              <a 
                href="mailto:andreimarin3990@gmail.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-[#d4af37] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>andreimarin3990@gmail.com</span>
              </a>
              <a 
                href="https://wa.me/3883765466" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#d4af37] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>+39 388 376 5466</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Roma e Provincia</span>
              </div>
            </div>
          </div>

          {/* Colonna 2 - Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#d4af37]">WebLab</h3>
            <p className="text-gray-300 mb-4">Siti Web Premium</p>
            <a 
              href="/privacy" 
              className="text-gray-400 hover:text-[#d4af37] transition-colors inline-block"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© 2025 WebLab. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
