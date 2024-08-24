import React from 'react';
import VantageUCard from './VantageUCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function VantageUGroup({ cards }) {
  return (
    <div className="vantage-card-group">
      <Row className="g-4">
        {cards.map((card, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="vantage-card-col">
            <VantageUCard 
              image={card.image} 
              content={card.content} 
              link={card.link} 
              alt={card.alt} 
              newTab={card.newTab} 
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default VantageUGroup;
