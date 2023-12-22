import React from 'react';
import './footer.css'; // Your CSS file for styling
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Using react-icons for social media icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Little Lemon</h3>
        <ul>
          <li>About</li>
          <li>Menu</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact</h3>
        <p>You may also want to visit us:</p>
        <address>
          Little Lemon<br />
          111 E Chicago<br />
          Illinois 11111<br />
          USA<br />
          <a href="mailto:lemon@littlelemon.com">jim@rock.com</a><br />
          <a href="">(111) 222-3344</a><br />
          <a href="mailto:littlelemon@bookings.com">littlelemon@bookings.com</a>
        </address>
      </div>
      <div className="footer-section">
        <h3>Social Media</h3>
        <div className="social-icons">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
