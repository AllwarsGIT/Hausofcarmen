"use client";

import React, { useRef } from "react";
import CarouselHomeCard from "@/Components/CarouselHomeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

function CarouselHome() {
  const swiperRef = useRef<SwiperClass | null>(null);

  const cards = [
    {
      title: "Espectáculo 1",
      image: "/Shows/Cabaret.jpeg",
      description: "Una experiencia mágica e inolvidable.",
    },
    {
      title: "Espectáculo 2",
      image: "/Shows/Drag to the future.jpg",
      description: "La historia cobra vida en el escenario.",
    },
    {
      title: "Espectáculo 3",
      image: "/Shows/Drag Valentin.jpeg",
      description: "Acrobacias que te dejarán sin aliento.", 
    },
    {
      title: "Espectáculo 4",
      image: "/Shows/Iconos Cuir.png",
      description: "Colores, luz y música en perfecta armonía.",
    },
    {
      title: "Espectáculo 5",
      image: "/Shows/Sueño de primavera.jpg",
      description: "Colores, luz y música en perfecta armonía.",
    },
  ];

  return (
    <div className="w-[340px] md:w-[700px] lg:w-[1100px] xl:w-[1800px] max-w-7xl mx-auto px-4 mt-10">
      {/* Flechas externas */}
      <div className="flex flex-row w-full justify-start items-center gap-2 px-10 mb-4">
        <IoIosArrowBack
          size={35}
          className="text-pinkSecondary cursor-pointer transition-all ease-in-out hover:text-pinkTertiary"
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <IoIosArrowForward
          size={35}
          className="text-pinkSecondary cursor-pointer transition-all ease-in-out hover:text-pinkTertiary"
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1200}
        slidesPerView={4}
        spaceBetween={16} 
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        loop={true}
      >
        {cards.map((card, index) => (
          <SwiperSlide 
          key={index}>
            <CarouselHomeCard
              title={card.title}
              imageUrl={card.image}
              description={card.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselHome;
