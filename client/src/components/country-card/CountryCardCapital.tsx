import { useCountryCardContext } from '@/contexts/CountryCardContext';
import { CountryCardStatDescription } from './CountryCardStatDescription';

export function CountryCardCapital() {
  const {
    country: { capital },
  } = useCountryCardContext();

  return <CountryCardStatDescription stat="Capital: " value={capital} />;
}
