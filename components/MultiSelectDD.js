import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel } from 'react-bootstrap';
import { getCategories } from '../api/categoryData';
import DropDownSelectedContext from '../utils/context/dropdownSelectedContext';
import { removeCategoryFromTour } from '../api/tourCategoryData';

const MultiSelectDropdown = ({ options, selected, toggleOption }) => (
  <div className="c-multi-select-dropdown">
    <div className="c-multi-select-dropdown__selected">
      <div>{selected.length} selected</div>
      {/* <img src={Dropdown} /> */}
    </div>
    <ul className="c-multi-select-dropdown__options">
      {options.map((option) => {
        const isSelected = selected.includes(option.id);

        return (
          <div key={option.name}>
            <FloatingLabel className="c-multi-select-dropdown__option" onClick={() => toggleOption({ id: option.id })}>
              <input type="checkbox" checked={isSelected} className="c-multi-select-dropdown__option-checkbox" />
              <span>{option.name}</span>
            </FloatingLabel>
          </div>
        );
      })}
    </ul>
  </div>
);

const DropDown = () => {
  const [selected, setSelected] = useState([]);
  const [categories, setCategories] = useState([]);
  const {setSelectedCategories} = useContext(DropDownSelectedContext)

  useEffect(() => {
    setSelectedCategories(selected)
  }, [selected])

  const toggleOption = ({ id }) => {
    setSelected((prevSelected) => {
      // if it's in, remove
      const newArray = [...prevSelected];
      if (newArray.includes(id)) {
        console.warn('this is working');
        removeCategoryFromTour().catch.then(() => {
          return newArray.filter((item) => item !== id);
        })
        // else, add
      }
      newArray.push(id);
      console.warn('select is working');

      return newArray;
    });
  };

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <MultiSelectDropdown options={categories} selected={selected} toggleOption={toggleOption} />
  );
};

MultiSelectDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selected: PropTypes.number.isRequired,
  toggleOption: PropTypes.func.isRequired,
};

export default DropDown;
