import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import { registerUser, updateUser } from '../utils/auth'; // Update with path to registerUser

function RegisterForm({ user, setUser }) {
  const [formData, setFormData] = useState({
    bio: '',
    username: '',
    uid: user.uid,
  });

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      updateUser({ ...formData, id: user.id }).then(setUser)
        .then(router.push('/profile'));
    }
    registerUser(formData).then(router.push('/profile')).then(router.reload());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label><h1>Tour Guide</h1></Form.Label>
        <Form.Control as="textarea" name="username" id="username" required placeholder="Enter your User Name" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        <Form.Control as="textarea" name="bio" id="userBio" required placeholder="Enter your Bio" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        {/* <Form.Text className="text-muted">Let other travelers know a little bit about you...</Form.Text> */}
      </Form.Group>
      <Button variant="primary" type="submit" className="btn btn-small btn-secondary">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  setUser: PropTypes.func.isRequired,
};

export default RegisterForm;
