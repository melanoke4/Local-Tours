import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';

export default function UserBio() {
  const { user } = useAuth();

  console.warn('', user);
  return (

    <Card style={{ width: '18rem', margin: '10px' }}>
      {/* <Card.Img variant="top" src={user.image} alt={user.username} style={{ height: '400px' }} /> */}
      <Card.Body>
        <Card.Title>{user.username} </Card.Title>
        <p>{user.bio}</p>
        <Link href={`/user/edit/${user.id}`} passHref>
          <Button variant="info" className="btn btn-secondary">edit bio</Button>
        </Link>

      </Card.Body>
    </Card>
  );
}
