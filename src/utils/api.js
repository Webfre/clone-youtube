import axios from 'axios';

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
  params: { hl: 'en', gl: 'US' },
  headers: {
    'X-RapidAPI-Key': '60e58d871amsh7f747f84336457ap182857jsn96c35e47cd1e',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

export const dataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};