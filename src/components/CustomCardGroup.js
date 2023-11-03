// CustomCardGroup.js
import React from "react";
import CustomCard from "./CustomCard"; 
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CustomCardGroup({ cards, columns }) {
  const cardsPerRow = columns;
  const numRows = Math.ceil(cards.length / cardsPerRow);

  const cardRows = [];
  for (let i = 0; i < numRows; i++) {
    const startIndex = i * cardsPerRow;
    const endIndex = startIndex + cardsPerRow;
    const rowCards = cards.slice(startIndex, endIndex);

    const row = (
      <Row xs={4} md={4} className="g-4 custom-card-row">
        {rowCards.map((card, index) => (
          <Col key={index} className="custom-card-col">
            <CustomCard
              title={card.title}
              content={card.content}
              icon={card.icon}
              link={card.link} 
              iconAltText={card.iconAltText}
            />
          </Col>
        ))}
      </Row>
    );

    cardRows.push(row);
  }

  return <div className="custom-card-group">{cardRows}</div>;
}

export default CustomCardGroup;