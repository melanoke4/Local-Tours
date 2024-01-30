import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getTours = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tours?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteTour = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tours/${firebaseKey}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getSingleTour = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tours/${firebaseKey}`, {
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
  fetch(`${endpoint}/tours.json`, {
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
  fetch(`${endpoint}/tours/${payload.firebaseKey}`, {
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
