import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import createComment from '../../api/commentsData';

const initialState = {
  comment: '',
};

export default function CommentForm({ tourObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { content: formInput.comment };
    createComment(tourObj.id, payload).then(router.reload());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingInput4" label="Tour Comment" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Comment Here"
          name="comment"
          value={formInput.comment}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Button variant="btn-small btn-secondary" type="submit"> Comment </Button>

    </Form>
  );
}

CommentForm.propTypes = {
  tourObj: PropTypes.shape({
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
  }).isRequired,
};
