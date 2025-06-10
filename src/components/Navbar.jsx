import React from "react";
import "./style/Navbar.css"; // Asegúrate de que la ruta sea correcta

function Navbar({ onIniciarSesion, onRegistrar }) {
  return (
    <header>
      <div className="menu">
        {/* Logo */}
        <div className="logo">
          <img src="/img/DKLM.jpg" alt="Logo Arepas la Karola" />
        </div>

        {/* Barra de búsqueda */}
        <form
          className="buscar"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Funcionalidad de búsqueda no implementada");
          }}
        >
          <input type="text" placeholder="Buscar el producto" />
          <button type="submit">Buscar</button>
        </form>

        {/* Botones de sesión */}
        <nav className="botones">
          <button onClick={onIniciarSesion} className="btn-iniciar">
            Iniciar sesión
          </button>
          <button onClick={onRegistrar} className="btn-registrar">
            Registrarte
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
