"use client";
import React from 'react'
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import Image from 'next/image';
import DropdownHeader from '@/Components/Header/DropdownHeader';
import dragsData from "@/data/lista-drag-queens.json"; 
import showsData from "@/data/lista-espectaculos.json"; 
import Link from 'next/link';

const drags = dragsData as { name: string; href:string; id:string;}[];
const shows = showsData as { name: string; href:string; id:string;}[];

function Header() {
    


    // Estado del menú principal

    const [isOpen, setIsOpen] = useState(false);


return (


    <header className="bg-black fixed top-0 px-10 left-0 w-full flex z-50">

        <nav className="flex items-center justify-between w-full h-16">
            <Link
                href="/">
                <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src="/headerLogo.svg"
                    alt="Haus of Carmen Logo"
                    width={60} 
                    height={50}
                    priority
                    />
            </Link>
             

            <div className="hidden lg:flex items-center justify-between px-2 w-full">
                <ul className="flex items-center text-pinkSecondary font-bold">
                    <DropdownHeader title="Nuestras Dragas" items={drags} />
                    <DropdownHeader title="Espectáculos" items={shows} />
                </ul>
            </div>
            
            {/* Menu para movil */}
            <FiMenu 
                size={35} 
                className="lg:hidden text-pinkSecondary cursor-pointer transition-all ease-in-out hover:text-pinkTertiary " 
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                />
            {/* Elemento para cerrar el menú cuando se hace click fuera */}
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
                <ul>
                    <li className="p-4 border-b border-[#444] flex items-center justify-end mx-5">
                        <RxCross1 size={35} onClick={() => setIsOpen(false)} className="text-pinkSecondary cursor-pointer transition-all ease-in-out hover:text-pinkTertiary"/>
                    </li>
                    <DropdownHeader title="Nuestras Dragas" items={drags} />
                    <DropdownHeader title="Espectáculos" items={shows} />
                </ul>
                
                
                
            </div>
        </nav>
    </header>
  )
}

export default Header
