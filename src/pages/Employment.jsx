import React from 'react';
import { Link } from 'react-router-dom';

const Employment = () => {
  return (
    <div>
      {/* Page Hero */}
      <section className="h-96 colorful-bg flex items-center justify-center text-center text-white relative employment-hero-bg bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="z-20 max-w-4xl px-8">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stroke text-shadow mb-4 animate-fadeInUp">
            Captive Employment Opportunities
          </h1>
          <p className="text-xl text-shadow-sm animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            10,000+ Direct Employment Across Our Business Units
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Bridging Skills to Employment</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Goyal Fashions Private Limited, our <strong>Captive Employment Model</strong> bridges skill development with direct employment across our own businesses, ensuring job assurance for trained candidates in real-time industry environments.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a <strong>total captive employment demand of 10,000+ employees</strong>, we provide guaranteed career opportunities across hospitality, manufacturing, retail, and education sectors.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-custom h-96 animate-fadeInRight">
            <img 
              src="/images/Captive employment.png" 
              alt="Employment Opportunities"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

       {/* Group Operations */}
      <section className="py-20 max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text animate-fadeInUp">
          Group Operations: Diverse, Integrated, Impactful
        </h2>
        
        {/* Textiles & Apparel Manufacturing */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <i className="fas fa-tshirt text-primary mr-2"></i>
              Textiles & Apparel Manufacturing
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              At the core of our group is our garment manufacturing division, a respected exporter for more than 25 years. Our state-of-the-art facility in Jaipur spans over <strong>100,000 sq. ft.</strong> and includes <strong>300+ sewing machines</strong>, design and development teams, embedded units for embroidery, buttoning, washing, finishing, QC, and packing.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We serve both domestic and international markets, delivering fashion that blends superior quality with ethical practices.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-custom h-96">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" 
              alt="Textile Manufacturing"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        {/* Hospitality Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="rounded-2xl overflow-hidden shadow-custom h-96 md:order-1">
            <img 
              src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3059/x_0,y_123,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/the-ananta-udaipur/Zenith_Secod_Angle_gyplzr" 
              alt="Ananta Resort"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:order-2">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <i className="fas fa-hotel text-primary mr-2"></i>
              Hospitality – Ananta Spa & Resort
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Under our hospitality brand, Ananta Spa & Resort Jaipur stands as a luxury destination nestled near the Aravalli hills—just off the Jaipur-Delhi Highway and minutes from Amer Fort.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Offering <strong>150+ elegantly appointed rooms and suites</strong> (including the 3,700 sq. ft. Presidential Suite), a sky-reflecting pool, lush gardens, gourmet restaurants, modern event spaces and wellness experiences.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <i className="fas fa-graduation-cap text-primary mr-2"></i>
              Education – AIHMAS
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Ananta Institute of Hotel Management & Allied Studies (AIHMAS) is a premier hospitality education institution operating under the Goyal Fashions education vertical.<strong> Affiliated with Rajasthan ILD Skills University and recognized by UGC</strong>, the institute has earned a reputation for academic excellence and practical training.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Campus: </strong>Spread over one acre with a WiFi-enabled, modern campus featuring well-equipped classrooms, labs, training kitchens, library, and hospitality simulation areas.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-custom h-96">
            <img 
              src="https://aihmas.com/wp-content/uploads/2024/07/bestAcademic-1024x683-1.jpeg" 
              alt="Aihmas"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Renewable Energy */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="rounded-2xl overflow-hidden shadow-custom h-96 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop" 
              alt="Solar Energy Infrastructure"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:order-2">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <i className="fas fa-solar-panel text-primary mr-2"></i>
              Renewable Energy – Solar Initiatives
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Aligned with India's sustainable development goals, our group directs investments into solar energy infrastructure. These green projects support clean power needs and contribute to India's renewable energy mission.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our solar initiatives create employment opportunities in <strong>green technology, installation, maintenance, and project management</strong>, supporting India's transition to sustainable energy solutions.
            </p>
          </div>
        </div>

        {/* Retail */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <i className="fas fa-shopping-bag text-primary mr-2"></i>
              Retail – City Pulse Mall (Jaipur)
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We developed City Pulse Mall in Jaipur—a curated shopping destination for fashion, lifestyle, driven by consumer-first experiences, combining quality, value, and convenience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The mall provides diverse employment opportunities in <strong>retail management, customer service, operations, security, and facility management</strong>, creating a comprehensive retail ecosystem in Jaipur.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-custom h-96">
            <img 
              src="https://www.walk2mall.com/wp-content/uploads/2017/10/1508674004_Jaipur_City_Pulse.jpg?x38496" 
              alt="City Pulse Mall"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Employment Impact */}
      <section className="py-20 colorful-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white animate-fadeInUp">
            Our Employment Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-animation">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 animate-fadeInUp" style={{'--stagger': 1}}>
              <div className="text-5xl font-bold mb-2 gradient-text animate-pulse-slow">5,000+</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Lives Transformed</h3>
              <p className="text-gray-600">Direct employment provided across all sectors</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 animate-fadeInUp" style={{'--stagger': 2}}>
              <div className="text-5xl font-bold mb-2 gradient-text animate-pulse-slow">85%</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Rural Youth Employed</h3>
              <p className="text-gray-600">From underserved communities</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 animate-fadeInUp" style={{'--stagger': 3}}>
              <div className="text-5xl font-bold mb-2 gradient-text animate-pulse-slow">60%</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Women Empowered</h3>
              <p className="text-gray-600">Female workforce participation</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 animate-fadeInUp" style={{'--stagger': 4}}>
              <div className="text-5xl font-bold mb-2 gradient-text animate-pulse-slow">₹25K+</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Average Monthly Income</h3>
              <p className="text-gray-600">Sustainable livelihood created</p>
            </div>
          </div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Ready to Start Your Career?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Join our skill development programs and secure guaranteed employment across our business units.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/education" 
              className="px-8 py-4 bg-gradient-primary text-white rounded-full font-semibold glowing-button"
            >
              Explore Training Programs
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-primary text-white rounded-full font-semibold glowing-button"
            >
              Contact for Jobs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Employment;