import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="colorful-bg text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2 animate-fadeInUp">
            <div className="text-3xl font-bold mb-4 text-white">
              Goyal Fashions
            </div>
            <p className="mb-6 text-white/90 leading-relaxed">
              India's Premier Flagship Enterprise with 40+ years of excellence across textiles, hospitality, education, and sustainable energy sectors.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition-all duration-300 hover:scale-110 icon-bounce">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition-all duration-300 hover:scale-110 icon-bounce">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition-all duration-300 hover:scale-110 icon-bounce">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-800 transition-all duration-300 hover:scale-110 icon-bounce">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/employment" className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  Employment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-white/80 mr-3 mt-1"></i>
                <p className="text-white/80 text-sm">
                  Goyal House, 24, Ajmer Road,<br />
                  Jaipur, Rajasthan, 302006
                </p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-white/80 mr-3"></i>
                <p className="text-white/80 text-sm">+91 1414820113</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-white/80 mr-3"></i>
                <p className="text-white/80 text-sm">gfpl.skill@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              &copy; 2025 All Rights Reserved by Goyal Fashions Pvt. Ltd, Jaipur.
            </p>
            <div className="flex gap-6 text-sm">
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