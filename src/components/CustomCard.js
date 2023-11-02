// CustomCard.js
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types"; 
import "../css/customcard.css";

const CustomCard = ({ title, icon, content, iconAltText, link }) => {
  return (
    <Card className="custom-card">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img className="custom-icon" src={icon} alt={iconAltText} />
            <h2 className="custom-title">{title}</h2>
          </div>
        <p>{content}</p>
        </div>
      </Card.Body>
      <div className="custom-card-button-container">
        <Button variant="primary" className="custom-button" href={link} role="button" aria-label="View Documentation">
          View Documentation
        </Button>
        </div>
    </Card>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired, 
  paragraph: PropTypes.string.isRequired,
  iconAltText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CustomCard;