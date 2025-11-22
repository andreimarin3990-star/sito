import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#0f172a] text-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Torna al sito
          </Link>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-8">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Titolare del Trattamento</h2>
            <p className="text-gray-700 leading-relaxed">
              Il Titolare del trattamento dei dati è WebLab, con sede operativa a Roma.<br />
              Email: andreimarin3990@gmail.com<br />
              WhatsApp: +39 388 376 5466
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Dati Raccolti</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Raccogliamo e trattiamo i seguenti dati personali:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Dati identificativi: nome, cognome, email</li>
              <li>Dati relativi all'attività: nome attività, tipologia, esigenze specifiche</li>
              <li>Dati di navigazione: indirizzo IP, browser, pagine visitate (tramite cookie tecnici)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalità del Trattamento</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I dati personali vengono trattati per le seguenti finalità:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Rispondere alle richieste di contatto e preventivo</li>
              <li>Fornire i servizi richiesti (creazione siti web, consulenza)</li>
              <li>Invio di comunicazioni relative ai servizi richiesti</li>
              <li>Adempiere a obblighi di legge</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base Giuridica</h2>
            <p className="text-gray-700 leading-relaxed">
              Il trattamento dei dati si basa sul consenso dell'interessato (Art. 6, par. 1, lett. a del GDPR) 
              e sull'esecuzione di misure precontrattuali adottate su richiesta dell'interessato (Art. 6, par. 1, lett. b del GDPR).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Conservazione dei Dati</h2>
            <p className="text-gray-700 leading-relaxed">
              I dati personali verranno conservati per il tempo necessario a fornire i servizi richiesti 
              e comunque non oltre 2 anni dalla raccolta, salvo obblighi di legge che richiedano una conservazione più lunga.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Comunicazione dei Dati</h2>
            <p className="text-gray-700 leading-relaxed">
              I dati personali non verranno comunicati a terzi, salvo:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
              <li>Fornitori di servizi tecnici necessari per la gestione del sito (hosting, email)</li>
              <li>Autorità pubbliche, quando richiesto dalla legge</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Diritti dell'Interessato</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              L'interessato ha il diritto di:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Accedere ai propri dati personali (Art. 15 GDPR)</li>
              <li>Richiedere la rettifica dei dati inesatti (Art. 16 GDPR)</li>
              <li>Richiedere la cancellazione dei dati (Art. 17 GDPR)</li>
              <li>Richiedere la limitazione del trattamento (Art. 18 GDPR)</li>
              <li>Opporsi al trattamento (Art. 21 GDPR)</li>
              <li>Richiedere la portabilità dei dati (Art. 20 GDPR)</li>
              <li>Revocare il consenso in qualsiasi momento</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Per esercitare tali diritti, è possibile contattare il Titolare all'indirizzo email: andreimarin3990@gmail.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookie</h2>
            <p className="text-gray-700 leading-relaxed">
              Il sito utilizza cookie tecnici necessari per il corretto funzionamento del sito. 
              Non vengono utilizzati cookie di profilazione o tracciamento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifiche alla Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento. 
              Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contatti</h2>
            <p className="text-gray-700 leading-relaxed">
              Per qualsiasi domanda o richiesta relativa al trattamento dei dati personali, è possibile contattarci a:<br />
              Email: andreimarin3990@gmail.com<br />
              WhatsApp: +39 388 376 5466
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
