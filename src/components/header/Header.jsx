import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgLogo from '../../assets/logo_viva_max.png';
import { css } from '../../../styled-system/css';
import { FaHome, FaImages, FaBoxOpen, FaEnvelope, FaPalette, FaStore } from "react-icons/fa";

const Header = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  const linkStyles = (button) => css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 12px",
    borderRadius: "12px",
    border: activeButton === button ? "2px solid #8742a0" : "2px solid transparent",
    color: activeButton === button ? "#ffffff" : "#8742a0",
    backgroundColor: activeButton === button ? "#8742a0" : "transparent",
    textDecoration: "none",
    minWidth: "80px",
    height: "40px",
    textAlign: "center",
    gap: "5px",
    transition: "all 0.4s ease-in-out",
    transform: activeButton === button ? "scale(1.05)" : "scale(1)",
    boxShadow: activeButton === button ? "0 0 10px rgba(135, 66, 160, 0.5)" : "none",
    '&:hover': {
      backgroundColor: "#8742a0",
      color: "#ffffff",
      transform: "scale(1.05)",
      boxShadow: "0 0 8px rgba(135, 66, 160, 0.4)",
    },
    '@media (max-width: 768px)': {
      padding: "6px 8px",
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
      padding: "1rem",
      backgroundColor: "white",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      top: 0,
      zIndex: "1000",
      paddingLeft: "10px",
      paddingRight: "10px",
    })}>
      
      <div className={css({ marginRight: "auto" })}>
        <img src={imgLogo} alt="Logo" className={css({ height: "40px", width: "auto" })} />
      </div>
      
      <nav className={css({ display: "flex", gap: "10px" })}>
        <Link 
          to="/" 
          onClick={() => handleClick('home')}
          className={linkStyles('home')}
        >
          Home
          <FaHome style={{ marginLeft: '5px' }} />
        </Link>
        <Link 
          to="/galeria" 
          onClick={() => handleClick('galeria')}
          className={linkStyles('galeria')}
        >
          Galeria
          <FaImages style={{ marginLeft: '5px' }} />
        </Link>
        <Link 
          to="/produtos" 
          onClick={() => handleClick('produtos')}
          className={linkStyles('produtos')}
        >
          Produtos
          <FaBoxOpen style={{ marginLeft: '5px' }} />
        </Link>
        <Link 
          to="/paletas" 
          onClick={() => handleClick('paletas')}
          className={linkStyles('paletas')}
        >
          Paletas
          <FaPalette style={{ marginLeft: '5px' }} />
        </Link>
        <a 
          href="https://loja.tintasvivax.ind.br/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClick('loja')}
          className={linkStyles('loja')}
        >
          Loja
          <FaStore style={{ marginLeft: '5px' }} />
        </a>
        <Link 
          to="/contato" 
          onClick={() => handleClick('contato')}
          className={linkStyles('contato')}
        >
          Contato
          <FaEnvelope style={{ marginLeft: '5px' }} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
