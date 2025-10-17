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
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 animate-fadeInUp" style={{WebkitTextStroke: '1.5px white', WebkitTextFillColor: 'transparent'}}>
            <span className="block drop-shadow-2xl leading-tight">
              Skill is the new strength.
            </span>
            <span className="block drop-shadow-2xl leading-tight mt-2">
              We build it.
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white font-semibold text-stroke animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            Empowering India's next generation with industry-aligned skills, hands-on training, and career pathways.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <Link 
              to="/education" 
              className="px-8 py-4 bg-maroon border-2 border-golden text-white rounded-full font-semibold hover:bg-golden hover:text-maroon transition-all duration-300 hover:-translate-y-2 shadow-lg"
            >
              Explore Programs
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-golden border-2 border-maroon text-maroon rounded-full font-semibold hover:bg-maroon hover:text-white transition-all duration-300 hover:-translate-y-2 shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow">
          <i className="fas fa-chevron-down text-2xl icon-bounce"></i>
        </div>
      </section>

      {/* PM's Vision Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-8 gradient-text">PM's Vision & Why Skills Matter</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <div className="text-6xl text-maroon/20 mb-6">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="text-2xl font-semibold text-gray-700 mb-4 italic">
                "Degrees are valuable, but skills make you indispensable."
              </p>
              <p className="text-lg text-gray-600 mb-6">— PM Shri Narendra Modi</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                In today's fast-changing world, education is just the beginning — it's <strong>skill that defines success</strong>. 
                When youth are empowered with the right skills, they don't just seek jobs — they <strong>create opportunities</strong> and contribute to nation-building.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At <strong>Goyal Fashions Private Limited</strong>, we proudly align with the <strong>Skill India Mission</strong>, 
                promoting practical learning, industry-driven training, and livelihood empowerment for a <strong>Skilled and Self-Reliant India</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-maroon-golden text-white p-8 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">
              <i className="fas fa-bullseye text-white"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Mission</h3>
            <p className="text-white leading-relaxed">
              To equip learners — especially underserved youth — with high-demand vocational and digital skills, 
              bridging the gap between aspiration and opportunity.
            </p>
          </div>
          <div className="bg-gradient-golden-maroon text-white p-8 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">
              <i className="fas fa-eye text-white"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Vision</h3>
            <p className="text-white leading-relaxed">
              A self-reliant India where every young person has access to world-class training, mentorship, 
              and real pathways to career success.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-off-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 gradient-text">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At Goyal Fashions, we design learning experiences that go beyond classrooms — connecting 
              <strong> skill, opportunity, and growth</strong>. Our programs meet industry needs while promoting 
              <strong> employment, entrepreneurship, and empowerment.</strong>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl text-maroon mb-4">
                <i className="fas fa-tshirt"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-maroon">Vocational & Technical Training</h3>
              <p className="text-gray-600 text-sm">
                Hands-on training in garment technology, tailoring, embroidery, machine operation, and quality control — 
                helping learners gain skills that connect directly with the industry.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl text-maroon mb-4">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-maroon">Digital & 21st Century Skills</h3>
              <p className="text-gray-600 text-sm">
                Courses in basic computing, digital marketing, e-commerce, and communication skills to prepare 
                youth for today's technology-driven workplaces.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl text-maroon mb-4">
                <i className="fas fa-industry"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-maroon">Apprenticeships & Industry Exposure</h3>
              <p className="text-gray-600 text-sm">
                We connect classroom learning with real-world experience through industry tie-ups, internships, 
                and factory-based training for practical exposure.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl text-maroon mb-4">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-maroon">Trainer & Faculty Development</h3>
              <p className="text-gray-600 text-sm">
                Developing a strong network of qualified trainers equipped with modern teaching techniques, 
                industry knowledge, and leadership abilities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl text-maroon mb-4">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-maroon">Placement & Career Support</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive placement assistance including resume preparation, interview training, 
                and direct employer connections.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl text-maroon mb-4">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-maroon">Entrepreneurship Support</h3>
              <p className="text-gray-600 text-sm">
                Encouraging self-reliance by guiding learners to start their own ventures with support in 
                business setup, financial literacy, and government schemes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-maroon rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-maroon">Enroll / Register</h3>
            <p className="text-gray-600">Join online or at your nearest training center.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-golden rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-maroon">2</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-maroon">Learn & Practice</h3>
            <p className="text-gray-600">Gain hands-on, project-based training under expert guidance.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-maroon rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-maroon">Certify & Deploy</h3>
            <p className="text-gray-600">Get certified and start your career or business with our support.</p>
          </div>
        </div>
      </section>

      {/* Transformative Impact */}
      <section className="py-20 colorful-bg text-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Transformative Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
            <div>
              <div className="text-5xl font-bold mb-2 text-white">7,000+</div>
              <p className="text-xl text-white">Learners Trained</p>
              <p className="text-sm opacity-80 text-white">Across multiple sectors</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-white">Hundreds </div>
              <p className="text-xl text-white">of Trainers Developed</p>
              <p className="text-sm opacity-80 text-white">Deployed nationwide</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-white">100%</div>
              <p className="text-xl text-white">Success Stories</p>
              <p className="text-sm opacity-80 text-white">Youth employed & self-employed</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="text-4xl text-white/30 mb-4">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="text-xl font-semibold text-white mb-4 italic">
                "The more we give importance to skill development, the more competent will be our youth."
              </p>
              <p className="text-white">— PM Shri Narendra Modi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skill India Alignment */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-8 gradient-text">Our Alignment with Skill India</h2>
            <p className="text-xl text-gray-600 mb-8">
              Prime Minister Modi's vision inspires our mission. At <strong>Goyal Fashions</strong>, we stand aligned 
              with the national agenda of making India the <strong>Skill Capital of the World</strong>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl text-maroon mb-4">
                <i className="fas fa-flag-checkered"></i>
              </div>
              <p className="text-gray-700 italic">
                "Skill India is strengthening the resolve to make our youth skilled and self-reliant."
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl text-golden mb-4">
                <i className="fas fa-hammer"></i>
              </div>
              <p className="text-gray-700 italic">
                "Every craftsman is a Vishwakarma — carrying dignity through mastery."
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl text-maroon mb-4">
                <i className="fas fa-globe-asia"></i>
              </div>
              <p className="text-gray-700 italic">
                "India will become the skill capital of the world."
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700">
              We invest in <strong>scalable, quality-driven training</strong> that contributes to 
              <strong> nation-building and inclusive growth</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Be Part of India's Skill Revolution</h2>
          <p className="text-xl mb-8 text-gray-600">
            Choose your path and take the next step with <strong>Goyal Fashions Private Limited</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/education" 
              className="px-8 py-4 bg-maroon border-2 border-golden text-white rounded-full font-semibold hover:bg-golden hover:text-maroon transition-all duration-300"
            >
              Join a Course
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-golden border-2 border-maroon text-maroon rounded-full font-semibold hover:bg-maroon hover:text-white transition-all duration-300"
            >
              Become a Trainer
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white border-2 border-maroon text-maroon rounded-full font-semibold hover:bg-maroon hover:text-white transition-all duration-300"
            >
              Partner with Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;