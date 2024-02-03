import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getTours = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tours`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteTour = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tours/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve((data)))
    .catch(reject);
});

const getSingleTour = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tours/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createTour = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tours`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateTour = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tours/${payload.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getTours,
  createTour,
  deleteTour,
  getSingleTour,
  updateTour,
};
