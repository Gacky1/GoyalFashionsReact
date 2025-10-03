import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/education', label: 'Skill Development' },
    { to: '/employment', label: 'Captive Employment' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-2xl py-2' 
        : 'bg-white/90 backdrop-blur-lg py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 animate-fadeInLeft">
            <div className="relative">
              <img 
                src="/images/logo.png" 
                alt="Goyal Fashions" 
                className="h-12 w-auto transition-all duration-300 hover:scale-110 animate-pulse-slow"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold gradient-text"></span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-2 animate-fadeInRight">
            {navLinks.map((link, index) => (
              <li key={link.to} className="animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <Link
                  to={link.to}
                  className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1 whitespace-nowrap relative overflow-hidden group ${
                    location.pathname === link.to
                      ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30'
                      : 'text-gray-700 hover:text-white'
                  }`}
                >
                  {location.pathname !== link.to && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 group animate-fadeInRight"
          >
            <span className={`w-6 h-0.5 bg-gray-700 group-hover:bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 group-hover:bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 group-hover:bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <ul className="pt-4 pb-2 space-y-3">
            {navLinks.map((link, index) => (
              <li key={link.to} className="animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <Link
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-6 py-4 rounded-xl font-semibold text-center transition-all duration-300 hover:scale-105 relative overflow-hidden group ${
                    location.pathname === link.to
                      ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg'
                      : 'text-gray-700 hover:text-white border-2 border-gray-200 hover:border-transparent'
                  }`}
                >
                  {location.pathname !== link.to && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;