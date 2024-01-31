import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteTour } from '../api/tourData';

function TourCard({ tourObj, onUpdate }) {
  const deleteThisTour = () => {
    if (window.confirm(`Delete ${tourObj.name}?`)) {
      deleteTour(tourObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={tourObj.image} alt={tourObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{tourObj.name} </Card.Title>
        <p>{tourObj.location}</p>
        <p>{tourObj.price}</p>
        <p>{tourObj.description}</p>
        <Link href={`/tour/edit/${tourObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisTour} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

TourCard.propTypes = {
  tourObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TourCard;
