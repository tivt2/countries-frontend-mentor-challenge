import { useCountryPageContext } from '@/contexts/CountryPageContext';
import { CountryPageStats } from './CountryPageStats';

export function CountryPageNativeName() {
  const { country } = useCountryPageContext();

  const names = Object.values(country.name.nativeName).reduce((acc, name) => {
    return !acc ? name.common : acc + ', ' + name.common;
  }, '');

  return <CountryPageStats stat="Native Name:" value={names} />;
}
