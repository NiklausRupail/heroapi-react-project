import axios from 'axios';

export const searchHeroById = (id) => {
  const accessToken = '638614294782838';
  return axios.get(`https://www.superheroapi.com/api.php/${accessToken}/${id}`);
};
