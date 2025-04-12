import React from 'react';
import { Menu, X, Sun, Moon, Stethoscope } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  theme: string;
  toggleTheme: () => void;
  setShowBooking: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen, theme, toggleTheme, setShowBooking }) => {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (path === '/book') {
      setShowBooking(true);
      window.history.pushState({}, '', path);
    } else {
      setShowBooking(false);
      window.location.href = path;
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${theme === 'dark' ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md shadow-lg fixed w-full z-50 transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a 
            href="/" 
            onClick={(e) => handleNavigation(e, '/')}
            className="flex items-center gap-3 group"
          >
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-full group-hover:from-emerald-400 group-hover:to-emerald-500 transition-all duration-300 shadow-lg group-hover:shadow-emerald-500/50 transform group-hover:rotate-12">
              <Stethoscope className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <h1 className={`text-4xl font-bold ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'} group-hover:text-emerald-500 transition-colors`}>
                Havens
              </h1>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} group-hover:text-emerald-500 transition-colors`}>
                Homeopathic & Infertility Clinic
              </p>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: "/", label: "Home" },
              { href: "/#about", label: "About" },
              { href: "/#doctors", label: "Doctors" },
              { href: "/#contact", label: "Contact" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className={`relative px-4 py-2 rounded-lg ${
                  theme === 'dark' 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                } transition-all duration-300 group overflow-hidden`}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
            
            <div className="pl-4 flex items-center gap-4">
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                } transition-all duration-300 hover:rotate-90 transform`}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              
              <a
                href="/book"
                onClick={(e) => handleNavigation(e, '/book')}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-emerald-500/50 font-medium"
              >
                Book Now
              </a>
            </div>
          </div>

          <button
            className={`md:hidden ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} hover:text-emerald-500 transition-colors`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${theme === 'dark' ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-md rounded-b-2xl`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { href: "/", label: "Home" },
                { href: "/#about", label: "About" },
                { href: "/#doctors", label: "Doctors" },
                { href: "/#contact", label: "Contact" },
                { href: "/book", label: "Book Consultation", highlight: true }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className={`block px-3 py-2 ${
                    item.highlight
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transform'
                      : theme === 'dark' 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' 
                        : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-100'
                  } rounded-lg transition-all duration-300`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;