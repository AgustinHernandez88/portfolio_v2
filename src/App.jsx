import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';

import ContactoPage from './pages/contactoPage';
import PortfolioPage from './pages/portfolioPage';
import AboutPage from './pages/aboutPage';

import * as Sentry from '@sentry/react';

// Página de inicio completa
const LandingPage = () => (
  <>
    <Home />
    <Hero />
    <Highlights />
    <Model />
    <Features />
    <HowItWorks />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="bg-black min-h-screen flex flex-col">
        {/* Navbar arriba */}
        <Navbar />

        {/* Contenido principal */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>

        {/* Footer abajo */}
        <Footer />
      </div>
    </Router>
  );
};

export default Sentry.withProfiler(App);
