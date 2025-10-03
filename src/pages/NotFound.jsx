import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center colorful-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center text-white px-8">
        <div className="animate-fadeInUp">
          <h1 className="text-9xl font-bold mb-4 gradient-text">404</h1>
          <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
          <p className="text-xl mb-8 text-white/90 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="px-8 py-3 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <i className="fas fa-home mr-2"></i>
              Go Home
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;