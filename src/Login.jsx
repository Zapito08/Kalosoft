import React, { useState, useRef } from "react";
import "./components/style/Login.css";

function Login({ onLogin }) {
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");

  const arepaRef = useRef(null);
  const imagenRef = useRef(null);

  const manejarGiro = (accion) => {
    if (!imagenRef.current) return;

    imagenRef.current.style.transition = "transform 2s ease";
    imagenRef.current.style.transform =
      accion === "registro" ? "rotateY(360deg)" : "rotateY(-360deg)";

    setTimeout(() => {
      setMostrarRegistro(accion === "registro");
      if (imagenRef.current) {
        imagenRef.current.style.transition = "";
        imagenRef.current.style.transform = "";
      }
    }, 2000);
  };

  const manejarLogin = () => {
    if (!usuario.trim() || !clave.trim()) {
      alert("Por favor completa ambos campos.");
      return;
    }

    if (arepaRef.current) {
      arepaRef.current.style.animation = "cinematicEntry 2s forwards";
    }

    setTimeout(() => {
      onLogin();
    }, 2000);
  };

  const manejarRegistro = () => {
    if (!nombre.trim() || !correo.trim() || !usuario.trim() || !clave.trim() || !telefono.trim()) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    if (!correoValido) {
      alert("Por favor ingresa un correo electrónico válido.");
      return;
    }

    if (!/^\d{10}$/.test(telefono)) {
      alert("El número de celular debe tener exactamente 10 dígitos.");
      return;
    }

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    manejarGiro("login");
  };

  const manejarOlvido = () => {
    alert("Redirigiendo al proceso de recuperación de contraseña...");
  };

  return (
    <div className="arepa" ref={arepaRef}>
      <img
        id="imagenArepa"
        src="/img/arepalogin.png"
        alt="Arepa"
        ref={imagenRef}
      />
      <div className="contenido">
        {!mostrarRegistro ? (
          <>
            <input
              type="text"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
            />
            <button onClick={manejarLogin}>Entrar</button>
            <p onClick={() => manejarGiro("registro")}>
              ¿No tienes cuenta? Regístrate
            </p>
            <p className="olvidarContrasena" onClick={manejarOlvido}>
              ¿Olvidaste tu contraseña?
            </p>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Nombre completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Escribe tu celular"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value.replace(/\D/, ""))}
              maxLength={10}
            />
            <input
              type="text"
              placeholder="Crear tu Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <input
              type="password"
              placeholder="Crea tu Contraseña"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
            />
            <button onClick={manejarRegistro}>Crear cuenta</button>
            <p onClick={() => manejarGiro("login")}>
              ¿Ya tienes cuenta? Inicia sesión
            </p>
            <p className="olvidarContrasena" onClick={manejarOlvido}>
              ¿Olvidaste tu contraseña?
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
