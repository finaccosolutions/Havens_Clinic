import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Doctors from './components/Doctors.tsx';
import Contact from './components/Contact.tsx';
import BookConsultation from './components/BookConsultation.tsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState('light');
  const [currentPage, setCurrentPage] = useState('home');
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    setShowBooking(path === '/book' || path.endsWith('/book/'));
    
    const hash = window.location.hash.slice(1) || 'home';
    setCurrentPage(hash);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''} overflow-x-hidden`}>
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        theme={theme} 
        toggleTheme={toggleTheme}
        setShowBooking={setShowBooking}
      />
      <main>
        {showBooking ? (
          <BookConsultation />
        ) : (
          <>
            <Hero setShowBooking={setShowBooking} />
            <About />
            <Doctors setShowBooking={setShowBooking} />
            <Contact />
          </>
        )}
      </main>
      
      <footer className={`${theme === 'dark' ? 'bg-slate-950 text-gray-300' : 'bg-emerald-900 text-white'} py-12`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-4 group">
              <h3 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-purple-400 group-hover:text-purple-300' : 'text-emerald-300 group-hover:text-emerald-200'} transition-colors`}>Havens</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-200' : 'text-emerald-100 group-hover:text-white'} transition-colors`}>Homeopathic & Fertility Clinic</p>
              <p className={`${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-200' : 'text-emerald-100 group-hover:text-white'} transition-colors`}>Providing natural healing solutions with personalized care.</p>
            </div>
            <div className="space-y-4 group">
              <h3 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-purple-400 group-hover:text-purple-300' : 'text-emerald-300 group-hover:text-emerald-200'} transition-colors`}>Contact</h3>
              <div className="space-y-2">
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-emerald-100'} group-hover:text-white transition-colors hover:translate-x-2 transform duration-300`}>
                  <span className="font-semibold">Phone:</span> +918281496707
                </p>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-emerald-100'} group-hover:text-white transition-colors hover:translate-x-2 transform duration-300`}>
                  <span className="font-semibold">Email:</span> info@havensclinic.com
                </p>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-emerald-100'} group-hover:text-white transition-colors hover:translate-x-2 transform duration-300`}>
                  <span className="font-semibold">Address:</span> Pallipuraya, Omanoor, Kondotty, Malappuram, Kerala, India-673645
                </p>
              </div>
            </div>
            <div className="space-y-4 group">
              <h3 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-purple-400 group-hover:text-purple-300' : 'text-emerald-300 group-hover:text-emerald-200'} transition-colors`}>Hours</h3>
              <div className="space-y-2">
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-emerald-100'} group-hover:text-white transition-colors hover:translate-x-2 transform duration-300`}>Dr. Salahudheen MP: 8:30 AM - 10:30 AM</p>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-emerald-100'} group-hover:text-white transition-colors hover:translate-x-2 transform duration-300`}>Dr. Bhavya Oralath: 10:30 AM - 6:30 PM</p>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-emerald-100'} group-hover:text-white transition-colors hover:translate-x-2 transform duration-300`}>Dr. Shahid Ullattil: 6:30 PM - 8:30 PM</p>
                <div className={`mt-4 p-3 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-emerald-800/50'} rounded-lg border ${theme === 'dark' ? 'border-purple-800' : 'border-emerald-700'} group-hover:scale-105 transform transition-all duration-300`}>
                  <p className={`text-lg font-semibold ${theme === 'dark' ? 'text-purple-300' : 'text-emerald-300'}`}>
                    Sunday Consultation Through Appointment Only
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`mt-12 pt-8 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-emerald-800'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className={`${theme === 'dark' ? 'text-gray-500 hover:text-gray-300' : 'text-emerald-200 hover:text-emerald-100'} transition-colors text-center md:text-left text-sm`}>
                © 2025 Havens Homeopathic & Fertility Clinic. All rights reserved.
              </p>
              <div className="flex gap-4">
                {[
                  {
                    icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                    href: "#"
                  },
                  {
                    icon: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                    href: "#"
                  },
                  {
                    icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                    href: "#"
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`${theme === 'dark' ? 'bg-slate-800 hover:bg-slate-700' : 'bg-emerald-800 hover:bg-emerald-700'} p-3 rounded-full transition-all duration-300 hover:scale-110 group`}
                  >
                    <svg className={`w-5 h-5 ${theme === 'dark' ? 'text-purple-300 group-hover:text-purple-200' : 'text-emerald-300 group-hover:text-emerald-200'}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/918281496707"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 animate-bounce"
        style={{ animation: 'bounce 2s infinite' }}
      >
        <FaWhatsapp size={24} className="animate-pulse" />
      </a>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 ${theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-emerald-600 hover:bg-emerald-700'} text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50`}
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;