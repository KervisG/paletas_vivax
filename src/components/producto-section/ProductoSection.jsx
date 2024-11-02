import React from 'react';
import { css } from '../../../styled-system/css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import imgbgheader from '../../assets/capa-1.jpg';
import productImage1 from '../../assets/product1.jpeg';
import productImage2 from '../../assets/product2.jpeg';
import productImage3 from '../../assets/product3.jpeg';
import productImage4 from '../../assets/product4.jpeg';
import productImage5 from '../../assets/product5.jpeg';
import productImage6 from '../../assets/product6.jpeg';
import productImage7 from '../../assets/product7.jpeg';
import productImage8 from '../../assets/product8.jpeg';

const ProductSection = () => {
  return (
    <div>
      {/* Sección de Encabezado con Imagen de Fondo */}
      <div
        style={{
          backgroundImage: `url(${imgbgheader})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '6rem 2rem',
          position: 'relative',
          color: '#fff',
          textAlign: 'center',
          height: '40vh',
        }}
      >
        {/* Overlay dorado */}
        <div
          style={{
            backgroundColor: 'rgba(216, 161, 49, 0.8)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'rgba(216, 161, 49, 0.8)',
            position: 'absolute',
            top: '50%',
            left: '10%',
            width: '80%',
            height: '8px',
            zIndex: 2,
            transform: 'translateY(-50%)',
          }}
        ></div>

        {/* Contenido del breadcrumb */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <div className={css({
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '1.5rem 2rem',
            borderRadius: '12px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            maxWidth: '600px',
            margin: 'auto',
          })}>
            <p className={css({ color: '#333', fontWeight: '600', marginBottom: '0.5rem' })}>
              Home <span className={css({ color: '#D8A131' })}>›</span> Produtos
            </p>
            <h2 className={css({ fontSize: '1.25rem', fontWeight: '500', color: '#333' })}>
              Seja bem vindo a nossa página de produtos.
            </h2>
          </div>
        </div>
      </div>

      {/* Sección de Productos */}
      <div
        style={{
          backgroundColor: '#D8A131',
          padding: '4rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 className={css({ fontSize: '2rem', fontWeight: '600', marginBottom: '2rem', color: '#452F71' })}>
          Produtos
        </h2>
        
        {/* Galería de Productos */}
        <div className={css({
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr 1fr'],
          gap: '2rem',
          maxWidth: '800px',
          width: '100%',
        })}>
          {/* Producto 1 */}
          <div className={css({
            backgroundColor: '#FFFFFF',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
          })}>
            <img src={productImage1} alt="Grafiato" style={{ width: '80px', height: '80px', borderRadius: '8px' }} />
            <div>
              <h3 className={css({ fontSize: '1.25rem', fontWeight: '600', color: '#5B3A8F' })}>Grafiato</h3>
              <p className={css({ fontSize: '0.875rem', color: '#666' })}>
                Revestimento decorativo que devido a sua composição, possibilita um efeito rústico de ranhura para as paredes, asseguram maior durabilidade a este tipo de revestimento.
              </p>
            </div>
          </div>

          {/* Producto 2 */}
          <div className={css({
            backgroundColor: '#FFFFFF',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
          })}>
            <img src={productImage2} alt="Textura Rolada" style={{ width: '80px', height: '80px', borderRadius: '8px' }} />
            <div>
              <h3 className={css({ fontSize: '1.25rem', fontWeight: '600', color: '#5B3A8F' })}>Textura Rolada</h3>
              <p className={css({ fontSize: '0.875rem', color: '#666' })}>
                Revestimento decorativo que possibilita diversas opções de efeito na aplicação com rolos e técnicas.
              </p>
            </div>
          </div>

          {/* Producto 3 */}
          <div className={css({
            backgroundColor: '#FFFFFF',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
          })}>
            <img src={productImage3} alt="Textura Projetada" style={{ width: '80px', height: '80px', borderRadius: '8px' }} />
            <div>
              <h3 className={css({ fontSize: '1.25rem', fontWeight: '600', color: '#5B3A8F' })}>Textura Projetada</h3>
              <p className={css({ fontSize: '0.875rem', color: '#666' })}>
                Revestimento lavável, não exige pintura e tem mais de 15 mil cores, previne infiltrações, mofos e fungos.
              </p>
            </div>
          </div>

          {/* Producto 4 */}
          <div className={css({
            backgroundColor: '#FFFFFF',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
          })}>
            <img src={productImage4} alt="Massa Corrida PVA e Acrílica" style={{ width: '80px', height: '80px', borderRadius: '8px' }} />
            <div>
              <h3 className={css({ fontSize: '1.25rem', fontWeight: '600', color: '#5B3A8F' })}>Massa Corrida PVA e Acrílica</h3>
              <p className={css({ fontSize: '0.875rem', color: '#666' })}>
                Produto para corrigir e nivelar pequenas imperfeições sobre alvenaria em paredes internas.
              </p>
            </div>
          </div>

          {/* Producto 5 */}
          <div className={css({
            backgroundColor: '#FFFFFF',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
          })}>
            <img src={productImage5} alt="Tintas acrílica" style={{ width: '80px', height: '80px', borderRadius: '8px' }} />
            <div>
              <h3 className={css({ fontSize: '1.25rem', fontWeight: '600', color: '#5B3A8F' })}>Tintas acrílica</h3>
              <p className={css({ fontSize: '0.875rem', color: '#666' })}>
                É uma tinta acrílica, solúvel em água e de secagem rápida.
              </p>
            </div>
          </div>

          {/* Producto 6 */}
          <div className={css({
            backgroundColor: '#FFFFFF',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
          })}>
            <img src={productImage6} alt="Esmalte sintético" style={{ width: '80px', height: '80px', borderRadius: '8px' }} />
            <div>
              <h3 className={css({ fontSize: '1.25rem', fontWeight: '600', color: '#5B3A8F' })}>Esmalte sintético</h3>
              <p className={css({ fontSize: '0.875rem', color: '#666' })}>
                Para aplicação sobre madeira, metais e alvenaria, com excelente durabilidade.
              </p>
            </div>
          </div>

          {/* Producto 7 */}
          <div className={css({
            backgroundColor: '#FFFFFF',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
          })}>
            <img src={productImage7} alt="Vernizes e Solventes" style={{ width: '80px', height: '80px', borderRadius: '8px' }} />
            <div>
              <h3 className={css({ fontSize: '1.25rem', fontWeight: '600', color: '#5B3A8F' })}>Vernizes e Solventes</h3>
              <p className={css({ fontSize: '0.875rem', color: '#666' })}>
                Para superfícies de madeira em áreas internas e externas.
              </p>
            </div>
          </div>

          {/* Producto 8 */}
          <div className={css({
            backgroundColor: '#FFFFFF',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
          })}>
            <img src={productImage8} alt="Nossas embalagens" style={{ width: '80px', height: '80px', borderRadius: '8px' }} />
            <div>
              <h3 className={css({ fontSize: '1.25rem', fontWeight: '600', color: '#5B3A8F' })}>Nossas embalagens</h3>
              <p className={css({ fontSize: '0.875rem', color: '#666' })}>
                Foram feitas para atender sua necessidade.
              </p>
            </div>
          </div>
        </div>

        {/* Sección Final con Botón de WhatsApp */}
        <div className={css({
          marginTop: '3rem',
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: '#452F71',
          borderRadius: '8px',
          color: '#FFFFFF',
          width: '100%',
          maxWidth: '800px',
        })}>
          <p className={css({ fontSize: '1rem', fontWeight: '500', marginBottom: '1rem' })}>
            Trabalhamos com venda de pigmentação e outros insumos para fábricas.
          </p>
          <p className={css({ fontSize: '0.875rem', opacity: 0.9, marginBottom: '1.5rem' })}>
            Para consultar, nos chame via WhatsApp.
          </p>
          <a
            href="https://wa.me/5541992633341?text=Ol%C3%A1%2C+vim+por+meio+do+site+e+gostaria+de+saber+mais+sobre+as+tintas+da+Vivax." // Reemplaza con el número de WhatsApp correspondiente
            target="_blank"
            rel="noopener noreferrer"
            className={css({
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#25D366',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              color: '#FFFFFF',
              fontWeight: '600',
              textDecoration: 'none',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
            })}
          >
            <i className="fab fa-whatsapp" style={{ marginRight: '8px' }}></i>
            Fale com a gente
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
