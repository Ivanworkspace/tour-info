import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const storySection = document.getElementById('storytelling');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
          Benvenuto nella Nostra Realtà Virtuale
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed animate-fadeIn animation-delay-200">
          Esplora i nostri spazi attraverso un tour virtuale immersivo e scopri il futuro dell'esperienza interattiva.
        </p>
        <button 
          className="bg-primary-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-700 transition-all transform hover:scale-105 animate-fadeIn animation-delay-400"
          onClick={() => {
            const tourSection = document.getElementById('tour-virtuale');
            if (tourSection) {
              tourSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Inizia il Tour
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToNextSection}
      >
        <ArrowDown size={32} className="text-white" />
      </div>
    </section>
  );
};

export default Hero;