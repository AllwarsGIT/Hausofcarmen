"use client";
import React, { useRef } from "react";
import CarouselHomeCard from "@/Components/CarouselHomeCard";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function CarouselHome() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    infinite: true,
    arrows: false, // Desactivamos las flechas internas
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    centerPadding: "20px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1.1 } },
    ],
  };

  const goNext = () => {
    sliderRef.current?.slickNext();
  };

  const goPrev = () => {
    sliderRef.current?.slickPrev();
  };

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
    // {
    //   title: "Espectáculo 6",
    //   image: "https://picsum.photos/id/1045/400/200",
    //   description: "Colores, luz y música en perfecta armonía.",
    // },
  ];

  return (
    <div className="w-[340px] md:w-[700px] lg:w-[900px] xl:w-[1100px] max-w-6xl mx-auto px-4 mt-10  ">
      {/* Flechas externas */}
      <div className="flex flex-row w-full justify-start items-center gap-2 px-10 mb-4">
        <IoIosArrowBack
          size={35}
          className="text-pinkSecondary cursor-pointer transition-all ease-in-out hover:text-pinkTertiary"
          onClick={goPrev}
        />
        <IoIosArrowForward
          size={35}
          className="text-pinkSecondary cursor-pointer transition-all ease-in-out hover:text-pinkTertiary"
          onClick={goNext}
        />
      </div>

      {/* Slider con ref */}
      <Slider ref={sliderRef} {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-2">
            <CarouselHomeCard
              title={card.title}
              imageUrl={card.image}
              description={card.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselHome;
