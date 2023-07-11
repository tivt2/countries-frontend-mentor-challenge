import { Tcountry } from '@/types/types';
import { createContext, useContext } from 'react';

export const CountryCardContext = createContext<{ country: Tcountry } | null>(
  null,
);

export function useCountryCardContext() {
  const context = useContext(CountryCardContext);

  if (!context) {
    throw new Error(
      'CountryCard.* need to live inside the CountrCard component',
    );
  }

  return context;
}
