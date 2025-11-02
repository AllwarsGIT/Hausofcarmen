"use client"
import React from 'react'
import { FaPaypal } from "react-icons/fa";

function DonationSection() {
  return (
    <section className="flex flex-col bg-blackPrimary w-full justify-center items-center gap-15 py-20">
        <h1 className="text-2xl font-bold text-center text-pinkSecondary">
            ¿Te gusta lo que ves? ¡Apóyanos!
        </h1>

        {/* <a href="https://www.paypal.com/paypalme/BillieGunz" >
            <FaPaypal 
            className="hover:scale-110 hover:text-pinkPrimary transition-all ease-in-out"
            size={60}
            />
        </a> */}
        <a 
            href="https://www.paypal.com/paypalme/BillieGunz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-pinkSecondary to-pinkPrimary px-6 py-3 rounded-full shadow-lg hover:scale-110 transition-all ease-in-out  duration-300"
        >
            <FaPaypal size={30} className="text-white" />
            <span className="text-white font-semibold text-lg">Donar con PayPal</span>
        </a>

        
        
    </section>
    )
}

export default DonationSection
