export type Tcountry = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

export type TResponseCountry = {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    nativeName: { [key: string]: { common: string } };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];

  tld: string[];
  currencies: { [key: string]: { name: string } };
  languages: { [key: string]: string };

  borders: string[];
};
