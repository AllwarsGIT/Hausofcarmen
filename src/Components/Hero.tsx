import React from 'react'
import Image from 'next/image'
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });

function Hero() {
  return (
    <>
      <section className="flex flex-col relative items-center bg-black  min-h-[400px] max-h-[60vh]">
        <Image
            src="/hero-image.jpeg"
            alt="Description of image"
            width={1280}
            height={720}
            priority
            className="object-cover md:object-contain min-h-[400px] max-h-[60vh] "
            />

        <div className={`${oswald.className} absolute bottom-12 items-center flex flex-col justify-center `}>
          <Image
            src="/heroLogo.svg"
            alt="Haus of Carmen Logo"
            width={140} 
            height={130}
            priority
            className="md:w-[230px] md:h-[210px] "
            />
        </div>

        {/* <a href="https://www.instagram.com/hausofcarmen/" target="_blank" rel="noopener noreferrer" className="absolute bottom-0 translate-y-1/2  ">
          <button className=" bg-pinkPrimary text-[20px] text-black px-6 py-1 font-bold rounded-full transition-all ease-in-out hover:bg-pinkDark">
            Conócenos
          </button>
        </a> */}
        
      </section>
      
    </>
  )
}

export default Hero
