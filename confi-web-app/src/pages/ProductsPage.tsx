import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import ProductDetailModal from '../components/ProductDetailModal';
import ProductSeriesList from '../components/ProductSeriesList';
import { products, categories } from '../data/products';
import { Product } from '../types';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const productSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Trigger initial animations
    setIsLoaded(true);
    const timer = setTimeout(() => setAnimateCards(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const getEnvironmentColor = (environment: string) => {
    return environment === 'indoor' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800';
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      {/* Header Section with Background Video */}
      <div className="relative h-96">
        {/* Background Video */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-95"
          >
            <source src="/images/Remove Text in Video (2).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-5xl px-8">
            <h1 className="text-6xl font-bold mb-4 animate-fade-in-up tracking-tight" style={{ fontFamily: 'Georgia, serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Orion-LED
            </h1>
            <p className="text-2xl uppercase tracking-[0.2em] mb-8 animate-slide-in-left font-light" style={{ fontFamily: 'Arial, sans-serif', textShadow: '1px 1px 3px rgba(0,0,0,0.4)' }}>
              PREMIUM DISPLAY SOLUTIONS
            </p>
            
            <div className="space-y-4 animate-slide-in-up">
              <h2 className="text-4xl font-semibold mb-3 tracking-wide" style={{ fontFamily: 'Helvetica, sans-serif', textShadow: '1px 1px 3px rgba(0,0,0,0.4)' }}>
                Advanced LED Display Technology
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Features & Details Section */}
      <div className="lg:w-full p-8 lg:p-10 bg-gray-50 flex flex-col justify-center">
        
        {/* Introduction Text Section */}
        <div className="mb-12 mt-12 text-center">
          <button
            className="text-[#67595e] font-semibold underline uppercase text-2xl mb-8 hover:text-[#8b7d82] transition-colors animate-pulse-soft border-2 border-yellow-400 px-6 py-2 rounded-lg shadow-md"
            onClick={() => {
              if (productSectionRef.current) {
                productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            EXPLORE PRODUCTS
          </button>
          <p className="text-gray-600 leading-relaxed max-w-5xl mx-auto text-xl">
            Discover our comprehensive range of high-performance LED displays designed for both indoor and outdoor applications. From ultra-fine pixel pitch displays for close viewing to robust outdoor solutions, our products deliver exceptional image quality, reliability, and energy efficiency.
          </p>
        </div>
        
        {/* Categories Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">PRODUCT SERIES</h3>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg h-80 flex flex-col transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-4 animate-slide-in-left group overflow-hidden">
              <div className="relative overflow-hidden rounded-lg mb-6 flex-shrink-0">
                <img
                  src="/images/bellatrix-series/Bellatrix Series Indoor COB P0.9.jpg"
                  alt="Indoor Series"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="flex-1 flex flex-col justify-start">
                <h4 className="font-semibold text-gray-900 mb-4 text-lg transition-all duration-300 group-hover:text-[#67595e] group-hover:scale-105 transform">Indoor Series</h4>
                <p className="text-base text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-gray-700">High-resolution displays for indoor environments with superior image quality</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-12 h-1 bg-gradient-to-r from-[#67595e] to-[#8b7d82] rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg h-80 flex flex-col transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-4 animate-slide-in-right group overflow-hidden">
              <div className="relative overflow-hidden rounded-lg mb-6 flex-shrink-0">
                <img
                  src="/images/jumbo-series/jumbo-p6.png"
                  alt="Jumbo Series"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="flex-1 flex flex-col justify-start">
                <h4 className="font-semibold text-gray-900 mb-4 text-lg transition-all duration-300 group-hover:text-[#67595e] group-hover:scale-105 transform">Jumbo Series</h4>
                <p className="text-base text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-gray-700">Large-scale outdoor displays for high-impact advertising</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-12 h-1 bg-gradient-to-r from-[#67595e] to-[#8b7d82] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 animate-fade-in-up">TECHNOLOGY HIGHLIGHTS</h3>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:-translate-y-4 animate-slide-in-left group min-h-64 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#67595e] to-[#8b7d82] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="w-10 h-1.5 bg-[#67595e] mb-6 transform transition-all duration-300 group-hover:w-20 group-hover:bg-gradient-to-r group-hover:from-[#67595e] group-hover:to-[#8b7d82]"></div>
              <h4 className="font-semibold text-gray-900 mb-4 text-lg transition-all duration-300 group-hover:text-[#67595e] group-hover:scale-105 transform">Ultra-High Resolution</h4>
              <p className="text-base text-gray-600 transition-all duration-300 group-hover:text-gray-700 leading-relaxed">Crystal-clear visuals with advanced pixel technology and fine pitch options</p>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-[#67595e]/10 to-transparent rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700"></div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:-translate-y-4 animate-slide-in-right group min-h-64 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#67595e] to-[#8b7d82] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="w-10 h-1.5 bg-[#67595e] mb-6 transform transition-all duration-300 group-hover:w-20 group-hover:bg-gradient-to-r group-hover:from-[#67595e] group-hover:to-[#8b7d82]"></div>
              <h4 className="font-semibold text-gray-900 mb-4 text-lg transition-all duration-300 group-hover:text-[#67595e] group-hover:scale-105 transform">Energy Efficient</h4>
              <p className="text-base text-gray-600 transition-all duration-300 group-hover:text-gray-700 leading-relaxed">Advanced LED technology with optimized power consumption</p>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-[#67595e]/10 to-transparent rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700"></div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:-translate-y-4 animate-slide-in-left group min-h-64 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#67595e] to-[#8b7d82] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="w-10 h-1.5 bg-[#67595e] mb-6 transform transition-all duration-300 group-hover:w-20 group-hover:bg-gradient-to-r group-hover:from-[#67595e] group-hover:to-[#8b7d82]"></div>
              <h4 className="font-semibold text-gray-900 mb-4 text-lg transition-all duration-300 group-hover:text-[#67595e] group-hover:scale-105 transform">Modular Design</h4>
              <p className="text-base text-gray-600 transition-all duration-300 group-hover:text-gray-700 leading-relaxed">Flexible cabinet systems for easy installation and maintenance</p>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-[#67595e]/10 to-transparent rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700"></div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:-translate-y-4 animate-slide-in-right group min-h-64 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#67595e] to-[#8b7d82] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="w-10 h-1.5 bg-[#67595e] mb-6 transform transition-all duration-300 group-hover:w-20 group-hover:bg-gradient-to-r group-hover:from-[#67595e] group-hover:to-[#8b7d82]"></div>
              <h4 className="font-semibold text-gray-900 mb-4 text-lg transition-all duration-300 group-hover:text-[#67595e] group-hover:scale-105 transform">Advanced Control</h4>
              <p className="text-base text-gray-600 transition-all duration-300 group-hover:text-gray-700 leading-relaxed">Seamless integration with content management systems</p>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-[#67595e]/10 to-transparent rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700"></div>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="mb-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 animate-slide-in-left">TECHNOLOGY</h3>
          <h4 className="text-lg text-gray-600 mb-6 animate-slide-in-right">Innovation Meets Performance</h4>
        </div>

        {/* Performance & Stats Section */}
        <div className="grid grid-cols-4 gap-4">
          {/* Left Image Box - Takes 2 columns */}
          <div className="col-span-2 bg-white rounded-2xl shadow-lg transform transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:rotate-1 animate-bounce-in group min-h-80 overflow-hidden">
            <img
              src="/images/WhatsApp Image 2025-08-05 at 12.20.33.jpeg"
              alt="Digital Signage Technology"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          {/* Right Side - Three smaller boxes in a column */}
          <div className="col-span-2 space-y-4">
            {/* Box 1 - High Refresh Rate */}
            <div className="bg-white rounded-2xl p-4 shadow-lg flex flex-col justify-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 animate-pulse-in group" style={{ width: '664px', height: '259px' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#67595e] mb-2 transition-all duration-300 group-hover:text-3xl group-hover:text-[#8b7d82]">3840Hz</div>
                <p className="text-xs text-gray-600 transition-colors duration-300 group-hover:text-gray-700">High refresh rate for smooth video</p>
              </div>
            </div>
            
            {/* Box 2 - Technology Description */}
            <div className="bg-white rounded-2xl p-4 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-white animate-slide-in-up group flex items-center justify-center" style={{ width: '664px', height: '259px' }}>
              <p className="text-xs text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-gray-700 text-center max-w-md">
                Advanced COB and SMD LED technology with exceptional brightness and color accuracy.
              </p>
            </div>
            
            {/* Box 3 - Product Series Count */}
            <div className="bg-white rounded-2xl p-4 shadow-lg flex flex-col justify-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 animate-pulse-in group" style={{ width: '664px', height: '259px' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#67595e] mb-2 transition-all duration-300 group-hover:text-3xl group-hover:text-[#8b7d82]">6+</div>
                <p className="text-xs text-gray-600 transition-colors duration-300 group-hover:text-gray-700">Product series available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col lg:flex-row gap-6 items-center justify-between transform transition-all duration-700 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Search */}
            <div className="w-full lg:w-96 group">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67595e] focus:border-transparent transition-all duration-300 group-hover:shadow-lg"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {["All", ...categories].map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    selectedCategory === category
                      ? 'bg-[#67595e] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section ref={productSectionRef} className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of high-performance LED displays designed for both indoor and outdoor applications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#67595e] to-[#8b7d82] mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group border border-gray-100 ${
                  animateCards ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-white/90 text-[#67595e] px-2 py-1 rounded-full text-xs font-semibold shadow-md">
                      {product.category}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold shadow-md ${getEnvironmentColor(product.environment)}`}> 
                      {product.environment}
                    </span>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#67595e] transition-colors duration-300 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  {/* Product Specs */}
                  <div className="space-y-1 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pixel Pitch:</span>
                      <span className="font-semibold text-gray-900">{product.pixelPitch}mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Brightness:</span>
                      <span className="font-semibold text-gray-900">{product.brightness} cd/m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Resolution:</span>
                      <span className="font-semibold text-gray-900">{product.resolution.width} × {product.resolution.height}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Power:</span>
                      <span className="font-semibold text-gray-900">{product.avgPowerConsumption}W</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleViewDetails(product)}
                      className="flex-1 bg-[#67595e] text-white px-3 py-2 rounded-lg font-semibold text-sm shadow-md hover:bg-[#8b7d82] transition-all duration-200 transform hover:scale-105"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => window.open('https://strong-sprinkles-0a52a2.netlify.app/', '_blank')}
                      className="flex-1 bg-gray-50 text-[#67595e] px-3 py-2 rounded-lg font-semibold text-sm shadow-md hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 border border-gray-200"
                    >
                      Calculator
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* API Product Series Section */}
      <section className="py-16 bg-white">
        <ProductSeriesList />
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProductsPage; 