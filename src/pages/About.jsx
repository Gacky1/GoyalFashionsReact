import React from 'react';

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
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Director's Message</h2>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-4xl mx-auto">
              <div className="text-6xl text-blue-200 mb-6">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "Goyal Fashions is more than a garment house—it is the foundation of a multi-sector enterprise committed to India's growth. From textiles to timeless hospitality at Ananta, from clean energy to community retail spaces, we aim to build with integrity, creativity, and a future-forward mindset."
              </p>
              <div className="border-t pt-6">
                <p className="font-bold text-xl text-gray-800">Mr. Ashish Goyal</p>
                <p className="text-gray-500">Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      
    </div>
  );
};

export default About;