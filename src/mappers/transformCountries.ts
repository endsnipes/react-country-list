import { CountryAPI, Country } from "../types/types";

export const transformCountries = (countries: CountryAPI[]):Country[] => {
  return countries.map(({flags, name, capital, region, area, population}) => ({
    flag: flags.svg,
    name: name.common,
    capital: capital[0],
    region: region,
    area:area,
    population: population,
  }))
}
