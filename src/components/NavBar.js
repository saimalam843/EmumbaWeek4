
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">Home</Link>
      <Link to="/functional">Functional Component</Link>
      <Link to="/class">Class Component</Link>
    </nav>
  );
}

export default NavBar;
