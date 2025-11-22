import React, { useState } from 'react';
import { MessageCircle, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    businessType: '',
    needs: [],
    timeline: '',
    notes: '',
    privacyAccepted: false
  });

  const [formState, setFormState] = useState('idle'); // idle, loading, success, error

  const businessTypes = [
    'Seleziona',
    'Ristorante/Bar/Pizzeria',
    'Palestra/Fitness/Wellness',
    'Professionista (Avvocato/Medico/etc)',
    'Artigiano/Tecnico',
    'Negozio/Retail',
    'Parrucchiere/Salone di Bellezza',
    'Fotografo/Portfolio Creativo',
    'Centro Benessere/Spa',
    'Altro'
  ];

  const needsOptions = [
    'Sito vetrina semplice',
    'Menu/Catalogo prodotti',
    'Sistema prenotazioni',
    'Vendita online (e-commerce)',
    'Portfolio/Gallery lavori',
    'Dominio personalizzato',
    'SEO e ottimizzazione'
  ];

  const timelines = [
    'Il prima possibile',
    'Entro 1 mese',
    'Tra 1-3 mesi',
    'Non ho fretta'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNeedsChange = (need) => {
    setFormData(prev => ({
      ...prev,
      needs: prev.needs.includes(need)
        ? prev.needs.filter(n => n !== need)
        : [...prev.needs, need]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.privacyAccepted) {
      alert('Devi accettare la Privacy Policy per continuare');
      return;
    }

    setFormState('loading');

    // Mock submission - replace with actual API call later
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormState('success');
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormState('idle');
        setFormData({
          name: '',
          email: '',
          businessName: '',
          businessType: '',
          needs: [],
          timeline: '',
          notes: '',
          privacyAccepted: false
        });
      }, 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            🎁 Richiedi la Tua Bozza GRATUITA
          </h2>
          <p className="text-lg text-gray-300">
            Prima bozza senza impegno • Vedi il tuo sito prima di decidere • Solo 3 posti rimasti
          </p>
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/3883765466?text=Ciao!%20Voglio%20approfittare%20dell%27offerta%20limitata%20e%20richiedere%20la%20bozza%20gratuita"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 mb-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <MessageCircle className="w-12 h-12 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-1">Contattami su WhatsApp</h3>
                <p className="text-green-100">Risposta immediata • Bozza gratuita garantita</p>
              </div>
            </div>
            <div className="text-3xl group-hover:translate-x-2 transition-transform">→</div>
          </div>
        </a>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-gray-400 font-medium">oppure</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Nome *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
              />
            </div>
          </div>

          {/* Business Name */}
          <div className="mb-6">
            <label htmlFor="businessName" className="block text-sm font-medium mb-2">Nome Attività *</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              required
              value={formData.businessName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
            />
          </div>

          {/* Business Type */}
          <div className="mb-6">
            <label htmlFor="businessType" className="block text-sm font-medium mb-2">Tipo di Attività *</label>
            <select
              id="businessType"
              name="businessType"
              required
              value={formData.businessType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
            >
              {businessTypes.map((type) => (
                <option key={type} value={type} className="bg-[#0f172a]">
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Needs Checkboxes */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3">Cosa ti serve?</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {needsOptions.map((need) => (
                <div key={need} className="flex items-center gap-2">
                  <Checkbox
                    id={need}
                    checked={formData.needs.includes(need)}
                    onCheckedChange={() => handleNeedsChange(need)}
                    className="border-white/30 data-[state=checked]:bg-[#d4af37] data-[state=checked]:border-[#d4af37]"
                  />
                  <Label htmlFor={need} className="text-sm text-gray-300 cursor-pointer">
                    {need}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-6">
            <label htmlFor="timeline" className="block text-sm font-medium mb-2">Quando vuoi lanciare?</label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
            >
              <option value="" className="bg-[#0f172a]">Seleziona</option>
              {timelines.map((timeline) => (
                <option key={timeline} value={timeline} className="bg-[#0f172a]">
                  {timeline}
                </option>
              ))}
            </select>
          </div>

          {/* Notes */}
          <div className="mb-6">
            <label htmlFor="notes" className="block text-sm font-medium mb-2">Note aggiuntive</label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Altre informazioni utili..."
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent resize-none"
            />
          </div>

          {/* Privacy Checkbox */}
          <div className="mb-6 flex items-start gap-2">
            <Checkbox
              id="privacy"
              checked={formData.privacyAccepted}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, privacyAccepted: checked }))}
              className="mt-1 border-white/30 data-[state=checked]:bg-[#d4af37] data-[state=checked]:border-[#d4af37]"
            />
            <Label htmlFor="privacy" className="text-sm text-gray-300 cursor-pointer">
              Accetto la{' '}
              <a href="/privacy" className="text-[#d4af37] hover:underline">
                Privacy Policy
              </a>
              {' '}e autorizzo il trattamento dei miei dati personali *
            </Label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={formState === 'loading' || formState === 'success'}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {formState === 'loading' && (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                ⏳ Invio in corso...
              </>
            )}
            {formState === 'success' && (
              <>
                <CheckCircle2 className="w-5 h-5" />
                Richiesta inviata!
              </>
            )}
            {formState === 'idle' && '🎁 Richiedi Bozza Gratuita'}
            {formState === 'error' && (
              <>
                <AlertCircle className="w-5 h-5" />
                Riprova
              </>
            )}
          </button>

          {/* Success Message */}
          {formState === 'success' && (
            <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-center">
              ✅ Richiesta inviata con successo! Ti risponderò entro 24 ore con la tua bozza gratuita.
            </div>
          )}

          {/* Footer Note */}
          <p className="text-center text-sm text-gray-400 mt-6">
            ✅ Nessun impegno • ✅ Prima bozza gratuita • ✅ Risposta entro 24h
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
