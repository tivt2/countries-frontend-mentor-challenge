import { useCountryPageContext } from '@/contexts/CountryPageContext';
import { CountryPageStats } from './CountryPageStats';

export function CountryPageDomains() {
  const { country } = useCountryPageContext();

  const names = country.tld.reduce((acc, domain) => {
    return !acc ? domain : acc + ', ' + domain;
  }, '');

  return <CountryPageStats stat="Top Level Domain:" value={names} />;
}
