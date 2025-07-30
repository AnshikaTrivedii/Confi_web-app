import React from 'react';
import HeroSection from '../components/HeroCarousel';

const LandingPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section - Static */}
      <HeroSection />

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive LED display solutions tailored to your specific needs and requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#67595e] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">LED Display Installation</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional installation of indoor and outdoor LED displays with precision engineering 
                and attention to detail. We ensure optimal performance and longevity.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#67595e] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Maintenance & Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Ongoing maintenance, technical support, and troubleshooting services to ensure 
                your LED displays operate at peak performance with minimal downtime.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#67595e] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Content Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete content management solutions including software setup, remote monitoring, 
                and dynamic content scheduling for your digital signage network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality LED displays and digital signage solutions for every application
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Digital Standee */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative overflow-hidden">
                <img src="/images/Digital -Standee .png" alt="Digital Standee" className="h-52 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Featured
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Digital Standee</h3>
                  <div className="w-8 h-8 bg-[#67595e] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Interactive digital displays for engaging customer experiences
                </p>
                <button className="w-full bg-gradient-to-r from-[#67595e] to-[#5a4f53] text-white py-2.5 px-4 rounded-lg font-semibold hover:from-[#5a4f53] hover:to-[#4a4145] transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Explore Products
                </button>
              </div>
            </div>

            {/* Rental */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative overflow-hidden">
                <img src="/images/rental.png" alt="Rental" className="h-52 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Popular
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Rental</h3>
                  <div className="w-8 h-8 bg-[#67595e] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Flexible rental solutions for events and temporary installations
                </p>
                <button className="w-full bg-gradient-to-r from-[#67595e] to-[#5a4f53] text-white py-2.5 px-4 rounded-lg font-semibold hover:from-[#5a4f53] hover:to-[#4a4145] transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Explore Products
                </button>
              </div>
            </div>

            {/* Jumbo */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative overflow-hidden">
                <img src="/images/Jumbo.png" alt="Jumbo" className="h-52 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Premium
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Jumbo</h3>
                  <div className="w-8 h-8 bg-[#67595e] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Large-scale displays for maximum visual impact
                </p>
                <button className="w-full bg-gradient-to-r from-[#67595e] to-[#5a4f53] text-white py-2.5 px-4 rounded-lg font-semibold hover:from-[#5a4f53] hover:to-[#4a4145] transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Explore Products
                </button>
              </div>
            </div>

            {/* Bellatrix */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative overflow-hidden">
                <img src="/images/Bellatrix Series Indoor COB P0.9.jpg" alt="Bellatrix" className="h-52 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  New
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Bellatrix</h3>
                  <div className="w-8 h-8 bg-[#67595e] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  High-resolution indoor displays with exceptional clarity
                </p>
                <button className="w-full bg-gradient-to-r from-[#67595e] to-[#5a4f53] text-white py-2.5 px-4 rounded-lg font-semibold hover:from-[#5a4f53] hover:to-[#4a4145] transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Explore Products
                </button>
              </div>
            </div>

            {/* Betelgeuse */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative overflow-hidden">
                <img src="/images/Betelgeuse Series Indoor COB.jpg" alt="Betelgeuse" className="h-52 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Best Seller
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Betelgeuse</h3>
                  <div className="w-8 h-8 bg-[#67595e] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Advanced COB technology for superior image quality
                </p>
                <button className="w-full bg-gradient-to-r from-[#67595e] to-[#5a4f53] text-white py-2.5 px-4 rounded-lg font-semibold hover:from-[#5a4f53] hover:to-[#4a4145] transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Explore Products
                </button>
              </div>
            </div>

            {/* Rigel */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative overflow-hidden">
                <img src="/images/Rigel.jpg" alt="Rigel" className="h-52 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Pro
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Rigel</h3>
                  <div className="w-8 h-8 bg-[#67595e] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Professional-grade displays for demanding applications
                </p>
                <button className="w-full bg-gradient-to-r from-[#67595e] to-[#5a4f53] text-white py-2.5 px-4 rounded-lg font-semibold hover:from-[#5a4f53] hover:to-[#4a4145] transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Explore Products
                </button>
              </div>
            </div>

            {/* Flexible */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative overflow-hidden">
                <img src="/images/flexible.png" alt="Flexible" className="h-52 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Innovative
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">Flexible</h3>
                  <div className="w-8 h-8 bg-[#67595e] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Bendable displays for creative installations
                </p>
                <button className="w-full bg-gradient-to-r from-[#67595e] to-[#5a4f53] text-white py-2.5 px-4 rounded-lg font-semibold hover:from-[#5a4f53] hover:to-[#4a4145] transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Explore Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#67595e] rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise through successful LED display installations across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Corporate */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
              <div className="relative overflow-hidden">
                <img src="https://orion-led.com/admin/upload/image_78276979.jpg" alt="Corporate" className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold text-gray-800 shadow-lg">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Corporate
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-[#67595e] text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Corporate</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">50+ Projects</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  LED solutions for corporate offices, boardrooms, and lobbies with professional-grade displays.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#67595e] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#67595e] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#67595e] rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-500">Premium Quality</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DOOH */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
              <div className="relative overflow-hidden">
                <img src="https://orion-led.com/admin/upload/image_22803009.jpg" alt="DOOH" className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold text-gray-800 shadow-lg">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    DOOH
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-[#67595e] text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">DOOH</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">100+ Displays</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Digital Out Of Home displays for advertising and public spaces with high visibility.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#67595e] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#67595e] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#67595e] rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-500">High Impact</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Retail */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
              <div className="relative overflow-hidden">
                <img src="https://orion-led.com/admin/upload/image_86727506.jpg" alt="Retail" className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold text-gray-800 shadow-lg">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Retail
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-[#67595e] text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Retail</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">200+ Stores</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  LED displays for retail stores, malls, and showrooms with engaging content.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#67595e] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#67595e] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#67595e] rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-500">Engaging</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Entertainment */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
              <div className="relative overflow-hidden">
                <img src="https://orion-led.com/admin/upload/image_76671442.jpg" alt="Entertainment" className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold text-gray-800 shadow-lg">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    Entertainment
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-[#67595e] text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Entertainment</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">150+ Events</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  LED solutions for events, concerts, and entertainment venues with immersive experiences.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#67595e] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#67595e] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#67595e] rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-500">Immersive</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
              <div className="relative overflow-hidden">
                <img src="https://orion-led.com/admin/upload/image_2399619.jpg" alt="Hotel" className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-bold text-gray-800 shadow-lg">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    Hotel
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-[#67595e] text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">Hotel</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">75+ Venues</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  LED displays for hotels, conference halls, and hospitality spaces with elegant design.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#67595e] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#67595e] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#67595e] rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-500">Elegant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#67595e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 text-[#c4c1c2] max-w-3xl mx-auto">
            Let us help you create an impactful visual experience with our cutting-edge LED display solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#67595e] px-8 py-4 rounded-lg font-semibold hover:bg-[#f5f5f5] transition-colors duration-200">
              Get a Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#67595e] transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 