import React, { useState } from 'react';

const DirectorCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const messages = [
    {
      quote: "Goyal Fashions is more than a garment house—it is the foundation of a multi-sector enterprise committed to India's growth. From textiles to timeless hospitality at Ananta, from clean energy to community retail spaces, we aim to build with integrity, creativity, and a future-forward mindset.",
      name: "Mr. Ashish Goyal",
      position: "Director"
    },
    {
      quote: "Our journey of four decades has been built on the pillars of innovation, quality, and sustainable growth. We believe in creating value not just for our stakeholders, but for the communities we serve and the nation we call home.",
      name: "Mr. Rajesh Goyal",
      position: "Managing Director"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-8">
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Director's Message</h2>
      <div className="relative">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-4xl mx-auto">
          <div className="text-6xl text-maroon/20 mb-6">
            <i className="fas fa-quote-left"></i>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
            "{messages[currentSlide].quote}"
          </p>
          <div className="border-t pt-6">
            <p className="font-bold text-xl text-maroon">{messages[currentSlide].name}</p>
            <p className="text-gray-500">{messages[currentSlide].position}</p>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <button 
          onClick={() => setCurrentSlide(currentSlide === 0 ? 1 : 0)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-maroon text-white rounded-full hover:bg-golden transition-colors duration-300"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button 
          onClick={() => setCurrentSlide(currentSlide === 0 ? 1 : 0)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-maroon text-white rounded-full hover:bg-golden transition-colors duration-300"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {messages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentSlide === index ? 'bg-maroon' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      {/* Page Hero */}
      <section className="h-96 colorful-bg flex items-center justify-center text-center text-white relative about-hero-bg bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="z-20 max-w-4xl px-8">
          <h1 className="font-serif text-5xl font-bold text-stroke text-shadow mb-4 animate-fadeInUp">
            India's Premier Flagship Enterprise
          </h1>
          <p className="text-xl text-shadow-sm animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            40+ Years of Excellence in Textile Manufacturing & Business Innovation
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl font-bold mb-6 gradient-text">About Us</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-justify">
              Founded on 6 March 1981, Goyal Fashions Private Limited is a reputable private company
              headquartered in Jaipur, Rajasthan. Incorporated under CIN U18101RJ1981PTC018803, the
              company has grown from its textile roots to become a flagship for a diverse group spanning textiles,
              hospitality, solar energy, and retail.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              With over four decades of leadership, our promoters—
              technically qualified professionals—have built a name synonymous with quality, consistency, and
              export excellence.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-custom h-96 animate-fadeInRight">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" 
              alt="Goyal Fashions Legacy"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

 {/* Director's Message Carousel */}
      <section className="py-20 bg-off-white">
        <DirectorCarousel />
      </section>

      {/* Our Legacy */}
      <section className="py-20 max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Our Legacy</h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeInLeft">
            <h3 className="text-2xl font-semibold mb-6 text-maroon">Four Decades of Excellence</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Since 1981, Goyal Fashions has been at the forefront of India's textile revolution. What began as a vision to create world-class garments has evolved into a legacy of excellence spanning multiple industries.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our commitment to quality and innovation has earned us recognition as a trusted partner for international brands and a respected name in the domestic market.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-off-white rounded-lg">
                <div className="text-3xl font-bold text-maroon">40+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center p-4 bg-off-white rounded-lg">
                <div className="text-3xl font-bold text-maroon">25+</div>
                <div className="text-sm text-gray-600">Years in Export</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-custom h-96 animate-fadeInRight">
            <img 
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop" 
              alt="Our Legacy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Our Ventures */}
      <section className="py-20 bg-off-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Our Ventures</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-maroon-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-tshirt text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-maroon">Textiles</h3>
              <p className="text-gray-600 text-sm">Premium garment manufacturing and export with 40+ years of expertise</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-golden-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-hotel text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-maroon">Hospitality</h3>
              <p className="text-gray-600 text-sm">Luxury resort experiences at Ananta Spa & Resort, Jaipur</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-maroon-golden rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-solar-panel text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-maroon">Solar Energy</h3>
              <p className="text-gray-600 text-sm">Sustainable energy solutions contributing to India's green future</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-golden-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shopping-bag text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-maroon">Retail</h3>
              <p className="text-gray-600 text-sm">City Pulse Mall - Modern shopping destination in Jaipur</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;