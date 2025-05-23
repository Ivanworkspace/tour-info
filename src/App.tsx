import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookieConsentBanner from './components/CookieConsentBanner';

function App() {
  return (
    <Router>
      <CookieConsentBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/termini" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}

export default App;