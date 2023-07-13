import { api } from '../api';

export const getCountryData = (countryName: string) => async () => {
  const res = await api.get(`/name/${countryName}?fullText=true`);

  try {
    return res.data[0];
  } catch (err) {
    console.log(`country ${countryName} error`, err);
  }
};
