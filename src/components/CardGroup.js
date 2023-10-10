// CardGroup.js
import React from 'react';
import Card from './Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CardGroup({ cards, rows, columns }) {
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
                <Card title={card.title} content={card.content} image={card.image} link={card.link} alt={card.alt} />
            </Col>
            ))}
    </Row>
    );

    cardRows.push(row);
  }

  return <div className="card-group">{cardRows}</div>;
}

export default CardGroup;
