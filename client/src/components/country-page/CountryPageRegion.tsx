import { useCountryPageContext } from '@/contexts/CountryPageContext';
import { CountryPageStats } from './CountryPageStats';

export function CountryPageRegion() {
  const { country } = useCountryPageContext();

  return <CountryPageStats stat="Region:" value={country.region} />;
}
