import { useCountryPageContext } from '@/contexts/CountryPageContext';
import { CountryPageStats } from './CountryPageStats';

export function CountryPageCapital() {
  const { country } = useCountryPageContext();

  const names = country.capital.reduce((acc, capital) => {
    return !acc ? capital : acc + ', ' + capital;
  }, '');

  return <CountryPageStats stat="Capital:" value={names} />;
}
