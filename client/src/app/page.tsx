'use client';

import { getAllCountriesData } from '@/api/requests/getAllCountriesData';
import { CountryCard } from '@/components/country-card/CountryCard';
import { Filter } from '@/components/search-filter-section/Filter';
import { SearchField } from '@/components/search-filter-section/SearchField';
import { TResponseCountry } from '@/types/types';
import { useState } from 'react';
import { useQuery } from 'react-query';

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const { data } = useQuery<TResponseCountry[]>(
    'countries',
    getAllCountriesData,
    {
      onSuccess: (data) => {
        return data;
      },
      onError: () => {
        console.log('error getting all countries data');
      },
    },
  );

  const handleSearchFilter = (countries: TResponseCountry[] | undefined) => {
    if (!countries) {
      return [];
    }
    if (!searchInput) {
      return countries;
    }

    const filteredCountries = countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .slice(0, searchInput.length)
        .includes(searchInput.toLowerCase());
    });
    return filteredCountries;
  };

  const filteredData = handleSearchFilter(data);

  return (
    <main className="min-h-screen w-screen pt-20 px-mobile-x break:px-desktop-x text-base-600 bg-base-200 dark:text-base-100 dark:bg-base-500 transition-colors">
      <div className="flex flex-col break:flex-row justify-between gap-10 mt-6 mb-10">
        <SearchField
          value={searchInput}
          setValue={setSearchInput}
          filteredCountries={filteredData}
        />
        <Filter />
      </div>
      <div className="grid place-items-center justify-between gap-y-10 gap-x-6 break:gap-20 grid-cols-cards pb-16">
        {filteredData?.map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              country={{
                flag: country.flags.svg,
                name: country.name.common,
                population: country.population,
                region: country.region,
                capital: country.capital?.[0],
              }}
            >
              <CountryCard.Flag />
              <CountryCard.Content>
                <CountryCard.Name />
                <CountryCard.Population />
                <CountryCard.Region />
                <CountryCard.Capital />
              </CountryCard.Content>
            </CountryCard>
          );
        })}
      </div>
    </main>
  );
}
