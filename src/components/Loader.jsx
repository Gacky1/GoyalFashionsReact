import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 animate-pulse-slow">
          <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-2xl p-2">
            <img 
              src="/images/logo.png" 
              alt="Goyal Fashions" 
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Goyal Fashions</h2>
          <p className="text-white/80">Loading Excellence...</p>
        </div>

        {/* Sleek Loader Animation */}
        <div className="relative">
          {/* Outer Ring */}
          <div className="w-24 h-24 mx-auto border-4 border-white/20 rounded-full animate-spin">
            <div className="w-full h-full border-4 border-transparent border-t-white rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1s'}}></div>
          </div>
          
          {/* Inner Dots */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse loading-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;