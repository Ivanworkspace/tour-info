import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const ChiSiamo: React.FC = () => {
  return (
    <section id="chi-siamo" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Chi Siamo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un team di professionisti appassionati dedicati a creare esperienze virtuali di alta qualità
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
            <div className="text-primary-600 mb-4">
              <Users size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Il Nostro Team</h3>
            <p className="text-gray-700">
              Siamo un gruppo di esperti in tecnologia, design e storytelling digitale. La nostra diversità di competenze ci permette di affrontare ogni progetto con una prospettiva unica e innovativa.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
            <div className="text-primary-600 mb-4">
              <Target size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">La Nostra Missione</h3>
            <p className="text-gray-700">
              Crediamo nel potere della tecnologia per connettere persone e spazi. La nostra missione è rendere accessibile a tutti l'esperienza immersiva, trasformando il modo in cui interagiamo con gli ambienti digitali.
            </p>
          </div>

          {/* Values */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
            <div className="text-primary-600 mb-4">
              <Award size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">I Nostri Valori</h3>
            <p className="text-gray-700">
              Innovazione, qualità e attenzione al cliente sono al centro di tutto ciò che facciamo. Ci impegniamo a mantenere i più alti standard in ogni progetto, creando esperienze che superano le aspettative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiSiamo;