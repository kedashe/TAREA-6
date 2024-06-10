import React from "react";
import "../styles/Form.css"; // Importa tu archivo CSS personalizado para el formulario

export const Form = () => {
  return (
    <div className="form-container"> {/* Envuelve todo el formulario en un contenedor */}
      <form className="form-content"> {/* Aplica clases de estilo para el formulario */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            <h5>Correo Electronico</h5>
          </label>
          <input type="email" className="form-control" id="name" name="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <h5>pasword</h5>
          </label>
          <input type="password" className="form-control" id="password" name="email" />
        </div>

        <div className="tick">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">Recordarme</label>
        </div>
        
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};
