import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#chi-siamo" 
            className={`font-medium hover:text-primary-600 transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Chi Siamo
          </a>
          <a 
            href="#contatti" 
            className={`font-medium hover:text-primary-600 transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Contatti
          </a>
          <a 
            href="https://wa.me/+393XXXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#chi-siamo" 
              className="font-medium text-gray-800 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Chi Siamo
            </a>
            <a 
              href="#contatti" 
              className="font-medium text-gray-800 hover:text-primary-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contatti
            </a>
            <a 
              href="https://wa.me/+393XXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors text-center"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;