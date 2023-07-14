'use client';

import { CountryCardContext } from '@/contexts/CountryCardContext';
import { Tcountry } from '@/types/types';
import { CountryCardFlag } from './CountryCardFlag';
import { CountryCardContent } from './CountryCardContent';
import { CountryCardName } from './CountryCardName';
import { CountryCardPopulation } from './CountryCardPopulation';
import { CountryCardRegion } from './CountryCardRegion';
import { CountryCardCapital } from './CountryCardCapital';
import { CountryCardDummyFlag } from './CountryCardDummyFlag';
import { ReactNode, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useOnScreen } from '@/hooks/useOnScreen';

interface CountryCardProps {
  country: Tcountry;
  children: ReactNode;
}

function CountryCard({ country, children }: CountryCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { onScreen } = useOnScreen(cardRef, { rootMargin: '200px' });
  const router = useRouter();

  return (
    <div
      ref={cardRef}
      className=" w-full max-w-card break:max-w-card-break rounded-mobile overflow-hidden bg-base-100 dark:bg-base-400 transition-colors shadow-country-card hover:brightness-90 dark:hover:brightness-125 cursor-pointer"
      onClick={() => router.push(`/${country.name}`)}
    >
      {onScreen ? (
        <CountryCardContext.Provider value={{ country }}>
          {children}
        </CountryCardContext.Provider>
      ) : (
        <>
          <CountryCard.DummyFlag />
          <CountryCard.Content />
        </>
      )}
    </div>
  );
}

CountryCard.Flag = CountryCardFlag;
CountryCard.Content = CountryCardContent;
CountryCard.Name = CountryCardName;
CountryCard.Population = CountryCardPopulation;
CountryCard.Region = CountryCardRegion;
CountryCard.Capital = CountryCardCapital;
CountryCard.DummyFlag = CountryCardDummyFlag;

export { CountryCard };
