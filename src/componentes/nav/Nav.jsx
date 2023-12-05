import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [icon, setIcon] = useState('\u2630');
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setIcon(menuOpen ? '\u2630' : '\u00D7');
  };

  return (
    <nav className="top-nav">
      <input
        id="menu-toggle"
        type="checkbox"
        checked={menuOpen}
        onChange={handleMenuToggle}
        className="menu-toggle"
      />
      <label htmlFor="menu-toggle" className="menu-button">{icon}</label>

      <div className='container-menu'>
        <ul className={`menu ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/hechizos">Hechizos</Link></li>
          <li><Link to="/libros">Libros</Link></li>
          <li><Link to="/personajes">Personajes</Link></li>
          <li><Link to="/casas">Casas</Link></li>
        </ul>
      </div>

    </nav>
  );
};

export default Nav;
