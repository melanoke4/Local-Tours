import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// const getComments = () => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/tours`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(Object.values(data)))
//     .catch(reject);
// });

const createComment = (tourId, payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tours/${tourId}/add_tour_comment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export default createComment;
