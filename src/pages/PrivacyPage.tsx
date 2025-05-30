import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Informativa sulla Privacy</h1>
        <p className="text-gray-700 mb-4">
          <strong>Attenzione:</strong> Questa è una pagina placeholder per l'Informativa sulla Privacy.
          Il contenuto sottostante è generico e deve essere sostituito con una policy redatta
          da un consulente legale per garantire la conformità con tutte le normative vigenti
          riguardanti la privacy e la protezione dei dati.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Titolare del Trattamento</h2>
        <p className="text-gray-700 mb-4">
          Future Craft<br />
          Titolare del Trattamento: Ivan Santantonio<br />
          Email: futurecraft.workspace@gmail.com
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Tipi di Dati raccolti</h2>
        <p className="text-gray-700 mb-4">
          Questo sito potrebbe raccogliere, autonomamente o tramite terze parti, dati personali come: 
          cookie, dati di utilizzo, nome, cognome, numero di telefono, email, ecc. 
          I dettagli completi su ciascuna tipologia di dati raccolti sono forniti nelle sezioni dedicate 
          di questa privacy policy o mediante specifici testi informativi visualizzati prima della raccolta dei dati stessi.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Modalità e luogo del trattamento dei Dati raccolti</h2>
        <p className="text-gray-700 mb-4">
          Il Titolare adotta le opportune misure di sicurezza volte ad impedire l'accesso, la divulgazione, 
          la modifica o la distruzione non autorizzate dei Dati Personali. 
          Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità 
          organizzative e con logiche strettamente correlate alle finalità indicate.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Finalità del Trattamento dei Dati raccolti</h2>
        <p className="text-gray-700 mb-4">
          I Dati dell'Utente sono raccolti per consentire al Titolare di fornire i propri Servizi, così come 
          per le seguenti finalità: Contattare l'Utente, Statistica, Interazione con social network e 
          piattaforme esterne, Visualizzazione di contenuti da piattaforme esterne, ecc.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Diritti dell'Utente</h2>
        <p className="text-gray-700 mb-4">
          Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare.
          In particolare, l'Utente ha il diritto di:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 pl-4">
          <li>revocare il consenso in ogni momento.</li>
          <li>opporsi al trattamento dei propri Dati.</li>
          <li>accedere ai propri Dati.</li>
          <li>verificare e chiedere la rettificazione.</li>
          <li>ottenere la limitazione del trattamento.</li>
          <li>ottenere la cancellazione o rimozione dei propri Dati Personali.</li>
          <li>ricevere i propri Dati o farli trasferire ad altro titolare.</li>
          <li>proporre reclamo.</li>
            </ul>
            
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Modifiche a questa privacy policy</h2>
        <p className="text-gray-700 mb-4">
          Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy 
          in qualunque momento dandone informazione agli Utenti su questa pagina nonché, qualora 
          tecnicamente e legalmente fattibile, inviando una notifica agli Utenti attraverso uno 
          degli estremi di contatto di cui è in possesso il Titolare. Si prega dunque di consultare 
          regolarmente questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.
        </p>

        <p className="text-gray-700 mt-8 text-sm">
          Data di ultima modifica: [Inserire Data]
        </p>

        <div className="mt-12 text-center">
          <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium">
            &larr; Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;