import { TResponseCountry } from '@/types/types';
import { createContext, useContext } from 'react';

export const CountryPageContext = createContext<{
  country: TResponseCountry;
} | null>(null);

export const useCountryPageContext = () => {
  const context = useContext(CountryPageContext);

  if (!context) {
    throw new Error('CountryPage.* component must live inside CountryPage');
  }

  return context;
};
