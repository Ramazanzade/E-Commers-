export const BASE_URL = 'https://api.escuelajs.co/api/v1/'
import axios from "axios";
export const END_POINT = {
  product:'products'
}

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${END_POINT.product}`);
    // console.log('API Response:', response.data); // Log the response
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};