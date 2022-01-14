import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/navbarcss.css';

import { FiMenu } from 'react-icons/fi';

function NavBar() {
  return (
    <div>
      <nav>
        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
          <FiMenu />
        </label>
        <label class="logo">Denuka Jayaweera</label>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Experiences</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/">CV</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
