import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: "Jumbo",
    image: "/images/Screenshot 2025-08-02 at 12.32.23 PM.png",
    description: "Interactive digital displays for engaging customer experiences.",
    badge: "Featured",
    badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    direction: "left"
  },
  {
    id: 2,
    title: "Bellatrix",
    image: "/images/Screenshot 2025-08-02 at 12.35.27 PM.png",
    description: "Flexible rental solutions for events and temporary installations.",
    badge: "Popular",
    badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
    direction: "right"
  },
  {
    id: 3,
    title: "Rigel",
    image: "/images/Screenshot 2025-08-02 at 12.22.11 PM.png",
    description: "Large-scale displays for maximum visual impact.",
    badge: "Premium",
    badgeColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
    direction: "left"
  },
  {
    id: 4,
    title: "Betelgeuse",
    image: "/images/Screenshot 2025-08-02 at 12.04.53 PM.png",
    description: "High-resolution indoor displays with exceptional clarity.",
    badge: "New",
    badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500",
    direction: "right"
  }
];

interface ProductGridProps {
  isVisible?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ isVisible = false }) => {
  const navigate = useNavigate();

  const handleExploreProducts = () => {
    navigate('/products');
  };

  return (
    <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-8">
      {/* Advanced AI-Inspired Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 animate-pulse"></div>
        
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #67595e 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating Data Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#67595e] rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#5a4f53] rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#67595e] rounded-full animate-bounce opacity-70"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-[#5a4f53] rounded-full animate-pulse opacity-60"></div>

        {/* AI Circuit Lines */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#67595e]/30 to-transparent animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5a4f53]/30 to-transparent animate-pulse"></div>
        
        {/* Diagonal Energy Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-45">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#67595e]/20 to-transparent"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#5a4f53]/20 to-transparent"></div>
          </div>
        </div>

        {/* Holographic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#67595e]/5 to-transparent"></div>
      </div>

      <div className="relative z-10">


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/30 transition-all duration-1000 ease-out hover:shadow-3xl hover:bg-white/95 hover:scale-105 ${
                isVisible 
                  ? 'opacity-100 transform translate-x-0' 
                  : `opacity-0 transform ${product.direction === 'left' ? '-translate-x-full' : 'translate-x-full'}`
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Full Image Cover */}
              <div className="relative w-full aspect-[16/10]">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Product Description - Appears on Hover */}
                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 max-w-xs shadow-2xl border border-white/20">
                    <h3 className="text-white font-bold text-lg mb-2">{product.title} Series</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">{product.description}</p>
                    <div className="mt-3 flex items-center text-white text-xs">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      High Quality Display Technology
                    </div>
                  </div>
                </div>
                
                {/* Minimal VIEW PRODUCT Button - Bottom Right Corner */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <button 
                    onClick={handleExploreProducts}
                    className="flex items-center text-white text-sm font-medium hover:text-cyan-400 transition-colors duration-300"
                  >
                    <span>VIEW PRODUCT</span>
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* AI-Enhanced Call-to-Action */}
        <div className={`text-center mt-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`} style={{ transitionDelay: '1200ms' }}>
                      <button 
              onClick={handleExploreProducts}
              className="relative bg-gradient-to-r from-[#67595e] via-[#5a4f53] to-[#67595e] text-white py-5 px-10 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-[#67595e]/50 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-6 h-6 mr-3 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Explore All Products
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5a4f53] via-[#67595e] to-[#5a4f53] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid; 