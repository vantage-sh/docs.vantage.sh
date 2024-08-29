// IntroCard.js
import React from "react";
import "../css/intro-card.css";

const IntroCard = ({ title, content, image, link, alt, newTab }) => (
  <div className="intro-card">
    <a href={link} className="intro-card-link" target={newTab ? "_blank" : "_self"} rel="noopener noreferrer">
      <div className="intro-card-image">
        <img src={image} alt={alt} />
      </div>
      <div className="intro-card-title">
        <h2>{title}</h2>
      </div>
      <div className="intro-card-content">
        <p>{content}</p>
      </div>
    </a>
  </div>
);

export default IntroCard;
