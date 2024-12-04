//src>services>restaurants>getAllRestaurantsService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/restaurants';

export const getAllRestaurantsService = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/all`);
    return response.data;
  } catch (error) {
    console.error('Restoran verileri alınırken bir hata oluştu:', error);
    throw error;
  }
};
