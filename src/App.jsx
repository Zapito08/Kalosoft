import React, { useState } from "react";
import SinLoguear from "./sinloguear";
import Login from "./Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";

function App() {
  const [logueado, setLogueado] = useState(false);
  const [mostrarLogin, setMostrarLogin] = useState(false);

  const irALogin = () => {
    setMostrarLogin(true);
  };

  const manejarLoginExitoso = () => {
    setLogueado(true);
    setMostrarLogin(false);
  };

  const cerrarSesion = () => {
    setLogueado(false);
    setMostrarLogin(false);
  };

  const manejarAnadirCarrito = () => {
    alert("Producto añadido al carrito");
  };

  return (
    <>
      {/* Mostrar Navbar solo si no estamos en la vista de login */}
      {!mostrarLogin && (
        <Navbar onIniciarSesion={irALogin} onRegistrar={irALogin} />
      )}

      {/* Mostrar SinLoguear cuando no está logueado ni en login */}
      {!logueado && !mostrarLogin && (
        <>
          <SinLoguear onIniciarSesion={irALogin} onRegistrar={irALogin} />
          <Contacto />
          <Footer />
        </>
      )}

      {/* Mostrar Login */}
      {!logueado && mostrarLogin && <Login onLogin={manejarLoginExitoso} />}

      {/* Mostrar panel logueado */}
      {logueado && (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h1>Bienvenido, estás logueado!</h1>
          <button onClick={cerrarSesion}>Cerrar sesión</button>
          <br /><br />
          <button onClick={manejarAnadirCarrito}>Añadir al carrito</button>
        </div>
      )}
    </>
  );
}

export default App;
