import { Button, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getTours } from '../api/tourData';
import TourCard from '../components/tourCard';
import SearchBar from '../components/searchBar';

function Home() {
  const [tours, setTours] = useState([]);
  const [showingTours, setShowingTours] = useState([]);

  const getAllTours = () => {
    getTours().then(setTours);
  };

  useEffect(() => {
    setShowingTours(tours);
  }, [tours]);

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
        <SearchBar setShowingTours={setShowingTours} showingTours={showingTours} tours={tours} />
      </Card>
      <div className="d-flex flex-wrap">
        {showingTours.map((tour) => (
          <TourCard key={tour.id} tourObj={tour} onUpdate={getAllTours} />
        ))}
      </div>

    </div>
  );
}

export default Home;
