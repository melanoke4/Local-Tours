import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getCategories = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/categories?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteCategory = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/categories/${firebaseKey}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getSingleCategory = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/categories/${firebaseKey}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createCategory = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/categories.json`, {
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

const updateCategory = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/categories/${payload.firebaseKey}`, {
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
  getCategories,
  createCategory,
  deleteCategory,
  getSingleCategory,
  updateCategory,
};
