import { api } from '../api';

export const getBorderCountriesData = (countries: string[]) => async () => {
  const names = countries.reduce((acc, code) => {
    return !acc ? code : acc + ',' + code;
  }, '');
  const res = await api.get(`/alpha?codes=${names}`);

  try {
    return res.data;
  } catch (err) {
    console.log(`border countries ${names} error`, err);
  }
};
