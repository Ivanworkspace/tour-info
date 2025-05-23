import React from 'react';

const Storytelling: React.FC = () => {
  return (
    <section id="storytelling" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">La Nostra Storia</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Siamo nati con una visione: rendere accessibile a tutti l'esperienza immersiva degli spazi virtuali. La nostra avventura è iniziata nel cuore dell'innovazione digitale, con la passione di un team di esperti dedicati alla realtà virtuale.
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
          
          <div id="tour-virtuale" className="w-full md:w-1/2 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              {/* Placeholder for Metaport Virtual Tour */}
              <div className="flex items-center justify-center h-full bg-gray-300 p-10 text-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-700">Tour Virtuale </h3>
                  <p className="text-gray-600 mb-6">Qui verrà incorporato il tour virtuale Metaport</p>
                  <div className="inline-block border-2 border-dashed border-gray-400 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Incorpora qui il codice di integrazione </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;