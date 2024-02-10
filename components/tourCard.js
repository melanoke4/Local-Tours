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
    <Card id="tour-card-style">
      <Card.Img variant="top" src={tourObj.image} alt={tourObj.name} style={{ minHeight: '250px' }} />
      <Card.Body id="tour-card-description">
        <Card.Title>{tourObj.name} </Card.Title>
        <ListGroup>
          <ListGroupItem>
            <p> Description: {tourObj.description}</p>
          </ListGroupItem>
          <ListGroupItem>
            State: {tourObj.state?.name}
          </ListGroupItem>
          <ListGroupItem>
            Address: {tourObj.address}

          </ListGroupItem>
          <ListGroupItem>
            Price: ${tourObj.price}
          </ListGroupItem>
          <ListGroupItem> Categories: {tourObj?.categories?.map((category) => (
            <p>{category.name}
            </p>
          ))}
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
        ) : (
          <Link href={`/tour/${tourObj.id}`} passHref>
            <Button variant="light" className="m-2">VIEW</Button>
          </Link>
        )}
      </Card.Body>
    </Card>

  );
}

TourCard.propTypes = {
  tourObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    state: PropTypes.string,
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
