import { TResponseCountry } from '@/types/types';
import { Search } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';

interface SearchFieldProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  filteredCountries: TResponseCountry[];
}

export const SearchField = ({
  value,
  setValue,
  filteredCountries,
}: SearchFieldProps) => {
  const [isFocus, setFocus] = useState(false);

  return (
    <div className="relative w-full max-w-search">
      <Search className="absolute left-8 scale-[80%] top-1/2 -translate-y-1/2 stroke-base-300 dark:stroke-base-100 transition-colors" />
      <input
        type="text"
        placeholder="Search for a country..."
        className=" w-full h-full  p-4 pl-20 font-semibold text-search rounded-mobile bg-base-100 placeholder:text-base-300 placeholder:font-light shadow-search-field outline-none text-base-600 dark:text-base-100 dark:bg-base-400 dark:placeholder:text-base-200 transition-colors"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setTimeout(() => setFocus(false), 100)}
      />
      {!!value && isFocus && (
        <div className="absolute pl-16 z-20 py-1 w-full">
          <div className="rounded-mobile bg-base-100 dark:bg-base-400 overflow-hidden">
            {filteredCountries.slice(0, 5).map((country) => {
              return (
                <div
                  key={country.name.common}
                  onClick={() => setValue(country.name.common)}
                  className="w-full pl-4 py-1 text-search bg-base-100 dark:bg-base-400 hover:bg-base-200 hover:dark:brightness-125 cursor-pointer first:pt-3 last:pb-3"
                >
                  {country.name.common}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
