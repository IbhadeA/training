import React from 'react';
import { Link } from 'react-router-dom';

const MpNavbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jokes">Random Jokes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MpNavbar;
