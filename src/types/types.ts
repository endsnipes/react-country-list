interface CountryAPI {
  flags: CountryFlag;
  name: CountryName;
  capital: string[];
  region: string;
  area: number;
  population: number;
}

interface CountryFlag {
  png: string;
  svg: string;
}

interface CountryName {
  common: string;
  official: string;
  nativeName: CountryNativeName;
}
interface CountryNative {
  official: string;
  common: string;
}
interface CountryNativeName {
  [native: string]: CountryNative | undefined;
}

interface Country {
  flag: string,
  name: string,
  capital: string,
  region: string,
  area:number,
  population: number,

}

export type { CountryAPI, Country };
