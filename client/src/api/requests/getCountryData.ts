import { api } from '../api';

const getCountryData = async (countryName: string) => {
  const res = await api.get(`/${countryName}`);

  try {
    return res.data;
  } catch (err) {
    console.log(`country ${countryName} error`, err);
  }
};
