import axios from 'axios';
import { clientCredentials } from '../utils/client';

const databaseUrl = clientCredentials.databaseURL;

const addCategoryToTour = async (tourId, categoryId) => {
  try {
    const { data } = await axios.post(`${databaseUrl}/tours/${tourId}/add_tour_category/${categoryId}`);
    return data;
  } catch (e) {
    console.warn(e);
    return 'addCategory failed';
  }
};
const removeCategoryFromTour = async (tourId, categoryId) => {
  try {
    const { data } = await axios.get(`${databaseUrl}/tours/${tourId}/remove_tour_category/${categoryId}`);
    return data;
  } catch (e) {
    console.warn(e);
    return 'addCategory failed';
  }
};

export { addCategoryToTour, removeCategoryFromTour };
