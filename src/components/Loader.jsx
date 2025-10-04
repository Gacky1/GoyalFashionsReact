import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-off-white">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-12 animate-pulse-slow">
          <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl p-3 border-4 border-golden">
            <img 
              src="/images/logo.png" 
              alt="Goyal Fashions" 
              className="w-full h-full object-contain animate-pulse-slow"
            />
          </div>
          <h2 className="text-3xl font-bold text-maroon mb-3 font-display">Goyal Fashions</h2>
          <p className="text-maroon/70 text-lg font-body">Loading Excellence...</p>
        </div>

        {/* Sleek Loader Animation */}
        <div className="relative mb-8">
          {/* Outer Ring */}
          <div className="w-20 h-20 mx-auto border-4 border-golden/30 rounded-full loader-spin">
            <div className="w-full h-full border-4 border-transparent border-t-maroon rounded-full loader-spin-reverse"></div>
          </div>
          
          {/* Inner Dots */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-maroon rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
              <div className="w-2 h-2 bg-golden rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-maroon rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-2 bg-maroon/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-maroon-golden rounded-full loading-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;