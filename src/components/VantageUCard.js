// IntroCard.js
import React from "react";
import "../css/card.css";

const VantageUCard = ({ content, image, link, alt, newTab }) => (
  <div className="card">
    <a href={link} className="card-link" target={newTab ? "_blank" : "_self"} rel="noopener noreferrer">
      <div className="card-image">
        <img src={image} alt={alt} />
      </div>
      <div className="card-content">
        <p>{content}</p>
      </div>
    </a>
  </div>
);

export default VantageUCard;
