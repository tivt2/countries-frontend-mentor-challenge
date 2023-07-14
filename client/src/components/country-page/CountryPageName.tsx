import { useCountryPageContext } from '@/contexts/CountryPageContext';

export function CountryPageName() {
  const {
    country: { name },
  } = useCountryPageContext();

  return (
    <h2 className="text-country-name lg:text-2xl font-extrabold leading-none">
      {name.common}
    </h2>
  );
}
