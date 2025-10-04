import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ADivision: ${formData.division}%0D%0ASubject: ${formData.subject}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    const mailtoLink = `mailto:gfpl.skill@gmail.com?subject=Contact Form: ${encodeURIComponent(formData.subject)}&body=${emailBody}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div>
      {/* Page Hero */}
      <section className="h-96 colorful-bg flex items-center justify-center text-center text-white relative contact-hero-bg bg-cover bg-top">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="z-20 max-w-4xl px-8">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stroke text-shadow mb-4 animate-fadeInUp">
            Contact Us
          </h1>
          <p className="text-xl text-shadow-sm animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            Get in touch with our team for inquiries and partnerships
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Let's Connect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We invite <strong>educational institutions, CSR partners, NGOs, and government agencies</strong> to collaborate with us in delivering impactful skill education across India.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              <strong>📩Partner with Goyal Fashions</strong> – whether as a <strong> training partner, placement facilitator,
              or student</strong>, and be part of a mission that transforms lives through learning.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center animate-fadeInLeft" style={{animationDelay: '0.2s'}}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 icon-bounce">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">+91 1414820113, +91-81079 98081</p>
                </div>
              </div>
              
              <div className="flex items-center animate-fadeInLeft" style={{animationDelay: '0.4s'}}>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-4 icon-bounce">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">gfpl.skill@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center animate-fadeInLeft" style={{animationDelay: '0.6s'}}>
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mr-4 icon-bounce">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">Goyal House, 24, Ajmer Road, Jaipur, Rajasthan, 302006</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-custom p-8 rounded-2xl shadow-custom animate-fadeInRight">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="division" className="block mb-2 font-medium">Division of Interest</label>
                <select
                  id="division"
                  name="division"
                  value={formData.division}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select Division</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Skill Development">Skill Development</option>
                  <option value="Career">Career</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors duration-300"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors duration-300"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-primary text-white rounded-full font-semibold glowing-button"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Division Contacts */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text animate-fadeInUp">
            Division Contacts
          </h2>
          <div className="grid md:grid-cols-3 gap-8 stagger-animation">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl p-8 shadow-lg vibrant-card animate-fadeInUp" style={{'--stagger': 1}}>
              <div className="w-15 h-15 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-hotel text-2xl text-white icon-bounce"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Hospitality Division</h3>
              <p className="opacity-90 mb-6">For hotel bookings, event planning, and hospitality services.</p>
              <a 
                href="https://anantahotels.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full px-6 py-3 bg-white/20 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-center"
              >
                Visit Website
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl p-8 shadow-lg vibrant-card animate-fadeInUp" style={{'--stagger': 2}}>
              <div className="w-15 h-15 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-graduation-cap text-2xl text-white icon-bounce"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Education Division</h3>
              <p className="opacity-90 mb-6">For admissions, academic programs, and educational partnerships.</p>
              <a 
                href="https://aihmas.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full px-6 py-3 bg-white/20 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 text-center"
              >
                Visit Website
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-2xl p-8 shadow-lg vibrant-card animate-fadeInUp" style={{'--stagger': 3}}>
              <div className="w-15 h-15 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-2xl text-white icon-bounce"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Investment Division</h3>
              <p className="opacity-90 mb-6">For investment opportunities, partnerships, and financial services.</p>
              <a 
                href="https://investwithananta.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full px-6 py-3 bg-white/20 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-center"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text animate-fadeInUp">
          Find Us
        </h2>
        <div className="relative rounded-2xl overflow-hidden shadow-custom">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.6394741295867!2d75.78190137551304!3d26.910348276648588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db40cc7e30525%3A0x13efaabf376f0ad0!2sGoyal%20House%2C%20Madrampur%2C%20Civil%20Lines%2C%20Jaipur%2C%20Rajasthan%20302006!5e1!3m2!1sen!2sin!4v1753943795127!5m2!1sen!2sin" 
            width="100%" 
            height="400" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Goyal Fashions Location"
          ></iframe>
          <div className="absolute top-5 left-5 bg-white/90 p-4 rounded-xl backdrop-blur-custom">
            <h4 className="font-semibold mb-2">Jaipur Office</h4>
            <p className="text-sm text-gray-600">24, Goyal House, Ajmer Road, Jaipur - 302006</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;