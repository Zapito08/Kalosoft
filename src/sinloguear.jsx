import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import "./components/style/Sinloguear.css";

function SinLoguear({ onIniciarSesion, onRegistrar }) {
  const sliderRef = useRef(null);
  const currentSlide = useRef(0);

  const productos = [
    {
      categoria: "Arepas 🫓",
      items: [
        {
          nombre: "Arepa de maíz para llenar",
          descripcion: "Rellena tu arepa a tus gustos. 5 unidades",
          precio: 15000,
          imagen: "/img/images.jpg",
        },
        {
          nombre: "Arepa de chocolo",
          descripcion: "Paquete de arepa de chocolo colombiana. 5 unidades",
          precio: 8000,
          imagen: "/img/arepa choco.jpg",
        },
        {
          nombre: "Arepa de queso",
          descripcion: "Paquete de arepa de queso colombiana. 4 unidades",
          precio: 7000,
          imagen: "/img/Arepas-colombianas-de-queso.webp",
        },
      ],
    },
    {
      categoria: "Embutidos 🥩",
      items: [
        {
          nombre: "Salchicha ranchera",
          descripcion: "Salchicha ranchera premium colombiano. 14 unidades.",
          precio: 22000,
          imagen: "/img/Imagen1.png",
        },
        {
          nombre: "Salchicha zenu",
          descripcion: "Salchicha zenu colombiano. 25 unidades",
          precio: 15000,
          imagen: "/img/zenu.png",
        },
        {
          nombre: "Salchichón cervecero",
          descripcion: "Salchichón cervecero colombiano.",
          precio: 20000,
          imagen: "/img/salchichon creve.png",
        },
      ],
    },
    {
      categoria: "Mecato 🍬",
      items: [
        {
          nombre: "De Todito BBQ",
          descripcion: "Paquete de toditos colombiano. 12 unidades",
          precio: 19000,
          imagen: "/img/de todito.jpg",
        },
        {
          nombre: "Chocorramo",
          descripcion: "Paquete de chocorramo colombiano. 5 unidades",
          precio: 15000,
          imagen: "/img/chocorramo.jpg",
        },
        {
          nombre: "Arequipe alpina 220g",
          descripcion: "Arequipe colombiano.",
          precio: 10000,
          imagen: "/img/arequipe.jpg",
        },
      ],
    },
  ];

  const formatearCOP = (valor) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(valor);

  const avanzar = () => {
    const slides = sliderRef.current.children;
    currentSlide.current =
      currentSlide.current < slides.length - 1 ? currentSlide.current + 1 : 0;
    sliderRef.current.style.transform = `translateX(-${currentSlide.current * 100}%)`;
  };

  const retroceder = () => {
    const slides = sliderRef.current.children;
    currentSlide.current =
      currentSlide.current > 0 ? currentSlide.current - 1 : slides.length - 1;
    sliderRef.current.style.transform = `translateX(-${currentSlide.current * 100}%)`;
  };

  return (
    <>
      <Navbar onIniciarSesion={onIniciarSesion} onRegistrar={onRegistrar} />

      {/* Carrusel */}
      <div className="slider-container">
        <div className="slider" ref={sliderRef}>
          <div className="slide"><img src="/img/01.jpg" alt="Imagen 1" /></div>
          <div className="slide"><img src="/img/02.jpg" alt="Imagen 2" /></div>
          <div className="slide"><img src="/img/03.jpg" alt="Imagen 3" /></div>
        </div>
        <button className="prev" onClick={retroceder}>‹</button>
        <button className="next" onClick={avanzar}>›</button>
      </div>

      {/* Productos */}
      {productos.map((categoria, index) => (
        <main key={index} className={`ventas${index || ""}`}>
          <h1>{categoria.categoria}</h1>
          <section className="galeria-productos">
            {categoria.items.map((item, i) => (
              <div key={i} className="tarjeta-producto">
                <img src={item.imagen} alt={item.nombre} />
                <div className="info-producto">
                  <h3>{item.nombre}</h3>
                  <p>{item.descripcion}</p>
                  <p className="precio">{formatearCOP(item.precio)}</p>
                  <button
                    className="agregar-carrito"
                    onClick={() =>
                      alert("Debes iniciar sesión para agregar al carrito")
                    }
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </section>
        </main>
      ))}

      {/* Infografía */}
      <main>
        <section className="infografia">
          <h2>¿Sabías que...?</h2>
          <div className="infografia-contenido">
            <div className="dato">
              <h3>25 años de tradición</h3>
              <p>Somos un negocio familiar con más de 25 años ofreciendo las mejores arepas.</p>
            </div>
            <div className="dato">
              <h3>Ingredientes frescos</h3>
              <p>Solo usamos ingredientes frescos y de calidad.</p>
            </div>
            <div className="dato">
              <h3>Más de 100.000 clientes</h3>
              <p>¡Gracias a ti hemos servido a más de 100.000 personas!</p>
            </div>
            <div className="dato">
              <h3>Recetas únicas</h3>
              <p>Desarrollamos recetas tradicionales e innovadoras.</p>
            </div>
          </div>
          <a href="#contacto" className="boton-cta">¡Contáctanos!</a>
        </section>
      </main>

      {/* Contacto */}
      <section className="contacto" id="contacto">
        <h2>¡Contáctanos!</h2>
        <p>¿Tienes alguna pregunta o deseas hacer un pedido? ¡Estamos aquí para ayudarte!</p>
        <div className="contacto-info">
          <div><h3>Dirección:</h3><p>40801, Heredia, Costa Rica</p></div>
          <div><h3>Teléfono:</h3><p><a href="tel:+50672994008">+506 7299 4008</a></p></div>
          <div><h3>Horario:</h3><p>Lunes a Sábado de 8:00 a.m. a 6:00 p.m.</p></div>
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

      {/* Footer */}
      <footer>
        <p>© 2025 Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default SinLoguear;
