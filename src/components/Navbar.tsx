import React from 'react';
import { Menu, X, Sun, Moon, Stethoscope } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen, theme, toggleTheme }) => {
  return (
    <nav className="bg-emerald-900 shadow-lg fixed w-full z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-full group-hover:from-emerald-400 group-hover:to-emerald-500 transition-all duration-300 shadow-lg group-hover:shadow-emerald-500/50">
              <Stethoscope className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-emerald-200 group-hover:text-emerald-100 transition-colors">
                Havens
              </h1>
              <p className="text-sm text-emerald-400 group-hover:text-emerald-300 transition-colors">
                Homeopathic & Infertility Clinic
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#doctors", label: "Doctors" },
              { href: "#contact", label: "Contact" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-emerald-200 hover:text-emerald-100 transition-all duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-300 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-emerald-800/50 text-emerald-200 transition-all duration-300 hover:rotate-90 transform"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:shadow-lg hover:shadow-emerald-500/50 group">
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          <button
            className="md:hidden text-emerald-200 hover:text-emerald-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-emerald-800/95 backdrop-blur-sm rounded-b-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#doctors", label: "Doctors" },
                { href: "#contact", label: "Contact" }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-emerald-200 hover:text-emerald-100 hover:bg-emerald-700/50 rounded-lg transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
              <button className="w-full mt-2 relative overflow-hidden bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full transition-all duration-300 group">
                <span className="relative z-10">Book Appointment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar