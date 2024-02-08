import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel } from 'react-bootstrap';
import { getCategories } from '../api/categoryData';
import DropDownSelectedContext from '../utils/context/dropdownSelectedContext';

const MultiSelectDropdown = ({ options, selected, toggleOption }) => (
  <div className="c-multi-select-dropdown">
    <div className="c-multi-select-dropdown__selected">
      <div> Select Related Categories</div>
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

const DropDown = ({ existingCategories }) => {
  const [selected, setSelected] = useState([]);
  const [categories, setCategories] = useState([]);
  const { setSelectedCategories } = useContext(DropDownSelectedContext);

  useEffect(() => {
    setSelectedCategories(selected);
  }, [selected]);

  useEffect(() => {
    if (existingCategories.length > 0) {
      setSelected(existingCategories);
    }
  }, [existingCategories]);

  const toggleOption = ({ id }) => {
    setSelected((prevSelected) => {
      // if it's in, remove
      const newArray = [...prevSelected];
      if (newArray.includes(id)) {
        return newArray.filter((item) => item !== id);
      }
      newArray.push(id);

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
  selected: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ),
  toggleOption: PropTypes.func.isRequired,
};

MultiSelectDropdown.defaultProps = {
  selected: [],
};

DropDown.propTypes = {
  existingCategories: PropTypes.arrayOf(
    PropTypes.number,
  ),
};

DropDown.defaultProps = {
  existingCategories: [],
};

export default DropDown;
