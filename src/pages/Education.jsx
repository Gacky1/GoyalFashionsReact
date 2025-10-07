import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Education = () => {
  const [showHSRTList, setShowHSRTList] = useState(false);
  const navigate = useNavigate();
  const hsrtListRef = useRef(null);

  useEffect(() => {
    if (showHSRTList && hsrtListRef.current) {
      hsrtListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showHSRTList]);

  const hsrtBatches = [
    {
      id: 1,
      name: "HSRT 2024-25",
      year: "2024-25",
      date: "Current Batch",
      courses: []
    }
  ];
  return (
    <div>
      {/* Page Hero */}
      <section className="h-96 colorful-bg flex items-center justify-center text-center text-white relative education-hero-bg bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="z-20 max-w-4xl px-8 hero-text">
          <h1 className=" text-4xl md:text-5xl font-bold text-stroke text-shadow mb-4 animate-fadeInUp">
            Empowering People, Enabling Progress
          </h1>
          <p className="text-xl text-shadow-sm animate-fadeInUp" style={{animationDelay: '0.3s'}}>
           Skill Development for a Stronger India
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 max-w-4xl mx-auto px-8">
        <div className="text-center animate-fadeInUp">
          <h2 className="text-4xl font-bold mb-12 gradient-text">Building Human Capital</h2>
          
          {/* Testimonial */}
          <div className="bg-white border-l-4 border-maroon p-8 rounded-xl shadow-lg text-left max-w-3xl mx-auto">
            <div className="text-5xl mb-6 text-maroon opacity-70 text-center">
              <i className="fas fa-quote-left"></i>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6 italic text-lg">
              "It gives me great pride to be associated with Goyal Fashions Private Limited as a key client in the field of Skill Development and Training Implementation. Over the years, I have had the privilege to lead and manage multiple government skill initiatives on behalf of Goyal Fashions, contributing to India's vision of creating a skilled, self-reliant, and future-ready workforce."
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 italic text-lg">
              "Through structured planning, compliance management, and on-ground execution, we have successfully associated Goyal Fashions with prestigious projects such as RSLDC, Hunar Se Rozgar Tak (HSRT), SAMARTH, ITDC, and NAPS–BTP. Each initiative has opened new avenues for growth, visibility, and impact—positioning Goyal Fashions as a trusted name in India's evolving skill ecosystem."
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 italic text-lg">
              "My focus has always been on building sustainable frameworks—from project acquisition and execution to monitoring and placement—ensuring that every step taken on behalf of Goyal Fashions translates into real opportunities and measurable outcomes for the youth of India."
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 italic text-lg">
              "Together, we continue to strengthen Goyal Fashions' presence in the Skill Development Sector, expanding its role from a hospitality brand to a multi-sector contributor to national development and empowerment."
            </p>
            <div className="bg-gray-50 border-l-4 border-golden pl-6 py-4 mb-6 text-center">
              <p className="text-maroon font-semibold italic text-xl">
                "Skill is the bridge between aspiration and achievement—and we are committed to building that bridge."
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold text-maroon text-lg">— Mr. Vaibhav Gupta</p>
              <p className="text-gray-600">Skill Development Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Development Overview */}
      <section className="py-20 bg-off-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Skill Development: Building Skills for Today & Tomorrow</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Goyal Fashions Pvt. Ltd. has diversified its skilling initiatives across the sectors where we operate. Each vertical offers hands-on training tailored to industry-specific requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            <div className="bg-gradient-maroon-golden text-white p-6 rounded-xl shadow-lg animate-fadeInUp" style={{'--stagger': 1}}>
              <div className="text-3xl mb-4 icon-bounce text-white">
                <i className="fas fa-tshirt"></i>
              </div>
              <h3 className="font-bold text-lg mb-3 text-white">Textiles & Apparel</h3>
              <p className="opacity-90 text-white">Industry-specific training for garment manufacturing and textile production</p>
            </div>
            <div className="bg-gradient-golden-maroon text-white p-6 rounded-xl shadow-lg animate-fadeInUp" style={{'--stagger': 2}}>
              <div className="text-3xl mb-4 icon-bounce text-white">
                <i className="fas fa-hotel"></i>
              </div>
              <h3 className="font-bold text-lg mb-3 text-white">Hospitality</h3>
              <p className="opacity-90 text-white">Comprehensive hospitality training programs</p>
            </div>
            <div className="bg-gradient-maroon-golden text-white p-6 rounded-xl shadow-lg animate-fadeInUp" style={{'--stagger': 3}}>
              <div className="text-3xl mb-4 icon-bounce text-white">
                <i className="fas fa-building"></i>
              </div>
              <h3 className="font-bold text-lg mb-3 text-white">Real Estate</h3>
              <p className="opacity-90 text-white">Property management and real estate skills development</p>
            </div>
            <div className="bg-gradient-golden-maroon text-white p-6 rounded-xl shadow-lg animate-fadeInUp" style={{'--stagger': 4}}>
              <div className="text-3xl mb-4 icon-bounce text-white">
                <i className="fas fa-swimming-pool"></i>
              </div>
              <h3 className="font-bold text-lg mb-3 text-white">Club & Recreation</h3>
              <p className="opacity-90 text-white">Service excellence in club and recreational facilities</p>
            </div>
            <div className="bg-gradient-maroon-golden text-white p-6 rounded-xl shadow-lg animate-fadeInUp" style={{'--stagger': 5}}>
              <div className="text-3xl mb-4 icon-bounce text-white">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="font-bold text-lg mb-3 text-white">Skill Development</h3>
              <p className="opacity-90 text-white">Comprehensive skill training across multiple industries</p>
            </div>
            <div className="bg-gradient-golden-maroon text-white p-6 rounded-xl shadow-lg animate-fadeInUp" style={{'--stagger': 6}}>
              <div className="text-3xl mb-4 icon-bounce text-white">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <h3 className="font-bold text-lg mb-3 text-white">Retail Services</h3>
              <p className="opacity-90 text-white">Customer service and retail management training</p>
            </div>
            <div className="bg-gradient-maroon-golden text-white p-6 rounded-xl shadow-lg animate-fadeInUp" style={{'--stagger': 7}}>
              <div className="text-3xl mb-4 icon-bounce text-white">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="font-bold text-lg mb-3 text-white">Education</h3>
              <p className="opacity-90 text-white">Academic excellence and professional education programs</p>
            </div>
            <div className="bg-gradient-golden-maroon text-white p-6 rounded-xl shadow-lg animate-fadeInUp" style={{'--stagger': 8}}>
              <div className="text-3xl mb-4 icon-bounce text-white">
                <i className="fas fa-solar-panel"></i>
              </div>
              <h3 className="font-bold text-lg mb-3 text-white">Solar Energy</h3>
              <p className="opacity-90 text-white">Green energy and sustainable technology skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Development Objectives */}
      <section className="py-20 max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Our Skill Development Objectives</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-briefcase text-blue-600 text-2xl"></i>
            </div>
            <h3 className="font-bold text-xl mb-3">Job-Ready Training</h3>
            <p className="text-gray-600">Deliver practical training across our core sectors</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-users text-green-600 text-2xl"></i>
            </div>
            <h3 className="font-bold text-xl mb-3">Inclusive Skilling</h3>
            <p className="text-gray-600">Promote skilling for rural youth and women</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-handshake text-purple-600 text-2xl"></i>
            </div>
            <h3 className="font-bold text-xl mb-3">MSME Support</h3>
            <p className="text-gray-600">Support MSMEs with trained, productive workforce</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-laptop text-red-600 text-2xl"></i>
            </div>
            <h3 className="font-bold text-xl mb-3">Digital & Soft Skills</h3>
            <p className="text-gray-600">Embed digital skills, soft skills, and workplace ethics</p>
          </div>
          <div className="text-center md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-chart-line text-yellow-600 text-2xl"></i>
            </div>
            <h3 className="font-bold text-xl mb-3">Skilled Economy</h3>
            <p className="text-gray-600">Contribute to India's skilled economy through structured programs</p>
          </div>
        </div>
      </section>

      {/* Skill Training Domains */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Skill Training Domains</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-4 text-blue-600">Textile & Apparel</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Sewing Machine Operator (SMO)</li>
                <li>• Garment Checker</li>
                <li>• Fabric Inspection & Finishing</li>
                <li>• Production Supervision</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-4 text-green-600">Hospitality</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Housekeeping Attendant</li>
                <li>• Front Office Associate</li>
                <li>• Food & Beverage Steward</li>
                <li>• Guest Relations Executive</li>
                <li>• Multi-Cuisine Cook</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-4 text-purple-600">Food Safety & Hygiene</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• FoSTaC Certification (FSSAI)</li>
                <li>• Food Handler Training for Cafés & Hotels</li>
                <li>• Kitchen Safety & Sanitation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-4 text-red-600">General & Digital Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Digital Literacy for Micro-entrepreneurs</li>
                <li>• Spoken English & Workplace Communication</li>
                <li>• Customer Service & Retail Fundamentals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Model */}
      <section className="py-20 max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Our Skill Training Model</h2>
        <p className="text-center text-xl text-gray-600 mb-12">We follow a "Training-to-Employment" approach</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="font-bold text-lg mb-3">Industry-Centric Curriculum</h3>
            <p className="text-gray-600 text-sm">Courses designed based on current industry requirements and standards</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <h3 className="font-bold text-lg mb-3">Certified Trainers & Assessors</h3>
            <p className="text-gray-600 text-sm">Qualified professionals with industry experience deliver high-quality training</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="font-bold text-lg mb-3">Placement / OJT Support</h3>
            <p className="text-gray-600 text-sm">Direct placement assistance and on-the-job training opportunities</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-red-600">4</span>
            </div>
            <h3 className="font-bold text-lg mb-3">Entrepreneurship Mentorship</h3>
            <p className="text-gray-600 text-sm">Guidance and support for starting own business and becoming self-employed</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-yellow-600">5</span>
            </div>
            <h3 className="font-bold text-lg mb-3">Reporting & Impact Monitoring</h3>
            <p className="text-gray-600 text-sm">Continuous tracking of training outcomes and employment success</p>
          </div>
        </div>
      </section>

      {/* Training Infrastructure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Training Infrastructure</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <i className="fas fa-building text-4xl text-blue-600 mb-4"></i>
              <h3 className="font-bold text-xl mb-4">Infrastructure & Outreach</h3>
              <p className="text-gray-600">Fully equipped training centers at Goyal Fashions units and partner locations</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <i className="fas fa-laptop-code text-4xl text-green-600 mb-4"></i>
              <h3 className="font-bold text-xl mb-4">Modern Facilities</h3>
              <p className="text-gray-600">Simulation-based labs, smart classrooms, and field training</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <i className="fas fa-users text-4xl text-purple-600 mb-4"></i>
              <h3 className="font-bold text-xl mb-4">Community Outreach</h3>
              <p className="text-gray-600">Strong rural outreach through women-focused and community-led mobilization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Student & Alumni Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-yellow-500 mb-4">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="text-gray-600 mb-6 italic">"I am grateful for the need that AIHMAS fulfilled in my life. The competency and professionalism is nothing less than outstanding."</p>
            <div className="border-t pt-4">
              <p className="font-bold">Harsha Kashyap</p>
              <p className="text-sm text-gray-500">2015 Batch - Hotel Trident Oberoi, Jaipur</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-yellow-500 mb-4">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="text-gray-600 mb-6 italic">"The superb facilities along with the excellent faculty make it a great opportunity for each person to learn and grow."</p>
            <div className="border-t pt-4">
              <p className="font-bold">Prateek Parashar</p>
              <p className="text-sm text-gray-500">2015 Batch - Hotel Radisson Jaipur City Center</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-yellow-500 mb-4">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="text-gray-600 mb-6 italic">"AIHMAS is one of the best hotel management colleges that allows an easy, smooth, and rewarding transition from a novice to professional in the hospitality industry."</p>
            <div className="border-t pt-4">
              <p className="font-bold">Mayur Pachpute</p>
              <p className="text-sm text-gray-500">2015 Batch - Hotel Renaissance, Mumbai</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 colorful-bg text-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Impact So Far</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2 text-white">11,000+</div>
              <p className="text-xl text-white">Youth Trained</p>
              <p className="text-sm opacity-80 text-white">Across Rajasthan and neighboring states</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-white">100%</div>
              <p className="text-xl text-white">Captive Employment</p>
              <p className="text-sm opacity-80 text-white">Through Ananta Hotels and Goyal Group Units</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-white">500+</div>
              <p className="text-xl text-white">Women-led SHGs</p>
              <p className="text-sm opacity-80 text-white">Development in textile packaging & stitching</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-white">A+</div>
              <p className="text-xl text-white">Government Recognition</p>
              <p className="text-sm opacity-80 text-white">Strong record under Central & State schemes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Government Schemes Table */}
      <section className="py-20 max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Training Under Government Schemes</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Scheme Name</th>
                <th className="px-6 py-4 text-left font-bold">Sector</th>
                <th className="px-6 py-4 text-left font-bold">Beneficiaries Trained</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-6 py-4">RSLDC – Multiple Schemes</td>
                <td className="px-6 py-4">Textile, Hospitality</td>
                <td className="px-6 py-4 font-bold text-blue-600">3,000+</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-6 py-4">NAPS (Apprenticeship)</td>
                <td className="px-6 py-4">Textile</td>
                <td className="px-6 py-4 font-bold text-blue-600">480+</td>
              </tr>
              <tr className="border-t">
                <td className="px-6 py-4">Nai Manzil</td>
                <td className="px-6 py-4">Textile</td>
                <td className="px-6 py-4 font-bold text-blue-600">Data Available</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-6 py-4">Samarth – MoT</td>
                <td className="px-6 py-4">Textile</td>
                <td className="px-6 py-4 font-bold text-blue-600">6,500+</td>
              </tr>
              <tr className="border-t">
                <td className="px-6 py-4">HSRT – MoT</td>
                <td className="px-6 py-4">Hospitality</td>
                <td className="px-6 py-4 font-bold text-blue-600">300</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* HSRT Records Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowHSRTList(!showHSRTList)}
            className="px-8 py-4 bg-maroon border-2 border-golden text-white rounded-full font-semibold hover:bg-golden hover:text-maroon hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <i className="fas fa-history mr-2"></i>
            Watch Past HSRT Records
          </button>
        </div>
      </section>

      {/* HSRT Batch List */}
      {showHSRTList && (
        <section ref={hsrtListRef} className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-center mb-8 gradient-text">HSRT Records - Ministry of Tourism</h2>
            <div className="grid gap-4">
              {hsrtBatches.map((batch) => (
                <div
                  key={batch.id}
                  onClick={() => navigate(`/batch/${batch.id}`)}
                  className="p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-all duration-300 hover:scale-102 flex justify-between items-center"
                >
                  <div>
                    <h4 className="font-bold text-lg">{batch.name}</h4>
                    <p className="text-gray-600 text-sm">{batch.date}</p>
                  </div>
                  <i className="fas fa-chevron-right text-blue-500"></i>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}



      {/* Government Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Our Government Partnerships</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="h-16 flex items-center justify-center mb-4">
                <img src="/images/Govt Partnership 1.jpg" alt="NAPS" className="max-h-12 max-w-full" />
              </div>
              <p className="text-sm font-medium">National Apprenticeship Promotion Scheme</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="h-16 flex items-center justify-center mb-4">
                <img src="/images/Govt Partnership 2.jpg" alt="RSLDC" className="max-h-12 max-w-full" />
              </div>
              <p className="text-sm font-medium">RSLDC</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="h-16 flex items-center justify-center mb-4">
                <img src="/images/Govt Partnership 3.jpg" alt="Ministry of Textile" className="max-h-12 max-w-full" />
              </div>
              <p className="text-sm font-medium">Ministry of Textile</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="h-16 flex items-center justify-center mb-4">
                <img src="/images/Govt Partnership 4.jpg" alt="Samarth" className="max-h-12 max-w-full" />
              </div>
              <p className="text-sm font-medium">Samarth</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="h-16 flex items-center justify-center mb-4">
                <img src="/images/Govt Partnership 5.jpg" alt="Skill India" className="max-h-12 max-w-full" />
              </div>
              <p className="text-sm font-medium">Hunar Se Rozgar Tak</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="h-16 flex items-center justify-center mb-4">
                <img src="/images/Ministry of Tourism.png" alt="Rajasthan Skill & Livelihoods Development Corporation" className="max-h-12 max-w-full" />
              </div>
              <p className="text-sm font-medium">Ministry of Tourism</p>
            </div>
          </div>
        </div>
      </section>

       {/* GFPL Skilling Map */}
      <section className="py-20 max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          GFPL Skilling Map
        </h2>
        <div className="text-center">
          <img 
            src="/images/SkillingMap.png" 
            alt="GFPL Skilling Map - Rajasthan" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-custom"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-red-600 mr-4"></div>
              <span><strong>Samarth Project:</strong> 17 Centers</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 bg-blue-600 mr-4"></div>
              <span><strong>Hunar Se Rozgar Tak:</strong> 05 Centers</span>
            </div>
          </div>
          {/* <div className="mt-8">
            <a 
              href="/WEb Upload Data GFPL_Excel Sheet.xlsx" 
              className="download-button"
            >
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                height="40"
                width="40"
                className="download-button__icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                <path d="M7 11l5 5l5 -5"></path>
                <path d="M12 4l0 12"></path>
              </svg>
              <span>Students trained-2024-25</span>
            </a>
          </div> */}
          <p className="mt-8 text-gray-600">
            Our skill development centers span across Rajasthan, providing training and employment opportunities in rural and urban areas.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Ready to Start Your Career?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Join our skill development programs and secure guaranteed employment across our business units.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/education" 
              className="px-8 py-4 bg-maroon border-2 border-golden text-white rounded-full font-semibold hover:bg-golden hover:text-maroon transition-all duration-300"
            >
              Explore Training Programs
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 bg-golden border-2 border-maroon text-maroon rounded-full font-semibold hover:bg-maroon hover:text-white transition-all duration-300"
            >
              Contact for Jobs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;