import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from '../components/Logo';

const TermsPage: React.FC = () => {
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
          
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Termini e Condizioni</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Accettazione dei Termini</h2>
            <p>
              Accedendo e utilizzando questo sito web, l'utente accetta di essere vincolato dai presenti Termini e Condizioni e da tutte le leggi e i regolamenti applicabili. Se non si accettano questi termini, si prega di non utilizzare questo sito.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Utilizzo del Sito</h2>
            <p>
              L'utente si impegna a utilizzare il sito solo per scopi legali e in modo da non violare i diritti di terzi, limitare o inibire l'utilizzo e il godimento del sito da parte di terzi.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Proprietà Intellettuale</h2>
            <p>
              Tutti i contenuti presenti su questo sito, inclusi testi, grafica, loghi, icone, immagini, clip audio, download digitali e software, sono di proprietà di NomeAzienda o dei suoi fornitori di contenuti e sono protetti dalle leggi sul copyright e altre leggi sulla proprietà intellettuale.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitazione di Responsabilità</h2>
            <p>
              NomeAzienda non sarà responsabile per eventuali danni diretti, indiretti, incidentali, consequenziali o punitivi derivanti dall'utilizzo o dall'impossibilità di utilizzare i servizi o i contenuti forniti da questo sito.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Link a Siti di Terze Parti</h2>
            <p>
              Il nostro sito può contenere link a siti web di terze parti. Non abbiamo alcun controllo sul contenuto e sulle pratiche di questi siti e non siamo responsabili delle loro politiche sulla privacy o del loro contenuto.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Modifiche al Servizio</h2>
            <p>
              Ci riserviamo il diritto di modificare o interrompere il servizio senza preavviso in qualsiasi momento. Non saremo responsabili nei confronti dell'utente o di terzi per qualsiasi modifica, sospensione o interruzione del servizio.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Account Utente</h2>
            <p>
              Se l'utente crea un account su questo sito, è responsabile del mantenimento della sicurezza del proprio account e di tutte le attività che si verificano sotto il proprio account.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Legge Applicabile</h2>
            <p>
              I presenti Termini e Condizioni sono regolati e interpretati in conformità con le leggi italiane, senza riguardo alle disposizioni sul conflitto di leggi.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Modifiche ai Termini</h2>
            <p>
              Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. Le modifiche saranno effettive immediatamente dopo la pubblicazione dei termini aggiornati su questo sito. L'uso continuato del sito dopo tali modifiche costituirà l'accettazione dei nuovi termini.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contattaci</h2>
            <p>
              Per qualsiasi domanda relativa ai presenti Termini e Condizioni, contattaci all'indirizzo email: info@nomeazienda.it
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;