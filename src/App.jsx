import { useEffect, useState } from "react";
import "./App.css";
// import countriesData from "./countries.json";
import CountriesList from "./components/CountriesList";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      const parsed = await response.json();
      setCountries(parsed);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="d-flex gap-5 flex-row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="/:countrieCode"
              element={<CountryDetails countries={countries} />}
            />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
