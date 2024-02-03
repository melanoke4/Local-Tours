import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createTour, updateTour } from '../../api/tourData';
import DropDown from '../MultiSelectDD';
import { getCategories } from '../../api/categoryData';
import getState from '../../api/stateData';

const initialState = {
  name: '',
  image: '',
  state: '',
  address: '',
  description: '',
  price: '',
};

function TourForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const [states, setStates] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getCategories().then(setCategories);

    if (obj.id) setFormInput(obj);
  }, [obj, user]);

  useEffect(() => {
    getState().then(setStates);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updateTour(formInput).then(() => router.push('/'));
    } else {
      const payload = { ...formInput, user: user.id };
      createTour(payload).then(() => router.push('/'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Add a'} Tour</h2>

      <FloatingLabel controlId="floatingInput1" label="Your Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="State">
        <Form.Select
          aria-label="State"
          name="state"
          onChange={handleChange}
          className="mb-3"
          value={formInput.state}
          // required
        >
          <option value="">Select applicable states</option>
          {
            states.map((state) => (
              <option
                key={state.id}
                value={state.id}
              >
                {state.name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Tour Address" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Address"
          name="address"
          value={formInput.address}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Tour Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Tour Details"
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Tour Price" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter price"
          name="price"
          value={formInput.price}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Categories">
        <Form.Select
          aria-label="Categories"
          name="categories"
          onChange={handleChange}
          className="mb-3"
          value={formInput.categories}
          // required
        >
          <option value="">Select applicable Categories</option>
          {
            categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.catName}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Tour Images" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <DropDown />

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Tour</Button>
    </Form>
  );
}

TourForm.propTypes = {
  obj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    state: PropTypes.string,
  }),
};

TourForm.defaultProps = {
  obj: initialState,
};

export default TourForm;
