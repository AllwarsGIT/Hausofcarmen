import React from "react";
import Image from "next/image";

interface CarouselHomeCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

function CarouselHomeCard({
  title = "",
  imageUrl = "",
}: CarouselHomeCardProps) {
  return (
    
    <div className="w-full max-w-[340px] text-white bg-black rounded-xl shadow-md overflow-hidden lg:opacity-70 flex-shrink-0 transition-all ease-in-out hover:selection:shadow-lg  hover:opacity-100 z-10">
      <div className="relative aspect-[3/4]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={false}
        />
      </div>
      {/* Aquí podrías añadir título y descripción */}
    </div>

  );
}

export default CarouselHomeCard;
