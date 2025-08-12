import React from 'react'

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row text-gray-400 items-center justify-center w-full p-6 md:p-10 bg-black text-center md:text-left">
  <span className="mb-2 md:mb-0">
    © 2025 Hausofcarmen.&nbsp; 
  </span>
  <br/>
  <span>
    Página diseñada y desarrollada por&nbsp;
  </span>
  <a href="https://alvarosanchez-portfolio.vercel.app/" className="font-bold text-pinkSecondary hover:text-pinkPrimary underline cursor-pointer transition-all ease-in-out">
    Álvaro Sánchez
  </a>
</footer>
    )
}

export default Footer
