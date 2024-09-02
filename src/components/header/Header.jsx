import React, { useState } from "react";
import imgLogo from '../../assets/logo_viva_max.png';
import { css } from '../../../styled-system/css';
import { FaHome, FaImages, FaBoxOpen, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  const linkStyles = (button) => css({
    display: "flex", 
    justifyContent: "center",
    alignItems: "center", 
    padding: "10px 15px", 
    borderRadius: "20px", 
    border: activeButton === button ? "2px solid #8742a0" : "2px solid #8742a0", 
    color: "white", 
    backgroundColor: "#8742a0", 
    textDecoration: "none",
    minWidth: "80px",
    height: "40px", 
    textAlign: "center",
    gap: "5px",
    transition: "all 0.4s ease-in-out",
    transform: activeButton === button ? "scale(1.1)" : "scale(1)", 
    boxShadow: activeButton === button ? "0 0 10px 2px rgba(135, 66, 160, 0.8)" : "none", 
    '&:hover': {
      transform: "scale(1.05)", 
      boxShadow: "0 0 8px 1px rgba(135, 66, 160, 0.6)", 
    },
    '@media (max-width: 768px)': { // Media query para pantallas pequeñas
      padding: "8px 10px", 
      minWidth: "60px", 
      height: "35px", 
      fontSize: "12px", 
    },
  });

  return (  
    <header className={css({
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      p: "5", 
      bg: "white", 
      top: 0,
      zIndex: "1000 ",
      paddingLeft: "10px", 
      paddingRight: "10px", 
    })}>
      
      <div className={css({ marginRight: "auto" })}>
        <img src={imgLogo} alt="Logo" className={css({ height: "40px", width: "auto" })} />
      </div>
      
      <nav className={css({ display: "flex", gap: "5px" })}>
        <a 
          href="https://tintasvivax.ind.br/home/" 
          onClick={() => handleClick('home')}
          className={linkStyles('home')}
        >
          Home
          <FaHome style={{ marginLeft: '5px' }} />
        </a>
        <a 
          href="https://tintasvivax.ind.br/galeria/" 
          onClick={() => handleClick('galeria')}
          className={linkStyles('galeria')}
        >
          Galeria
          <FaImages style={{ marginLeft: '5px' }} />
        </a>
        <a 
          href="https://tintasvivax.ind.br/tintas-vivax-produtos/" 
          onClick={() => handleClick('produtos')}
          className={linkStyles('produtos')}
        >
          Produtos
          <FaBoxOpen style={{ marginLeft: '5px' }} />
        </a>
        <a 
          href="https://tintasvivax.ind.br/contato-vivax/" 
          onClick={() => handleClick('contato')}
          className={linkStyles('contato')}
        >
          Contato
          <FaEnvelope style={{ marginLeft: '5px' }} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
