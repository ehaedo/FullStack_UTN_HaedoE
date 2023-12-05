import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './casas.css';
import errorIcon from '../../assets/imgError.jpg';
function HarryPotterCharacters() {
  const [characters, setCharacters] = useState([]);
  const [house, setHouse] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 4;

  useEffect(() => {
    async function fetchCharacters() {
      try {
        if (house) {
          const response = await axios.get(`https://hp-api.onrender.com/api/characters/house/${house}`);
          setCharacters(response.data);
        }
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    }
    fetchCharacters();
  }, [house]);

  const handleSelectChange = (event) => {
    setHouse(event.target.value);
    setCurrentPage(1);
  };

  const handleImageError = (event) => {
    event.target.src = errorIcon;
  };


  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  return (
    <div className="characters-container">
      <h3>Selecciona una casa de Hogwarts</h3>
      <div className="input-container">
        <select
          id="houseSelect"
          value={house}
          onChange={handleSelectChange}
        >
          <option value="">Casas</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff</option>
        </select>
      </div>
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
                <span><strong>Nombre:</strong> &nbsp;&nbsp;{character.name}</span>
                <span><strong>Casa:</strong>&nbsp;&nbsp; {character.house}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button id="VerDesc"
          onClick={() => setCurrentPage(prevPage => prevPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button id="VerDesc"
          onClick={() => setCurrentPage(prevPage => prevPage + 1)}
          disabled={indexOfLastCharacter >= characters.length}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default HarryPotterCharacters;
