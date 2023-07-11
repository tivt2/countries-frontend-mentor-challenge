import { useCountryCardContext } from '@/contexts/CountryCardContext';
import { CountryCardStatDescription } from './CountryCardStatDescription';

export function CountryCardRegion() {
  const {
    country: { region },
  } = useCountryCardContext();

  return <CountryCardStatDescription stat="Region: " value={region} />;
}
