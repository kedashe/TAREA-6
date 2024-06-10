// Carrucel.js
import React from "react";
import '../styles/Carrucel.css'; // Importamos el archivo CSS
import Img1 from "../imagenes/imagen1.jpg";
import Img2 from "../imagenes/imagen2.jpg";
import Img3 from "../imagenes/imagen3.jpg";
import Img4 from "../imagenes/imagen8.jpg"; // Corregido
import Img5 from "../imagenes/imagen7.jpg"; // Corregido
import Img6 from "../imagenes/imagen1.jpg"; // Corregido

export const Carrucel = () => {
  return (
    <div className="carysel-container">
      <div className="carysel-grid">
        <img src={Img1} className="carysel-item" alt="Imagen 1" />
        <img src={Img2} className="carysel-item" alt="Imagen 2" />
        <img src={Img3} className="carysel-item" alt="Imagen 3" />
        <img src={Img4} className="carysel-item" alt="Imagen 4" />
        <img src={Img5} className="carysel-item" alt="Imagen 5" />
        <img src={Img6} className="carysel-item" alt="Imagen 6" />
      </div>
    </div>
  );
};


