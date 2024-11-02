import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgLogo from '../../assets/logo_viva_max.png';
import { css } from '../../../styled-system/css';
import { FaHome, FaImages, FaBoxOpen, FaEnvelope, FaPalette, FaStore, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (button) => {
    setActiveButton(button);
    setIsMenuOpen(false); // Cierra el menú al hacer clic en una opción
  };

  const linkStyles = (button) =>
    css({
      display: "flex",
      flexDirection: { base: "column", md: "row" }, // Íconos sobre el texto en pantallas pequeñas
      justifyContent: "center",
      alignItems: "center",
      padding: "8px 10px",
      borderRadius: "8px",
      border: activeButton === button ? "2px solid #8742a0" : "2px solid transparent",
      color: activeButton === button ? "#ffffff" : "#8742a0",
      backgroundColor: activeButton === button ? "#8742a0" : "transparent",
      textDecoration: "none",
      minWidth: { base: "60px", md: "80px" },
      height: "50px",
      textAlign: "center",
      gap: "3px",
      fontSize: { base: "12px", md: "14px" },
      fontWeight: "bold",
      transition: "all 0.4s ease-in-out",
      transform: activeButton === button ? "scale(1.1)" : "scale(1)",
      boxShadow: activeButton === button ? "0 0 10px rgba(135, 66, 160, 0.5)" : "none",
      "&:hover": {
        backgroundColor: "#8742a0",
        color: "#ffffff",
        transform: "scale(1.05)",
        boxShadow: "0 0 8px rgba(135, 66, 160, 0.4)",
      },
    });

  const iconStyles = css({
    fontSize: { base: "24px", md: "16px" },
    marginBottom: { base: "5px", md: "0" },
  });

  return (
    <header
      className={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "white",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        top: 0,
        zIndex: "1000",
        position: "relative",
      })}
    >
      {/* Logo */}
      <div className={css({ marginRight: "auto", padding: "0 10px" })}>
        <img src={imgLogo} alt="Logo" className={css({ height: "40px", width: "auto" })} />
      </div>

      {/* Icono de menú hamburguesa para móviles */}
      <button
        className={css({
          display: { base: "block", md: "none" },
          background: "none",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          color: "#8742a0",
        })}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Nav items */}
      <nav
        className={css({
          display: { base: isMenuOpen ? "flex" : "none", md: "flex" },
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          position: { base: "absolute", md: "static" },
          top: "100%",
          left: 0,
          right: 0,
          backgroundColor: { base: "white", md: "transparent" },
          padding: { base: "1rem", md: "0" },
          boxShadow: { base: "0 4px 8px rgba(0, 0, 0, 0.1)", md: "none" },
          zIndex: 999,
        })}
      >
        <Link to="/" onClick={() => handleClick("home")} className={linkStyles("home")}>
          <FaHome className={iconStyles} />
          <span>Home</span>
        </Link>
        <Link to="/galeria" onClick={() => handleClick("galeria")} className={linkStyles("galeria")}>
          <FaImages className={iconStyles} />
          <span>Galeria</span>
        </Link>
        <Link to="/produtos" onClick={() => handleClick("produtos")} className={linkStyles("produtos")}>
          <FaBoxOpen className={iconStyles} />
          <span>Produtos</span>
        </Link>
        <Link to="/paletas" onClick={() => handleClick("paletas")} className={linkStyles("paletas")}>
          <FaPalette className={iconStyles} />
          <span>Paletas</span>
        </Link>
        <a
          href="https://loja.tintasvivax.ind.br/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClick("loja")}
          className={linkStyles("loja")}
        >
          <FaStore className={iconStyles} />
          <span>Loja</span>
        </a>
        <Link to="/contato" onClick={() => handleClick("contato")} className={linkStyles("contato")}>
          <FaEnvelope className={iconStyles} />
          <span>Contato</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
