import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-bg bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div className="z-20 max-w-4xl px-8 hero-text">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 animate-fadeInUp">
            <span className="block text-white drop-shadow-2xl leading-tight">
              Diversified Ventures
            </span>
            <span className="block text-white drop-shadow-2xl leading-tight mt-2">
              Unified Vision
            </span>
          </h1>
          <p className="text-xl mb-8 text-shadow-sm animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            India's Premier Flagship Enterprise
          </p>
          <Link 
            to="/about" 
            className="inline-block px-8 py-4 bg-maroon border-2 border-golden text-white rounded-full font-semibold hover:bg-golden hover:text-maroon transition-all duration-300 hover:-translate-y-2 shadow-lg animate-fadeInUp"
            style={{animationDelay: '0.6s'}}
          >
            Discover Our Story
          </Link>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow">
          <i className="fas fa-chevron-down text-2xl icon-bounce"></i>
        </div>
      </section>



      {/* Testimonials */}
      <section className="py-20 bg-off-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text animate-fadeInUp">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 stagger-animation">
            <div className="bg-gradient-maroon-golden rounded-2xl p-8 shadow-lg text-white animate-fadeInLeft" style={{'--stagger': 1}}>
              <div className="text-4xl mb-4 opacity-70 text-white">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="mb-6 text-white">
                "Goyal Fashions has been our trusted textile partner for over a
                decade. Their quality and reliability are unmatched."
              </p>
              <div className="font-semibold text-white">
                - Meera Agarwal, Fashion Designer
              </div>
            </div>
            <div className="bg-gradient-golden-maroon rounded-2xl p-8 shadow-lg text-white animate-fadeInUp" style={{'--stagger': 2}}>
              <div className="text-4xl mb-4 opacity-70 text-white">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="mb-6 text-white">
                "The hospitality experience at Goyal hotels is exceptional. Every
                stay feels like a luxury retreat."
              </p>
              <div className="font-semibold text-white">
                - Rajesh Kumar, Business Traveler
              </div>
            </div>
            <div className="bg-maroon rounded-2xl p-8 shadow-lg text-white animate-fadeInRight" style={{'--stagger': 3}}>
              <div className="text-4xl mb-4 opacity-70 text-white">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="mb-6 text-white">
                "Their investment advisory services helped us achieve remarkable
                portfolio growth with strategic insights."
              </p>
              <div className="font-semibold text-white">
                - Priya Sharma, Investor
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;