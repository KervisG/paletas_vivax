import React, { useState, useRef } from 'react';
import cor from '../cores/Cor';  
import mockupImage1 from '../../assets/sala.jpg';  
import mockupImage2 from '../../assets/cuarto.jpg';
import mockupImage3 from '../../assets/salaa2.jpg';
import mockupImage4 from '../../assets/afuera_de_casa.jpg';

function PaletaCores() {

  const [selectedColor, setSelectedColor] = useState({ color: '', nombre: '', id: null, vivax: '' });
  const imageRef = useRef(null);

  const handleColorChange = (color, nombre, id, vivax) => {
    setSelectedColor({ color, nombre, id, vivax });

    setTimeout(() => {
      imageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100); 
  };

  return (
    <div style={{ padding: "15px", maxWidth: "1500px", margin: "0 auto" }}>
      <h1
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "40px",
          fontFamily: '"Poppins", sans-serif',
          fontSize: "26px",
          fontWeight: "700",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        Selecione uma Cor
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(30px, 1fr))",
          gap: "31px",
        }}
      >
        {cor.map((pintura) => (
          <div
            key={pintura.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() =>
              handleColorChange(
                pintura.color,
                pintura.nombre,
                pintura.id,
                pintura.vivax
              )
            }
          >
            <div
              style={{
                backgroundColor: pintura.color,
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                marginBottom: "0px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            ></div>
            <span
              style={{
                color: pintura.color,
                textAlign: "center",
                fontFamily: '"Montserrat", sans-serif',
                fontSize: "16px",
                fontWeight: "bold",
                letterSpacing: "0.5px",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
              }}
            ></span>
          </div>
        ))}
      </div>

      {selectedColor.id && (
        <div
          ref={imageRef}
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", 
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
            // Media query para pantallas pequeñas
            ...(window.innerWidth < 768 && {
              gridTemplateColumns: "repeat(1, 1fr)", // Una columna por fila en móviles
            }),
          }}
        >
          {[mockupImage1, mockupImage2, mockupImage3, mockupImage4].map(
            (image, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  maxWidth: "300px", // Tamaño más pequeño para móviles
                  height: "210px",
                  backgroundImage: `url(${image})`,
                  backgroundColor: selectedColor.color,
                  backgroundBlendMode: "multiply",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  borderRadius: "16px",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    padding: "10px 20px",
                    color: "#fff",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    position: "absolute",
                    bottom: "0",
                    width: "100%",
                    textAlign: "center",
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "18px",
                    ...(window.innerWidth < 768 && {
                      fontSize: "14px", // Ajustes en móviles
                      padding: "5px 10px",
                    }),
                  }}
                >
                  {selectedColor.nombre}
                  <div>Código VIVAX: {selectedColor.vivax} </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default PaletaCores;
