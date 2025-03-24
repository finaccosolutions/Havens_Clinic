import React from 'react';
import { Menu, X, Sun, Moon, Leaf, Heart } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen, theme, toggleTheme }) => {
  return (
    <nav className="bg-emerald-900/95 backdrop-blur-sm shadow-lg fixed w-full z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 group">
            <div className="bg-emerald-700/50 p-3 rounded-full group-hover:bg-emerald-600/50 transition-all duration-300">
              <Heart className="w-8 h-8 text-emerald-200 group-hover:text-emerald-100 transition-colors" />
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
            <a href="#home" className="text-emerald-200 hover:text-emerald-100 transition-all duration-300 hover:scale-105">Home</a>
            <a href="#about" className="text-emerald-200 hover:text-emerald-100 transition-all duration-300 hover:scale-105">About</a>
            <a href="#doctors" className="text-emerald-200 hover:text-emerald-100 transition-all duration-300 hover:scale-105">Doctors</a>
            <a href="#contact" className="text-emerald-200 hover:text-emerald-100 transition-all duration-300 hover:scale-105">Contact</a>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-emerald-800 text-emerald-200 transition-all duration-300"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-105 transform shadow-lg">
              Book Appointment
            </button>
          </div>

          <button
            className="md:hidden text-emerald-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-emerald-800/95 backdrop-blur-sm rounded-b-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-emerald-200 hover:text-emerald-100 hover:bg-emerald-700/50 rounded-lg transition-colors">Home</a>
              <a href="#about" className="block px-3 py-2 text-emerald-200 hover:text-emerald-100 hover:bg-emerald-700/50 rounded-lg transition-colors">About</a>
              <a href="#doctors" className="block px-3 py-2 text-emerald-200 hover:text-emerald-100 hover:bg-emerald-700/50 rounded-lg transition-colors">Doctors</a>
              <a href="#contact" className="block px-3 py-2 text-emerald-200 hover:text-emerald-100 hover:bg-emerald-700/50 rounded-lg transition-colors">Contact</a>
              <button className="w-full mt-2 bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-500 transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;