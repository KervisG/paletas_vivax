import React from "react";
import logo from "../../assets/logo_viva_max.png"; 
import { FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { css } from '../../../styled-system/css';

const Footer = () => {
  return (
    <footer className={css({
      bg: "#3F1859",
      color: "#EDCD3D",
      py: "3.5",
      px: "8", 
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: { base: "column", md: "row" },
      borderTop: "4px solid #EDCD3D",
      maxWidth: "100%", 
      boxSizing: "border-box",
    })}>
      <div className={css({ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "flex-start",
        mb: { base: "6", md: "0" },
        width: "100%", 
        maxWidth: { base: "100%", md: "50%" },
        overflowWrap: "break-word" 
      })}>
        <img src={logo} alt="Tintas Vivax Logo" className={css({ height: "80px", mb: "4" })} />
        <h3 className={css({ fontSize: "2xl", mb: "2", fontWeight: "bold" })}>TINTAS VIVAX</h3>
        <p className={css({ maxWidth: "200px", fontStyle: "italic" })}>
        "Colorindo seus sonhos, um espaço de cada vez."
        </p>
        <p className={css({ mt: "4" })}>
        Horário de Atendimento: Segunda a Sexta, 8h às 17h.
        </p>
        <div className={css({ display: "flex", gap: "3", fontSize: "24px", mt: "4" })}>
          <a href="https://www.instagram.com/tintasvivax/" target="_blank" rel="noopener noreferrer" className={css({ color: "#EDCD3D" })}>
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/tintavivax/" target="_blank" rel="noopener noreferrer" className={css({ color: "#EDCD3D" })}>
            <FaFacebook />
          </a>
          <a href="https://wa.me/5541992633341?text=Ol%C3%A1%2C+vim+por+meio+do+site+e+gostaria+de+saber+mais+sobre+as+tintas+da+Vivax." target="_blank" rel="noopener noreferrer" className={css({ color: "#EDCD3D" })}>
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className={css({ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "flex-end", 
        maxWidth: "50%", 
        textAlign: "right",
        width: "100%", 
        overflowWrap: "break-word" 
      })}>
        <h4 className={css({ mb: "4", fontSize: "lg", fontWeight: "bold" })}>Nossos contatos</h4>
        <ul className={css({ listStyleType: "none", p: 0 })}>
          <li className={css({ display: "flex", alignItems: "center", justifyContent: "flex-end", mb: "2" })}>
            <a href="mailto:contato@tintasvivax.ind.br" className={css({ color: "#EDCD3D", display: "flex", alignItems: "center" })}>
              <FaEnvelope className={css({ mr: "3", color: "#EDCD3D" })} />
              contato@tintasvivax.ind.br
            </a>
          </li>
          <li className={css({ display: "flex", alignItems: "center", justifyContent: "flex-end", mb: "2" })}>
            <a href="tel:+554136579292" className={css({ color: "#EDCD3D", display: "flex", alignItems: "center" })}>
              <FaPhone className={css({ mr: "3", color: "#EDCD3D" })} />
              (41) 3657-9292
            </a>
          </li>
          <a href="https://goo.gl/maps/oTtZniXXtjxWH53e7" className={css({ display: "flex", alignItems: "center", justifyContent: "flex-end" })}>
            <FaMapMarkerAlt className={css({ mr: "3", color: "#EDCD3D" })} />
            <span>R. Ver. Dirceu Pavoni, 21 - Vila Feliz, Alm. Tamandaré - PR, 83505-690</span>
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
