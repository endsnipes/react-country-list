import React from "react";

import countriesJSON from "./country-data.json";
import { transformCountries } from "./mappers/transformCountries";
import { CountryList } from "./components/CountryList";

const App = () => {
  const countries = transformCountries(countriesJSON);

  return (
    <div className="container">
      <h1 className="justify-item-center">Country List</h1>
      <CountryList countries={countries} />
    </div>
  );
};

export default App;
