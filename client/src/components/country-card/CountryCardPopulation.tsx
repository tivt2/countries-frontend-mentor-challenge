import { useCountryCardContext } from '@/contexts/CountryCardContext';
import { CountryCardStatDescription } from './CountryCardStatDescription';

export function CountryCardPopulation() {
  const {
    country: { population },
  } = useCountryCardContext();

  return (
    <CountryCardStatDescription
      stat="Population: "
      value={population.toLocaleString('en-US')}
    />
  );
}
