'use client';

import { getAllCountriesData } from '@/api/requests/getAllCountriesData';
import { CountryCard } from '@/components/country-card/CountryCard';
import { Filter } from '@/components/search-filter-section/Filter';
import { SearchField } from '@/components/search-filter-section/SearchField';
import { useInfiniteScrolling } from '@/hooks/useInfiniteScrolling';
import { TResponseCountry } from '@/types/types';
import { filterCountriesBySelection } from '@/utils/filter';
import { useDeferredValue, useState } from 'react';
import { useQuery } from 'react-query';

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [selectedFilter, setFilter] = useState<string | null>(null);

  const { containerRef, showingAmount } =
    useInfiniteScrolling<HTMLDivElement>(20);

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

  const handleFilter = filterCountriesBySelection(
    selectedFilter,
    (selection, item) => item.region.toLowerCase() === selection.toLowerCase(),
  );

  const handleSearch = filterCountriesBySelection(
    searchInput,
    (selection, item) =>
      item.name.common.slice(0, selection.length).toLowerCase() ===
      selection.toLowerCase(),
  );

  const defferedData = useDeferredValue(data?.slice(0, showingAmount));
  const filteredData = handleSearch(handleFilter(defferedData));

  return (
    <main className="min-h-screen w-screen pt-20 px-mobile-x break:px-desktop-x text-base-600 bg-base-200 dark:text-base-100 dark:bg-base-500 transition-colors">
      <div className="flex flex-col break:flex-row justify-between gap-10 mt-6 mb-10">
        <SearchField
          value={searchInput}
          setValue={setSearchInput}
          filteredCountries={filteredData}
        />
        <Filter
          filterName="Filter by Region"
          filterOptions={[
            'Africa',
            'Americas',
            'Antarctic',
            'Asia',
            'Europe',
            'Oceania',
          ]}
          selectedFilter={selectedFilter}
          setFilter={setFilter}
        />
      </div>
      <div
        ref={containerRef}
        className="grid place-items-center justify-between gap-y-10 gap-x-6 break:gap-20 grid-cols-cards pb-16"
      >
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
