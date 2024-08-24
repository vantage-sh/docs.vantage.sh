// VantageUCard.js
import React from "react";
import "../css/vantage-u-card.css";

const VantageUCard = ({ content, image, link, alt, newTab }) => (
  <div className="vantage-card">
    <a href={link} className="vantage-card-link" target={newTab ? "_blank" : "_self"} rel="noopener noreferrer">
      <div className="vantage-card-image">
        <img src={image} alt={alt} />
      </div>
      <div className="vantage-card-content">
        <p>{content}</p>
      </div>
    </a>
  </div>
);

export default VantageUCard;
