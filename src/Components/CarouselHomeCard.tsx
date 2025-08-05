import React from 'react'

interface CarouselHomeCardProps {
    title?: string;
    description?: string;
    imageUrl?: string;
}


function CarouselHomeCard({title="", description="", imageUrl=""}: CarouselHomeCardProps) {
  return (
    <div className="w-full h-[350px] text-white bg-black rounded-xl shadow-md overflow-hidden flex-shrink-0">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  )
}

export default CarouselHomeCard
