import React from 'react';
import { Link } from 'react-router-dom';

const Employment = () => {
  return (
    <div>
      {/* Page Hero */}
      <section className="h-96 colorful-bg flex items-center justify-center text-center text-white relative employment-hero-bg bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="z-20 max-w-4xl px-8 hero-text">
          <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold text-stroke text-shadow mb-4 animate-fadeInUp">
            Captive Employment Opportunities
          </h1>
          <p className="text-xl text-shadow-sm animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            10,000+ Direct Employment Across Our Business Units
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text animate-fadeInUp">Bridging Skills to Employment</h2>
        <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-12 shadow-lg animate-fadeInUp">
          <div className="text-center">
            <p className="text-gray-700 leading-relaxed mb-6 text-xl max-w-4xl mx-auto">
              At Goyal Fashions Private Limited, our <strong>Captive Employment Model</strong> bridges skill development with direct employment across our own businesses, ensuring job assurance for trained candidates in real-time industry environments.
            </p>
            <p className="text-gray-700 leading-relaxed text-xl max-w-4xl mx-auto">
              With a <strong>total captive employment demand of 10,000+ employees</strong>, we provide guaranteed career opportunities across hospitality, manufacturing, retail, and education sectors.
            </p>
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
              src="/images/Textile .jpg" 
              alt="Textile Manufacturing"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        {/* Hospitality Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <i className="fas fa-hotel text-primary mr-3"></i>
              Hospitality – Ananta Hotels & Resorts
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Our hospitality division operates luxury destinations across India, offering world-class accommodation, dining, and wellness experiences with guaranteed employment opportunities for our trained professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3059/x_0,y_123,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/the-ananta-udaipur/Zenith_Secod_Angle_gyplzr" 
                  alt="The Ananta Udaipur"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">The Ananta Udaipur</h4>
                <p className="text-gray-600 text-sm mb-2">Luxury Resort</p>
                <p className="text-gray-500 text-xs">150+ Rooms & Suites</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_2812/x_0,y_0,w_4998,h_2812,r_0,c_crop,q_80,fl_progressive/w_2475,f_auto,c_fit/ananta-spa-resort-jaipur/SNY04401_vytjnq" 
                  alt="Ananta Spa & Resort Jaipur"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Ananta Spa & Resort Jaipur</h4>
                <p className="text-gray-600 text-sm mb-2">Luxury Spa Resort</p>
                <p className="text-gray-500 text-xs">Near Aravalli Hills</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_172,w_3302,h_1858,r_0,c_crop,q_80,fl_progressive/w_2475,f_auto,c_fit/ananta-spa-and-resort-pushkar/Old_charm_with_new_age_ywbitd" 
                  alt="Ananta Spa & Resort Pushkar"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Ananta Spa & Resort Pushkar</h4>
                <p className="text-gray-600 text-sm mb-2">Desert Resort</p>
                <p className="text-gray-500 text-xs">Sacred Lake Views</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_0,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_2475,f_auto,c_fit/the-baagh-ananta-elite-ranthambore/A%20RETREAT%20AMIDST%20THE%20UNTAMED%20WILDERNESS_19499b0e" 
                  alt="The Baagh Ananta Elite"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">The Baagh Ananta Elite</h4>
                <p className="text-gray-600 text-sm mb-2">Wildlife Resort</p>
                <p className="text-gray-500 text-xs">Ranthambore</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_67,w_1280,h_720,r_0,c_crop,q_80,fl_progressive/w_1280,f_auto,c_fit/5-flowers-ananta-elite/Budget_hotel_in_Kota_Hotel_5_Flowers_yciena" 
                  alt="Ananta Elite Kota"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">5 Flowers Ananta Elite</h4>
                <p className="text-gray-600 text-sm mb-2">Business Hotel</p>
                <p className="text-gray-500 text-xs">Kota</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_513,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_2475,f_auto,c_fit/ananta-spa-and-resort-ajabgarh/Fire_Villa_de9b59d1" 
                  alt="Ananta Spa & Resort Ajabgarh"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Ananta Spa & Resort</h4>
                <p className="text-gray-600 text-sm mb-2">Historical Whispers</p>
                <p className="text-gray-500 text-xs">Ajabgarh</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_2812/x_0,y_0,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/montclair-ananta-elite-solan/DJI_20241001090054_0210_D-Enhanced-NR" 
                  alt="Montclair Ananta Elite"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Montclair Ananta Elite</h4>
                <p className="text-gray-600 text-sm mb-2">City Hotel</p>
                <p className="text-gray-500 text-xs">Solan</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://assets.simplotel.com/simplotel/image/upload/x_792,y_0,w_3168,h_3168,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/the-garden-ananta-elite-rajkot/Moti_Mahal,_our_in-house_banquet_hall_at_The_Garden_Ananta_Elite,_Rajkot_7" 
                  alt="The Garden Ananta Elite"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">The Garden Ananta Elite</h4>
                <p className="text-gray-600 text-sm mb-2">Resort</p>
                <p className="text-gray-500 text-xs">Rajkot</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_2475,f_auto,c_fit/classic-sapphire-ananta-bundi/GRV08531_idnyj2" 
                  alt="Classic Sapphire Ananta Bundi"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Classic Sapphire Ananta Bundi</h4>
                <p className="text-gray-600 text-sm mb-2">Resort</p>
                <p className="text-gray-500 text-xs">Bundi</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_2694/x_105,y_0,w_4790,h_2694,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/richmonde-ananta-elite-goa/DSC03418_e2eae740" 
                  alt="Richmonde Ananta Elite"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Richmonde Ananta Elite</h4>
                <p className="text-gray-600 text-sm mb-2">Resort</p>
                <p className="text-gray-500 text-xs">Goa</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_2475,f_auto,c_fit/jagira-ananta-elite-gir/row_of_cottages" 
                  alt="Jagira Ananta Elite"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Jagira Ananta Elite</h4>
                <p className="text-gray-600 text-sm mb-2">Resort</p>
                <p className="text-gray-500 text-xs">Gir</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3242/x_0,y_215,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_2475,f_auto,c_fit/lotus-ananta-elite-kota/_DSC0552_ea1q5f" 
                  alt="Lotus Ananta Elite"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Lotus Ananta Elite</h4>
                <p className="text-gray-600 text-sm mb-2">City Hotel</p>
                <p className="text-gray-500 text-xs">Kota</p>
              </div>
            </div>
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
              src="/images/CityPulse.jpeg" 
              alt="City Pulse Mall"
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

     {/* Division Contacts */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text animate-fadeInUp">
            Division Contacts
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Connect directly with our specialized divisions for personalized assistance and opportunities across our diverse business portfolio.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            <div className="bg-gradient-maroon-golden text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fadeInUp" style={{'--stagger': 1}}>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-hotel text-3xl text-white icon-bounce"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Hospitality Division</h3>
              <p className="opacity-90 mb-4 text-white text-sm text-center">Hotel bookings, events & hospitality services</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-white/80 text-sm">
                  <i className="fas fa-phone w-4 mr-2"></i>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center text-white/80 text-sm">
                  <i className="fas fa-envelope w-4 mr-2"></i>
                  <span>hospitality@gfpl.com</span>
                </div>
              </div>
              
              <a 
                href="https://anantahotels.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full px-6 py-3 bg-white/20 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-maroon transition-all duration-300 text-center text-sm"
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                Visit Website
              </a>
            </div>
            
            <div className="bg-gradient-golden-maroon text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fadeInUp" style={{'--stagger': 2}}>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-graduation-cap text-3xl text-white icon-bounce"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Education Division</h3>
              <p className="opacity-90 mb-4 text-white text-sm text-center">Admissions, programs & partnerships</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-white/80 text-sm">
                  <i className="fas fa-phone w-4 mr-2"></i>
                  <span>+91 98765 43211</span>
                </div>
                <div className="flex items-center text-white/80 text-sm">
                  <i className="fas fa-envelope w-4 mr-2"></i>
                  <span>education@gfpl.com</span>
                </div>
              </div>
              
              <a 
                href="https://aihmas.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full px-6 py-3 bg-white/20 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-maroon transition-all duration-300 text-center text-sm"
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                Visit Website
              </a>
            </div>
            
            <div className="bg-gradient-maroon-golden text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fadeInUp" style={{'--stagger': 3}}>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-tshirt text-3xl text-white icon-bounce"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Textiles Division</h3>
              <p className="opacity-90 mb-4 text-white text-sm text-center">Manufacturing & industry partnerships</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-white/80 text-sm">
                  <i className="fas fa-phone w-4 mr-2"></i>
                  <span>+91 98765 43212</span>
                </div>
                <div className="flex items-center text-white/80 text-sm">
                  <i className="fas fa-envelope w-4 mr-2"></i>
                  <span>textiles@gfpl.com</span>
                </div>
              </div>
              
              <a 
                href="https://garment-india.com/manufacturer/contact-us.php?gmb_id=60" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full px-6 py-3 bg-white/20 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-maroon transition-all duration-300 text-center text-sm"
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                Visit Website
              </a>
            </div>
            
            <div className="bg-gradient-golden-maroon text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fadeInUp" style={{'--stagger': 4}}>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-handshake text-3xl text-white icon-bounce"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">Skill Development</h3>
              <p className="opacity-90 mb-4 text-white text-sm text-center">Training programs & placements</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-white/80 text-sm">
                  <i className="fas fa-phone w-4 mr-2"></i>
                  <span>+91 98765 43213</span>
                </div>
                <div className="flex items-center text-white/80 text-sm">
                  <i className="fas fa-envelope w-4 mr-2"></i>
                  <span>skills@gfpl.com</span>
                </div>
              </div>
              
              <a 
                href="/education" 
                className="inline-block w-full px-6 py-3 bg-white/20 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-maroon transition-all duration-300 text-center text-sm"
              >
                <i className="fas fa-arrow-right mr-2"></i>
                Learn More
              </a>
            </div>
          </div>
          
          {/* Quick Contact CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-maroon">Need Immediate Assistance?</h3>
              <p className="text-gray-600 mb-6">Our team is ready to help you find the right opportunity or answer your questions.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="tel:+919876543210" 
                  className="px-6 py-3 bg-maroon text-white rounded-full font-semibold hover:bg-golden hover:text-maroon transition-all duration-300 flex items-center"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call Now
                </a>
                <a 
                  href="mailto:info@gfpl.com" 
                  className="px-6 py-3 bg-golden text-maroon rounded-full font-semibold hover:bg-maroon hover:text-white transition-all duration-300 flex items-center"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Email Us
                </a>
              </div>
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
              className="px-8 py-4 bg-maroon border-2 border-golden text-white rounded-full font-semibold hover:bg-golden hover:text-maroon transition-all duration-300"
            >
              Explore Training Programs
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-golden border-2 border-maroon text-maroon rounded-full font-semibold hover:bg-maroon hover:text-white transition-all duration-300"
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