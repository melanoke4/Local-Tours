import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getTourById } from '../api/tourData';
import TourCard from '../components/tourCard';
import UserBio from '../components/UserBio';

function UserTours() {
  const [tours, setTours] = useState([]);

  const { user } = useAuth();

  const getAllTours = () => {
    getTourById(user.id).then(setTours);
  };

  useEffect(() => {
    getAllTours();
  }, []);

  return (
    <div className="text-center my-4">
      <UserBio />
      <div id="user-tours-cards" className="d-flex flex-wrap">
        {tours.map((tour) => (
          <TourCard key={tour.id} tourObj={tour} onUpdate={getAllTours} />
        ))}
      </div>

    </div>
  );
}

export default UserTours;
