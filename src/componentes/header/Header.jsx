import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header>
      <a href="https://en.wikipedia.org/wiki/Harry_Potter" target="_blank">
        <img className="logo"
          src="https://vignette.wikia.nocookie.net/fictionalcrossover/images/6/6a/A_Harry_Potter_logo.png/revision/latest/scale-to-width-down/340?cb=20150814024523"
          alt="Harry Potter" />
      </a>
    </header>
  );
}

export default Header;