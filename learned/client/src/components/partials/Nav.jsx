import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <nav>
      <ul id="navbar">
        <li><Link to='/decks' className="link"><span>Decks</span></Link></li>
        <li><Link to='/decks' className="link"><span>Add</span></Link></li>
        <li><Link to='/decks' className="link"><span>Search</span></Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
