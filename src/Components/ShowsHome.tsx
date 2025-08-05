"use client";
import React from 'react'
import CarouselHome from '@/Components/CarouselHome';
import CarouselTest from '@/Components/CarouselTest';

function ShowsHome() {

  
  return (
    <section className="flex flex-col w-full items-center justify-start h-[60vh] bg-blackPrimary">
        <div className="flex flex-row mt-20">
            <h1 className="text-white text-2xl font-bold ">Nuestros shows</h1>
        </div>

      
        <CarouselHome />
        {/* <CarouselTest /> */}
        
    </section>
  )
}

export default ShowsHome
