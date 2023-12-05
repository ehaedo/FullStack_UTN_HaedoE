import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './libros.css';

function Libros() {
  const [libros, setLibros] = useState([]);
  const [descripcionVisible, setDescripcionVisible] = useState(null);
  const [popoverVisible, setPopoverVisible] = useState(false);

  useEffect(() => {
    async function fetchAllLibros() {
      try {
        const response = await axios.get('https://harry-potter-api.onrender.com/libros');
        setLibros(response.data);
      } catch (error) {
        console.error('Error fetching libros:', error);
        setLibros([]);
      }
    }
    fetchAllLibros();
  }, []);

  const mostrarDescripcion = (descripcion) => {
    setDescripcionVisible(descripcion);
    setPopoverVisible(true);
  };

  const cerrarDescripcion = () => {
    setDescripcionVisible(null);
    setPopoverVisible(false);
  };

  return (
    <div className="characters-container">
      <h3>Lista de Libros</h3>
      <ul className="characters-list">
        {libros.map((libro, index) => (
          <li key={index} className="character-item">
            <div className="character-details">
              <div className="character-text">
                <span><strong>N° de Libro:</strong>&nbsp; {libro.id}</span>
                <span><strong>Título:</strong>&nbsp; {libro.titulo_original}</span>
                <span><strong>Nombre:</strong> &nbsp;{libro.libro}</span>
                <span><strong>Fecha de Lanzamiento:</strong> &nbsp;{libro.fecha_de_lanzamiento}</span>
                <span><strong>Autora:</strong>&nbsp; {libro.autora}</span>
              </div>
            </div>
            <button id="VerDesc" onClick={() => mostrarDescripcion(libro.descripcion)}>Ver</button>
          </li>
        ))}
      </ul>
      {popoverVisible && (
        <div className="popover">
          <span onClick={cerrarDescripcion} className="cerrar-btn">&times;</span>
          <p>{descripcionVisible}</p>
        </div>
      )}
    </div>
  );
}

export default Libros;
