import { CountryPageContext } from '@/contexts/CountryPageContext';
import { TResponseCountry } from '@/types/types';
import { ReactNode } from 'react';
import { CountryPageButton } from './CountryPageButton';
import { CountryPageFlag } from './CountryPageFlag';
import { CountryPageName } from './CountryPageName';
import { CountryPageNativeName } from './CountryPageNativeName';
import { CountryPagePopulation } from './CountryPagePopulation';
import { CountryPageRegion } from './CountryPageRegion';
import { CountryPageSubRegion } from './CountryPageSubRegion';
import { CountryPageDomains } from './CountryPageDomains';
import { CountryPageCurrencies } from './CountryPageCurrencies';
import { CountryPageLanguages } from './CountryPageLanguages';
import { CountryPageBorderCountries } from './CountryPageBorderCountries';
import { CountryPageCapital } from './CountryPageCapital';

interface CountryPageProps {
  country: TResponseCountry;
  children: ReactNode;
}

function CountryPage({ country, children }: CountryPageProps) {
  return (
    <div className="flex flex-col">
      <CountryPageContext.Provider value={{ country }}>
        {children}
      </CountryPageContext.Provider>
    </div>
  );
}

CountryPage.Button = CountryPageButton;
CountryPage.Flag = CountryPageFlag;
CountryPage.Name = CountryPageName;
CountryPage.NativeName = CountryPageNativeName;
CountryPage.Population = CountryPagePopulation;
CountryPage.Region = CountryPageRegion;
CountryPage.SubRegion = CountryPageSubRegion;
CountryPage.Capital = CountryPageCapital;
CountryPage.Domains = CountryPageDomains;
CountryPage.Currencies = CountryPageCurrencies;
CountryPage.Languages = CountryPageLanguages;
CountryPage.BorderCountries = CountryPageBorderCountries;

export { CountryPage };
