import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';

export default function UserBio() {
  const { user } = useAuth();

  console.warn('', user);
  return (

    <Card id="bio-card-img">
      <Card.Body>
        {/* <Card.Img className="mt-1" variant="top" src={user.fbUser?.photoURL} alt={user.name} style={{ maxWidth: '200px' }} /> */}
        <Card.Title>{user.username} </Card.Title>
        <p>{user.bio}</p>
        <Link href={`/user/edit/${user.id}`} passHref>
          <Button variant="btn-small btn-secondary" className="btn">Edit Bio</Button>
        </Link>

        <Link href="/tour/new" passHref>
          <Button variant="btn-small btn-secondary">Add A Tour</Button>
        </Link>

      </Card.Body>
    </Card>
  );
}
