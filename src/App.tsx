import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Doctors from './components/Doctors.tsx';
import Contact from './components/Contact.tsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Doctors />
        <Contact />
      </main>
      
      <footer className="bg-emerald-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Havens</h3>
              <p className="text-emerald-100">Homeopathic & Infertility Clinic</p>
              <p className="mt-4 text-emerald-100">Providing natural healing solutions with personalized care.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-emerald-100">
                <p>+1 (555) 123-4567</p>
                <p>info@havens-clinic.com</p>
                <p>123 Healing Street, City</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Hours</h3>
              <div className="space-y-2 text-emerald-100">
                <p>Dr. Salahudheen MP: 8:30 AM - 10:30 AM</p>
                <p>Dr. Bhavya Oralath: 10:30 AM - 6:30 PM</p>
                <p>Dr. Shahid Ullattil: 6:30 PM - 8:30 PM</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-emerald-700 text-center text-emerald-100">
            © 2024 Havens Homeopathic & Infertility Clinic. All rights reserved.
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50"
      >
        <MessageCircle size={24} />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-110 z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;