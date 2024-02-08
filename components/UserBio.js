import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';

export default function UserBio() {
  const { user } = useAuth();

  console.warn('', user);
  return (

    <Card id="bio-card-img" style={{ width: '900px', margin: '10px' }}>
      {/* <Card.Img variant="top" src={user.image} alt={user.username} style={{ height: '400px' }} /> */}
      <center><Card.Img className="mt-1" variant="top" src={user.fbUser.photoURL} alt={user.name} style={{ maxWidth: '200px' }} />
      </center>
      <Card.Body>
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
