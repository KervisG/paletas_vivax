import React from 'react';
import { css } from '../../../styled-system/css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import backgroundImage from '../../assets/galeria-vivax.png';
import ImgGalery1 from '../../assets/03-galeria-1-300x300.jpg';
import ImgGalery2 from '../../assets/03-galeria-2-300x300.jpg';
import ImgGalery3 from '../../assets/03-galeria-3-300x300.jpg';
import ImgGalery4 from '../../assets/03-galeria-4-300x300.jpg';
import ImgGalery5 from '../../assets/03-galeria-5-300x300.jpg';
import ImgGalery6 from '../../assets/03-galeria-6-300x300.jpg';

const GallerySection = () => {
  return (
    <div>
      {/* Sección de Encabezado con Imagen de Fondo */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '6rem 2rem',
          position: 'relative',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        {/* Fondo semitransparente detrás del texto */}
        <div
          style={{
            backgroundColor: 'rgba(69, 47, 113, 0.6)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        ></div>
        <div className={css({ position: 'relative', zIndex: 10 })}>
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semitransparente
              padding: '1rem 2rem',
              borderRadius: '8px',
              display: 'inline-block',
            }}
          >
            <p className={css({ color: '#333', fontWeight: '600', marginBottom: '0.5rem', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)' })}>
              Home <span className={css({ color: '#D8A131' })}>›</span> Galeria
            </p>
            <h2 className={css({ fontSize: '1.25rem', fontWeight: '500', color: '#333', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)' })}>
              Seja bem vindo a nossa página de produtos.
            </h2>
          </div>
        </div>
      </div>

      {/* Sección de Introducción */}
      <div className={css({ display: 'flex', justifyContent: 'center', padding: '4rem 2rem', backgroundColor: '#FFFFFF' })}>
        <div className={css({
          backgroundColor: '#5B3A8F',
          borderRadius: '12px',
          color: '#FFFFFF',
          maxWidth: '800px',
          padding: '2rem',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        })}>
          <h3 className={css({ fontSize: '1.75rem', fontWeight: '600', color: '#FFFFFF' })}>
            Resultados perfeitos graças a nossa equipe altamente capacitada.
          </h3>
          <p className={css({ fontSize: '1rem', opacity: 0.9 })}>
            Registros de alguns dos nossos serviços já executados.
          </p>
        </div>
      </div>

      {/* Galería de Imágenes */}
      <div className={css({ padding: '2rem', backgroundColor: '#FFFFFF' })}>
        <div className={css({
          display: 'grid',
          gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, 1fr)'], // 2 columnas en pantallas pequeñas, 3 en grandes
          gap: '1rem',
          maxWidth: '800px',
          margin: 'auto',
        })}>
          {[ImgGalery1, ImgGalery2, ImgGalery3, ImgGalery4, ImgGalery5, ImgGalery6].map((imgSrc, index) => (
            <div key={index} className={css({
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease-in-out',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            })}>
              <img src={imgSrc} alt={`Galeria ${index + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
