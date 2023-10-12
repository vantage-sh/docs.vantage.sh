// IntroCard.js
import React from 'react';
import '../css/card.css'; 

const IntroCard = ({ title, content, image, link, alt }) => (
  <div className="card">
    <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
      <div className="card-image">
        <img src={image} alt={alt} />
      </div>
        <div className="card-title">
          <h2>{title}</h2>
        </div>
        <div className="card-content">
          <p>{content}</p>
        </div>
      </a>
    </div>
);

export default IntroCard;
