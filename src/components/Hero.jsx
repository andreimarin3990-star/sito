import React from 'react';
import { Sparkles, CheckCircle2, Star, Award, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Decorative floating element */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#d4af37]/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#d4af37]/30 rounded-full px-4 py-2 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm font-medium text-gray-700">Digital Builder Professionista</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Siti Web che{' '}
            <span className="bg-gradient-to-r from-blue-600 to-[#d4af37] bg-clip-text text-transparent">
              Portano Risultati
            </span>
            , Non Solo Design
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
            Creo esperienze digitali premium per attività locali a Roma e provincia.<br />
            Tecnologia avanzata, design raffinato, risultati misurabili.
          </p>

          {/* Hero Offer Box */}
          <div className="bg-white border-2 border-red-500 rounded-2xl p-8 mb-10 shadow-xl max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-red-500 text-white rounded-full px-4 py-1.5 mb-6 text-sm font-semibold">
              🎁 OFFERTA LIMITATA
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-left">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Prima Bozza GRATUITA</p>
                  <p className="text-sm text-gray-600">Vedi il tuo sito prima di impegnarti</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Solo 5 Posti Disponibili</p>
                  <p className="text-sm text-gray-600">Posti limitati per garantire qualità massima</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Consegna Rapida Garantita</p>
                  <p className="text-sm text-gray-600">Il tuo sito pronto in 3-5 giorni</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              🚀 Prenota la Tua Bozza Gratuita
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300"
            >
              Vedi i Demo Live
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="font-medium">4.9/5 da clienti soddisfatti</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-green-500" />
              <span className="font-medium">42+ attività online</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-500" />
              <span className="font-medium">Consegna in 3 giorni</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
