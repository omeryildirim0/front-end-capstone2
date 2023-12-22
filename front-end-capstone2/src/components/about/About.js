import React from 'react';
import './about.css'; // Your CSS file for styling
import interior from './interior.jpg'
import team from './team.jpg'

const About = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="restaurant-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, 
           laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, 
           auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula 
           sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae 
           tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue 
           id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.</p>
      </div>
      <div className="about-images">
        <img src={interior} alt="Interior" />
        <img src={team} alt="Team" />
      </div>
    </div>
  );
};

export default About;
