import { useCountryPageContext } from '@/contexts/CountryPageContext';
import { CountryPageStats } from './CountryPageStats';

export function CountryPageLanguages() {
  const { country } = useCountryPageContext();

  const names =
    !!country.languages &&
    Object.values(country.languages).reduce((acc, language) => {
      return !acc ? language : acc + ', ' + language;
    }, '');

  return <CountryPageStats stat="Languages:" value={names} />;
}
