import { TResponseCountry } from '@/types/types';
import { Search } from 'lucide-react';
import {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useRef,
  useState,
} from 'react';

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
  const searchOptionsRef = useRef<HTMLDivElement | null>(null);
  const [optionIdx, setOptionIdx] = useState(0);

  const max_search_options =
    filteredCountries.length > 5 ? 5 : filteredCountries.length;

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        const clickEvent = new Event('click', { bubbles: true });
        const optionWithIdx = searchOptionsRef.current?.childNodes[optionIdx];
        optionWithIdx?.dispatchEvent(clickEvent);
        setFocus(false);
        break;

      case 'Escape':
        setFocus(false);
        break;

      case 'ArrowUp':
        e.preventDefault();
        setOptionIdx((old) => (old <= 0 ? old : old - 1));
        break;

      case 'ArrowDown':
        e.preventDefault();
        setOptionIdx((old) => (old >= max_search_options - 1 ? old : old + 1));
        break;

      default:
        break;
    }
  };

  const handleInput = () => {
    if (!isFocus) {
      setFocus(true);
      setOptionIdx(0);
    }
  };

  return (
    <div className="relative w-full max-w-search">
      <Search className="absolute left-8 scale-[80%] top-1/2 -translate-y-1/2 stroke-base-300 dark:stroke-base-100 transition-colors" />
      <input
        type="text"
        placeholder="Search for a country..."
        className=" w-full h-full  p-4 pl-20 font-semibold text-search rounded-mobile bg-base-100 placeholder:text-base-300 placeholder:font-light shadow-search-field outline-none text-base-600 dark:text-base-100 dark:bg-base-400 dark:placeholder:text-base-200 transition-colors"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onInput={handleInput}
        onBlur={() => setTimeout(() => setFocus(false), 100)}
        onKeyDown={handleKeyPress}
      />
      {isFocus && (
        <div className="absolute pl-16 z-20 py-1 w-full">
          <div
            ref={searchOptionsRef}
            className="rounded-mobile bg-base-100 dark:bg-base-400 overflow-hidden shadow-search-field"
          >
            {filteredCountries
              .slice(0, max_search_options)
              .map((country, idx) => {
                return (
                  <div
                    key={country.name.common}
                    onClick={() => setValue(country.name.common)}
                    className={`w-full pl-4 py-1 text-search bg-base-100 dark:bg-base-400 hover:bg-base-200 hover:dark:brightness-125 cursor-pointer first:pt-3 last:pb-3 ${
                      idx === optionIdx ? 'bg-base-200 dark:brightness-125' : ''
                    }`}
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
