import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { getSingleTour } from '../../api/tourData';
import CommentForm from '../../components/forms/commentForm';
import CommentCard from '../../components/commentCard';

export default function ViewTour() {
  const [tourDetails, setTourDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleTour(id).then(setTourDetails);
  }, [id]);
  console.warn('', tourDetails);

  return (
    <div className="view-tour">
      <div>
        <Card style={{
          width: '20rem', margin: '10px', backgroundColor: '#cbbaa6', color: '#605d50',
        }}
        >

          <Card.Img variant="top" src={tourDetails?.image} alt={tourDetails?.name} style={{ maxHeight: '350px' }} />
          <Card.Body>
            <Card.Title>{tourDetails?.name} </Card.Title>
            <p>Description: {tourDetails?.description}</p>
            <ListGroup>
              <ListGroupItem> State: {tourDetails?.state?.name} </ListGroupItem>
              <ListGroupItem> Address: {tourDetails?.address} </ListGroupItem>
              <ListGroupItem> Price: ${tourDetails?.price} </ListGroupItem>
              <ListGroupItem> Categories: {tourDetails?.categories?.map((category) => (
                <p>{category.name}
                </p>
              ))}
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{
          width: '20rem', margin: '10px', backgroundColor: '#cbbaa6', color: '#605d50',
        }}
        >
          <CommentForm tourObj={tourDetails} setTourObj={setTourDetails} />
          <div className="d-flex flex-wrap"> Comments:
            {tourDetails?.comments?.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
