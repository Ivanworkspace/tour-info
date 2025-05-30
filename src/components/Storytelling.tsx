import React from 'react';
import { ExternalLink } from 'lucide-react';

const Storytelling: React.FC = () => {
  const matterportTourUrl = "https://discover.matterport.com/it/space/mgWXo6pCKEe";

  return (
    <section id="storytelling" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">La Nostra Storia</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Future Craft è l'alleato perfetto per piccole attività e grandi aziende, aiutandole a realizzare i propri obiettivi. 
                Il nostro nuovo traguardo è quello di trasportare visitatori e clienti direttamente nella loro realtà desiderata, 
                attraverso coinvolgenti tour virtuali.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ogni progetto che realizziamo racconta una storia unica, trasformando spazi fisici in esperienze digitali coinvolgenti che permettono ai nostri clienti di esplorare ambienti da qualsiasi luogo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                La nostra missione è semplice: connettere persone e spazi attraverso la tecnologia, abbattendo le barriere fisiche e creando nuove opportunità di interazione.
              </p>
            </div>
            <div className="mt-8">
              <a 
                href="#chi-siamo" 
                className="inline-block bg-secondary-600 text-white px-6 py-3 rounded-md hover:bg-secondary-700 transition-colors"
              >
                Scopri di Più
              </a>
            </div>
          </div>
          
          <div id="tour-virtuale-placeholder" className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gray-200 rounded-lg shadow-lg p-8 min-h-[300px] md:min-h-[400px]">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-videotour text-primary-600 mx-auto mb-4">
                <path d="M16 8L16 4H20L16 8Z"/>
                <path d="M10 14V20H4L10 14Z"/>
                <path d="M21 3.6V20.4C21 21.2837 20.6839 22.129 20.1213 22.7553C19.5587 23.3817 18.7837 23.75 17.97 23.75H6.03C5.21629 23.75 4.44129 23.3817 3.87868 22.7553C3.31607 22.129 3 21.2837 3 20.4V3.6C3 2.71631 3.31607 1.87096 3.87868 1.24466C4.44129 0.618356 5.21629 0.25 6.03 0.25H17.97C18.7837 0.25 19.5587 0.618356 20.1213 1.24466C20.6839 1.87096 21 2.71631 21 3.6Z"/>
                <path d="M3 12H21"/>
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Scopri il Tour Virtuale</h3>
              <p className="text-gray-600 mb-6">
                Vivi un'esperienza immersiva unica. Clicca qui sotto per esplorare.
              </p>
              <a 
                href={matterportTourUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-700 transition-all transform hover:scale-105"
              >
                Esplora Ora <ExternalLink size={20} className="ml-2" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Storytelling;