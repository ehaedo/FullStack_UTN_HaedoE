import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './personajes.css';
import errorIcon from '../../../public/imgError.jpg';

function HarryPotterCharacters() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 4;

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await axios.get('https://hp-api.onrender.com/api/characters');
        setCharacters(response.data);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    }
    fetchCharacters();
  }, []);

  const handleImageError = (event) => {
    event.target.src = errorIcon;
  };

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="characters-container">
      <h3>Lista de Personajes</h3>
      <ul className="characters-list">
        {currentCharacters.map((character, index) => (
          <li key={index} className="character-item">
            <div className="character-details">
              <div className="character-image">
                <img
                  src={character.image}
                  alt={character.name}
                  onError={handleImageError}
                />
              </div>
              <div className="character-text">
                <span><strong>Nombre: </strong> &nbsp;{character.name}&nbsp;</span>
                <span><strong>Patronus: </strong> &nbsp; {character.patronus}<br /></span>
                <span><strong>Nacimiento: </strong> &nbsp; {character.dateOfBirth}<br /></span>
                <span><strong>Casa: </strong> &nbsp;{character.house}</span>
                <span><strong>Actor: </strong> &nbsp;{character.actor}</span>
              </div>
            </div>

          </li>
        ))}
      </ul>

      <div className="pagination">
        <button id="VerDesc" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <button id="VerDesc" onClick={() => paginate(currentPage + 1)} disabled={indexOfLastCharacter >= characters.length}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default HarryPotterCharacters;
