import React from 'react';
import { css } from '../../../styled-system/css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import imgViva from '../../assets/contato-vivax.png';
import { FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div>
      {/* Header Section with Image Background */}
      <div
        style={{
          backgroundImage: `url(${imgViva})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '6rem 0',
          position: 'relative',
          color: '#fff',
          height: '40vh',
        }}
      >
        {/* Overlay dorado translúcido */}
        <div
          className={css({
            backgroundColor: 'rgba(216, 161, 49, 0.3)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          })}
        ></div>

        {/* Breadcrumb Content */}
        <div
          className={css({
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            padding: { base: '1rem', md: '0' },
          })}
        >
          <div
            className={css({
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '1.5rem 2rem',
              borderRadius: '12px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              maxWidth: '600px',
              marginBottom: '2rem',
              width: '90%', // Ajuste de ancho para móviles
            })}
          >
            <p className={css({ color: '#333', fontWeight: '600', marginBottom: '0.5rem' })}>
              Home <span className={css({ color: '#D8A131' })}>›</span> Contato
            </p>
            <h2 className={css({ fontSize: '1.25rem', fontWeight: '500', color: '#333' })}>
              Seja bem vindo a nossa página de contato.
            </h2>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div
        className={css({
          display: 'flex',
          flexDirection: { base: 'column', md: 'row' }, // Columna en móviles
          justifyContent: 'center',
          gap: '2rem',
          padding: '4rem 1rem',
          backgroundColor: '#D8A131',
        })}
      >
        {/* Contact Information */}
        <div className={css({ color: '#452F71', maxWidth: '400px', textAlign: { base: 'center', md: 'left' } })}>
          <h2 className={css({ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' })}>
            Fale Conosco
          </h2>
          <p className={css({ marginBottom: '1.5rem' })}>
            Estamos ansiosos pelo seu contato. Fique à vontade para enviar uma mensagem ou preencher o formulário.
          </p>
          <div className={css({ lineHeight: '1.75' })}>
            <ContactItem 
              iconClass={FaMapMarkerAlt} 
              title="Localização" 
              text="R. Ver. Dirceu Pavoni, 21 - Vila Feliz, Alm. Tamandaré - PR, 83505-690" 
              link="https://goo.gl/maps/oTtZniXXtjxWH53e7"
            />
            <ContactItem 
              iconClass={FaEnvelope} 
              title="E-mail" 
              text="contato@tintasvivax.ind.br" 
              link="mailto:contato@tintasvivax.ind.br"
            />
            <ContactItem 
              iconClass={FaPhone} 
              title="Telefone" 
              text="+55 (41) 3657-9292" 
              link="tel:+554136579292"
            />
            <ContactItem 
              iconClass={FaWhatsapp} 
              title="WhatsApp" 
              text="+55 (41) 99263-3341" 
              link="  "
            />
            <ContactItem 
              iconClass={FaInstagram} 
              title="Instagram" 
              text="@tintasvivax" 
              link="https://www.instagram.com/tintasvivax/"
            />
            <ContactItem 
              iconClass={FaFacebook} 
              title="Facebook" 
              text="Tintas Vivax" 
              link="https://www.facebook.com/tintavivax/"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className={css({ 
          flex: '1', 
          backgroundColor: '#452F71', 
          padding: '2rem', 
          borderRadius: '12px', 
          maxWidth: '400px',
          width: '100%', // Ajuste de ancho completo en móviles
          margin: { base: '0 auto', md: '0' }, // Centrar en móviles
        })}>
          <form className={css({ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#FFFFFF' })}>
            <InputField label="Nome" placeholder="Seu nome" />
            <InputField label="Seu melhor e-mail" placeholder="E-mail" type="email" />
            <InputField label="Telefone" placeholder="(DDD) XXXXX-XXXX" type="tel" />
            
            <div>
              <label className={css({ fontSize: '0.875rem', fontWeight: '600', display: 'block', marginBottom: '0.5rem' })}>Tipo de obra</label>
              <div className={css({
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                color: '#FFFFFF',
              })}>
                <Checkbox label="Casa" />
                <Checkbox label="Apartamento" />
                <Checkbox label="Industrial" />
                <Checkbox label="Comércio" />
              </div>
            </div>
            
            <InputField label="Conte-nos um pouco do que busca" placeholder="Ex.: 'Preciso pintar o exterior da minha casa.'" />
            
            <button
              type="submit"
              className={css({
                backgroundColor: '#D8A131',
                width: '100%',
                padding: '0.75rem',
                borderRadius: '4px',
                color: '#452F71',
                fontWeight: '600',
                border: 'none',
                marginTop: '1rem',
              })}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Componente Checkbox personalizado
const Checkbox = ({ label }) => (
  <label className={css({ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' })}>
    <input
      type="checkbox"
      className={css({
        appearance: 'none',
        width: '18px',
        height: '18px',
        border: '2px solid #D8A131',
        borderRadius: '4px',
        backgroundColor: '#5B3A8F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s, border-color 0.3s',
        cursor: 'pointer',
        '&:checked': {
          backgroundColor: '#D8A131',
          borderColor: '#D8A131',
        },
        '&:checked::after': {
          content: '""',
          display: 'block',
          width: '8px',
          height: '8px',
          backgroundColor: '#452F71',
          borderRadius: '2px',
        },
      })}
    />
    <span>{label}</span>
  </label>
);

// Componente reutilizable para la información de contacto
const ContactItem = ({ iconClass: Icon, title, text, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className={css({ 
    display: 'flex', 
    alignItems: 'center', 
    gap: '1rem', 
    marginBottom: '1rem', 
    color: '#452F71',
    fontSize: { base: '14px', md: '16px' }, // Tamaño de texto para diferentes pantallas
    textAlign: { base: 'center', md: 'left' }, // Centrar en móviles
  })}>
    <div className={css({
      backgroundColor: '#452F71',
      borderRadius: '8px',
      padding: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      fontSize: { base: '1.5rem', md: '1.25rem' } // Ícono más grande en móviles
    })}>
      <Icon style={{ color: '#D8A131' }} />
    </div>
    <div>
      <span className={css({ fontWeight: '600' })}>{title}</span>
      <p>{text}</p>
    </div>
  </a>
);

// Componente de campo de entrada personalizado
const InputField = ({ label, placeholder, type = "text" }) => (
  <div>
    <label className={css({ fontSize: '0.875rem', fontWeight: '600' })}>{label}</label>
    <input
      type={type}
      className={css({
        width: '100%',
        padding: '0.5rem',
        borderRadius: '4px',
        backgroundColor: '#5B3A8F',
        color: '#FFFFFF',
        border: 'none',
        marginTop: '0.25rem',
      })}
      placeholder={placeholder}
    />
  </div>
);

export default ContactPage;
