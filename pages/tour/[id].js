import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card } from 'react-bootstrap';
import { getSingleTour } from '../../api/tourData';

export default function ViewTour() {
  const [tourDetails, setTourDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleTour(id).then(setTourDetails);
  }, [id]);

  return (

    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Title>{tourDetails.name} </Card.Title>
      <Card.Img variant="top" src={tourDetails.image} alt={tourDetails.name} style={{ maxHeight: '350px' }} />
      <Card.Body>
        <p>{tourDetails.address}</p>
        <p>{tourDetails.price}</p>
        <p>{tourDetails.description}</p>
        <p>{tourDetails.state?.name}</p>

        {/* <Button variant="info">EDIT</Button> */}
      </Card.Body>
    </Card>
  );
}
