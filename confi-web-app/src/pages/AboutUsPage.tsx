import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-blue-400">Confi</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a leading provider of LED display solutions and digital signage technology, 
              committed to delivering innovative visual experiences that transform spaces and 
              captivate audiences worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to revolutionize visual communication, Confi has been at the 
                forefront of LED display technology for over a decade. We started as a small team 
                of passionate engineers and designers, united by a common goal: to create displays 
                that don't just show content, but tell stories.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, we've grown into a trusted partner for businesses across industries, from 
                retail and entertainment to corporate and public spaces. Our commitment to quality, 
                innovation, and customer satisfaction remains at the heart of everything we do.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that great technology should be accessible, reliable, and beautiful. 
                That's why we invest heavily in research and development, ensuring our solutions 
                are not just cutting-edge, but also practical and sustainable.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 shadow-2xl">
                <div className="aspect-square bg-blue-300 rounded-lg flex items-center justify-center">
                  <span className="text-blue-900 font-semibold text-center">
                    Our Journey<br />
                    <span className="text-sm">Innovation • Quality • Growth</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses and organizations with cutting-edge LED display solutions 
                that enhance communication, engage audiences, and create memorable experiences. 
                We strive to be the trusted partner for all visual communication needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in LED display technology, setting industry standards 
                for innovation, quality, and customer satisfaction. We envision a world where 
                every space can tell its story through stunning visual displays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of what's possible in LED display technology, 
                always seeking new ways to improve and innovate.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                Every product we deliver meets the highest standards of quality, reliability, 
                and performance that our customers expect and deserve.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">
                We believe in building long-term relationships with our customers, suppliers, 
                and team members based on trust, respect, and mutual success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Passion</h3>
              <p className="text-gray-600">
                Our team is passionate about creating amazing visual experiences and helping 
                our customers achieve their goals through innovative technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white font-semibold">CEO</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
                <p className="text-blue-600 font-medium mb-3">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm">
                  With over 15 years of experience in the LED display industry, Sarah leads our 
                  company with vision and strategic direction.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white font-semibold">CTO</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Chen</h3>
                <p className="text-green-600 font-medium mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm">
                  Michael drives our technological innovation, ensuring we stay ahead of industry 
                  trends and deliver cutting-edge solutions.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-white font-semibold">COO</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Emily Rodriguez</h3>
                <p className="text-purple-600 font-medium mb-3">Chief Operations Officer</p>
                <p className="text-gray-600 text-sm">
                  Emily ensures smooth operations and exceptional customer service across all 
                  our projects and installations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Cities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Let's discuss how we can help you create an impactful visual experience with our 
            cutting-edge LED display solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Get Started
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage; 