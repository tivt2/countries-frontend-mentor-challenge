import { useCountryPageContext } from '@/contexts/CountryPageContext';
import { CountryPageStats } from './CountryPageStats';

export function CountryPageSubRegion() {
  const { country } = useCountryPageContext();

  return <CountryPageStats stat="Sub Region:" value={country.subregion} />;
}
