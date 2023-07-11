'use client';

import { CountryCard } from '@/components/country-card/CountryCard';

export default function Home() {
  return (
    <main className="min-h-screen w-screen py-20 px-mobile-x md:px-desktop-x bg-base-200">
      <CountryCard
        country={{
          name: 'Brasil',
          population: 20000000,
          region: 'South America',
          capital: 'Brasilia',
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
    </main>
  );
}
