import React from "react";
import "./Contacto.css"; // Asegúrate de crear este archivo o quitar esta línea si no tienes estilos

function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <h2>¡Contáctanos!</h2>
      <p>¿Tienes alguna pregunta o deseas hacer un pedido? ¡Estamos aquí para ayudarte!</p>
      <div className="contacto-info">
        <div>
          <h3>Dirección:</h3>
          <p>40801, Heredia, Costa Rica</p>
        </div>
        <div>
          <h3>Teléfono:</h3>
          <p><a href="tel:+50672994008">+506 7299 4008</a></p>
        </div>
        <div>
          <h3>Horario:</h3>
          <p>Lunes a Sábado de 8:00 a.m. a 6:00 p.m.</p>
        </div>
      </div>
      <a
        href="https://www.google.com/maps/place/Productos+Colombianos+arepas+la+karola"
        target="_blank"
        rel="noreferrer"
        className="boton-cta"
      >
        Ver en el mapa
      </a>
    </section>
  );
}

export default Contacto;
