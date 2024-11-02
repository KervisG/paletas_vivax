import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Routers from "./components/router/Routers"; // Importamos el componente de rutas

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import FloatingWhatsAppButton from "./components/buttons/FloatingWhatsAppButton";
import PaletaCores from "./components/paleta_cores/PaletaCores";
import ContactPage from "./components/contactopage/ContactoPage";
import SectionInfo from "./components/section-info/SectionInfo";
import GallerySection from "./components/galery/GalerySection";
import ProductSection from "./components/producto-section/ProductoSection";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routers />
  </StrictMode>
);
