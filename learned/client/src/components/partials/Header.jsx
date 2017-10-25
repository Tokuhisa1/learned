import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="header">
      <Link to='/' className="link">Learnéd</Link>
      <Nav />
    </header>
  );
};

export default Header;
