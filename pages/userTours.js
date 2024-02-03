import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import { getTours } from '../api/tourData';
import TourCard from '../components/tourCard';

function UserTours() {
  const [tours, setTours] = useState([]);

  const { user } = useAuth();

  const getAllTours = () => {
    getTours(user.id).then(setTours);
  };

  useEffect(() => {
    getAllTours();
  });

  return (
    <div className="text-center my-4">
      <Link href="/tour/new" passHref>
        <Button>Add A Tour</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {tours.map((tour) => (
          <TourCard key={tour.id} tourObj={tour} onUpdate={getAllTours} />
        ))}
      </div>

    </div>
  );
}

export default UserTours;
