import { Button, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getTours } from '../api/tourData';
import TourCard from '../components/tourCard';
import SearchBar from '../components/searchBar';

function Home() {
  const [tours, setTours] = useState([]);

  const getAllTours = () => {
    getTours().then(setTours);
  };

  useEffect(() => {
    getAllTours();
  }, []);

  return (
    <div className="text-center my-4">
      <Card>
        <Card.Img variant="top" src="" alt="homepageimg" style={{ maxHeight: '350px' }} />
        <Card.Body>
          <p>page intro</p>
          <Link href="/tour/new" passHref>
            <Button variant="btn-small btn-secondary">Add A Tour</Button>
          </Link>
        </Card.Body>
      </Card>
      <SearchBar />
      <div className="d-flex flex-wrap">
        {tours.map((tour) => (
          <TourCard key={tour.id} tourObj={tour} onUpdate={getAllTours} />
        ))}
      </div>

    </div>
  );
}

export default Home;
