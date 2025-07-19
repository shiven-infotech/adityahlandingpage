'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    image: 'https://www.canadiancmc.com/wp-content/uploads/2015/09/HP03.webp',
    title: 'Welcome to Aditya Homeopathy',
    subtitle: 'Natural Healing with Aditya Homeopathy',
  },
  {
    image: '/NewTheme/Images/Slider-4.png',
    title: 'Holistic Treatments',
    subtitle: 'Safe and Gentle Care for Everyone',
  },
  {
    image: 'https://media.istockphoto.com/id/1226721780/photo/alternative-medicine.jpg?s=612x612&w=0&k=20&c=H4Dsxky23XjYwWSl_PqzGc0SPT-vToGXUHFJdHKFqVo=',
    title: 'Expert Homeopathic Doctors',
    subtitle: 'Experience You Can Trust',
  },
];

export default function Hero() {
  return (
    <div className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] xl:h-[650px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full absolute inset-0"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-[#FFFDD0] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-[#FFFDD0] text-lg sm:text-xl md:text-2xl mb-6">
                  {slide.subtitle}
                </p>
                <button className="bg-green-700 hover:bg-yellow-300 text-white px-6 py-2 rounded-xl text-sm sm:text-base">
                  Book Appointment
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
