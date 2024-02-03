import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteTour } from '../api/tourData';
import { useAuth } from '../utils/context/authContext';

function TourCard({ tourObj, onUpdate }) {
  const { user } = useAuth();
  const deleteThisTour = () => {
    if (window.confirm(`Delete ${tourObj.name}?`)) {
      deleteTour(tourObj.id).then(() => onUpdate());
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
        { user.id === tourObj.user.id ? (
          <>
            <Link href={`/tour/edit/${tourObj.id}`} passHref>
              <Button variant="info">EDIT</Button>
            </Link>
            <Button variant="danger" onClick={deleteThisTour} className="m-2">
              DELETE
            </Button>
          </>
        ) : ''}
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
    id: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.string,
      uid: PropTypes.string,
      bio: PropTypes.string,
      username: PropTypes.string,
    }),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TourCard;
