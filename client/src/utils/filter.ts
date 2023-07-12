import { TResponseCountry } from '@/types/types';

export const filterCountriesBySelection =
  <T>(
    selection: T | null | undefined,
    comparatorFn: (selection: T, item: TResponseCountry) => boolean,
  ) =>
  (selectionArray: TResponseCountry[] | undefined) => {
    if (!selectionArray) {
      return [];
    }

    if (!selection) {
      return selectionArray;
    }

    const filteredSelection = selectionArray.filter((item) => {
      return comparatorFn(selection, item);
    });
    return filteredSelection;
  };
