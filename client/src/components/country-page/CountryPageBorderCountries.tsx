import { useCountryPageContext } from '@/contexts/CountryPageContext';
import { CountryPageStats } from './CountryPageStats';
import { useQuery, useQueryClient } from 'react-query';
import { TResponseCountry } from '@/types/types';
import { getBorderCountriesData } from '@/api/requests/getBorderCountriesData';
import { CountryPageButton } from './CountryPageButton';

export function CountryPageBorderCountries() {
  const { country } = useCountryPageContext();
  const borderCountries = country.borders;
  const { data } = useQuery<TResponseCountry[]>(
    `border-${country.name.common}`,
    getBorderCountriesData(borderCountries),
    {
      onSuccess: (data) => {
        return data;
      },
      onError: () => {
        console.log('error border countries');
      },
    },
  );

  const names = data?.map((country) => {
    return (
      <CountryPageButton key={country.name.common} text={country.name.common} />
    );
  });

  return (
    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5 text-[0.95rem] text-base-600 dark:text-base-100 whitespace-nowrap">
      <span className="font-semibold">Border Countries:</span>
      <div className="relative -translate-y-1 w-full flex flex-wrap gap-2">
        {names}
      </div>
    </div>
  );
}
