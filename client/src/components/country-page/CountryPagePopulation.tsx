import { useCountryPageContext } from '@/contexts/CountryPageContext';
import { CountryPageStats } from './CountryPageStats';

export function CountryPagePopulation() {
  const { country } = useCountryPageContext();

  return (
    <CountryPageStats
      stat="Population:"
      value={country.population.toLocaleString('en-US')}
    />
  );
}
