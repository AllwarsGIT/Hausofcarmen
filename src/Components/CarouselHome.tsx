import React from 'react'
import CarouselHomeCard from '@/Components/CarouselHomeCard';
import Slider from "react-slick";


function CarouselHome() {

    const settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2.1 } },
            { breakpoint: 640, settings: { slidesToShow: 1.25 } },
        ],
    };

    const cards = [ 
        {
        title: "Espectáculo 1",
        image: "https://picsum.photos/id/1005/400/200",
        description: "Una experiencia mágica e inolvidable.",
        },
        {
        title: "Espectáculo 2",
        image: "https://picsum.photos/id/1011/400/200",
        description: "La historia cobra vida en el escenario.",
        },
        {
        title: "Espectáculo 3",
        image: "https://picsum.photos/id/1018/400/200",
        description: "Acrobacias que te dejarán sin aliento.",
        },
        {
        title: "Espectáculo 4",
        image: "https://picsum.photos/id/1025/400/200",
        description: "Colores, luz y música en perfecta armonía.",
        },
        {
        title: "Espectáculo 5",
        image: "https://picsum.photos/id/1025/400/200",
        description: "Colores, luz y música en perfecta armonía.",
        },
        {
        title: "Espectáculo 6",
        image: "https://picsum.photos/id/1025/400/200",
        description: "Colores, luz y música en perfecta armonía.",
        },
    ];

    return (
          <div className="w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1100px]  max-w-6xl mx-auto px-4 mt-20">
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className="px-2 ">
                        <CarouselHomeCard
                            title={card.title}
                            imageUrl={card.image}
                            description={card.description}
                        />
                    </div>
                ))}
            </Slider>
          </div>
  )
}

export default CarouselHome
