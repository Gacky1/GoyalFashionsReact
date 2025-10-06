import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="colorful-bg text-white py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          {/* Company Info */}
          <div className="md:col-span-2 animate-fadeInUp">
            <div className="text-2xl font-bold mb-2 text-white">
              Goyal Fashions
            </div>
            <p className="mb-4 text-white/90 text-sm">
              India's Premier Flagship Enterprise with 40+ years of excellence across textiles, hospitality, education, and sustainable energy sectors.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition-all duration-300">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="https://twitter.com" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition-all duration-300">
                <i className="fab fa-twitter text-sm"></i>
              </a>
              <a href="https://instagram.com" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition-all duration-300">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="https://linkedin.com" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition-all duration-300">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <h3 className="text-lg font-bold mb-2 text-white">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-white/80 hover:text-white transition-colors duration-300 text-sm">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/employment" className="text-white/80 hover:text-white transition-colors duration-300 text-sm">
                  Employment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <h3 className="text-lg font-bold mb-2 text-white">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-white/80 mr-2 mt-1 text-xs"></i>
                <p className="text-white/80 text-xs">
                  Goyal House, 24, Ajmer Road,<br />
                  Jaipur, Rajasthan, 302006
                </p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-white/80 mr-2 text-xs"></i>
                <p className="text-white/80 text-xs">+91 1414820113</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-white/80 mr-2 text-xs"></i>
                <p className="text-white/80 text-xs">gfpl.skill@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-4 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-xs mb-2 md:mb-0">
              &copy; 2025 All Rights Reserved by Goyal Fashions Pvt. Ltd, Jaipur.
            </p>
            <div className="flex gap-4 text-xs">
              <a href="https://example.com/privacy" className="text-white/80 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="https://example.com/terms" className="text-white/80 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="https://example.com/sitemap" className="text-white/80 hover:text-white transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;