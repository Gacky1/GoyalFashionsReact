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
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">PM's Vision & Why Skills Matter</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <img 
                  src="/images/PmModi.jpg" 
                  alt="PM Narendra Modi"
                  className="w-64 h-64 mx-auto rounded-full object-cover shadow-lg"
                />
              </div>
              <div>
                <div className="text-4xl text-maroon/20 mb-6">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="text-2xl font-semibold text-gray-700 mb-4 italic">
                  "Degrees are valuable, but skills make you indispensable."
                </p>
                <p className="text-lg text-gray-600 mb-6">— PM Shri Narendra Modi</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Our Vision</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              In today's fast-changing world, education is just the beginning — it's <strong>skill that defines success</strong>. 
              When youth are empowered with the right skills, they don't just seek jobs — they <strong>create opportunities</strong> and contribute to nation-building.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              At <strong>Goyal Fashions Private Limited</strong>, we proudly align with the <strong>Skill India Mission</strong>, 
              promoting practical learning, industry-driven training, and livelihood empowerment for a <strong>Skilled and Self-Reliant India</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Student & Alumni Testimonials */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Student & Alumni Testimonials
          </h2>

          <div className="overflow-hidden">
            <div className="flex animate-testimonial-scroll">
              {/* <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    P
                  </div>
                  <div>
                    <h4 className="font-bold">Priya Sharma</h4>
                    <p className="text-sm text-gray-600">Hospitality Graduate</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-700 text-sm italic">
                  "GFPL transformed my career from a village girl to working at Taj Palace, Jaipur."
                </p>
                <p className="text-blue-600 text-xs mt-2 font-semibold">Now at: Taj Palace, Jaipur</p>
              </div>

              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    R
                  </div>
                  <div>
                    <h4 className="font-bold">Rahul Meena</h4>
                    <p className="text-sm text-gray-600">Textile Specialist</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-700 text-sm italic">
                  "Samarth program opened doors I never imagined. Got supervisory role within 6 months."
                </p>
                <p className="text-blue-600 text-xs mt-2 font-semibold">Now at: Goyal Fashions</p>
              </div>

              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    S
                  </div>
                  <div>
                    <h4 className="font-bold">Sunita Kumari</h4>
                    <p className="text-sm text-gray-600">Retail Manager</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-700 text-sm italic">
                  "As a single mother, GFPL's training gave me stability and dignity."
                </p>
                <p className="text-blue-600 text-xs mt-2 font-semibold">Now at: Reliance Retail</p>
              </div>

              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    A
                  </div>
                  <div>
                    <h4 className="font-bold">Amit Joshi</h4>
                    <p className="text-sm text-gray-600">Solar Technician</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-700 text-sm italic">
                  "Solar training helped me start my own renewable energy business."
                </p>
                <p className="text-blue-600 text-xs mt-2 font-semibold">Entrepreneur: Green Energy</p>
              </div>

              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    M
                  </div>
                  <div>
                    <h4 className="font-bold">Meera Patel</h4>
                    <p className="text-sm text-gray-600">Tourism Graduate</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-700 text-sm italic">
                  "HSRT program gave me international exposure for luxury hospitality."
                </p>
                <p className="text-blue-600 text-xs mt-2 font-semibold">Now at: Leela Palace, Goa</p>
              </div>

              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    P
                  </div>
                  <div>
                    <h4 className="font-bold">Priya Sharma</h4>
                    <p className="text-sm text-gray-600">Hospitality Graduate</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-700 text-sm italic">
                  "GFPL transformed my career from a village girl to working at Taj Palace, Jaipur."
                </p>
                <p className="text-blue-600 text-xs mt-2 font-semibold">Now at: Taj Palace, Jaipur</p>
              </div>

              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    R
                  </div>
                  <div>
                    <h4 className="font-bold">Rahul Meena</h4>
                    <p className="text-sm text-gray-600">Textile Specialist</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-700 text-sm italic">
                  "Samarth program opened doors I never imagined. Got supervisory role within 6 months."
                </p>
                <p className="text-blue-600 text-xs mt-2 font-semibold">Now at: Goyal Fashions</p>
              </div>

              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    S
                  </div>
                  <div>
                    <h4 className="font-bold">Sunita Kumari</h4>
                    <p className="text-sm text-gray-600">Retail Manager</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-700 text-sm italic">
                  "As a single mother, GFPL's training gave me stability and dignity."
                </p>
                <p className="text-blue-600 text-xs mt-2 font-semibold">Now at: Reliance Retail</p>
              </div>

              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    A
                  </div>
                  <div>
                    <h4 className="font-bold">Amit Joshi</h4>
                    <p className="text-sm text-gray-600">Solar Technician</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-700 text-sm italic">
                  "Solar training helped me start my own renewable energy business."
                </p>
                <p className="text-blue-600 text-xs mt-2 font-semibold">Entrepreneur: Green Energy</p>
              </div>

              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    M
                  </div>
                  <div>
                    <h4 className="font-bold">Meera Patel</h4>
                    <p className="text-sm text-gray-600">Tourism Graduate</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-700 text-sm italic">
                  "HSRT program gave me international exposure for luxury hospitality."
                </p>
                <p className="text-blue-600 text-xs mt-2 font-semibold">Now at: Leela Palace, Goa</p>
              </div> */}
              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                {" "}
                <div className="flex items-center mb-4">
                  {" "}
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {/* {" "} */}
                    <img
                      src="images/testimonials/sandeep.png"
                      alt="Sandeep"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-bold">Sandeep</h4>{" "}
                    <p className="text-sm text-gray-600">Junior Cook</p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex text-golden mb-3">★★★★★</div>
                <p className="text-gray-700 text-sm italic">
                  "This program gave me an incredible opportunity to gain
                  industry-specific skills and confidence."
                </p>
                <p className="text-maroon text-xs mt-2 font-semibold">
                  Now at: Ananta Spa & Resort, Pushkar
                </p>
                <p className="text-xs text-gray-500 mt-1">Multi-Cuisine Cook</p>{" "}
              </div>{" "}
              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                {" "}
                <div className="flex items-center mb-4">
                  {" "}
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {" "}
                    <img
                      src="images/testimonials/Bhojraj.png"
                      alt="Bhoj Raj"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-bold">Bhoj Raj</h4>{" "}
                    <p className="text-sm text-gray-600">Commi III</p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex text-yellow-400 mb-3">★★★★★</div>{" "}
                <p className="text-gray-700 text-sm italic">
                  {" "}
                  "From no exposure to working in a reputed hotel — this
                  training truly changed my life."{" "}
                </p>{" "}
                <p className="text-blue-600 text-xs mt-2 font-semibold">
                  Now at: 5 Flowers Ananta Elite, Kota
                </p>{" "}
                <p className="text-xs text-gray-500 mt-1">Multi-Cuisine Cook</p>{" "}
              </div>{" "}
              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                {" "}
                <div className="flex items-center mb-4">
                  {" "}
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {" "}
                    <img
                      src="images/testimonials/Ansuiya.png"
                      alt="Anusuiya"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-bold">Anusuiya</h4>{" "}
                    <p className="text-sm text-gray-600">Commi III</p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex text-yellow-400 mb-3">★★★★★</div>{" "}
                <p className="text-gray-700 text-sm italic">
                  {" "}
                  "The practical sessions and grooming classes boosted both my
                  skill and self-belief."{" "}
                </p>{" "}
                <p className="text-blue-600 text-xs mt-2 font-semibold">
                  Now at: 5 Flowers Ananta Elite, Kota
                </p>{" "}
                <p className="text-xs text-gray-500 mt-1">Multi-Cuisine Cook</p>{" "}
              </div>{" "}
              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                {" "}
                <div className="flex items-center mb-4">
                  {" "}
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {" "}
                    <img
                      src="images/testimonials/Naresh.png"
                      alt="Naresh"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-bold">Naresh Kumar</h4>{" "}
                    <p className="text-sm text-gray-600">Junior Cook</p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex text-yellow-400 mb-3">★★★★★</div>{" "}
                <p className="text-gray-700 text-sm italic">
                  {" "}
                  "I’m proud to now work in a 5-star property — thanks to the
                  skill training and support provided."{" "}
                </p>{" "}
                <p className="text-blue-600 text-xs mt-2 font-semibold">
                  Now at: The Ananta, Udaipur
                </p>{" "}
                <p className="text-xs text-gray-500 mt-1">Multi-Cuisine Cook</p>{" "}
              </div>{" "}
              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                {" "}
                <div className="flex items-center mb-4">
                  {" "}
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {" "}
                    <img
                      src="images/testimonials/Pawan.png"
                      alt="Pawan"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-bold">Pawan Kumar</h4>{" "}
                    <p className="text-sm text-gray-600">Commi III</p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex text-yellow-400 mb-3">★★★★★</div>{" "}
                <p className="text-gray-700 text-sm italic">
                  {" "}
                  "Joining this program gave me professional growth I never
                  thought possible."{" "}
                </p>{" "}
                <p className="text-blue-600 text-xs mt-2 font-semibold">
                  Now at: Lotus Ananta Elite, Kota
                </p>{" "}
                <p className="text-xs text-gray-500 mt-1">Multi-Cuisine Cook</p>{" "}
              </div>{" "}
              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                {" "}
                <div className="flex items-center mb-4">
                  {" "}
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {" "}
                    <img
                      src="images/testimonials/Rajender.png"
                      alt="Rajender"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-bold">Rajender</h4>{" "}
                    <p className="text-sm text-gray-600">Commi III</p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex text-yellow-400 mb-3">★★★★★</div>{" "}
                <p className="text-gray-700 text-sm italic">
                  {" "}
                  "With the guidance I received, I’ve built a successful career
                  in hospitality."{" "}
                </p>{" "}
                <p className="text-blue-600 text-xs mt-2 font-semibold">
                  Now at: Ananta Spa & Resort, Pushkar
                </p>{" "}
                <p className="text-xs text-gray-500 mt-1">Multi-Cuisine Cook</p>{" "}
              </div>{" "}
              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                {" "}
                <div className="flex items-center mb-4">
                  {" "}
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {" "}
                    <img
                      src="images/testimonials/Manisha.png"
                      className="w-full h-full object-cover rounded-full"
                      alt="Manisha"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-bold">Manisha</h4>{" "}
                    <p className="text-sm text-gray-600">Junior Cook</p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex text-yellow-400 mb-3">★★★★★</div>{" "}
                <p className="text-gray-700 text-sm italic">
                  {" "}
                  "The supportive learning environment helped me grow personally
                  and professionally."{" "}
                </p>{" "}
                <p className="text-blue-600 text-xs mt-2 font-semibold">
                  Now at: Lotus Ananta Elite, Kota
                </p>{" "}
                <p className="text-xs text-gray-500 mt-1">Multi-Cuisine Cook</p>{" "}
              </div>{" "}
              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                {" "}
                <div className="flex items-center mb-4">
                  {" "}
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {" "}
                    <img
                      src="images/testimonials/Ritika.png"
                      className="w-full h-full object-cover rounded-full"
                      alt="Ritika"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-bold">Ritika Hansraj</h4>{" "}
                    <p className="text-sm text-gray-600">Commi II</p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex text-yellow-400 mb-3">★★★★★</div>{" "}
                <p className="text-gray-700 text-sm italic">
                  {" "}
                  "This course gave me the confidence and expertise to work in a
                  reputed hotel."{" "}
                </p>{" "}
                <p className="text-blue-600 text-xs mt-2 font-semibold">
                  Now at: 5 Flowers Ananta Elite, Kota
                </p>{" "}
                <p className="text-xs text-gray-500 mt-1">Multi-Cuisine Cook</p>{" "}
              </div>{" "}
              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                {" "}
                <div className="flex items-center mb-4">
                  {" "}
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {" "}
                    <img
                      src="images/testimonials/Amisha.png"
                      className="w-full h-full object-cover rounded-full"
                      alt="Amisha"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-bold">Amisha Dhanka</h4>{" "}
                    <p className="text-sm text-gray-600">Kitchen Assistant</p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex text-yellow-400 mb-3">★★★★★</div>{" "}
                <p className="text-gray-700 text-sm italic">
                  {" "}
                  "Training at GFPL gave me practical knowledge and shaped my
                  hospitality career."{" "}
                </p>{" "}
                <p className="text-blue-600 text-xs mt-2 font-semibold">
                  Now at: The Baagh Ananta Elite, Ranthambore
                </p>{" "}
                <p className="text-xs text-gray-500 mt-1">Multi-Cuisine Cook</p>{" "}
              </div>{" "}
              <div className="flex-shrink-0 w-80 mx-4 bg-white p-6 rounded-xl shadow-lg">
                {" "}
                <div className="flex items-center mb-4">
                  {" "}
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {" "}
                    <img
                      src="images/testimonials/SandeepK.png"
                      className="w-full h-full object-cover rounded-full"
                      alt="Sandeep"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="font-bold">Sandeep Kaur</h4>{" "}
                    <p className="text-sm text-gray-600">Commi III</p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex text-yellow-400 mb-3">★★★★★</div>{" "}
                <p className="text-gray-700 text-sm italic">
                  {" "}
                  "Professional grooming sessions improved my confidence and
                  career prospects."{" "}
                </p>{" "}
                <p className="text-blue-600 text-xs mt-2 font-semibold">
                  Now at: Radisson Blu Hotel, Jaipur
                </p>{" "}
                <p className="text-xs text-gray-500 mt-1">Source: Page 53</p>{" "}
              </div>
            </div>
          </div>

          {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-maroon mb-2">95%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-golden mb-2">7000+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-maroon mb-2">4.8/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div> */}
        </div>
      </section>
      
       {/* Transformative Impact */}
      <section className="py-20 colorful-bg text-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Transformative Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
            <div>
              <div className="text-5xl font-bold mb-2 text-white">11,000+</div>
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
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <img 
                    src="/images/SanjayGoyal.png" 
                    alt="Shri. Sanjay Goyal"
                    className="w-full max-w-xs mx-auto rounded-xl object-contain shadow-lg border-4 border-white/20"
                  />
                </div>
                <div>
                  <div className="text-4xl text-white/30 mb-6">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="text-xl font-semibold text-white mb-4 italic">
                    "The more we give importance to skill development, the more competent will be our youth."
                  </p>
                  <p className="text-white font-medium">— Shri. Sanjay Goyal</p>
                </div>
              </div>
            </div>
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