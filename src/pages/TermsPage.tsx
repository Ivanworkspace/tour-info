import React from 'react';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Termini e Condizioni</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Accettazione dei Termini</h2>
        <p className="text-gray-700 mb-4">
          Utilizzando questo sito web (il "Sito"), l'utente accetta di essere vincolato dai presenti Termini e Condizioni 
          ("Termini"), da tutte le leggi e i regolamenti applicabili, e accetta di essere responsabile della conformità 
          con qualsiasi legge locale applicabile. Se non si è d'accordo con uno qualsiasi di questi termini, è 
          vietato utilizzare o accedere a questo Sito. I materiali contenuti in questo Sito sono protetti dalle 
          leggi sul copyright e sui marchi applicabili.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Licenza d'uso</h2>
        <p className="text-gray-700 mb-4">
          È concesso il permesso di scaricare temporaneamente una copia dei materiali (informazioni o software) 
          sul Sito solo per la visualizzazione transitoria personale e non commerciale. Questa è la concessione di una 
          licenza, non un trasferimento di titolo, e sotto questa licenza non è possibile:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 pl-4">
          <li>modificare o copiare i materiali;</li>
          <li>utilizzare i materiali per qualsiasi scopo commerciale, o per qualsiasi esposizione pubblica (commerciale o non commerciale);</li>
          <li>tentare di decompilare o decodificare qualsiasi software contenuto nel Sito;</li>
          <li>rimuovere qualsiasi copyright o altre notazioni proprietarie dai materiali; o</li>
          <li>trasferire i materiali a un'altra persona o "rispecchiare" i materiali su qualsiasi altro server.</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Questa licenza terminerà automaticamente in caso di violazione di una qualsiasi di queste restrizioni e potrà 
          essere terminata da Future Craft in qualsiasi momento. Al termine della visualizzazione di questi materiali 
          o alla cessazione di questa licenza, è necessario distruggere qualsiasi materiale scaricato in proprio 
          possesso sia in formato elettronico che stampato.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Esclusione di responsabilità</h2>
        <p className="text-gray-700 mb-4">
          I materiali sul Sito sono forniti "così come sono". Future Craft non fornisce alcuna garanzia, 
          esplicita o implicita, e con la presente declina e nega tutte le altre garanzie, incluse, senza limitazioni, 
          garanzie implicite o condizioni di commerciabilità, idoneità per uno scopo particolare, o non violazione 
          della proprietà intellettuale o altra violazione dei diritti. Inoltre, Future Craft non garantisce 
          né rilascia alcuna dichiarazione riguardante l'accuratezza, i risultati probabili o l'affidabilità dell'uso 
          dei materiali sul proprio Sito o altrimenti relativi a tali materiali o su qualsiasi sito collegato a questo Sito.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Limitazioni</h2>
        <p className="text-gray-700 mb-4">
          In nessun caso Future Craft o i suoi fornitori saranno responsabili per eventuali danni (inclusi, 
          senza limitazione, danni per perdita di dati o profitto, o dovuti a interruzione dell'attività) derivanti 
          dall'uso o dall'impossibilità di utilizzare i materiali sul Sito, anche se Future Craft o un 
          rappresentante autorizzato di Future Craft è stato informato oralmente o per iscritto della possibilità 
          di tali danni. Poiché alcune giurisdizioni non consentono limitazioni sulle garanzie implicite, o limitazioni 
          di responsabilità per danni consequenziali o incidentali, queste limitazioni potrebbero non essere applicabili.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Accuratezza dei materiali</h2>
        <p className="text-gray-700 mb-4">
          I materiali che appaiono sul Sito potrebbero includere errori tecnici, tipografici o fotografici. 
          Future Craft non garantisce che nessuno dei materiali sul proprio Sito sia accurato, completo o attuale. 
          Future Craft può apportare modifiche ai materiali contenuti nel proprio Sito in qualsiasi momento 
          senza preavviso. Tuttavia Future Craft non si assume alcun impegno ad aggiornare i materiali.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Link</h2>
        <p className="text-gray-700 mb-4">
          Future Craft non ha esaminato tutti i siti collegati al proprio Sito e non è responsabile per il 
          contenuto di tali siti collegati. L'inclusione di qualsiasi link non implica l'approvazione da parte 
          di Future Craft del sito. L'utilizzo di tali siti web collegati è a rischio dell'utente.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Modifiche</h2>
        <p className="text-gray-700 mb-4">
          Future Craft può rivedere questi Termini per il proprio Sito in qualsiasi momento senza preavviso. 
          Utilizzando questo Sito, l'utente accetta di essere vincolato dalla versione allora corrente di questi Termini.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. Legge applicabile</h2>
        <p className="text-gray-700 mb-4">
          Questi termini e condizioni sono governati e interpretati in conformità con le leggi d'Italia 
          e l'utente si sottomette irrevocabilmente alla giurisdizione esclusiva dei tribunali di tale Stato o località.
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

export default TermsPage;