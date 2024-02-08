import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
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
    <Card style={{ width: '18rem', margin: '10px', maxHeight: '700px' }}>
      <Card.Img variant="top" src={tourObj.image} alt={tourObj.name} style={{ minHeight: '250px' }} />
      <Card.Body>
        <Card.Title>{tourObj.name} </Card.Title>
        <p style={{ minHeight: '250px' }}>{tourObj.description}</p>
        <ListGroup>
          <ListGroupItem>
            {tourObj.state?.name}
          </ListGroupItem>
          <ListGroupItem>
            {tourObj.address}
          </ListGroupItem>
          <ListGroupItem>
            {tourObj.price}
          </ListGroupItem>
          <ListGroupItem>

            <div className="tour-categories">
              {tourObj.categories
          && tourObj.categories.map((category) => <p><em>{category.name}</em></p>)}
            </div>
          </ListGroupItem>
        </ListGroup>
        { user.id === tourObj.user.id ? (
          <>
            <Link href={`/tour/edit/${tourObj.id}`} passHref>
              <Button variant="light">EDIT</Button>
            </Link>
            <Link href={`/tour/${tourObj.id}`} passHref>
              <Button variant="light" className="m-2">VIEW</Button>
            </Link>
            <Button variant="secondary" onClick={deleteThisTour} className="m-2 btn-block">
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
    categories: PropTypes.string,
    id: PropTypes.number,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ),
    user: PropTypes.shape({
      id: PropTypes.number,
      uid: PropTypes.string,
      bio: PropTypes.string,
      username: PropTypes.string,
    }),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TourCard;
