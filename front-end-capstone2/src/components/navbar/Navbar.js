import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import './navbar.css'; // Import your CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <p>Little Lemon</p>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <p>Homepage</p>
           
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Menu</p>
          </li>
          <li>
            <p>Reservations</p>
          </li>
          <li>
            <p>Order</p>
          </li>
          <li>
            <p>Login</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

