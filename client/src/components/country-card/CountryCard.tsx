'use client';

import { CountryCardContext } from '@/contexts/CountryCardContext';
import { Tcountry } from '@/types/types';
import { CountryCardFlag } from './CountryCardFlag';
import { CountryCardContent } from './CountryCardContent';
import { ReactNode } from 'react';
import { CountryCardName } from './CountryCardName';
import { CountryCardPopulation } from './CountryCardPopulation';
import { CountryCardRegion } from './CountryCardRegion';
import { CountryCardCapital } from './CountryCardCapital';

interface CountryCardProps {
  country: Tcountry;
  children: ReactNode;
}

function CountryCard({ country, children }: CountryCardProps) {
  return (
    <CountryCardContext.Provider value={{ country }}>
      <div className=" w-full max-w-card break:max-w-card-break rounded-mobile overflow-hidden bg-base-100 dark:bg-base-400 transition-colors shadow-country-card">
        {children}
      </div>
    </CountryCardContext.Provider>
  );
}

CountryCard.Flag = CountryCardFlag;
CountryCard.Content = CountryCardContent;
CountryCard.Name = CountryCardName;
CountryCard.Population = CountryCardPopulation;
CountryCard.Region = CountryCardRegion;
CountryCard.Capital = CountryCardCapital;

export { CountryCard };
