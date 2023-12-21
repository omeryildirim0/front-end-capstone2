import React from 'react';
import './hero.css'; // Import your CSS file for styling


function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="restaurant-name">Little Lemon</h1>
        <p className="restaurant-description">
          A Taste of Freshness &amp; Quality
        </p>
        <button className="reservation-button">Make a Reservation</button>
      </div>
      <div className="food-image">
        <img src="./assets/hero.png" alt="Delicious Food" />
      </div>
    </div>
  );
}

export default HeroSection;
