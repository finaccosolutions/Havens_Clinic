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
    <nav className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-lg fixed w-full z-50 transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a 
            href="/" 
            onClick={(e) => handleNavigation(e, '/')}
            className="flex items-center gap-3 group"
          >
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-full group-hover:from-emerald-400 group-hover:to-emerald-500 transition-all duration-300 shadow-lg group-hover:shadow-emerald-500/50">
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

          <div className="hidden md:flex items-center space-x-8">
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
                className={`relative ${
                  item.highlight 
                    ? `bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transform transition-all duration-300`
                    : `${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-emerald-600'} transition-all duration-300 group`
                }`}
              >
                {item.label}
                {!item.highlight && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
                )}
              </a>
            ))}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-all duration-300 hover:rotate-90 transform`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
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
          <div className={`md:hidden ${theme === 'dark' ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-sm rounded-b-2xl`}>
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