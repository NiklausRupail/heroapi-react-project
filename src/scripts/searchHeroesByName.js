import axios from 'axios';

export const searchHeroesByName = (name) => {
  const accessToken = '638614294782838';

  return axios.get(
    `https://www.superheroapi.com/api.php/${accessToken}/search/${name}`
  );
};
