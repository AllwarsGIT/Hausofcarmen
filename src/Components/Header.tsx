"use client";
import React from 'react'
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import Image from 'next/image';

function Header() {

// type NavData = {
//     isActive: boolean;
// }

    const [isOpen, setIsOpen] = useState(false);


return (


    <header className="bg-blackPrimary fixed top-0 px-10 left-0 w-full flex z-50">

        <nav className="flex items-center justify-between w-full h-16">
             <Image
                src="/headerLogo.svg"
                alt="Haus of Carmen Logo"
                width={60} 
                height={50}
                priority
                />

            <FiMenu 
                size={35} 
                className="text-pinkSecondary cursor-pointer transition-all ease-in-out hover:text-pinkTertiary " 
                onClick={() => setIsOpen(!isOpen)}
                />

            {isOpen && (
                    <div
                    className="fixed inset-0 bg-transparent  z-10"
                    onClick={() => setIsOpen(false)}
                    />
            )}

            <div 
                className={`fixed top-0 right-0 h-full w-64 bg-blackPrimary text-pinkSecondary  z-10 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } `}
            >
                <div className="p-4 border-b border-[#444] flex items-center justify-end mx-5">
                    <RxCross1 size={35} onClick={() => setIsOpen(false)} className="text-pinkSecondary cursor-pointer transition-all ease-in-out hover:text-pinkTertiary"/>
                </div>
                <div className="p-4 border-b border-[#444] flex items-center justify-start mx-5">
                    <p className=" text-lg font-semibold">Nuestras Dragas</p>
                </div>
                <div className="p-4 flex items-center justify-start mx-5">
                    <p className=" text-lg font-semibold">Espectáculos</p>
                </div>
                
            </div>
        </nav>
    </header>
  )
}

export default Header
