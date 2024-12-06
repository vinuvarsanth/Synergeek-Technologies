import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/10.png'; // Adjust the path to your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Synergeek Logo"
              className={`h-10 w-10 ${
                isScrolled ? 'filter-none' : 'filter-brightness-0 invert'
              }`}
            />
            <span
              className={`ml-3 text-2xl font-bold tracking-wide ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Synergeek
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-lg font-medium ${
                    isScrolled
                      ? 'text-gray-700 hover:text-indigo-600'
                      : 'text-white hover:text-gray-300'
                  } transition-colors duration-200`}
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`rounded-md focus:outline-none ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
