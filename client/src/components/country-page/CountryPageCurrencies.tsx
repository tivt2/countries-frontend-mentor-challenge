import { useCountryPageContext } from '@/contexts/CountryPageContext';
import { CountryPageStats } from './CountryPageStats';

export function CountryPageCurrencies() {
  const { country } = useCountryPageContext();

  const names =
    !!country.currencies &&
    Object.values(country.currencies).reduce((acc, currencie) => {
      return !acc ? currencie.name : acc + ', ' + currencie.name;
    }, '');

  return <CountryPageStats stat="Currencies:" value={names} />;
}
