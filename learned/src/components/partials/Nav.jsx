import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul id="navbar">
        <li><Link to='/decks' className="link">Decks</Link></li>
        <li><Link to='/decks' className="link">Add</Link></li>
        <li><Link to='/decks' className="link">Search</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
