import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ClientsSection: React.FC = () => {
  const { ref: clientsRef, isVisible: isClientsVisible } = useScrollAnimation(0.2);
  const [hoveredClient, setHoveredClient] = useState<number | null>(null);

  const clients = [
    {
      name: 'Wave Malls',
      logo: '/images/Wave-Malls.png',
      category: 'Retail & Entertainment'
    },
    {
      name: 'Palassio',
      logo: '/images/palassio-black-1.png',
      category: 'Luxury Retail'
    },
    {
      name: 'Sakarni',
      logo: '/images/sakarni_footer_logo.png',
      category: 'Fashion & Lifestyle'
    },
    {
      name: 'Manyavar',
      logo: '/images/Manyavar-North-India-Mall-Ghaziabad.png',
      category: 'Fashion Retail'
    },
    {
      name: 'Confi',
      logo: '/images/logo.png',
      category: 'Technology'
    },
    {
      name: 'LGC',
      logo: '/images/lgclogo.png',
      category: 'Corporate'
    },
    {
      name: 'Kotak Mahindra Bank',
      logo: '/images/Kotak_Mahindra_Bank_logo-scaled.png',
      category: 'Banking & Finance'
    },
    {
      name: 'Calvin Klein',
      logo: '/images/Calvin-Klein-Logo-PNG-Images-HD.png',
      category: 'Fashion & Lifestyle'
    },
    {
      name: 'Bright Outdoor Media',
      logo: '/images/Bright_Outdoor_Media_Logo.png',
      category: 'Media & Advertising'
    }
  ];

  return (
    <section ref={clientsRef} className="relative overflow-hidden" style={{ width: '1425px', height: '502px' }}>

      <div className="w-full h-full px-4 py-3 relative z-10 flex flex-col">
        {/* Header with Enhanced Animation */}
        <div className="text-center mb-4">
          <div className={`inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl rounded-full mb-2 shadow-2xl border border-white/20 transition-all duration-1000 ease-out overflow-hidden ${
            isClientsVisible ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-12 scale-75'
          }`}>
            <video 
              className="w-full h-full object-cover rounded-full"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/images/Animated Icons.mp4" type="video/mp4" />
            </video>
          </div>
          
          <h2 className={`text-xl font-bold text-gray-900 mb-1 transition-all duration-1000 ease-out ${
            isClientsVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
          }`} style={{ transitionDelay: '200ms' }}>
            Trusted by Industry Leaders
          </h2>
          
          <p className={`text-xs text-gray-700 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
            isClientsVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
          }`} style={{ transitionDelay: '400ms' }}>
            We're proud to partner with leading brands across various industries, delivering exceptional LED display solutions.
          </p>
        </div>

        {/* Animated Clients Carousel */}
        <div className={`relative overflow-hidden transition-all duration-1000 ease-out flex-1 ${
          isClientsVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="flex animate-scroll" style={{ 
            animation: 'scroll 30s linear infinite',
            width: `${clients.length * 260}px`
          }}>
            {/* First set of clients */}
            {clients.map((client, index) => (
              <div
                key={`first-${client.name}`}
                className="group relative bg-white/90 backdrop-blur-xl rounded-xl p-3 border border-gray-200 transition-all duration-700 hover:scale-105 hover:bg-white hover:border-gray-300 hover:shadow-3xl cursor-pointer mx-2 flex-shrink-0"
                style={{ width: '250px' }}
                onMouseEnter={() => setHoveredClient(index)}
                onMouseLeave={() => setHoveredClient(null)}
              >
                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white via-white/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-[2px] rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-transparent group-hover:from-white/30 group-hover:via-white/20 group-hover:to-transparent transition-all duration-700"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-xl rounded-lg flex items-center justify-center mb-3 p-2 shadow-xl group-hover:shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-2">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="w-full h-full object-contain object-center"
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-[#67595e] transition-colors duration-500 leading-tight">
                    {client.name}
                  </h4>
                  <p className="text-gray-700 text-xs group-hover:text-[#67595e] transition-colors duration-500 leading-tight">
                    {client.category}
                  </p>
                </div>

                {/* Floating Particles on Hover */}
                {hoveredClient === index && (
                  <>
                    <div className="absolute top-2 left-2 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
                    <div className="absolute top-3 right-3 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-white/50 rounded-full animate-bounce"></div>
                  </>
                )}
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${client.name}`}
                className="group relative bg-white/90 backdrop-blur-xl rounded-xl p-3 border border-gray-200 transition-all duration-700 hover:scale-105 hover:bg-white hover:border-gray-300 hover:shadow-3xl cursor-pointer mx-2 flex-shrink-0"
                style={{ width: '250px' }}
                onMouseEnter={() => setHoveredClient(index + clients.length)}
                onMouseLeave={() => setHoveredClient(null)}
              >
                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white via-white/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-[2px] rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-transparent group-hover:from-white/30 group-hover:via-white/20 group-hover:to-transparent transition-all duration-700"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-xl rounded-lg flex items-center justify-center mb-3 p-2 shadow-xl group-hover:shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-2">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="w-full h-full object-contain object-center"
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-[#67595e] transition-colors duration-500 leading-tight">
                    {client.name}
                  </h4>
                  <p className="text-gray-700 text-xs group-hover:text-[#67595e] transition-colors duration-500 leading-tight">
                    {client.category}
                  </p>
                </div>

                {/* Floating Particles on Hover */}
                {hoveredClient === index + clients.length && (
                  <>
                    <div className="absolute top-2 left-2 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
                    <div className="absolute top-3 right-3 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-white/50 rounded-full animate-bounce"></div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>


      </div>

      {/* Custom CSS for Carousel Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
          
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `
      }} />
    </section>
  );
};

export default ClientsSection; 