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
    <div className="my-4">
      <center>
        <Card id="intro-card">
          <Card.Body>
            <p>Planning your next trip has never been easier with Local Tours! Our user-friendly platform streamlines the process of adding tours to your itinerary, providing you with suggested tours or the option to customize your own. Say goodbye to the stress of trip planning and say hello to Local Tours - the perfect solution for hassle-free travel!</p>
            <Link href="/tour/new" passHref>
              <Button variant="btn-small btn-secondary">Add A Tour</Button>
            </Link>
          </Card.Body>
          <SearchBar setShowingTours={setShowingTours} showingTours={showingTours} tours={tours} />
        </Card>
      </center>
      <div className="d-flex flex-sm-wrap" id="tour-card-index">
        {showingTours.map((tour) => (
          <TourCard key={tour.id} tourObj={tour} onUpdate={getAllTours} />
        ))}
      </div>
    </div>

  );
}

export default Home;
