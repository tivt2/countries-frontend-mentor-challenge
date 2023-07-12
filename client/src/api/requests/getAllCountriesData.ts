import { api } from '../api';

export const getAllCountriesData = async () => {
  const res = await api.get('/all');

  try {
    return res.data;
  } catch (err) {
    console.log('all countries error', err);
  }
};
