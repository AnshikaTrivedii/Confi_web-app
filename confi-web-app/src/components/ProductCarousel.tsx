import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: "Digital Standee",
    image: "/images/Digital -Standee .png",
    description: "Interactive digital displays for engaging customer experiences",
    badge: "Featured",
    badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Rental",
    image: "/images/rental.png",
    description: "Flexible rental solutions for events and temporary installations",
    badge: "Popular",
    badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Jumbo",
    image: "/images/Jumbo.png",
    description: "Large-scale displays for maximum visual impact",
    badge: "Premium",
    badgeColor: "bg-gradient-to-r from-yellow-500 to-orange-500"
  },
  {
    id: 4,
    title: "Bellatrix",
    image: "/images/Bellatrix Series Indoor COB P0.9.jpg",
    description: "High-resolution indoor displays with exceptional clarity",
    badge: "New",
    badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500"
  },
  {
    id: 5,
    title: "Betelgeuse",
    image: "/images/Betelgeuse Series Indoor COB.jpg",
    description: "Advanced COB technology for superior image quality",
    badge: "Best Seller",
    badgeColor: "bg-gradient-to-r from-red-500 to-pink-500"
  },
  {
    id: 6,
    title: "Rigel",
    image: "/images/Rigel.jpg",
    description: "Professional-grade displays for demanding applications",
    badge: "Pro",
    badgeColor: "bg-gradient-to-r from-indigo-500 to-purple-500"
  },
  {
    id: 7,
    title: "Flexible",
    image: "/images/flexible.png",
    description: "Bendable displays for creative installations",
    badge: "Innovative",
    badgeColor: "bg-gradient-to-r from-teal-500 to-blue-500"
  }
];

const ProductCarousel: React.FC = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    // Auto-advance carousel every 4 seconds
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextProduct();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const nextProduct = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('right');
    setCurrent((prev) => (prev + 1) % products.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevProduct = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('left');
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const goToProduct = (index: number) => {
    if (isAnimating || index === current) return;
    setIsAnimating(true);
    setSlideDirection(index > current ? 'right' : 'left');
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handleExploreProducts = () => {
    navigate('/products');
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white p-8 shadow-2xl">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#67595e]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#67595e]/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevProduct}
          disabled={isAnimating}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-200 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed group"
          aria-label="Previous product"
        >
          <svg className="w-8 h-8 text-gray-700 group-hover:text-[#67595e] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextProduct}
          disabled={isAnimating}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-200 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed group"
          aria-label="Next product"
        >
          <svg className="w-8 h-8 text-gray-700 group-hover:text-[#67595e] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Product Display */}
        <div className="relative z-10">
          <div 
            className={`group relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-800 transform hover:-translate-y-6 border border-gray-100 ${
              isAnimating 
                ? slideDirection === 'right' 
                  ? 'animate-slideInRight' 
                  : 'animate-slideInLeft'
                : ''
            }`}
          >
            {/* Product Image Section */}
            <div className="relative overflow-hidden">
              <div className="aspect-[16/9] w-full">
                <img 
                  src={products[current].image} 
                  alt={products[current].title} 
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000 ease-out" 
                />
              </div>
              
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              {/* Animated Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold text-gray-800 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                <span className={`flex items-center ${products[current].badgeColor} bg-clip-text text-transparent`}>
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 animate-pulse"></div>
                  {products[current].badge}
                </span>
              </div>
              
              {/* Floating Action Button */}
              <div className="absolute bottom-6 right-6 bg-gradient-to-r from-[#67595e] to-[#5a4f53] text-white rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 delay-300 hover:scale-110 hover:from-[#5a4f53] hover:to-[#4a4145] shadow-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            
            {/* Product Content */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-[#67595e] transition-colors duration-300">
                  {products[current].title}
                </h3>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500 font-medium bg-gray-100 px-4 py-2 rounded-full transition-all duration-300 group-hover:bg-[#67595e] group-hover:text-white">
                    {current + 1} of {products.length}
                  </span>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {products[current].description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-[#67595e] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-3 h-3 bg-[#67595e] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-3 h-3 bg-[#67595e] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  <span className="text-sm text-gray-500 font-medium group-hover:text-[#67595e] transition-colors duration-300">
                    Premium Quality
                  </span>
                </div>
                
                <button 
                  onClick={handleExploreProducts}
                  className="bg-gradient-to-r from-[#67595e] to-[#5a4f53] text-white py-3 px-6 rounded-xl font-semibold hover:from-[#5a4f53] hover:to-[#4a4145] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore Products
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-4">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProduct(index)}
              disabled={isAnimating}
              className={`w-5 h-5 rounded-full transition-all duration-300 hover:scale-125 disabled:cursor-not-allowed ${
                index === current 
                  ? 'bg-[#67595e] scale-125 shadow-lg' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-[#67595e] to-[#5a4f53] h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((current + 1) / products.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel; 