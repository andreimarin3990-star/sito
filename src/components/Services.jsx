import React from 'react';
import { Shield, Check } from 'lucide-react';
import { packages } from '../data/mock';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Soluzioni su Misura
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pacchetti completi pensati per portare la tua attività online<br />
            con professionalità e risultati concreti
          </p>
        </div>

        {/* Guarantee Banner */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-4 sm:p-6 mb-12 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
            <p className="text-sm sm:text-lg font-semibold text-center leading-relaxed">
              Garanzia "Soddisfatto o Rifatto" - Se non sei soddisfatto al 100%, rifaccio tutto gratis o rimborso completo. Zero rischi per te.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                pkg.featured
                  ? 'border-4 border-red-500 shadow-2xl scale-105'
                  : 'border-2 border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Featured Tag */}
              {pkg.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  {pkg.tag}
                </div>
              )}

              {/* Package Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {pkg.name}
              </h3>

              {/* Pricing */}
              <div className="text-center mb-6">
                <p className="text-gray-400 line-through text-lg mb-1">€{pkg.oldPrice}</p>
                <p className="text-5xl font-bold text-gray-900 mb-1">€{pkg.price}</p>
                <p className="text-green-600 font-semibold">Risparmi €{pkg.savings}</p>
              </div>

              {/* Badge */}
              <div className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-lg px-3 py-2 text-sm font-semibold text-center mb-6">
                {pkg.badge}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.featured
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:-translate-y-1'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {pkg.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Urgency Box */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 shadow-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <span>⏰</span>
              <span>Posti Limitati Questo Mese</span>
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Per garantire la massima qualità, accetto solo 5 nuovi progetti al mese.
            </p>
            
            {/* Visual dots */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center">
                <span className="text-2xl">✕</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center">
                <span className="text-2xl">✕</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center animate-pulse">
                <span className="text-2xl">✓</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center animate-pulse">
                <span className="text-2xl">✓</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center animate-pulse">
                <span className="text-2xl">✓</span>
              </div>
            </div>

            <p className="text-xl font-bold mb-6">→ Restano solo 3 posti</p>

            <a
              href="#contact"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              Prenota il Tuo Posto Ora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
