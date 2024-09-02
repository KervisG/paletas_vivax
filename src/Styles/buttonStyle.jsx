import React from 'react'
import {css} from '../../styled-system/css'

  

export const linkStyles =  css({
  textDecoration: "none",
  fontSize: "lg",
  fontWeight: "bold",
  color: "yellow.600", // Color del texto para los enlaces inactivos
  padding: "10px 20px",
  borderRadius: "full", // Bordes redondeados

  // Estado natural
  backgroundColor: "transparent", // Sin fondo
  border: "none", // Sin borde

  transition: "background-color 0.3s ease, color 0.3s ease, border 0.3s ease", // Transición suave

  "&:hover": {
    color: "yellow.700",
  },

  "&:focus": {
    outline: "none", // Sin borde de enfoque
    border: "2px solid purple.700", // Borde morado al hacer clic
  },

  "&:active": {
    backgroundColor: "purple.700", // Fondo morado al hacer clic
    color: "white", // Texto blanco al hacer clic
    border: "2px solid purple.700", // Borde morado cuando está activo
  },

  "&.active": {
    backgroundColor: "purple.700", // Fondo morado cuando el enlace está activo
    color: "white", // Texto blanco cuando está activo
    border: "2px solid purple.700", // Borde morado cuando está activo
  },
});