import React from 'react';
import './menuSpecials.css'; // Your CSS file for styling
import greekSalad from './greekSalad.jpg'
import bruschetta from './bruschetta.jpg'
import lemonCake from './lemonCake.jpg'

const MenuSpecials = () => {
  return (
    <div className="menu-specials">
      <h2>Specials</h2>
      <div className="menu-items">
        <div className="menu-item">
          <img src={greekSalad} alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
         
        </div>
        <div className="menu-item">
          <img src={bruschetta} alt="Bruschetta" />
          <h3>Bruschetta</h3>
          <p>Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.</p>
        
        </div>
        <div className="menu-item">
          <img src={lemonCake} alt="Lemon Cake" />
          <h3>Lemon Cake</h3>
          <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
       
        </div>
      </div>
      <button className="menu-button">Online Menu</button>
    </div>
  );
};

export default MenuSpecials;
