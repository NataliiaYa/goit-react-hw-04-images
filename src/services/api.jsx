import axios from 'axios';
const BASE_URL = 'https://pixabay.com';
const API_KEY = '38245181-60f73cc64ec7c39e760fe66d4';

export const fetchImages = async (query, page) => {
    const response = await axios.get(`${BASE_URL}/api/?key=${API_KEY}&q=${query}&page=${page}`);
    const data = response.data;
    // console.log(data);
    return data;
};