import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import { Toaster } from 'react-hot-toast';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar onAuthClick={handleAuthClick} />
      <main>
        <Hero onGetStarted={() => handleAuthClick('signup')} />
        <Features />
        <Pricing />
        <Testimonials />
        <Cta onGetStarted={() => handleAuthClick('signup')} />
      </main>
      <Footer />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;