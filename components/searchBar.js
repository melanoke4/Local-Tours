import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ setShowingTours, tours }) => {
  const handleChange = (e) => {
    const filteredTours = [];

    tours.forEach((tour) => {
      if (tour.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        filteredTours.push(tour);
      }
      if (tour.state.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        if (!filteredTours.find((element) => element.id === tour.id)) {
          filteredTours.push(tour);
        }
      }
      tour.categories.forEach((category) => {
        if (category.name.toLowerCase().includes(e.target.value.toLowerCase())) {
          if (!filteredTours.find((element) => element.id === tour.id)) {
            filteredTours.push(tour);
          }
        }
      });
    });
    setShowingTours(filteredTours);
  };

  return (
    <div>
      <input
        placeholder="Search Tours"
        onChange={handleChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  tours: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      location: PropTypes.string,
      price: PropTypes.string,
      description: PropTypes.string,
      state: PropTypes.string,
      id: PropTypes.number,
      categories: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
  setShowingTours: PropTypes.func.isRequired,
};

export default SearchBar;
