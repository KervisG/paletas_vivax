import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { css } from '../../../styled-system/css';

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5541992633341?text=Ol%C3%A1%2C+vim+por+meio+do+site+e+gostaria+de+saber+mais+sobre+as+tintas+da+Vivax."
      target="_blank"
      rel="noopener noreferrer"
      className={css({
        position: "fixed",
        bottom: "20px", 
        right: "20px", 
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        padding: "15px",
        fontSize: "24px",
        zIndex: "1000", 
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease-in-out",
        '&:hover': {
          transform: "scale(1.1)"
        },
      })}
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsAppButton;
