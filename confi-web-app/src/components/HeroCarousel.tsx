import React, { useState, useEffect } from 'react';

const slides = [
  {
    headline: (
      <>
        Where Vision <br /> Meets Innovation
      </>
    ),
    subheadline: 'Experience stunning visual clarity with our advanced LED technology. From retail environments to corporate spaces, our displays create immersive experiences that engage and inspire.',
    image: '/images/display-showcase.jpg'
  },
  {
    headline: (
      <>
        See What's Possible <br /> With Every Pixel.
      </>
    ),
    subheadline: "Discover the power of every pixel. Our LED displays redefine what's possible, delivering vibrant visuals and unmatched performance for any space.",
    image: '/images/Bellatrix Series Indoor COB P0.9.jpg'
  },
  {
    headline: (
      <>
        More Than Screens.<br /> It's an Experience.
      </>
    ),
    subheadline: 'Step into a world where technology and creativity merge. Our solutions go beyond screens—they create unforgettable experiences.',
    image: '/images/Betelgeuse Series Indoor COB.jpg'
  }
];

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative bg-[#67595e] text-white overflow-hidden" style={{ width: '1423px', height: '503px' }}>
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 border border-white/30"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 border border-white/30"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Section - Text Content */}
          <div className="relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight transition-all duration-500">
              {slides[current].headline}
            </h1>
            <p className="text-lg mb-8 text-[#c4c1c2] leading-relaxed transition-all duration-500">
              {slides[current].subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#67595e] px-8 py-4 rounded-lg font-semibold hover:bg-[#f5f5f5] transition-colors duration-200 shadow-lg">
                Explore Our Services
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#67595e] transition-colors duration-200 shadow-lg">
                View Projects
              </button>
            </div>
          </div>

          {/* Right Section - Single Visual Display */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#8b7d82] to-[#7a6e73] rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#67595e] to-[#5a4f53] rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={slides[current].image} 
                  alt="Digital display showcase with multiple screens"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to CSS content if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center">
                          <div class="text-center">
                            <div class="flex justify-center space-x-4 mb-4">
                              <div class="w-12 h-12 bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <span class="text-2xl">🍋</span>
                              </div>
                              <div class="w-12 h-12 bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <span class="text-2xl">🌿</span>
                              </div>
                              <div class="w-12 h-12 bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <span class="text-2xl">💧</span>
                              </div>
                            </div>
                            <p class="text-white font-bold text-lg">Digital Display Showcase</p>
                            <p class="text-white/80 text-sm">Premium Visual Experience</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 