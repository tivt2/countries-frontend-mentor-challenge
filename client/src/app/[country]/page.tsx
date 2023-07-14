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
        return data;
      },
      onError: () => {
        console.log('error fetching country data');
      },
    },
  );

  return (
    <main className="w-screen min-h-screen flex justify-center bg-base-100 dark:bg-base-500 pt-28 md:pt-36 px-mobile-x md:px-desktop-x">
      <div className="w-full max-w-7xl">
        {!!data && (
          <CountryPage country={data ?? []}>
            <CountryPage.Button
              text="Back"
              icon={<MoveLeft className="scale-75" />}
            />
            <div className="flex flex-col lg:flex-row lg:justify-between gap-10 xl:gap-40 xl:items-center mt-12">
              <div className="w-full self-start lg:w-[34rem] lg:min-w-[34rem]">
                <CountryPage.Flag />
              </div>
              <div className="flex flex-col gap-6 w-full">
                <CountryPage.Name />
                <div className="flex flex-row gap-10 justify-between lg:flex-row flex-wrap lg:mb-6">
                  <div className="flex flex-col gap-page-stats">
                    {!!data.name.nativeName && <CountryPage.NativeName />}
                    {!!data.population && <CountryPage.Population />}
                    {!!data.region && <CountryPage.Region />}
                    {!!data.subregion && <CountryPage.SubRegion />}
                    {!!data.capital && <CountryPage.Capital />}
                  </div>
                  <div className="flex flex-col gap-page-stats">
                    {!!data.tld && <CountryPage.Domains />}
                    {!!data.currencies && <CountryPage.Currencies />}
                    {!!data.languages && <CountryPage.Languages />}
                  </div>
                </div>
                {!!data.borders && <CountryPage.BorderCountries />}
              </div>
            </div>
          </CountryPage>
        )}
      </div>
    </main>
  );
}
