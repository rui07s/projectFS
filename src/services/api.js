import axios from 'axios';

const API_URL = process.env.REACT_APP_STRAPI_URL;

export const fetchBusinesses = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/businesses`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch businesses:", error);
    return [];
  }
};
