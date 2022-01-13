import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import '../Styles/navbarcss.css';

function NavBar() {
  return (
    <div className="navbarcss">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="px-3 mx-3">
          Denuka Jayaweera
        </Link>
        <div class="navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" className="nav-link marginLeft">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/" className="nav-link">
                Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/" className="nav-link">
                Experiences
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/" className="nav-link">
                Resume
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
