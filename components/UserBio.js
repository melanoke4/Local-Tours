import PropTypes from 'prop-types';
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
        <h3>{user.bio}</h3>
        <Link href={`/user/edit/${user.id}`} passHref>
          <Button variant="info">EDIT bio</Button>
        </Link>

      </Card.Body>
    </Card>
  );
}

UserBio.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
};
