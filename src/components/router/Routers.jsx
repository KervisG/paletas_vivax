// Routers.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import FloatingWhatsAppButton from "../buttons/FloatingWhatsAppButton";
import PaletaCores from "../paleta_cores/PaletaCores"; // Ruta de paletas
import ContactPage from "..//contactopage/ContactoPage";
import GallerySection from "../galery/GalerySection";
import ProductSection from "..//producto-section/ProductoSection";
import SectionInfo from "../section-info/SectionInfo";

const Routers = () => {
  return (
    <Router>
      <Header />
      <FloatingWhatsAppButton />
      <Routes>
        <Route path="/" element={<SectionInfo />} />
        <Route path="/galeria" element={<GallerySection />} />
        <Route path="/produtos" element={<ProductSection />} />
        <Route path="/paletas" element={<PaletaCores />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routers;
