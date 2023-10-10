// In Card.js
import React from 'react';
import '../css/card.css'; // Import the CSS file

const Card = ({ title, content, image, link, alt }) => (
  <div className="card">
    <a href={link} className="card-link">
      <div className="card-image">
        <img src={image} alt={alt} />
      </div>
        <div className="card-title">
          <h2>{title}</h2>
        </div>
        <div className="card-body">
          <p>{content}</p>
        </div>
      </a>
    </div>
);

export default Card;
