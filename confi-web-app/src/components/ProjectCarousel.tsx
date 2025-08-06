import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    id: 1,
    title: "Corporate",
    category: "Corporate",
    image: "https://orion-led.com/admin/upload/image_78276979.jpg",
    description: "LED solutions for corporate offices, boardrooms, and lobbies with professional-grade displays.",
    stats: "50+ Projects",
    quality: "Premium Quality",
    color: "green"
  },
  {
    id: 2,
    title: "DOOH",
    category: "DOOH",
    image: "https://orion-led.com/admin/upload/image_22803009.jpg",
    description: "Digital Out Of Home displays for advertising and public spaces with high visibility.",
    stats: "100+ Displays",
    quality: "High Impact",
    color: "blue"
  },
  {
    id: 3,
    title: "Retail",
    category: "Retail",
    image: "https://orion-led.com/admin/upload/image_86727506.jpg",
    description: "LED displays for retail stores, malls, and showrooms with engaging content.",
    stats: "200+ Stores",
    quality: "Engaging",
    color: "purple"
  },
  {
    id: 4,
    title: "Entertainment",
    category: "Entertainment",
    image: "https://orion-led.com/admin/upload/image_76671442.jpg",
    description: "LED solutions for events, concerts, and entertainment venues with immersive experiences.",
    stats: "150+ Events",
    quality: "Immersive",
    color: "orange"
  },
  {
    id: 5,
    title: "Hotel",
    category: "Hotel",
    image: "https://orion-led.com/admin/upload/image_2399619.jpg",
    description: "LED displays for hotels, conference halls, and hospitality spaces with elegant design.",
    stats: "75+ Venues",
    quality: "Elegant",
    color: "red"
  }
];

const ProjectCarousel: React.FC = () => {
  return (
    <div className="relative max-w-6xl mx-auto px-8">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : 2.5}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="w-full"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="flex justify-center items-center py-8">
            <div className="relative rounded-2xl border border-white/30 shadow-2xl bg-white/30 backdrop-blur-lg overflow-hidden min-w-[340px] max-w-[400px] md:min-w-[400px] md:max-w-[480px] h-[520px] flex-shrink-0 transition-transform duration-500 hover:scale-105 hover:shadow-3xl group">
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ filter: 'brightness(0.7) saturate(1.2)' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-0" />
              {/* Card Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-8">
                <div className="flex gap-2 mb-6">
                  <span className="bg-white/60 text-[#67595e] px-3 py-1 rounded-full text-xs font-semibold shadow-md backdrop-blur-sm">
                    {project.category}
                  </span>
                  <span className={`bg-white/60 px-3 py-1 rounded-full text-xs font-semibold shadow-md backdrop-blur-sm`}> 
                    {project.stats}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-white/80 font-medium bg-[#67595e]/80 px-3 py-1 rounded-full">
                      {project.quality}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCarousel; 