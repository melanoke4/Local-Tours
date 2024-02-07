import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { getSingleTour } from '../../api/tourData';

export default function ViewTour() {
  const [tourDetails, setTourDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleTour(id).then(setTourDetails);
  }, [id]);
  console.warn('', tourDetails);

  return (

    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={tourDetails.image} alt={tourDetails.name} style={{ maxHeight: '350px' }} />
      <Card.Body>
        <Card.Title>{tourDetails.name} </Card.Title>
        <p>{tourDetails.description}</p>
        <ListGroup>
          <ListGroupItem> {tourDetails.state?.name} </ListGroupItem>
          <ListGroupItem> {tourDetails.address} </ListGroupItem>
          <ListGroupItem> ${tourDetails.price} </ListGroupItem>
          <ListGroupItem> categories </ListGroupItem>

        </ListGroup>

      </Card.Body>
    </Card>
  );
}
