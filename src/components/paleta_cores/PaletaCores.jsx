import React, { useState, useRef } from 'react';
import cor from '../cores/Cor';  
import mockupImage1 from '../../assets/sala.png';  
import mockupImage2 from '../../assets/cuarto.png';
import mockupImage3 from '../../assets/salaa2.png';
import mockupImage4 from '../../assets/afuera_de_casa.png';

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
    <div style={{ padding: "30px", maxWidth: "1800px", margin: "0 auto" }}>
      <h1
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "8px",
          fontFamily: '"Poppins", sans-serif',
          fontSize: "28px",
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
          gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))",
          gap: "40px",  // Más espacio entre círculos
          justifyContent: "center",
          padding: "20px",
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
              transition: "transform 0.2s ease-in-out",
            }}
            onClick={() =>
              handleColorChange(
                pintura.color,
                pintura.nombre,
                pintura.id,
                pintura.vivax
              )
            }
            onMouseDown={() => {
              document.getElementById(`circle-${pintura.id}`).style.transform = "scale(1.1)";
            }}
            onMouseUp={() => {
              document.getElementById(`circle-${pintura.id}`).style.transform = "scale(1)";
            }}
          >
            <div
              id={`circle-${pintura.id}`}
              style={{
                backgroundColor: pintura.color,
                width: "55px",
                height: "55px",
                borderRadius: "100%",
                marginBottom: "0px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s cubic-bezier(.68,-0.55,.27,1.55)",  // Animación de rebote
              }}
            ></div>
          </div>
        ))}
      </div>

      {selectedColor.id && (
        <div
          ref={imageRef}
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", 
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "1400px",
            margin: "0 auto",
            ...(window.innerWidth < 768 && {
              gridTemplateColumns: "repeat(1, 1fr)",
            }),
          }}
        >
          {[mockupImage1, mockupImage2, mockupImage3, mockupImage4].map(
            (image, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  height: "250px",
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
                      fontSize: "14px",
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
