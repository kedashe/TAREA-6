import React from "react";

export const Form = () => {
  return (
    <div>
      <form>
        <div>
          <label>
            <h5>Nombre</h5>
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            <h5>corrreo</h5>
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
          </label>
          recordarme
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};
