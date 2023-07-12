import { useCountryCardContext } from '@/contexts/CountryCardContext';

export function CountryCardName() {
  const {
    country: { name },
  } = useCountryCardContext();

  return (
    <h4 className="text-country-name font-extrabold mb-4 leading-none">
      {name}
    </h4>
  );
}
