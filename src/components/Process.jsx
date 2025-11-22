import React from 'react';
import { MessageCircle, Palette, CheckCircle, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: 'Consulenza Strategica GRATUITA',
      description: 'Analizziamo insieme i tuoi obiettivi, il tuo pubblico e la concorrenza. Ti mostro esempi e definiamo la strategia perfetta.',
      badge: '🎁 Prima bozza inclusa'
    },
    {
      number: 2,
      icon: Palette,
      title: 'Design & Sviluppo Rapido',
      description: 'Creo il tuo sito utilizzando tecnologie moderne. Design su misura che rispecchia la tua identità e converte visitatori in clienti.',
      badge: '⚡ Consegna in 3-5 giorni'
    },
    {
      number: 3,
      icon: CheckCircle,
      title: 'Review & Perfezionamento',
      description: 'Ti mostro il sito completo. Raccolgo il tuo feedback e perfeziono ogni dettaglio fino alla tua completa soddisfazione.',
      badge: '✅ Revisioni illimitate'
    },
    {
      number: 4,
      icon: Rocket,
      title: 'Lancio & Supporto',
      description: 'Pubblico il sito online con dominio personalizzato. Ti formo su come gestirlo e resto disponibile per supporto continuo.',
      badge: '🎯 Formazione inclusa'
    }
  ];

  return (
    <section id="process" className="py-20 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Il Mio Processo
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Un metodo collaudato per portarti online in modo rapido e professionale
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (hidden on mobile) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#d4af37] via-[#d4af37]/50 to-[#d4af37]" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Content */}
                  <div
                    className={`md:w-1/2 ${
                      isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                    } mb-8 md:mb-0`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-6 h-6 text-[#d4af37]" />
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-3">{step.description}</p>
                      <span className="inline-block bg-[#d4af37]/20 text-[#d4af37] px-3 py-1 rounded-full text-sm font-semibold">
                        {step.badge}
                      </span>
                    </div>
                  </div>

                  {/* Circle with number */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-yellow-600 flex items-center justify-center text-2xl font-bold border-4 border-[#0f172a] shadow-lg relative z-10">
                    {step.number}
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
