import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PaletaCores from './components/paleta_cores/PaletaCores.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import FloatingWhatsAppButton from './components/buttons/FloatingWhatsAppButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Header></Header>
   <PaletaCores></PaletaCores>
    <Footer></Footer>
    <FloatingWhatsAppButton></FloatingWhatsAppButton>
  </StrictMode>
)
