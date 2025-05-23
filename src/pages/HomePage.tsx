import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Storytelling from '../components/Storytelling';
import ChiSiamo from '../components/ChiSiamo';
import QRSection from '../components/QRSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Storytelling />
        <ChiSiamo />
        <QRSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;