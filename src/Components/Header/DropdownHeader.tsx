"use client"
import React from 'react'
import { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link"
import useIsMobile from '@/Hooks/useIsMobile'


type DropdownMenuProps = {
  title: string;
  items?:{name: string; href:string;}[];
  mode?: 'mobile' | 'desktop';
}



function DropdownHeader({ title, items }: DropdownMenuProps) {

const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

const mode = useIsMobile()



  return (
    <>
      <li 
        className={` p-4 mx-5 rounded-2xl  ${mode === "desktop" ? 'relative bg-blackPrimary' : 'border-[#444] border-b'} `}
        onMouseEnter={mode === "desktop" ? () => setDropdownIsOpen(true) : undefined}
        onMouseLeave={mode === "desktop" ? () => setDropdownIsOpen(false) : undefined}
        >
        <button 
            className=" text-lg font-semibold w-full flex items-center justify-between cursor-pointer transition-all ease-in-out hover:text-pinkTertiary"
            onClick={mode === "mobile" ? () => setDropdownIsOpen(!dropdownIsOpen) : undefined}
            >
            <span className={` ${mode === "desktop" ? 'px-2' : ''} `}>{title}</span>
            <IoIosArrowDown size={25} className={` transition-all ease-in-out ${dropdownIsOpen ? 'rotate-180' : 'rotate-0'} `} />
        </button>

        <ul className={` bg-blackPrimary grid justify-start font-semibold transition-all ease-in-out ${mode === "desktop" ? 'absolute rounded-b-[5px]' : ''} ${dropdownIsOpen ? 'grid-rows-[1fr] pt-2' : 'grid-rows-[0fr]' }`}>
            <div className="overflow-hidden  ">
               {items?.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 hover:text-pinkTertiary transition-all ease-in-out "
                >
                  {item.name}
                </Link>
                ))}
            </div>
        </ul>
       </li>
  </>
  )
}

export default DropdownHeader
