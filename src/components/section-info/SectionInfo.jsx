import React from 'react';
import { css } from '../../../styled-system/css';
import { useInView } from 'react-intersection-observer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import backgroundImage from '../../assets/capa-2.jpg';
import ImgQuemsomos from '../../assets/Fabrica.jpg';

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={css({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
      })}
    >
      {children}
    </div>
  );
};

const ContactSection = () => {
  return (
    <div>
      {/* Sección de Encabezado con Imagen de Fondo */}
      <FadeInSection>
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '6rem 2rem',
            color: '#fff',
            position: 'relative',
            textAlign: 'center',
          }}
        >
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
          <div className={css({ position: 'relative', zIndex: 10, maxWidth: '600px', margin: 'auto' })}>
            <h2 className={css({ fontSize: '2.5rem', fontWeight: '600', marginBottom: '1rem' })}>
              Sua vida colorida por mais tempo!
            </h2>
            <p className={css({ fontSize: '1.125rem', marginBottom: '2rem' })}>
              Atuando desde pequenas reformas até grandes obras, somos especialistas do estrutural ao acabamento.
            </p>
            <a
              href="https://wa.me/5541992633341?text=Ol%C3%A1%2C+vim+por+meio+do+site+e+gostaria+de+saber+mais+sobre+as+tintas+da+Vivax."
              target="_blank"
              rel="noopener noreferrer"
              className={css({
                backgroundColor: '#FFD700',
                color: '#452F71',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                fontWeight: '500',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                '&:hover': { backgroundColor: '#e0c12e' },
              })}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '1.25rem' }}></i> Peça já um orçamento
            </a>
          </div>
        </div>
      </FadeInSection>

      {/* Sección de Información */}
      <FadeInSection>
        <div className={css({ padding: '4rem 2rem', backgroundColor: '#fff', textAlign: 'center' })}>
          <div className={css({ maxWidth: '800px', margin: 'auto', display: 'grid', gap: '1.5rem' })}>
            <div className={css({ color: '#452F71' })}>
              <h3 className={css({ fontSize: '1.75rem', fontWeight: '600' })}>
                Como funciona nossa operação de trabalho?
              </h3>
              <p className={css({ fontSize: '1rem', color: '#333', opacity: 0.85, lineHeight: '1.75' })}>
                Para manter todos os pedidos que atendem desde residências a grandes obras dentro do prazo, temos um
                rigoroso e criterioso processo organizacional.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Sección de "Quiénes Somos" */}
      <FadeInSection>
        <div className={css({ backgroundColor: '#5B3A8F', padding: '4rem 2rem', color: '#fff' })}>
          <div className={css({ display: 'flex', flexDirection: ['column', 'row'], gap: '2rem', maxWidth: '900px', margin: 'auto' })}>
            <div className={css({ flex: '1' })}>
              <img
                src={ImgQuemsomos}
                alt="Quem Somos"
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
              />
            </div>
            <div className={css({ flex: '1', textAlign: ['center', 'left'] })}>
              <h3 className={css({ fontSize: '1.75rem', fontWeight: '600', color: '#FFD700', marginBottom: '1rem' })}>
                QUEM SOMOS
              </h3>
              <p className={css({ fontSize: '1rem', lineHeight: '1.75', marginBottom: '1rem', opacity: 0.85 })}>
                Estamos no mercado de tintas desde 1990. A empresa iniciou produzindo a linha de tinta serigráfica,
                estamporia e couro, logo passamos para a linha imobiliária e complementos.
              </p>
              <p className={css({ fontSize: '1rem', lineHeight: '1.75', opacity: 0.85 })}>
                Em 2009 lançou a nova linha de revestimentos imobiliários VIVAX.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Sección Final con Botón */}
      <FadeInSection>
        <div className={css({ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#FFFFFF' })}>
          <h3 className={css({ fontSize: '1.75rem', fontWeight: '600', color: '#452F71', marginBottom: '1rem' })}>
            Nossos parceiros
          </h3>
          <p className={css({ fontSize: '1rem', color: '#333', opacity: 0.85, marginBottom: '2rem' })}>
            Graças a estas parcerias estratégicas, garantimos os melhores produtos, materiais e resultados para sua
            necessidade.
          </p>
          <a
            href="https://wa.me/5541992633341?text=Ol%C3%A1%2C+vim+por+meio+do+site+e+gostaria+de+saber+mais+sobre+as+tintas+da+Vivax."
            target="_blank"
            rel="noopener noreferrer"
            className={css({
              backgroundColor: '#5B3A8F',
              color: '#FFFFFF',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              fontWeight: '500',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              '&:hover': { backgroundColor: '#4a2c70' },
            })}
          >
            <i className="fab fa-whatsapp" style={{ fontSize: '1.25rem' }}></i> Também quero ser um parceiro
          </a>
        </div>
      </FadeInSection>
    </div>
  );
};

export default ContactSection;
