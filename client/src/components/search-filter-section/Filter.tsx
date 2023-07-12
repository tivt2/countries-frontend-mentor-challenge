'use client';

import { Check, ChevronDown } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';

interface FilterProps {
  filterName: string;
  filterOptions: string[];
  selectedFilter: string | null;
  setFilter: Dispatch<SetStateAction<string | null>>;
}

export function Filter({
  filterName,
  filterOptions,
  selectedFilter,
  setFilter,
}: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen((old) => !old)}
      className="relative w-full max-w-filter leading-none text-filter cursor-pointer"
    >
      <div className="w-full flex flex-row items-center justify-between bg-base-100 hover:bg-base-200 dark:bg-base-400 dark:hover:brightness-125 pl-filter-l pr-filter-r py-filter-y transition-all shadow-filter rounded-mobile">
        <div className="flex flex-col">
          <span className={`${selectedFilter ? 'text-filter-sub' : ''}`}>
            {filterName}
          </span>
          {selectedFilter ? (
            <span className="font-semibold">{selectedFilter}</span>
          ) : null}
        </div>
        <ChevronDown
          className={`scale-[65%] transition-all duration-200 ${
            isOpen ? ' rotate-90' : ''
          }`}
        />
      </div>

      {isOpen ? (
        <div className="absolute z-10 translate-y-1 w-full shadow-filter overflow-hidden bg-base-100 dark:bg-base-400 rounded-mobile">
          {filterOptions.map((filter, idx) => (
            <div
              key={filter}
              className={`h-min flex flex-row items-center justify-between pl-filter-l pr-filter-r py-filter-y-sub cursor-pointer bg-base-100 hover:bg-base-200 dark:bg-base-400 dark:hover:brightness-125 transition-all animate-blur-in first:pt-6 last:pb-6`}
              style={{ animationDelay: `${50 * idx}ms` }}
              onClick={() =>
                selectedFilter === filter ? setFilter(null) : setFilter(filter)
              }
            >
              {filter}
              {selectedFilter === filter ? (
                <Check className="scale-50" />
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
