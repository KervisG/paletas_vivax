import React from "react";
import logo from "../../assets/logo_viva_max.png";
import { FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { css } from '../../../styled-system/css';

const Footer = () => {
  return (
    <footer className={css({
      backgroundColor: "#3F1859",
      color: "#EDCD3D",
      py: "6",
      px: "4",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: { base: "column", md: "row" },
      borderTop: "4px solid #EDCD3D",
      gap: "8",
      textAlign: "center",
    })}>
      {/* Sección Izquierda con Logo y Descripción */}
      <div className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: { base: "100%", md: "30%" },
      })}>
        <img src={logo} alt="Tintas Vivax Logo" className={css({ height: { base: "60px", md: "80px" }, mb: "4" })} />
        <h3 className={css({ fontSize: { base: "xl", md: "2xl" }, fontWeight: "bold", mb: "2" })}>TINTAS VIVAX</h3>
        <p className={css({ fontStyle: "italic", mb: "2", maxWidth: "250px", fontSize: { base: "sm", md: "md" } })}>
          "Colorindo seus sonhos, um espaço de cada vez."
        </p>
        <p className={css({ fontSize: { base: "xs", md: "sm" }, mt: "2" })}>
          Horário de Atendimento: Segunda a Sexta, 8h às 17h.
        </p>
        <div className={css({ display: "flex", gap: "3", fontSize: { base: "20px", md: "24px" }, mt: "4" })}>
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

      {/* Sección Derecha con Información de Contacto */}
      <div className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: { base: "100%", md: "30%" },
      })}>
        <h4 className={css({ fontSize: "lg", fontWeight: "bold", mb: "4" })}>Nossos contatos</h4>
        <ul className={css({ listStyleType: "none", padding: 0, width: "100%", textAlign: "center" })}>
          <li className={css({ display: "flex", alignItems: "center", justifyContent: "center", mb: "3" })}>
            <a href="mailto:contato@tintasvivax.ind.br" className={css({ color: "#EDCD3D", display: "flex", alignItems: "center", gap: "2" })}>
              <FaEnvelope className={css({ fontSize: { base: "18px", md: "20px" } })} />
              contato@tintasvivax.ind.br
            </a>
          </li>
          <li className={css({ display: "flex", alignItems: "center", justifyContent: "center", mb: "3" })}>
            <a href="tel:+554136579292" className={css({ color: "#EDCD3D", display: "flex", alignItems: "center", gap: "2" })}>
              <FaPhone className={css({ fontSize: { base: "18px", md: "20px" } })} />
              (41) 3657-9292
            </a>
          </li>
          <li className={css({ display: "flex", alignItems: "center", justifyContent: "center", mb: "3" })}>
            <a href="https://goo.gl/maps/oTtZniXXtjxWH53e7" target="_blank" rel="noopener noreferrer" className={css({ color: "#EDCD3D", display: "flex", alignItems: "center", gap: "2" })}>
              <FaMapMarkerAlt className={css({ fontSize: { base: "18px", md: "20px" } })} />
              R. Ver. Dirceu Pavoni, 21 - Vila Feliz, Alm. Tamandaré - PR, 83505-690
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
