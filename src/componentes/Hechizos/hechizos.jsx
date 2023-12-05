import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './hechizos.css';

function Hechizos() {
  const [hechizos, sethechizos] = useState([]);
  const [descripcionVisible, setDescripcionVisible] = useState(null);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const hechizosPerPage = 12;

  useEffect(() => {
    async function fetchAllCharacters() {
      try {
        const response = await axios.get('https://hp-api.onrender.com/api/spells');
        sethechizos(response.data);
      } catch (error) {
        console.error('Error fetching hechizos:', hechizo);
        sethechizos([]);
      }
    }
    fetchAllCharacters();
  }, []);

  const mostrarDescripcion = (descripcion) => {
    setDescripcionVisible(descripcion);
    setPopoverVisible(true);
  };

  const indexOfLasthechizos = currentPage * hechizosPerPage;
  const indexOfFirsthechizos = indexOfLasthechizos - hechizosPerPage;
  const currenthechizos = hechizos.slice(indexOfFirsthechizos, indexOfLasthechizos);


  const cerrarDescripcion = () => {
    setDescripcionVisible(null);
    setPopoverVisible(false);
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-body">
      <h3>Lista de Hechizos</h3>
      <ul className="characters-list">
        {currenthechizos.map((hechizo, index) => (
          <li key={index} className="character-item">
            <div className="character-details">
              <div className="character-text">
                <span><strong>Nombre:&nbsp;&nbsp;</strong> {hechizo.name}</span>
              </div>
              <button id="VerDesc" onClick={() => mostrarDescripcion(hechizo.description)}>Ver</button>

            </div>
          </li>
        ))}
      </ul>
      {popoverVisible && (
        <div className="popover">
          <span onClick={cerrarDescripcion} className="cerrar-btn">&times;</span>
          <p>{descripcionVisible}</p>
        </div>
      )}
      <div className="pagination">
        <button id="VerDesc" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <button id="VerDesc" onClick={() => paginate(currentPage + 1)} disabled={indexOfLasthechizos >= hechizos.length}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Hechizos;
