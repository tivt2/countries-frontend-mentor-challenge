'use client';

import { getCountryData } from '@/api/requests/getCountryData';
import { CountryPage } from '@/components/country-page/CountryPage';
import { TResponseCountry } from '@/types/types';
import { MoveLeft } from 'lucide-react';
import { useQuery } from 'react-query';

interface CountryProps {
  params: { country: string };
}

export default function Country({ params }: CountryProps) {
  const { country } = params;
  const { data } = useQuery<TResponseCountry>(
    ['countries', `${country}`],
    getCountryData(country),
    {
      onSuccess: (data) => {
        console.log(data);
        return data;
      },
      onError: () => {
        console.log('error fetching country data');
      },
    },
  );

  return (
    <main className="w-screen min-h-screen bg-base-100 dark:bg-base-500 pt-28 px-5">
      {!!data && (
        <CountryPage country={data}>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-14">
              <CountryPage.Button
                text="Back"
                icon={<MoveLeft className="scale-75" />}
              />
              <CountryPage.Flag />
            </div>
            <div className="flex flex-col gap-6">
              <CountryPage.Name />
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-page-stats">
                  <CountryPage.NativeName />
                  <CountryPage.Population />
                  <CountryPage.Region />
                  <CountryPage.SubRegion />
                  <CountryPage.Capital />
                </div>
                <div className="flex flex-col gap-page-stats">
                  <CountryPage.Domains />
                  <CountryPage.Currencies />
                  <CountryPage.Languages />
                </div>
                <CountryPage.BorderCountries />
              </div>
            </div>
          </div>
        </CountryPage>
      )}
    </main>
  );
}
