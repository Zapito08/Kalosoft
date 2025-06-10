import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './components/style/index.css'; // Estilos globales
import App from './App.jsx'; // Componente principal

// Montar la app en el elemento con id 'root'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
