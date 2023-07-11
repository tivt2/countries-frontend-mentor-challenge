import { useCountryCardContext } from '@/contexts/CountryCardContext';

export function CountryCardName() {
  const {
    country: { name },
  } = useCountryCardContext();

  return <h4 className="text-2xl font-extrabold mb-4">{name}</h4>;
}
