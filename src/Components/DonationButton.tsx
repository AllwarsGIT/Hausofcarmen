import { useState } from "react";
import { FaPaypal } from "react-icons/fa";



export default function PaypalButton() {
  const [ping, setPing] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Evita que vaya al enlace inmediatamente
    setPing(true);

    setTimeout(() => {
      window.open("https://www.paypal.com/paypalme/BillieGunz", "_blank");
    }, 1000); // 1s después del ping
  };

  return (
    <div className="relative inline-block">
      {/* Ping animado */}
      {ping && (
        <span className="absolute inset-0 rounded-full bg-pinkPrimary opacity-75 animate-ping"></span>
      )}

      <a
        href="https://www.paypal.com/paypalme/BillieGunz"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="relative flex items-center gap-3 bg-gradient-to-r from-pinkSecondary to-pinkPrimary px-6 py-3 rounded-full shadow-lg  hover:scale-1100 hover:from-purple-500 hover:to-blue-500 transition-all ease-in-out duration-1000"
      >
        <FaPaypal size={30} className="text-white" />
        <span className="text-white font-semibold text-lg">
          Donar con PayPal
        </span>
      </a>
    </div>
  );
}
