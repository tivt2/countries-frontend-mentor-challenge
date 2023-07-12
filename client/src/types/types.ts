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
  };
  population: number;
  region: string;
  capital: string[];
};
