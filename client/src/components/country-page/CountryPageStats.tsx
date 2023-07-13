import { ReactNode } from 'react';

interface CountryPageStatsProps {
  stat: string;
  value: string | ReactNode;
}

export function CountryPageStats({ stat, value }: CountryPageStatsProps) {
  return (
    <div className="flex gap-2 text-country-stat text-base-600 dark:text-base-100 whitespace-nowrap">
      <span className="font-semibold">{stat}</span>
      {typeof value === 'string' ? <span className="">{value}</span> : value}
    </div>
  );
}
