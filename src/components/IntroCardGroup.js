// IntroCardGroup.js
import React from 'react';
import IntroCard from './IntroCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function IntroCardGroup({ cards, columns }) {
  const cardsPerRow = columns;
  const numRows = Math.ceil(cards.length / cardsPerRow);

  const cardRows = [];
  for (let i = 0; i < numRows; i++) {
  for (let i = 0; i < numRows; i++) {
    const startIndex = i * cardsPerRow;
    const endIndex = startIndex + cardsPerRow;
    const rowCards = cards.slice(startIndex, endIndex);

    const row = (

    <Row xs={4} md={4} className="g-4 intro-card-row">
      {rowCards.map((card, index) => (
            <Col key={index} className="intro-card-col">
                <IntroCard title={card.title} content={card.content} image={card.image} link={card.link} alt={card.alt} newTab={card.newTab} />
            </Col>
            ))}
    </Row>
    );

    cardRows.push(row);
  }

  return <div className="card-group">{cardRows}</div>;
 }
}
export default IntroCardGroup;
