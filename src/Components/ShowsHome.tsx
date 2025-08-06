"use client";
import React from 'react'
import CarouselHome from '@/Components/CarouselHome';


function ShowsHome() {

  
  return (
    <section className="flex flex-col w-full items-center justify-center min-h-[60vh] bg-black">
        <div className="flex flex-row mt-15 w-full justify-center ">
            <h1 className="text-pinkSecondary text-2xl font-bold ">ESPECTÁCULOS</h1>
        </div>

        <CarouselHome />
    </section>
  )
}

export default ShowsHome
