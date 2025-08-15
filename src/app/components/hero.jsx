'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from "next/link";
const slides = [
  {
    image: '/hero.jpeg',
    title: 'Welcome to Aditya Homeopathy',
    subtitle: 'Natural Healing with Aditya Homeopathy',
  },
  {
    image: '/holistic.jpeg',
    title: 'Holistic Treatments',
    subtitle: 'Safe and Gentle Care for Everyone',
  },
  {
    image: '/expert.jpeg',
    title: 'Expert Homeopathic Doctors',
    subtitle: 'Experience You Can Trust',
  },
];

export default function Hero() {
  return (
    <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/7] lg:aspect-[21/9] overflow-hidden">
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
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority={index === 0}
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4 sm:px-8">
                <h1 className="text-[#FFFDD0] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-snug sm:leading-tight">
                  {slide.title}
                </h1>
                <p className="text-[#FFFDD0] text-sm sm:text-lg md:text-xl mb-4 sm:mb-6">
                  {slide.subtitle}
                </p>
               <Link href="/appointment">
  <button className="bg-green-700 hover:bg-yellow-300 text-white hover:text-black px-4 sm:px-6 py-2 rounded-xl text-sm sm:text-base transition-all">
    Book Appointment
  </button>
</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
