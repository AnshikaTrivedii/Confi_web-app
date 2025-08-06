import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroCarousel';
import ProjectCarousel from '../components/ProjectCarousel';
import ProductGrid from '../components/ProductGrid';
import ClientsSection from '../components/ClientsSection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { ref: servicesRef, isVisible: isServicesVisible } = useScrollAnimation(0.2);
  const { ref: productsRef, isVisible: isProductsVisible } = useScrollAnimation(0.2);

  const handleExploreProducts = () => {
    navigate('/products');
  };

  return (
    <div className="pt-16">
      {/* Hero Section - Static */}
      <HeroSection />

      {/* Enhanced Services Section */}
      <section ref={servicesRef} className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Geometric Shapes */}
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#67595e]/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-r from-[#67595e]/10 to-[#5a4f53]/10 rounded-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-[#5a4f53]/30 transform rotate-45 animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-[#67595e]/5 to-[#5a4f53]/5 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
          
          {/* Animated Circuit Lines */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-[#67595e]/20 to-transparent animate-pulse"></div>
          </div>
          <div className="absolute top-1/2 left-0 w-full h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-[#5a4f53]/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Particle Effects */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#67595e] rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#5a4f53] rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-[#67595e] rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className={`inline-flex items-center justify-center w-28 h-28 bg-gradient-to-r from-[#67595e] to-[#5a4f53] rounded-full mb-10 shadow-2xl animate-pulse transition-all duration-1000 ease-out hover:scale-110 hover:rotate-12 ${
              isServicesVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
            }`}>
              {/* Animated Icon with Glow Effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-lg animate-pulse"></div>
                <svg className="w-14 h-14 text-white animate-pulse relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h2 className={`text-6xl font-bold bg-gradient-to-r from-[#67595e] to-[#5a4f53] bg-clip-text text-transparent mb-8 transition-all duration-1000 ease-out hover:scale-105 ${
              isServicesVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
            }`} style={{ transitionDelay: '200ms' }}>
              Our Services
            </h2>
            <p className={`text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
              isServicesVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
            }`} style={{ transitionDelay: '400ms' }}>
              Comprehensive LED display solutions tailored to your specific needs and requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service Card 1 - Enhanced */}
            <div className={`group relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/40 transition-all duration-700 ease-out hover:shadow-3xl hover:bg-white/98 hover:scale-105 hover:-translate-y-2 overflow-hidden ${
              isServicesVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
            }`} style={{ transitionDelay: '600ms' }}>
              {/* Enhanced Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#67595e] via-[#5a4f53] to-[#67595e] opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
              <div className="absolute inset-[3px] rounded-3xl bg-white group-hover:bg-gradient-to-br group-hover:from-white/98 group-hover:to-white/95 transition-all duration-700"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#67595e]/30 rounded-full group-hover:animate-ping" style={{ animationDelay: '0s' }}></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#5a4f53]/40 rounded-full group-hover:animate-ping" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-r from-[#67595e] to-[#5a4f53] rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative overflow-hidden">
                  {/* Icon Glow Effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500"></div>
                  <svg className="w-12 h-12 text-white animate-pulse relative z-10 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-[#67595e] transition-colors duration-500 group-hover:scale-105">LED Display Installation</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-500 text-lg">
                  Professional installation of indoor and outdoor LED displays with precision engineering 
                  and attention to detail. We ensure optimal performance and longevity.
                </p>
              </div>
            </div>

            {/* Service Card 2 - Enhanced */}
            <div className={`group relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/40 transition-all duration-700 ease-out hover:shadow-3xl hover:bg-white/98 hover:scale-105 hover:-translate-y-2 overflow-hidden ${
              isServicesVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
            }`} style={{ transitionDelay: '800ms' }}>
              {/* Enhanced Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#67595e] via-[#5a4f53] to-[#67595e] opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
              <div className="absolute inset-[3px] rounded-3xl bg-white group-hover:bg-gradient-to-br group-hover:from-white/98 group-hover:to-white/95 transition-all duration-700"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#67595e]/30 rounded-full group-hover:animate-ping" style={{ animationDelay: '0s' }}></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#5a4f53]/40 rounded-full group-hover:animate-ping" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-r from-[#67595e] to-[#5a4f53] rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative overflow-hidden">
                  {/* Icon Glow Effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500"></div>
                  <svg className="w-12 h-12 text-white animate-pulse relative z-10 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-[#67595e] transition-colors duration-500 group-hover:scale-105">Maintenance & Support</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-500 text-lg">
                  Ongoing maintenance, technical support, and troubleshooting services to ensure 
                  your LED displays operate at peak performance with minimal downtime.
                </p>
              </div>
            </div>

            {/* Service Card 3 - Enhanced */}
            <div className={`group relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/40 transition-all duration-700 ease-out hover:shadow-3xl hover:bg-white/98 hover:scale-105 hover:-translate-y-2 overflow-hidden ${
              isServicesVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
            }`} style={{ transitionDelay: '1000ms' }}>
              {/* Enhanced Animated Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#67595e] via-[#5a4f53] to-[#67595e] opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
              <div className="absolute inset-[3px] rounded-3xl bg-white group-hover:bg-gradient-to-br group-hover:from-white/98 group-hover:to-white/95 transition-all duration-700"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#67595e]/30 rounded-full group-hover:animate-ping" style={{ animationDelay: '0s' }}></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#5a4f53]/40 rounded-full group-hover:animate-ping" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-r from-[#67595e] to-[#5a4f53] rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative overflow-hidden">
                  {/* Icon Glow Effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500"></div>
                  <svg className="w-12 h-12 text-white animate-pulse relative z-10 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-[#67595e] transition-colors duration-500 group-hover:scale-105">Content Management</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-500 text-lg">
                  Complete content management solutions including software setup, remote monitoring, 
                  and dynamic content scheduling for your digital signage network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#67595e] to-[#5a4f53] rounded-full mb-8 shadow-xl transition-all duration-1000 ease-out ${
              isProductsVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
            }`}>
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className={`text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ease-out ${
              isProductsVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
            }`} style={{ transitionDelay: '200ms' }}>
              Our Products
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
              isProductsVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
            }`} style={{ transitionDelay: '400ms' }}>
              High-quality LED displays and digital signage solutions for every application
            </p>
          </div>
          
          <ProductGrid isVisible={isProductsVisible} />
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#67595e] to-[#5a4f53] rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-l from-[#67595e] to-[#5a4f53] rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-[#67595e] to-[#5a4f53] rounded-full mb-8 shadow-2xl animate-pulse">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#67595e] to-[#5a4f53] bg-clip-text text-transparent mb-6">
              Our Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Showcasing our expertise through successful LED display installations across various industries
            </p>
          </div>
          
          <div className="relative">
            {/* Enhanced Project Carousel Container */}
            <div className="relative bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
              <ProjectCarousel />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#67595e] to-[#5a4f53] rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-l from-[#67595e] to-[#5a4f53] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-2 w-4 h-4 bg-gradient-to-br from-[#67595e] to-[#5a4f53] rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientsSection />

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