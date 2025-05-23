import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageSquare, Globe } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contatti" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-10 md:mb-0">
            <Logo />
            <p className="mt-4 max-w-xs text-gray-400">
              Trasformiamo spazi fisici in esperienze digitali coinvolgenti accessibili ovunque.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://wa.me/+393XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare size={20} />
              </a>
              <a
                href="https://instagram.com/nomeazienda"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://sitoagenzia.it"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Sito Web Agenzia"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-4">Esplora</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#chi-siamo" className="text-gray-400 hover:text-white transition-colors">Chi Siamo</a>
                </li>
                <li>
                  <a href="#tour-virtuale" className="text-gray-400 hover:text-white transition-colors">Tour Virtuale</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legale</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/termini" className="text-gray-400 hover:text-white transition-colors">Termini e Condizioni</Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contatti</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  Email: info@nomeazienda.it
                </li>
                <li className="text-gray-400">
                  Tel: +39 XXX XXX XXXX
                </li>
                <li className="text-gray-400">
                  Indirizzo: Via Example, 123 - Roma
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} NomeAzienda. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;