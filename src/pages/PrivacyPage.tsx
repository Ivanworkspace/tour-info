import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from '../components/Logo';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Torna alla Home
          </Link>
          
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Informativa sulla Privacy</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduzione</h2>
            <p>
              La presente Informativa sulla Privacy descrive le modalità con cui NomeAzienda ("noi", "nostro" o "ci") raccoglie, utilizza e divulga le informazioni personali degli utenti quando utilizzano il nostro sito web e i nostri servizi.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Dati personali raccolti</h2>
            <p>
              Possiamo raccogliere diversi tipi di dati personali, tra cui:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Informazioni di contatto (nome, indirizzo email, numero di telefono)</li>
              <li>Informazioni tecniche (indirizzo IP, tipo di browser, dispositivo)</li>
              <li>Dati di utilizzo (pagine visitate, tempo trascorso sul sito)</li>
              <li>Comunicazioni che l'utente ci invia tramite i nostri canali di contatto</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Modalità di utilizzo dei dati</h2>
            <p>
              Utilizziamo i dati personali raccolti per:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Fornire e migliorare i nostri servizi</li>
              <li>Comunicare con gli utenti</li>
              <li>Personalizzare l'esperienza dell'utente</li>
              <li>Adempiere agli obblighi legali</li>
              <li>Prevenire attività fraudolente</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Condivisione dei dati</h2>
            <p>
              Possiamo condividere i dati personali con:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Fornitori di servizi che ci aiutano a gestire il sito e i servizi</li>
              <li>Partner commerciali, con il consenso dell'utente</li>
              <li>Autorità pubbliche, quando richiesto dalla legge</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookie e tecnologie simili</h2>
            <p>
              Utilizziamo cookie e tecnologie simili per migliorare l'esperienza dell'utente, analizzare l'utilizzo del sito e personalizzare i contenuti. Gli utenti possono gestire le preferenze sui cookie tramite le impostazioni del browser.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Diritti degli utenti</h2>
            <p>
              Gli utenti hanno diritto a:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Accedere ai propri dati personali</li>
              <li>Rettificare dati inesatti</li>
              <li>Cancellare i propri dati</li>
              <li>Limitare il trattamento dei dati</li>
              <li>Opporsi al trattamento</li>
              <li>Portabilità dei dati</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Sicurezza dei dati</h2>
            <p>
              Adottiamo misure di sicurezza tecniche e organizzative per proteggere i dati personali da accessi non autorizzati, perdite o alterazioni.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Modifiche alla presente Informativa</h2>
            <p>
              Possiamo aggiornare questa Informativa sulla Privacy periodicamente. In caso di modifiche sostanziali, informeremo gli utenti tramite il nostro sito web o altri canali di comunicazione.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contattaci</h2>
            <p>
              Per qualsiasi domanda relativa alla presente Informativa sulla Privacy, contattaci all'indirizzo email: privacy@nomeazienda.it
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;